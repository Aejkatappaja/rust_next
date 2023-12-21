import { links } from '@/utils/links';
import { ImageLink } from './ImageLink';

export const HeaderImages: React.FC = () => {
  return links?.map((item) => {
    const { href, color, src, alt } = item;
    return (
      <ImageLink href={href} alt={alt} src={src} color={color} key={alt} />
    );
  });
};
