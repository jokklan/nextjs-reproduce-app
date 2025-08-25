import axios from "axios";


export default async function Decompress() {
  const response = await axios.get("https://dummyjson.com/todos?limit=1", {
    adapter: "http", // Works with fetch
    decompress: true // Works with false
  })

  return (
    <div>
      {JSON.stringify(response.data)}
    </div>
  );
}
