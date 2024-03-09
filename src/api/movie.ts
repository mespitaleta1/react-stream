export interface Movies {
  id: number;
  movie: string;
  category: string;
  rating: number;
  image: string;
  trailer: string;
  description: string;
}

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

const getByCategory = async (category: string) => {
  try {
    const response = await fetch('/src/db/movies.json');
    const data = await response.json();
    const content = data.filter((item: Movies) => item?.category === category);
    return content;
  } catch (error) {
    console.error('Error Fetching Content:', error);
    return null;
  }
};

export default { getAll, getByCategory };
