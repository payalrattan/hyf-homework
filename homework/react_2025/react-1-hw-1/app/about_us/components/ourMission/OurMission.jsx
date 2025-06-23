import { ourMissionStatement } from "@/data/consts/ourMission";
import styles from "./ourMission.module.css";
export const OurMission = () => {
   return(
        <div className ={styles.missionContainer}>
            <p className ={styles.statement}>
                {ourMissionStatement}
                </p>
        </div>
    )
}