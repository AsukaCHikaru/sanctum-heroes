interface IconImageProps {
  src: string;
  alt: string;
  class?: string;
}

export const IconImage = ({ src, alt, class: className = '' }: IconImageProps) => (
  <img class={`w-[64px] h-[64px] ${className}`} src={src} alt={alt} />
);
