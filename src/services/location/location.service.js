import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = async (searchTerm) => {
  console.log(searchTerm);
  console.log(host);
  const res = await fetch(`${host}/geocode/?city=${searchTerm}`);
  console.log(res);
  return await res.json();
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};