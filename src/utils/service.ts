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

export const getCountryByCode = async (code: string) => {
  try {
    const response = await axios.get(`BASE_URL/${code}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
