export interface User {
  id: number;
  name: string;
  email: string;
}

export default async function getUsers(): Promise<User[] | undefined> {
  try {
    const res = await fetch('http://localhost:8080/api/rust/users', {
      next: { revalidate: 0 },
      method: 'GET',
    });

    const response = await res.json();
    return response;
  } catch (error: unknown) {
    console.error(error);
  }
}
