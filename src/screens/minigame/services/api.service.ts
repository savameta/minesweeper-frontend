import axios from "axios";
import { development, production } from "../../../constants/config";

export const ENVIRONMENTS = {
  DEVELOPMENT: development,
  PRODUCTION: production,
};
export const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? ENVIRONMENTS.DEVELOPMENT
    : ENVIRONMENTS.PRODUCTION;
export async function getMiniGameCommon(eventId: string): Promise<any> {
  try {
    let respone = await axios({
      baseURL: baseUrl,
      url: `/minigame/${eventId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return respone.data;
  } catch (error: any) {
    return error.response.data;
  }
}
export async function getHistory(): Promise<any> {
  try {
    let respone = await axios({
      baseURL: baseUrl,
      url: "/minigame",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return respone.data;
  } catch (error: any) {
    return error.response.data;
  }
}
