import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityConfiguration = {
  projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_DATASET, // or the name you chose in step 1
  useCdn: process.env.SANITY_USE_CDN, // `false` if you want to ensure fresh data,
  apiVersion: process.env.SANITY_API_VERSION,
}
export default sanityClient(sanityConfiguration);
const builder = imageUrlBuilder(sanityClient(sanityConfiguration));
export function urlFor(source) {
  return builder.image(source);
}
