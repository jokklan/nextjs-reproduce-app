import axios from "axios";


export default async function BasicAuth() {
  const response = await axios.get("https://api.github.com", {
    auth: { username: "user", password: "pass" },
    adapter: "http" // Works with fetch
  })

  return (
    <div>
      {JSON.stringify(response.data)}
    </div>
  );
}
