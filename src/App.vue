<script lang="ts">
import { Product } from './model/product.model'
import ProductCard from './components/ProductCard.vue'

export default {
  data() {
    return {
      cart: {
        total: 0,
      },
      products: [
        new Product(
          'Camisa Casa Seleção Brasileira',
          'Camisa 1 oficial da Seleção Brasileira',
          750,
          0.05,
        ),
        new Product(
          'Camisa Fora Seleção Brasileira',
          'Camisa 2 oficial da Seleção Brasileira',
          650,
          0.02,
        ),
      ],
    }
  },
  methods: {
    addItem() {
      this.cart.total += 1
    },
    decrementItem() {
      this.cart.total -= 1
    },
  },
  components: { ProductCard },
}
</script>

<template>
  <main>
    <ProductCard :product="products[1]" />

    <article>
      <h1>Carrinho</h1>
      <p>Total de itens: {{ cart.total }}</p>

      <button @click="addItem()">Adicionar</button>
      <button @click="decrementItem()">Diminuir</button>
    </article>
  </main>
</template>

<style></style>
