import { createContentfulEnhancer } from "@uniformdev/canvas-contentful";
export { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";

export const contentfulEnhancer = () => {
  const { public: { contentfulSpaceId, contentfulDeliveryApiKey } } = useRuntimeConfig()

  const contentfulClient = createClient({
    space: contentfulSpaceId,
    environment: "master",
    accessToken: contentfulDeliveryApiKey,
  });

  return createContentfulEnhancer({
    client: contentfulClient,
    useBatching: false,
  });
};

export const contentfulModelCleaner = ({ parameter }) => {
  const { fields } = parameter.value;
  const { title, image } = fields;

  parameter.value = {
    title,
    image: image.fields.file.url
  };

  return parameter.value;
}
