import deleteUser from '@/actions/deleteUser';
import getUserById from '@/actions/getUserById';
import getUsers from '@/actions/getUsers';
import { HeaderImages } from '@/components/HeaderImages';

import { strings } from '@/utils/strings';

export default async function Home() {
  const data = await getUsers();
  // const user = await getUserById(1);
  // console.log(user, 'user');

  // const deletePpl = await deleteUser();
  // console.log(deletePpl);

  // console.log(data, 'data');

  return (
    <main className='flex flex-col items-center gap-8 p-6 md:p-8'>
      <div className='flex w-full justify-between  py-4 md:justify-center md:gap-10'>
        <HeaderImages />
      </div>
      <h1 className='text-gradient font-mono text-3xl font-semibold tracking-wider md:text-5xl'>
        {strings.main_title}
      </h1>
      <div className='grid w-full grid-cols-1 gap-4 border py-2 md:px-56 2xl:px-96'>
        <section className='h-52 rounded-2xl border px-4 py-2'>
          <h1>Users List</h1>

          {data?.map((item) => {
            return (
              <div key={item.name}>
                {item.id} {item.name} {item.email}
              </div>
            );
          })}
        </section>
        {/* <section className='h-52 rounded-2xl border'>{user?.name}</section>
        <section className='h-52 rounded-2xl border'></section>
        <section className='h-52 rounded-2xl border'></section> */}
      </div>
    </main>
  );
}
