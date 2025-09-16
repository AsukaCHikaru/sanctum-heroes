interface IconImageProps {
  src: string;
  alt: string;
  class?: string;
}

export const IconImage = (props: IconImageProps) => {
  return (
    <img
      class={`w-12 h-12 sm:w-[64px] sm:h-[64px] ${props.class || ''}`}
      src={props.src}
      alt={props.alt}
    />
  );
};
