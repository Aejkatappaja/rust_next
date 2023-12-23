'use client';

import deleteUser from '@/actions/deleteUser';
import { useRouter } from 'next/navigation';

interface ButtonProps extends React.PropsWithChildren {
  id: number;
}

export const DeleteUserButton: React.FC<ButtonProps> = ({ id }) => {
  const router = useRouter();

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      router.refresh();
    }
  };

  return <button className='' onClick={() => handleDeleteUser(id)}></button>;
};
