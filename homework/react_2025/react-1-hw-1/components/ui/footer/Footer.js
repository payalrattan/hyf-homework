"use client"
import { usePathname } from 'next/navigation';
import { FooterNavLink } from '@/components/ui/footer/components/footerNavLink/FooterNavLink'
import { SocialMediaList } from './components/socialMedia/SocialMediaList';
import styles from './Footer.module.css';

export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* link for the new List for the Pages */}
      <FooterNavLink />
      <div className={styles.footerLinks}>
        {/* social media links */}
        <h3>Follow us</h3>
        <SocialMediaList />
      </div>
    </footer>
  );
}











{/* TASK - React 1 week 2 */ }
{/* Create a new List for the Pages */ }
{/* We need to use the <Link /> component here */ }
{/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
{/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */ }