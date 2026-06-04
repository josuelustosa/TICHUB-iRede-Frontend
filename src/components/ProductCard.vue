<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { Product } from '@/models/product.model'

export default defineComponent({
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
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p class="description">{{ product.description }}</p>
    <div class="product-info">
      <span class="category">{{ product.category.title }}</span>
      <span class="price"> R$ {{ product.price.toFixed(2) }}</span>
    </div>
    <button @click="handleAddToCart" class="add-btn">Adicionar ao Carrinho</button>
  </div>
</template>

<style scoped></style>
