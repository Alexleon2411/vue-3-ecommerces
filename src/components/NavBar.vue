<script lang="ts">
import { useCartStore } from '@/stores/cart';
export default {
  computed: {
    itemsCount() {
      const cartStore = useCartStore();
      return cartStore.cartItemsCount;
    }
  },
  data() {

  }
}
</script>
<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <RouterLink to="/" custom v-slot="{navigate}">
        <v-avatar
          class="me-4 "
          size="32"
          :active="$route.name === 'home'" variant="elevated" @click="navigate"
        >
          <v-img  src="/logo.png"/>
        </v-avatar>
      </RouterLink>
      <RouterLink to="/" custom v-slot="{navigate}">
        <v-btn prepend-icon="mdi-home-account" :active="$route.name === 'home'" variant="text" @click="navigate">
         Home
        </v-btn>
      </RouterLink>

      <RouterLink to="/about" custom v-slot="{navigate}">
        <v-btn prepend-icon="mdi-information-box" :active="$route.name === 'about'" variant="text" @click="navigate">
          About
        </v-btn>
      </RouterLink>
      <RouterLink to="cart" custom v-slot="{navigate}">
        <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2" >
          <v-btn prepend-icon="mdi-cart" :active="$route.name === 'cart'" variant="text" @click="navigate">
            Cart
          </v-btn>
        </v-badge>

      </RouterLink>
      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          flat
          hide-details
          label="Search"
          rounded="lg"
          single-line
          variant="solo-filled"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
