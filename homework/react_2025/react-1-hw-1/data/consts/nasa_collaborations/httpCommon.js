import axios from "axios";
import { NASA_URLs } from "./nasa_URLs";    
export const httpNasa = axios.create({
    baseURL: NASA_URLs.astronomyPicOfTheDay, 
    baseURL: NASA_URLs.marsRoverPhoto,
    headers: {
        "Content-Type": "application/json"
    }
});