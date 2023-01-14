import { API_URL } from "./config";
import { TAppoint } from "./getAppoints";

export async function getAppoint(appointId: string): Promise<TAppoint> {
  const response = await fetch(`${API_URL}/appoints/${appointId}`);
  return response.json();
}