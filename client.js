import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityConfiguration = {
  projectId: '4k0tbso2', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data,
  apiVersion: '2021-10-21',
}
export default sanityClient(sanityConfiguration);
const builder = imageUrlBuilder(sanityClient(sanityConfiguration));
export function urlFor(source) {
  return builder.image(source);
}

