<script lang="ts">
export default {
  data() {
    return {
      cart: {
        total: 0,
      },
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
}
</script>

<template>
  <main>
    <article>
      <h1>Carrinho</h1>
      <p>Total de itens: {{ cart.total }}</p>

      <button @click="addItem()">Adicionar</button>
      <button @click="decrementItem()">Diminuir</button>
    </article>
  </main>
</template>

<style></style>
