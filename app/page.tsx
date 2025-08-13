/** Add your relevant code here for the issue to reproduce */
import { testRequest } from "./request";

export default async function Home() {
  const responseData = await testRequest("https://api.github.com");

  return (
    <div>
      {JSON.stringify(responseData)}
    </div>
  );
}
