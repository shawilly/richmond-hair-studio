import env from "env-var";

export const config = {
  googleMapsApiKey: () => env.get("GOOGLE_MAPS_API_KEY").required().asString(),
};
