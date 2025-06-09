import { useEffect, useState } from "react";

const useSliderImages = (data) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            if (!data?.acf?.slider) return;
            const promises = data.acf.slider.map(async (slide) => {
                if (!slide.image) return null;
                const res = await fetch(`https://rcdp.sokonova22.rs/wp-json/wp/v2/media/${slide.image}`);
                const imageData = await res.json();
                return {
                    url: imageData.source_url,
                    alt: imageData.alt_text || '',
                };
            });

            const results = await Promise.all(promises);
            setImages(results);
        };

        fetchImages();
    }, [data]);

    return images;
};

export default useSliderImages;
