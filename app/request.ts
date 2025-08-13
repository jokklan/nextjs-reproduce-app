import axios from "axios";

const instance = axios.create({
  auth: {
    username: "user",
    password: "pass",
  },
});

export async function testRequest(url: string) {
  const response = await instance.get(url);

  return response.data;
}

export default instance;
