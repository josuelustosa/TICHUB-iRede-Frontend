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
  <div className="font-mono bg-neutral-200 dark:bg-neutral-900">
    <header className="bg-neutral-100 dark:bg-neutral-950 px-4 py-8 text-center">
      <h1 className="text-3xl font-extrabold text-teal-500">E-Commerce do Atleta 💪</h1>
      <p className="text-base italic text-neutral-600 dark:text-neutral-300">
        O lugar certo para quem busca alta performance!
      </p>
    </header>

    <main className="container mx-auto p-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Catálogo de Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>
      </section>

      <aside className="mt-12">
        <h2>Resumo do Carrinho</h2>
        <div>
          <div>
            <span>Total de Itens: </span>
            <span>{{ totalItems }}</span>
          </div>
          <div>
            <span>Preço Final: </span>
            <span>R$ {{ finalPrice.toFixed(2) }}</span>
          </div>
        </div>

        <div v-if="cart.cartItem.length > 0">
          <h3>Itens no Carrinho</h3>
          <ul>
            <li v-for="item in cart.cartItem" :key="item.product.id">
              <div>
                <span>{{ item.product.name }}</span>
                <span> x{{ item.quantity }}</span>
              </div>
              <div>
                <button @click="removeFromCart(item.product.id)" title="Remover uma unidade">
                  ➖
                </button>
                <span>R$ {{ (item.product.price * item.quantity).toFixed(2) }}</span>
                <button
                  @click="removeItemFromCart(item.product.id)"
                  title="Remover item completamente"
                >
                  ❌
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>Seu carrinho está vazio</p>
        </div>
      </aside>
    </main>
  </div>
</template>

<style scoped></style>
