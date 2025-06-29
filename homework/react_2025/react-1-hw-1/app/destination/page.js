"use client";

import { useState } from 'react';

import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';
import { PossibleDestination } from "@/app/destination/components/possibleDestination/PossibleDestination";

// TASK - React 1 week 2
// Move this to its own file
export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name) => {
  setSelectedPlanets((prev) => {
    if (prev.includes(name)) {
      return prev.filter((planet) => planet !== name);
    } else {
      return [...prev, name];
    }
  });
};


  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          <PossibleDestination
            selectedPlanets={selectedPlanets}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}

        </section>
      </main>
    </div>
  );
}

export default Destinations;
