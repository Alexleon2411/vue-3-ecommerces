<script  lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/NavBar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <v-app>
    <Navbar/>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
  </v-app>

</template>
