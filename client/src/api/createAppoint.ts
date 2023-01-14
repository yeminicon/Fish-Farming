import { API_URL } from "./config";

export async function createAppoint(title: string, name:string, phone:number | string, address:string) {
  const response = await fetch(`${API_URL}/appoints`, {
    method: "POST",
    body: JSON.stringify({
      title,
      name,
      phone,
      address,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
