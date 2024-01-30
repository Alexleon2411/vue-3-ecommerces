<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from '@/model/types'
import  {useCartStore} from '@/stores/cart'
import { mapActions } from 'pinia';

export default {
  props: {
    detail: {
      type: Object as PropType<CartDetail>,
        required: true
    }
  },
  methods: {
    ...mapActions(useCartStore, {
      decrementQuantity: 'decrement',
      incrementQuantity: 'increment',
      deleteProduct: 'deleteProduct'
    }),
  },
  computed: {
    productImageUrl() {
      return this.detail.product.image
      ?? 'https://dustinstout.com/wp-content/uploads/2018/10/copyright-free-images-2020-1200x628-1.jpg';

    },
    SubTotal() {
      return  this.detail.product.price * this.detail.quantity;
    }
  }

}
</script>


<template>
  <tr>
    <td>
      <v-img
      :src="productImageUrl"
      height="100px"
      width="150px"
      cover
      class="mt-2 mb-2"
      />
      {{ detail.product.name}}
    </td>
    <td class="text-center">
      <v-btn @click="decrementQuantity(detail.product.id)" size="x-small" icon="mdi-minus" class="ml-2"/> {{ detail.quantity }}
      <v-btn @click="incrementQuantity(detail.product.id)" size="x-small" icon="mdi-plus"/>
    </td>
    <th>
      ${{ detail.product.price }}
    </th>
    <td>
      ${{ SubTotal}}
    </td>
    <td>
      <v-btn @click="deleteProduct" size="x-small" icon="mdi-delete" class="ml-2"/>
    </td>
  </tr>
</template>
