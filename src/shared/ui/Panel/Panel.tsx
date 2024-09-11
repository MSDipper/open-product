import { ReactNode } from "react";
import styles from './Panel.module.scss';
import classNames from "classnames";

interface PanelProps {
    children: ReactNode
    className?: string
}

export const Panel = ({ className, children }: PanelProps) => {
    const allStyles = classNames(className, styles.component);
    return (
        <div className={allStyles}>
            {children}
        </div>
    );
};
export default Panel;