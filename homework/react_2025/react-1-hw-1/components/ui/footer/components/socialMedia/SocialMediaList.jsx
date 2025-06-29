import styles from "./SocialMediaList.module.css";
import { SOCIAL_MEDIA_LIST } from "@/data/consts/destination/socialMedia";

export function SocialMediaList() {
  return (
    <ul>
      {SOCIAL_MEDIA_LIST.map((link) => (
        <li key={link.id}>
          <a href={link.url} target="_blank" >
            <img
              src={link.icon}
              alt={link.title}
              className={styles.socialIcon}
            />
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
