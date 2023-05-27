import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [{
    label: "Home",
    route: "/"
  }, {
    label: "Acerca de...",
    route: "/about"
  }]


export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.items}>
              {links.map(({label, route}) => (
                <li className={styles.single} key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
        </nav>
    );
}