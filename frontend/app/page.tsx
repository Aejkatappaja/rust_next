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
    <main className='flex flex-col items-center gap-8 md:px-12'>
      <div className='flex w-full justify-between p-6 py-4 md:justify-center md:gap-10 md:p-8'>
        <HeaderImages />
      </div>
      <h1 className='text-gradient font-mono text-3xl font-semibold tracking-wider md:text-5xl'>
        🦀 {strings.main_title} 🦀
      </h1>
      <div className='bg-rainbow grid w-full grid-cols-1 gap-4 rounded-2xl px-4 py-4 md:px-56 2xl:px-96'>
        <section className='flex flex-col items-center justify-start gap-2 overflow-y-scroll rounded-2xl bg-zinc-900 px-4 py-2 shadow-lg shadow-black'>
          <h1 className='text-xl font-semibold'>{strings.users.title}</h1>
          <div className='flex w-full flex-col gap-4 py-4'>
            {data?.map((item) => {
              const { id, name, email } = item;
              return (
                <div
                  key={item.name}
                  className='flex flex-col gap-2 rounded-lg border px-4 py-4 md:flex-row'
                >
                  <label htmlFor='id' className='text-lg'>
                    id:{' '}
                    <input
                      name='id'
                      type='text'
                      value={id}
                      disabled
                      className='w-8 rounded-lg  border text-center'
                    />{' '}
                  </label>
                  {/* <label htmlFor='name' className='text-lg'>
                    name:{' '}
                    <input
                      name='name'
                      type='text'
                      value={name}
                      disabled
                      className='rounded-lg  border text-center'
                    />{' '}
                  </label>
                  <label htmlFor='email' className='text-lg'>
                    email:{' '}
                    <input
                      name='email'
                      type='email'
                      value={email}
                      disabled
                      className='rounded-lg  border text-center'
                    />{' '}
                  </label> */}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
