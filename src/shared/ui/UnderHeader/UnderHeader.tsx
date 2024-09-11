import { UnderHeaderProps } from './UnderHeader.interface';

export const UnderHeader = ({ className, children }: UnderHeaderProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
export default UnderHeader;