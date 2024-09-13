import { Panel, Image } from "../../shared/ui";
import { HeaderProps } from "./Header.props"
import logo from '/logo.svg'
import styles from './Header.module.scss'
import { Search } from "../../shared/ui/Search";
import classnames from "classnames";

export const Header = ({ }: HeaderProps) => {
  return <div className={styles.component}>
    <Panel className={styles.panel}>
      <Image src={logo} width={120} height={38} alt="Logo" />
      <div  className={styles.search}>
        <Search placeholder="Искать" width="large" />
        <span className={classnames("material-icons", styles.iconSearch)}>saved_search</span>
      </div>
      <ul className={styles.list}>
        <li>
          <a href="#">
            <span className="material-icons">account_box</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-icons">favorite</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-icons">
              shopping_basket
            </span>
          </a>
        </li>
      </ul>
    </Panel>
  </div>;
};
export default Header;
