<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { Product } from '@/models/product.model'

import pButton from 'primevue/button'
import pCard from 'primevue/card'

export default defineComponent({
  components: {
    pButton,
    pCard,
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  methods: {
    handleAddToCart() {
      this.$emit('add-to-cart', this.product)
    },
  },
})
</script>

<template>
  <pCard
    className="w-full bg-neutral-100 dark:bg-neutral-950 shadow-xl/40 shadow-neutral-500 dark:shadow-neutral-950 rounded-xl"
  >
    <template #title>
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
        {{ product.name }}
      </h3>
    </template>
    <template #subtitle>
      <span className="text-xs text-neutral-500 uppercase">
        {{ product.category.title }}
      </span>
    </template>
    <template #content>
      <p className="text-sm text-neutral-800 dark:text-neutral-100">
        {{ product.description }}
      </p>
      <p className="text-base font-bold py-3 text-teal-500">R$ {{ product.price.toFixed(2) }}</p>
    </template>
    <template #footer>
      <pButton
        :pt="{ root: { class: 'w-full' } }"
        @click="handleAddToCart"
        label="Adicionar"
        severity="primary"
      />
    </template>
  </pCard>
</template>

<style scoped></style>
