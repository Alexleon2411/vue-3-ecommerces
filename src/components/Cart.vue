<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import type { PropType } from "vue";
import type {CartDetail} from '../model/types';

export default {
  props: {
    details: {
      type: Object as PropType<Array<CartDetail>>,
        required: true
      }
    }
  }
</script>


<template>
  <v-card class="mt-4">
    <v-card-text>

      <p>productos  agregados:</p>
      <v-list>
        <!--eslint-disable-next-line vue/valid-v-for -->
      <v-list-item v-for="detail in details" value="detail.productId">
        <v-list-item-title>
          product {{ detail.productId }} (Qty: {{ detail.quantity }})
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card-text>
</v-card>
</template>
