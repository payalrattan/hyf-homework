"use client";
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { RoverPhoto } from '@/app/nasa_collaboration/components/roverPhoto/RoverPhoto';
import { Astronomy } from "@/app/nasa_collaboration/components/astronomyPic/Astronomy";
import { NASA_URLs } from '@/data/consts/nasa_collaborations/nasa_URLs';
import {getPhotos} from '@/services/nasaCollaborationServices';

export default function NasaCollaboration() {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  const getImgData = async () => {
    try {
      const roverPhotoData = await getPhotos();
      setRoverPhoto(roverPhotoData);
      // console.log("Rover Photo Data:", roverPhotoData);

      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay);
      const dailyImgData = await dailyImgResponse.json();
      setDailyImg(dailyImgData);
      console.log("Daily Image Data:", dailyImgData);

    } catch (e) {
      console.log("Error fetching NASA data:", e);
    }
  }
  
  useEffect(() => {
    getImgData();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <Astronomy dailyImg={dailyImg} />
        <h2>Rover Photos</h2>
        {roverPhoto.photos ? (
          <div>
            {roverPhoto.photos.map((photo, index) => (
              <RoverPhoto
                key={index}
                src={photo.img_src}
                date={photo.earth_date}
                roverName={photo.rover.name}
                launch_date={photo.rover.launch_date}
                landing_date={photo.rover.landing_date}
                status={photo.rover.status}
              />
            ))}
          </div>
        ) : (
          <p>Loading rover photos...</p>
        )}
      </main>
    </div>
  );
}




