import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityConfiguration = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET, // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data,
  apiVersion: '2021-10-21',
}
export default sanityClient(sanityConfiguration);
const builder = imageUrlBuilder(sanityClient(sanityConfiguration));
export function urlFor(source) {
  return builder.image(source);
}

