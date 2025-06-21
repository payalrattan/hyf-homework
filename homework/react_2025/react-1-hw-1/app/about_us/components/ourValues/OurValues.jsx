import styles from "./ourValues.module.css";
import { our_Values } from "@/data/consts/ourValues";

export const OurValues = () => {
  return (
    <div className={styles.ourValuesContainer}>
      {our_Values.map((value) => (
        <div key={value.id} className={styles.valueCard}>
          <h3 className={styles.valueTitle}>{value.title}</h3>
          <p className={styles.valueDescription}>{value.value}</p>
        </div>
      ))}
    </div>
  );
}
