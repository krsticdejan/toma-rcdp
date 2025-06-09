"use client";

import { useEffect, useState } from "react";

const baseUrl = "https://rcdp.sokonova22.rs";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const req = await fetch(`${baseUrl}${url}`, { cache: "no-cache" });

        if (!req.ok) {
          throw new Error(`HTTP error! status: ${req.status}`);
        }

        const result = await req.json();
        setData(result);
      } catch (error) {
        setError(error.message || "Something went wrong");
        setData(null);
      }

      setLoading(false);
    };

    if (url) {
      getData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
