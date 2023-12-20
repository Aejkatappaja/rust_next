import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-6 md:p-8'>
      <div className='flex w-full justify-between py-4 md:justify-center md:gap-10'>
        <div className='relative h-24 w-24 md:h-40 md:w-40'>
          <Image
            src='/images/rust_crab.png'
            fill
            alt='rust-logo-crab'
            className='rounded-full object-cover'
          />
        </div>
        <div className='relative h-24 w-24 md:h-40 md:w-40'>
          <Image
            src='/images/next_js.webp'
            fill
            alt='rust-logo-crab'
            className='rounded-full object-cover'
          />
        </div>
        <div className='relative h-24 w-24 rounded-full bg-white md:h-40 md:w-40'>
          <Image
            src='/images/docker.jpg'
            fill
            alt='rust-logo-crab'
            className='rounded-full object-contain object-center'
          />
        </div>
      </div>
    </main>
  );
}
