<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import CartSummary from '@/components/CartSummary.vue'
import pToggleSwitch from 'primevue/toggleswitch'

import { Product } from '@/models/product.model'
import { Category } from '@/models/category.model'
import { Cart } from '@/models/cart.model'

export default defineComponent({
  components: {
    ProductCard,
    CartSummary,
    pToggleSwitch,
  },
  data() {
    return {
      checked: false,
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
  mounted() {
    const savedTheme = localStorage.getItem('theme')

    this.checked = savedTheme === 'dark'

    document.documentElement.classList.toggle('dark', this.checked)
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
    toggleDarkMode() {
      document.documentElement.classList.toggle('dark', this.checked)

      localStorage.setItem('theme', this.checked ? 'dark' : 'light')
    },
  },
})
</script>

<template>
  <div className="font-mono bg-neutral-200 dark:bg-neutral-900">
    <header className="bg-neutral-100 dark:bg-neutral-950 px-4 py-8 text-center">
      <h1 className="text-3xl font-extrabold text-teal-500">E-Commerce do Atleta 💪</h1>
      <p className="text-base italic text-neutral-600 dark:text-neutral-300">
        O lugar certo para quem busca alta performance!
      </p>

      <!-- Botão de Alterar Tema com PrimeVue usando classes do TailwindCSS -->
      <pToggleSwitch
        v-model="checked"
        :pt="{ root: { class: 'scale-125 my-2' } }"
        @change="toggleDarkMode"
      >
        <template #handle="{ checked }">
          <i :class="['text-xs! pi', { 'pi-moon': checked, 'pi-sun': !checked }]" />
        </template>
      </pToggleSwitch>
    </header>

    <main className="container mx-auto p-6 md:p-12">
      <section>
        <h2>Catálogo de Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>
      </section>

      <CartSummary
        :cart-items="cart.cartItem"
        :total-items="totalItems"
        :final-price="finalPrice"
        @increment="addToCart"
        @decrement="removeFromCart"
        @remove="removeItemFromCart"
      />
    </main>
  </div>
</template>

<style scoped></style>
