<script lang="ts">
import { Product } from './model/product.model'

export default {
  data() {
    return {
      cart: {
        total: 0,
      },
      product: new Product(
        'Camisa Casa Seleção Brasileira',
        'Camisa 1 oficial da Seleção Brasileira',
        750,
        0.05,
      ),
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

    <article>
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p>Valor original: R$ {{ product.price.toFixed(2).replace('.', ',') }}</p>
      <p>
        Valor com desconto ({{ product.discount }}%): R$
        {{ product.price - product.price * product.discount }}
      </p>
      <p>Total de itens: {{ cart.total + 1 }}</p>

      <button @click="addItem()">Adicionar</button>
      <button @click="decrementItem()">Diminuir</button>
    </article>
  </main>
</template>

<style></style>
