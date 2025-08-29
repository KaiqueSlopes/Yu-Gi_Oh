import { useState, useEffect } from "react";
import { fetchCards } from "../services/api";

let cache = {};
let cacheTimestamp = 0;
const CACHE_DURATION = 60000;

export const useApi = (page = 1, pageSize = 10, filters = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const cacheKey = `${page}-${pageSize}-${JSON.stringify(filters)}`;

    const getCards = async () => {
      if (cache[cacheKey] && Date.now() - cacheTimestamp < CACHE_DURATION) {
        if (isMounted) {
          setData(cache[cacheKey]);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const cards = await fetchCards(page, pageSize, filters);

        if (isMounted) {
          cache[cacheKey] = cards;
          cacheTimestamp = Date.now();
          setData(cards);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getCards();

    return () => {
      isMounted = false;
    };
  }, [page, pageSize, filters]);

  return { data, loading, error };
};
