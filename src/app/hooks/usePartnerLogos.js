import { useEffect, useState } from "react";

const usePartnerLogos = (data) => {
    const [logos, setLogos] = useState({});

    useEffect(() => {
        const fetchPartnerLogos = async () => {
            if (!data?.acf?.slider) return;
            const ids = data.acf.slider.flatMap(slide =>
                slide.partners ? slide.partners.map(p => p.logo) : []
            );
            const uniqueIds = [...new Set(ids)];

            const promises = uniqueIds.map(async id => {
                if (!id) return null;
                const res = await fetch(`https://rcdp.sokonova22.rs/wp-json/wp/v2/media/${id}`);
                const img = await res.json();
                return { id, url: img.source_url, alt: img.alt_text || '' };
            });

            const resolved = await Promise.all(promises);
            const logoMap = {};
            resolved.forEach(logo => {
                if (logo) logoMap[logo.id] = logo;
            });

            setLogos(logoMap);
        };

        fetchPartnerLogos();
    }, [data]);

    return logos;
};

export default usePartnerLogos;
