import type { Ref } from 'vue'
import { computed, unref } from 'vue'

export const useAdd = (
  x: Ref<number> | number,
  y: Ref<number> | number,
) => {
  return computed(() => unref(x) + unref(y))
}
