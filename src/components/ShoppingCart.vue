<script lang="ts">
import  {useCartStore} from '@/stores/cart'

export default {
  methods: {
    decrementQuantity(productId: number) {
      this.cartStore.decreaseItem(productId);
    },
    incrementQuantity(productId: number) {
      this.cartStore.increaseItem(productId);
    },
    removeItem(productId: number) {
      this.cartStore.removeItem(productId)
    }
  },
    computed: {
      cartStore() {
        return useCartStore();
      },
      details() {
        return this.cartStore.details;
      }
    },
  }
</script>


<template>
  <v-card class="mt-4">
    <v-card-text>
    <p>productos  agregados:</p>
    <v-list v-if="details.length > 0">
      <v-list-item v-for="detail in details" :key="detail.productId">
        <v-list-item-title>
          product {{ detail.productId }}
          <v-btn @click="decrementQuantity(detail.productId)" size="x-small" icon="mdi-minus" class="ml-2"/> (Qty: {{ detail.quantity }})
          <v-btn @click="incrementQuantity(detail.productId)" size="x-small" icon="mdi-plus"/>
          <v-btn @click="removeItem" size="x-small" icon="mdi-delete" class="ml-2"/>
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <p v-else>
      Aun no has agregado ningun item a tu carrito de compra, has <RouterLink to="/">Click Aquí</RouterLink>  para observar los productos disponibles
    </p>
  </v-card-text>
</v-card>
</template>
