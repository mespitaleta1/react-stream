const getById = async (userId: string) => {
  try {
    const response = await fetch('/src/db/users.json');
    const data = await response.json();
    const user = data.find((user: object) => user?.id === userId);
    return user;
  } catch (error) {
    console.error('Error Fetching User:', error);
    return null;
  }
};

const getByEmail = async (userEmail: string) => {
  try {
    const response = await fetch('/src/db/users.json');
    const data = await response.json();
    const validUser = data.find((user: object) => user?.email === userEmail);
    return validUser;
  } catch (error) {
    console.error('Error Finding User:', error);
    return null;
  }
};

export default { getById, getByEmail };
