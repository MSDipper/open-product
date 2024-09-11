
interface ImageProps {
    width?: number;
    height?: number;
    src: string;
    alt: string;
    className?: string;
}

export const Image = ({ width, height, src, alt }: ImageProps) => {
    return (
        <img src={src} alt={alt} height={height} width={width} />
    );
};
export default Image;