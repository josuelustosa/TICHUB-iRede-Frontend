<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object,
      // required: true,
    },
  },
})
</script>

<template>
  <article>
    <h1>{{ product?.title }}</h1>
    <p>{{ product?.description }}</p>
    <p>Valor original: R$ {{ product?.price.toFixed(2).replace('.', ',') }}</p>
    <!-- <p>
      Valor com desconto ({{ product?.discount * 100 }}%): R$
      {{ product?.discountedPrice.toFixed(2).replace('.', ',') }}
    </p> -->

    <button @click="$emit('add-item')">Adicionar</button>
    <button @click="$emit('decrement-item')">Diminuir</button>
  </article>
</template>
