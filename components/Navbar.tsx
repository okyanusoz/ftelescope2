import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import Logo from "./Logo"
import classNames from "classnames"

type ActivePage = "home" | "setup" | "contact"

interface Props {
    activePage: ActivePage
}

interface NavItemProps {
    page: ActivePage,
    activePage: ActivePage,
    href: string,
    children?: React.ReactNode
}

function NavItem(props: NavItemProps) {
    return (<li>
        <Link href={props.href}><a className={classNames(styles.navLink, {
            [styles.navLinkActive]: (props.activePage == props.page)
        })}>{props.children}</a></Link>
    </li>)
}

export default function Navbar(props: Props) {
    return (<nav className={styles.navbar}>
        <Logo></Logo>

        {/* Main navigation */}
        <ul className={styles.navSection}>
            <NavItem activePage={props.activePage} page="home" href="/">Ana sayfa</NavItem>
            <NavItem activePage={props.activePage} page="setup" href="/setup">Kurulum</NavItem>
            <NavItem activePage={props.activePage} page="contact" href="/contact">İletişim</NavItem>
        </ul>
    </nav>)
}
