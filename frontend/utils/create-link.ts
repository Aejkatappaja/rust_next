import { ILink } from '@/definitions';

export const createLink = (
  name: string,
  alt: string,
  href: string,
  src: string
): ILink => ({
  name,
  alt,
  href,
  src,
});
