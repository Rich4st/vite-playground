<script setup lang="ts">
import { ref } from 'vue'
import { useAdd } from '../composables/useAdd'

const a = ref(1)
const b = ref(2)

const result = useAdd(a, b)
</script>

<template>
  <h1>
    {{ result }}
  </h1>
</template>>
