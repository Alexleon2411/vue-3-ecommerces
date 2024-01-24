
<!-- eslint-disable vue/multi-word-component-names -->
<script  lang="ts">
import productcard from "./ProductCard.vue"
import type { Product} from '../model/types';

export default {
  components: {
    productcard
  },
  props: ['details'],
  data() {
    return {
      products: [

        {name: 'Silla gamer', price: 56, id: 1},
        {name: "Mesa gamer", price: 100, id: 2},
        {name: "Monitor MSI", price: 150, id: 3},
        {name: 'Silla gamer', price: 56, id: 1},
        {name: "Mesa gamer", price: 100, id: 2},
        {name: "Monitor MSI", price: 150, id: 3}
      ] as Product[]
    }
  }

}
</script>

<template>
  <!-- eslint-disable vue/valid-v-for -->
  <v-row>
    <v-col v-for="p in products" :key="p.id"  cols="4">
      <productcard
         :product="p"
      />
    </v-col>
  </v-row>
</template>
