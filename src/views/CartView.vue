<script  lang="ts">
import Cart from "@/components/cart/ShoppingCart.vue"
import SummaryCart from "@/components/cart/SummaryCart.vue"


export default {
  components: {
    Cart,
    SummaryCart
  }
}
</script>

<template>
  <v-row>
    <v-col cols="8">
      <Cart />
    </v-col>
    <v-col cols="4">
      <SummaryCart/>
    </v-col>
  </v-row>

</template>
