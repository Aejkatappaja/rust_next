import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageLinkProps {
  href: string;
  color: string;
  src: string;
  alt: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({
  href,
  src,
  alt,
  color,
}) => {
  return (
    <Link
      href={href}
      target='_blank'
      className={`relative h-24 w-24 rounded-full border-2 border-transparent bg-white duration-500 hover:-translate-y-2 hover:border-${color} hover:shadow-lg hover:shadow-${color} md:h-40 md:w-40`}
    >
      <Image
        src={src}
        fill
        alt={alt}
        className='rounded-full object-contain object-center '
      />
    </Link>
  );
};
