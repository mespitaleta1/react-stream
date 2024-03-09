export interface User {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  password: string;
  ip_address: string;
  image: string;
}

const getById = async (userId: string) => {
  try {
    const response = await fetch('/src/db/users.json');
    const data = await response.json();
    const user = data.find((user: User) => user?.id === userId);
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
    const validUser = data.find((user: User) => user?.email === userEmail);
    return validUser;
  } catch (error) {
    console.error('Error Finding User:', error);
    return null;
  }
};

export default { getById, getByEmail };
