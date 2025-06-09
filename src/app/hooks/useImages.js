import { useEffect, useState } from "react";

const useImages = (mediaIds) => {
    const [mediaDataMap, setMediaDataMap] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!mediaIds || mediaIds.length === 0) {
            setMediaDataMap({});
            setLoading(false);
            return;
        }

        const fetchAllMedia = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetches = mediaIds.map(async (id) => {
                    const res = await fetch(`https://rcdp.sokonova22.rs/wp-json/wp/v2/media/${id}`);
                    if (!res.ok) {
                        throw new Error(`Media with ID ${id} not found`);
                    }
                    const data = await res.json();
                    return [id, { src: data.source_url || "", alt: data.alt_text || "" }];
                });

                const results = await Promise.all(fetches);

                // convert array of [id, mediaData] into object { id: mediaData }
                const mediaMap = Object.fromEntries(results);

                setMediaDataMap(mediaMap);
            } catch (err) {
                setError(err.message);
                setMediaDataMap({});
            } finally {
                setLoading(false);
            }
        };

        fetchAllMedia();
    }, [mediaIds]);

    return { mediaDataMap, loading, error };
};

export default useImages;
