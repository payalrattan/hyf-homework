import styles from "./ourPartners.module.css";
import { our_Partners } from "@/data/consts/ourPartners";

export const OurPartners = () => {
  return(
    <div className={styles.ourPartnersContainer}>
      <p className={styles.ourPartnersOverview}>{our_Partners.overview}</p>
      <div className={styles.partnerList}>
        {our_Partners.partner_Names.map((partner) => (
          <img
            key={partner.id}
            src={partner.logo}
            alt={partner.alt}
            className={styles.partnerLogo}
          />
        ))}
      </div>
    </div>
  )
}