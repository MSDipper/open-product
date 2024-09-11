import { ReactNode } from "react";


interface NavbarProps {
    children: ReactNode;
    className?: string;
}


export const Navbar = ({children, className}: NavbarProps) => {
    return (
        <nav className={className}>
            <ul>
                <li>{children}</li>
            </ul>
        </nav>
    );
};
export default Navbar;