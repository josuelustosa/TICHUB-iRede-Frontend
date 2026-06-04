import { Product } from './product.model'

interface CartItem {
  product: Product
  quantity: number
}

export class Cart {
  constructor(public cartItem: CartItem[] = []) {}

  addItem(product: Product, quantity: number) {
    const existItem = this.cartItem.some((item) => item.product.id === product.id)

    if (existItem) {
      this.cartItem = this.cartItem.map((item) => {
        if (item.product.id === product.id) {
          return {
            product,
            quantity: item.quantity + quantity,
          }
        }

        return item
      })
    } else {
      this.cartItem.push({
        product,
        quantity,
      })
    }
  }

  // Retorna a quantidade total de unidades (soma das quantidades) no carrinho
  getTotalItems(): number {
    return this.cartItem.reduce((total, item) => total + item.quantity, 0)
  }

  // Retorna o valor monetário total da compra
  getFinalPrice(): number {
    return this.cartItem.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }

  // Remove uma unidade do produto. Se a quantidade chegar a 0, remove o item
  removeItem(productId: number) {
    const item = this.cartItem.find((item) => item.product.id === productId)

    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        this.cartItem = this.cartItem.filter((item) => item.product.id !== productId)
      }
    }
  }

  // Remove o item completamente do carrinho
  removeItemCompletely(productId: number) {
    this.cartItem = this.cartItem.filter((item) => item.product.id !== productId)
  }
}
