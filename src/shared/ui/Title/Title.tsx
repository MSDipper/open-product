import { ReactNode, memo } from "react";

type SizeStyle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: ReactNode;
  className?: string; 
  size?: SizeStyle;
}

export const Title = memo(({children, size='h1'}: TitleProps) => {
  const H = size as JSX.ElementType;
  return <H>{children}</H>;
});

Title.displayName = 'Title';