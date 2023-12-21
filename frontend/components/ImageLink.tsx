import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageLinkProps {
  href: string;
  src: string;
  alt: string;
  name: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({ ...props }) => {
  return (
    <Link
      href={props.href}
      target='_blank'
      className='md:h-30 md:w-30 relative h-24 w-24 rounded-full border-2 border-transparent bg-white duration-500 hover:-translate-y-2 hover:shadow-lg'
    >
      <Image
        src={props.src}
        fill
        alt={props.alt}
        className='rounded-full object-contain object-center'
      />
    </Link>
  );
};
