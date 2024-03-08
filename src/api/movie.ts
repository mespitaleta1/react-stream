const getAll = async () => {
  try {
    const response = await fetch('/src/db/movies.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error Fetching Movies:', error);
    return null;
  }
};

const getByCategorie = async (categorie: string) => {
  try {
    const response = await fetch('/src/db/movies.json');
    const data = await response.json();
    const content = data.filter((item: object) => item?.categorie === categorie);
    return content;
  } catch (error) {
    console.error('Error Fetching Content:', error);
    return null;
  }
};

export default { getAll, getByCategorie };
