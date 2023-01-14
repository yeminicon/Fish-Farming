import { API_URL } from "./config";

export type TAppoint = {
  title: string;
  _id: string;
  name: string;
  phone: number;
  address: string;

};

export async function getAppoints(): Promise<TAppoint[]> {
  const response = await fetch(`${API_URL}/appoints`);
  return response.json();
}
