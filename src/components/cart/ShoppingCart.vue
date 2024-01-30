<script lang="ts">
import  {useCartStore} from '@/stores/cart'
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue'

export default {
  components: {
    ShoppingCartItem
  },
    computed: {
      //los utilizamos para mapear acciones que necesitamos para poder reducir la cantidad de codigo que necesitamos para poder ver los estados
      ...mapState(useCartStore, ['details'])
    },
  }
</script>


<template>
  <v-card>
    <v-card-title>
      <p>productos  agregados:</p>
    </v-card-title>
    <v-card-text>
      <v-table  v-if="details.length > 0">
        <thead>
          <tr>
            <th class="text-left">
              Producto
            </th>
            <th class="text-center">
              Cantidad
            </th>
            <th class="text-left">
              Precio
            </th>
            <th class="text-left">
              Subtotal
            </th>
            <th class="text-left">
              <span class="d-sr-only">Elimina</span>

            </th>
          </tr>
        </thead>
        <tbody>
         <ShoppingCartItem
        v-for="detail in details"
        :key="detail.product.id"
        :detail="detail"
      />
        </tbody>
      </v-table>
    <p v-else>
      You have not added any product to you cart yet, please <RouterLink to="/">Click here</RouterLink>  to see the available products
    </p>
  </v-card-text>
</v-card>
</template>
