import getUserById from '@/actions/getUserById';
import getUsers from '@/actions/getUsers';
import { HeaderImages } from '@/components/HeaderImages';

import { strings } from '@/utils/strings';

export default async function Home() {
  const data = await getUsers();
  // const user = await getUserById(1);
  // console.log(user, 'user');

  console.log(data, 'data');

  return (
    <main className='flex flex-col items-center gap-8 p-6 md:p-8'>
      <div className='flex w-full justify-between  py-4 md:justify-center md:gap-10'>
        <HeaderImages />
      </div>
      <h1 className='bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text font-mono text-3xl font-semibold tracking-wider text-transparent md:text-5xl'>
        {strings.main_title}
      </h1>
      <div className='grid w-full gap-4 px-2 py-2 md:grid-cols-2'>
        <section className='h-52 rounded-2xl border px-4 py-2'>
          <h1>Users List</h1>

          {data?.map((item) => {
            return (
              <p key={item.name}>
                {item.name} {item.email}
              </p>
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
