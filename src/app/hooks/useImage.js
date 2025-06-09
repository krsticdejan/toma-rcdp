import { useEffect, useState } from "react";

const useImage = (mediaId) => {
    const [mediaData, setMediaData] = useState({ src: "", alt: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!mediaId) {
            setMediaData({ src: "", alt: "" });
            setLoading(false);
            return;
        }

        // Ensure mediaId is a number or string
        const id = Array.isArray(mediaId) ? mediaId[0] : mediaId;

        if (!id) {
            setMediaData({ src: "", alt: "" });
            setLoading(false);
            return;
        }

        const fetchMedia = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://rcdp.sokonova22.rs/wp-json/wp/v2/media/${id}`);
                if (!response.ok) {
                    throw new Error(`Media with ID ${id} not found`);
                }

                const data = await response.json();


                setMediaData({
                    src: data.source_url || "",
                    alt: data.alt_text || "",
                });
            } catch (err) {
                setError(err.message);
                setMediaData({ src: "", alt: "" });
            } finally {
                setLoading(false);
            }
        };

        fetchMedia();
    }, [mediaId]);

    return { mediaData, loading, error };
};

export default useImage;