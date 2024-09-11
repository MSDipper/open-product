import { Panel, Image } from "../../shared/ui";
import { HeaderProps } from "./Header.props"
import logo from '/logo.svg'
import styles from './Header.module.scss'

export const Header = ({ }: HeaderProps) => {
  return <div className={styles.component}>
    <Panel>
      <Image src={logo} width={128} height={48} alt="Logo" />
      <div></div>
    </Panel>
  </div>;
};
export default Header;
