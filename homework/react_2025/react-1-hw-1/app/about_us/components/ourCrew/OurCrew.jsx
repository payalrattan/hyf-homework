import styles from "./ourCrew.module.css";

import { our_Crew } from "@/data/consts/ourCrew";

export const OurCrew = () => {
  return(
<div className={styles.crewContainer}>
<p className={styles.overview}>{our_Crew.overview}</p>
<div className={styles.crewList}>
  {our_Crew.crewMembers.map((member) => (
    <div key={member.id} className={styles.crewMember}>
      <img
        src={member.image}
        alt={member.name}
        className={styles.memberImage}
      />
      <h3 className={styles.memberName}>{member.name}</h3>
      <p className={styles.memberPosition}>{member.position}</p>
      <p className={styles.memberBio}>{member.bio}</p>
    </div>
  ))}
</div>
</div>
  );       
}