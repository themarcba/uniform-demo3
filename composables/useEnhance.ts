import type { Ref } from "vue"
import { compose, enhance, CompositionAPIResponse, EnhancerBuilder } from "@uniformdev/canvas";

import { contentfulEnhancer, contentfulQueryEnhancer, contentfulModelConverter, CANVAS_CONTENTFUL_PARAMETER_TYPES, CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES } from "../enhancers/contentful";

export async function useEnhance(composition: Ref<CompositionAPIResponse>) {
  const { data, pending, error } = await useAsyncData('composition', async () => {

    const compositionClone = { ...composition.value.composition }

    await enhance({
      composition: compositionClone,
      enhancers: new EnhancerBuilder()
        .parameterType(
          CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES,
          compose(contentfulQueryEnhancer(), contentfulModelConverter)
        )
        .parameterType(
          CANVAS_CONTENTFUL_PARAMETER_TYPES,
          compose(contentfulEnhancer(), contentfulModelConverter)
        ),
      context: {},
    });

    return compositionClone
  });

  return { data, pending, error };
}
