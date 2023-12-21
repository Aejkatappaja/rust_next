import { ILink } from '@/definitions';
import { createLink } from './create-link';
import { strings } from './strings';

const {
  links: { rust, nextjs, docker },
} = strings;

export const links: ILink[] = [
  createLink(rust.name, rust.alt, rust.href, rust.src),
  createLink(nextjs.name, nextjs.alt, nextjs.href, nextjs.src),
  createLink(docker.name, docker.alt, docker.href, docker.src),
];
