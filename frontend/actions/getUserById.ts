import { User } from './getUsers';

export default async function getUserById(
  id: number
): Promise<User | undefined> {
  try {
    const res = await fetch(`http://localhost:8080/api/rust/users/${id}`, {
      method: 'GET',
    });
    const response = await res.json();
    return response;
  } catch (error: unknown) {
    console.error(error);
  }
}
