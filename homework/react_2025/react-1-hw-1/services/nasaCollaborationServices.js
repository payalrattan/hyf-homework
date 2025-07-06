import { httpNasa } from "../data/consts/nasa_collaborations/httpCommon.js";
export const getPhotos = async () => {
    try {
        const response = await httpNasa.get();
        return response.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
}