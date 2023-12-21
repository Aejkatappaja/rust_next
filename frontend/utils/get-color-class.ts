export const getColorClass = (name: string): string => {
  switch (name) {
    case 'rust':
      return 'orange-500';
    case 'nextjs':
      return 'violet-500';
    case 'docker':
      return 'blue-500';
    default:
      return '';
  }
};
