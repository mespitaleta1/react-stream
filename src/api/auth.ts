import { User } from './user';

const login = async (userEmail: string, userPassword: string) => {
  try {
    const response = await fetch('/src/db/users.json');
    const users = await response.json();
    const authUser = users.find((user: User) => user.email === userEmail && user.password === userPassword);
    if (authUser) {
      return authUser;
    } else {
      return null;
    }
  } catch (error) {
    console.error('An error has occurred on login:', error);
  }
};

export default { login };
