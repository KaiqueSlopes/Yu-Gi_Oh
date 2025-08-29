const BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

export const fetchCards = async (page = 1, pageSize = 10, filters = {}) => {
  const params = new URLSearchParams();
  params.append("num", pageSize);
  params.append("offset", (page - 1) * pageSize);

  if (filters.attributes && filters.attributes.length > 0) {
    filters.attributes.forEach((attr) => params.append("attribute", attr));
  }

  if (filters.types && filters.types.length > 0) {
    filters.types.forEach((type) => params.append("type", type));
  }

  if (filters.races && filters.races.length > 0) {
    filters.races.forEach((race) => params.append("race", race));
  }

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) throw new Error("Erro ao buscar cartas");
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
};
