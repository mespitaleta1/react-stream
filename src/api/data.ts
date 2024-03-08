const getAll = async () => {
  try {
    const response = await fetch('/src/db/data.json');
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error Fetching Categories:', error);
    return null;
  }
};

export default { getAll };
