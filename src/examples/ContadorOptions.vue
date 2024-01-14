<!-- eslint-disable vue/multi-word-component-names -->
<script  lang="ts">
export default {
  data() {
    return{
      count: 0
    }
  },
  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      if (this.count >= 1){
        this.count -= 1;
      }
    }
  },
  mounted() {
    console.log('el valor inicial del contador es 0' + this.count)
  }
}
</script>

<template>
  <h1>contador{{count }}</h1>
  <button @click="increase">
    aumentar contador
  </button>
  <button @click="decrease">
    disminuir el contador
  </button>
</template>
