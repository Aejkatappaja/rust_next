export default async function deleteUser(
  id: number
): Promise<string | undefined> {
  try {
    const res = await fetch(`http://localhost:8080/api/rust/users/${id}`, {
      method: 'DELETE',
    });
    console.log(res);

    if (res.ok) {
      return 'User deleted successfully';
    } else {
      console.error(
        `Error deleting user. Server responded with status ${res.status}`
      );
      return undefined;
    }
  } catch (error: unknown) {
    console.error('Error deleting user:', error);
    return undefined;
  }
}
