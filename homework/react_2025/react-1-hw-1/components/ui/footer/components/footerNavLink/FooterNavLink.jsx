import Link from "next/link";
import { PAGES_LIST } from "@/data/consts/destination/footerNavLink";
import styles from "./FooterNavLink.module.css";

// FooterNavLink Component
export const FooterNavLink = () => {
  return (
    <div>
      <h3>Pages</h3>
      {PAGES_LIST.map((page) => (
        <div key={page.href}>
          <Link href={page.href} className={styles.link}>
            {page.label}
          </Link>
        </div>
      ))}
    </div>
  );
};
