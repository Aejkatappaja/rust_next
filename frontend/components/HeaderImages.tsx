import { links } from '@/utils/links';
import { ImageLink } from './ImageLink';

export const HeaderImages: React.FC = () => {
  return links?.map((item) => {
    const { href, src, alt, name } = item;
    return <ImageLink name={name} href={href} alt={alt} src={src} key={alt} />;
  });
};
