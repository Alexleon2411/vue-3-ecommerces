import { defineStore } from 'pinia'
import type {CartDetail, Product} from '@/model/types'



export const useCartStore = defineStore('cart', {
  state: () => ({
    details: [] as CartDetail[]
  }),
  getters: {
    cartItemsCount: (state) => {

      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity;
      });
      return count  ;
    },
    totalAmount: (state) => {
      let total = 0;
      state.details.forEach(d => {
        total+= d.product.price * d.quantity;
      })

      return total;
    }

  },
  actions: {
    addProduct(product: Product ) {
      const detailFound =this.details.find(d => d.product.id === product.id);

      if(detailFound){
        detailFound.quantity += 1;
      }else{
        this.details.push({
          product,
          quantity: 1
        });
      }
    },
    increment(productId: number){
      const detailFound =this.details.find(d => d.product.id === productId);
      if (detailFound) {
        detailFound.quantity += 1;
      }
    },
    decrement(productId: number){
      const detailFound =this.details.find(d => d.product.id === productId);

      if (detailFound) {
          detailFound.quantity = Math.max(1, detailFound.quantity - 1);
        }
    },
    deleteProduct(productId: number) {
      const index = this.details.findIndex(d => d.product.id === productId);

        // Eliminar el elemento de la matriz
        this.details.splice(index, 1);

    }
  },
})
