
<!-- eslint-disable vue/multi-word-component-names -->
<script  lang="ts">
import Cart from './Cart.vue'
import productcard from "./ProductCard.vue"
import type {CartDetail, Product} from '../model/types';

export default {
  components: {
    productcard,
    Cart
  },
  data() {
    return {
      products: <Array<Product>>[

        {name: 'Silla gamer', price: 56, id: 1},
        {name: "Mesa gamer", price: 100, id: 2},
        {name: "Monitor MSI", price: 150, id: 3}
      ],
      details: <Array<CartDetail>>[ ]
    }
  },
  methods: {
    onaddProduct(productId: number) {
      // console.log('agregar producto ' + productId);
      const detailFound =this.details.find(d => d.productId == productId);

      if(detailFound){
        detailFound.quantity += 1;
      }else{
        this.details.push({
          productId,
          quantity: 1
        });
      }
    }
  }
}
</script>

<template>
  <!-- eslint-disable vue/valid-v-for -->
  <v-row>
    <v-col v-for="p in products" cols="4">
      <productcard
         :product="p"
         @addProduct="onaddProduct(p.id)" />
    </v-col>
  </v-row>
  <cart :details="details"/>
</template>
