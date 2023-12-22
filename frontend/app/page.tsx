import { HeaderImages } from '@/components/HeaderImages';
import { strings } from '@/utils/strings';
import DisplayUsers from '@/components/DisplayUsers';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-8 md:px-12'>
      <div className='flex w-full justify-between p-6 py-4 md:justify-center md:gap-10 md:p-8'>
        <HeaderImages />
      </div>
      <h1 className='text-gradient font-mono text-3xl font-semibold tracking-wider md:text-5xl'>
        {strings.main_title}
      </h1>
      <div className='bg-rainbow w-full gap-4 rounded-2xl px-8 py-8'>
        <section className=' rounded-2xl bg-zinc-900 px-1 py-2 font-mono shadow-lg shadow-black'>
          <Suspense fallback='loading...'>
            <DisplayUsers />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
