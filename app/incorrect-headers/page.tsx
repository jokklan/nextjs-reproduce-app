import axios from "axios";


export default async function IncorrectHeaders() {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", {
    adapter: "http", // Works with fetch
    decompress: true, // Works with false
    headers: {
      "Accept-Encoding": "gzip", // Works with `"Accept-Encoding": "deflate"`
    },
  })

  return (
    <div>
      {JSON.stringify(response.data)}
    </div>
  );
}
