import getUsers from '@/actions/getUsers';
import { DeleteUserButton } from './Button';
import Image from 'next/image';

export default async function DisplayUsers() {
  const data = await getUsers();

  return (
    <div className=' flex flex-col justify-start gap-4 px-2 py-4 md:flex-row md:flex-wrap'>
      {data?.length
        ? data?.map((item) => {
            const { id, name, email } = item;
            return (
              <div
                key={item.id}
                className='flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-zinc-700 px-4 py-3 font-bold shadow-xl shadow-black'
              >
                <div className='flex w-full items-center justify-between'>
                  <strong className='rounded-full border-2 border-orange-500 bg-orange-500/30  px-2 text-orange-100 shadow-lg shadow-black'>
                    {id}
                  </strong>
                  <DeleteUserButton id={id} />
                </div>
                <Image
                  src='/images/user_placeholder.png'
                  width={150}
                  height={350}
                  alt='crab_user_placeholder'
                  className='rounded-full shadow-xl shadow-black'
                />
                <input
                  name='name'
                  type='text'
                  value={name}
                  disabled
                  className='text-gradient max-w-full rounded-lg border-none bg-zinc-900 text-center'
                />{' '}
                <input
                  name='email'
                  type='email'
                  value={email}
                  disabled
                  className='text-gradient max-w-full truncate rounded-lg border-none bg-zinc-900 text-center'
                />{' '}
              </div>
            );
          })
        : 'No users in DB'}
    </div>
  );
}
