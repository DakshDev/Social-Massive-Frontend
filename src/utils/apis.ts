import _env from "@/config/env";
import axios from "axios";

async function getUser(username: string) {
  try {
    if (!username) return null;
    const response = await axios.get(`${_env.backend_api_origin}/get/${username}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getUser };
