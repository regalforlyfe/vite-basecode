import getDummyData from "../dummy";
import { config } from "./config-utility";

export default async function requestUtility({ HEAD = {}, URL, METHOD, DATA }) {
  if (config.isDummy || config.api.isDummy[URL]) {
    return getDummyData(URL);
  }

  try {
    const HEADERS = {
      ...HEAD,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const options = {
      method: METHOD,
      headers: HEADERS,
      body: METHOD !== "GET" ? JSON.stringify(DATA) : undefined,
    };
    const res = await fetch(config.api.baseUrl + URL, options);

    if (res.status === 404) {
      console.error("Resource not found: ", URL);
      return null; // Atau tangani kasus 404 sesuai kebutuhan
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Request failed: ", err);
    throw err;
  }
}
