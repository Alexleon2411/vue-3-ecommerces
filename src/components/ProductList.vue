
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

        {name: 'Gamer chair', price: 56, id: 1, image: 'https://preview.free3d.com/img/2020/05/2324857829715871687/4ab1nqzv.jpg'},
        {name: "Table gamer", price: 100, id: 2, image: 'https://m.media-amazon.com/images/I/91gcYjEpeiL._AA360_AC_QL70_.jpg'},
        {name: "Screen MSI", price: 150, id: 3, image: 'https://img.freepik.com/premium-photo/person-preparing-play-video-games-monitor-woman-using-keyboard-mousepad-playing-online-game-computer-desk-player-gaming-cyberspace-having-fun-with-games_482257-30200.jpg'},
        {name: 'parlante gamer', price: 56, id: 4},
        {name: "audifonos gamer", price: 100, id: 5},
        {name: "mause gamer", price: 150, id: 6}
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
