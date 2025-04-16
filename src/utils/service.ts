import axios from "axios";
import { BASE_URL } from "./constants";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
