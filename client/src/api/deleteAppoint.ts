import { API_URL } from "./config";

export async function deleteAppoint(appointId: string) {
  await fetch(`${API_URL}/appoints/${appointId}`, {
    method: "DELETE",
  });
}
