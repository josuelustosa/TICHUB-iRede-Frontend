<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { Product } from '@/models/product.model'
import { Category } from '@/models/category.model'
import { Cart } from '@/models/cart.model'

export default defineComponent({
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        new Product(
          1,
          'Camisa Brasil Nike I 2026/27 - Masculino',
          'Modelo Torcedor oficial da seleção brasileira com Nike Dri-FIT.',
          449.99,
          0,
          new Category(1, 'Camisas de Time'),
        ),
        new Product(
          2,
          'Camisa Brasil Nike I 2026/27 - Feminino',
          'Modelo Torcedor oficial da seleção brasileira com Nike Dri-FIT.',
          409.99,
          0,
          new Category(1, 'Camisas de Time'),
        ),
        new Product(
          3,
          'Chuteira de Campo Adulto adidas Kaká',
          'Com solado em TPU com travas altas e fixas.',
          389.99,
          0,
          new Category(2, 'Chuteiras'),
        ),
        new Product(
          4,
          'Chuteira Futsal Infantil Puma Neymar Future 9 Play',
          'Com solado de borracha com tecnologia non-marking assegura tração superior.',
          379.99,
          0,
          new Category(2, 'Chuteiras'),
        ),
        new Product(
          5,
          'Tênis Feminino Nike Revolution 8',
          'Com solado de borracha para aderência duradoura no asfalto ou esteira.',
          341.99,
          0,
          new Category(3, 'Tênis'),
        ),
      ] as Product[],
      cart: new Cart(),
    }
  },
  computed: {
    totalItems(): number {
      return this.cart.getTotalItems()
    },
    finalPrice(): number {
      return this.cart.getFinalPrice()
    },
  },
  methods: {
    addToCart(product: Product) {
      this.cart.addItem(product, 1)
    },
    removeFromCart(productId: number) {
      this.cart.removeItem(productId)
    },
    removeItemFromCart(productId: number) {
      this.cart.removeItemCompletely(productId)
    },
  },
})
</script>

<template>
  <main class="app-container">
    <header class="header">
      <h1>E-Commerce do Atleta 💪</h1>
      <p class="subtitle">O lugar certo para quem busca alta performance!</p>
    </header>

    <hr />

    <div class="main-content">
      <section class="products-section">
        <h2>Produtos Disponíveis</h2>
        <div class="products-grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>
      </section>

      <aside class="cart-summary">
        <h2>Resumo do Carrinho</h2>
        <div class="summary-box">
          <div class="summary-item">
            <span class="label">Total de Itens: </span>
            <span class="value">{{ totalItems }}</span>
          </div>
          <div class="summary-item">
            <span class="label">Preço Final: </span>
            <span class="value price">R$ {{ finalPrice.toFixed(2) }}</span>
          </div>
        </div>

        <div v-if="cart.cartItem.length > 0" class="cart-items">
          <h3>Itens no Carrinho</h3>
          <ul>
            <li v-for="item in cart.cartItem" :key="item.product.id" class="cart-item">
              <div class="item-info">
                <span class="item-name">{{ item.product.name }}</span>
                <span class="item-qty"> x{{ item.quantity }}</span>
              </div>
              <div class="item-actions">
                <button
                  @click="removeFromCart(item.product.id)"
                  class="btn-remove"
                  title="Remover uma unidade"
                >
                  ➖
                </button>
                <span class="item-price"
                  >R$ {{ (item.product.price * item.quantity).toFixed(2) }}</span
                >
                <button
                  @click="removeItemFromCart(item.product.id)"
                  class="btn-delete"
                  title="Remover item completamente"
                >
                  ❌
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div v-else class="empty-cart">
          <p>Seu carrinho está vazio</p>
        </div>
      </aside>
    </div>
  </main>
</template>

<style scoped></style>
