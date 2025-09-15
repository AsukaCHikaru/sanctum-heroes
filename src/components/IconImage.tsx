interface IconImageProps {
  src: string;
  alt: string;
  class?: string;
}

export const IconImage = ({ src, alt, class: className = '' }: IconImageProps) => (
  <img class={`w-12 h-12 sm:w-[64px] sm:h-[64px] ${className}`} src={src} alt={alt} />
);
