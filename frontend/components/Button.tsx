'use client';

import deleteUser from '@/actions/deleteUser';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GiCrossedClaws } from 'react-icons/gi';

interface ButtonProps {
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

  return (
    <button className='' onClick={() => handleDeleteUser(id)}>
      <GiCrossedClaws className=' rounded-full text-orange-600' />
    </button>
  );
};
