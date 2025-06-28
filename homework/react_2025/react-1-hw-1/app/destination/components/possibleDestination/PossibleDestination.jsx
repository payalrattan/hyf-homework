import { PLANETS_LIST } from "@/data/consts/destination/planetList";
import styles from "@/components/destination/destination.module.css";

export const PossibleDestination = ({
  selectedPlanets = [],
  onAddOrRemovePlanet
}) => {
  return (
    <div className={styles.planetList}>
      {PLANETS_LIST.map((planet, idx) => {
        const isPlanetSelected = selectedPlanets.includes(planet.name);
        return (
          <div key={planet.name} className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src={planet.thumbnail}
              alt={planet.name}
            />
            <div className={styles.planetDescription}>
              <h2>
                {planet.name.toUpperCase()}{" "}
                {isPlanetSelected ? "- SELECTED" : ""}
              </h2>
              <p>{planet.description}</p>
            </div>
            <button
              className="roundButton"
              onClick={() => onAddOrRemovePlanet(planet.name, idx)}
            >
              {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
