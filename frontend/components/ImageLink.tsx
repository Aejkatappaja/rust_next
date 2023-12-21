import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getColorClass } from '@/utils/get-color-class';

interface ImageLinkProps {
  href: string;
  src: string;
  alt: string;
  name: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({ ...props }) => {
  const color = getColorClass(props.name);
  return (
    <Link
      href={props.href}
      target='_blank'
      className={`relative h-24 w-24 rounded-full border-2 border-transparent bg-white duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-${color} hover:shadow-${color}  md:h-40 md:w-40`}
    >
      <Image
        src={props.src}
        fill
        alt={props.alt}
        className='rounded-full object-contain object-center '
      />
    </Link>
  );
};
