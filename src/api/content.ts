export interface Movies {
  id: number;
  title: string;
  category: string;
  rating: number;
  image: string;
  trailer: string;
  description: string;
}

const getAll = async () => {
  try {
    const response = await fetch('/src/db/content.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error Fetching Movies:', error);
    return null;
  }
};

const getByCategory = async (category: string) => {
  try {
    const response = await fetch('/src/db/content.json');
    const data = await response.json();
    const content = data.filter((item: Movies) => item?.category === category);
    return content;
  } catch (error) {
    console.error('Error Fetching Content:', error);
    return null;
  }
};

const getBytitle = async (title: string) => {
  try {
    const response = await fetch('/src/db/content.json');
    const data = await response.json();
    const content = data.find((item: Movies) => item?.title === title);
    return content;
  } catch (error) {
    console.error('Error Fetching Movie:', error);
    return null;
  }
};

export default { getAll, getByCategory, getBytitle };
