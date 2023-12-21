export default async function deleteUser(
  id: number
): Promise<string | undefined> {
  try {
    const res = await fetch(`http://localhost:8080/api/rust/users/${id}`, {
      method: 'DELETE',
    });
    const response = await res.json();
    return response;
  } catch (error: unknown) {
    console.error(error);
  }
}
