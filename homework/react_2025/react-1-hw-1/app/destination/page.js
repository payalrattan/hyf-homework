"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import { AddWishlistItem } from '@/components/destination/AddWishlistItem';
import { PossibleDestination } from "@/app/destination/components/possibleDestination/PossibleDestination";
import { PlanetWishlistItem } from "@/app/destination/components/PlanetWishlist/PlanetWishlist";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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

  const handleAddWishlistItem = (name, thumbnail) => {
    setWishlist(prev => [...prev, { name, thumbnail }]);
  };

  const removeFromWishlist = (name) => {
    setWishlist(prev => prev.filter(item => item.name !== name));
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <b>List coming soon after lesson 3!</b>
          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem} />
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {wishlist.length === 0 ? (
              <p>No custom planets in wishlist.</p>
            ) : (
              wishlist.map((item, index) => (
                <PlanetWishlistItem
                  key={index}
                  name={item.name}
                  onRemove={() => removeFromWishlist(item.name)}
                  thumbnail={item.thumbnail}
                />
              ))
            )}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          <PossibleDestination
            selectedPlanets={selectedPlanets}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
        </section>
      </main>
    </div>
  );
}

export default Destinations;
