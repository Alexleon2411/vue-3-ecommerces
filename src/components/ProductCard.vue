<!-- eslint-disable vue/multi-word-component-names -->
<script  lang="ts">

import type { PropType } from 'vue';
import { useCartStore } from "@/stores/cart";
import type { Product } from '../model/types';

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
        required: true
    }
  },
  emits: ['addProduct'],
  methods: {
     onaddButtonClick() {
      const cartStore = useCartStore();
      cartStore.addProduct(this.product);
    }
  },
  computed: {
    productImageUrl() {
      return this.product.image
      ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg';
    }
  }
}
</script>

<template>
  <v-card>
    <v-img
    :src="productImageUrl"
    height="200px"
    cover>
  </v-img>
  <v-card-title>
    {{product.name }}
  </v-card-title>
    <v-card-text>
      <p class="mb-4">esta es una descripcion que agregamos para tener algo de texto entre el precio y el titulo del producto</p>
      <v-chip>
      {{ product.price }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="onaddButtonClick" color="orange-lighten-2">Agregar al carrito</v-btn>
    </v-card-actions>
  </v-card>
</template>
