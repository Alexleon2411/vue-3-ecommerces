//recordar que la logica siempre ir en la parte del script
<script setup lang="ts">
import { onMounted, ref } from "vue"

const count = ref(0);
function increase() {
  count.value += 1;
}
function decrease() {
   if(count.value >= 1){
     count.value -= 1;
   }
}

 onMounted(() => {
  console.log("el valor inicial es " + count.value);
});
</script>
<template>
  <p>Hola desde el contador de compositionAPI</p>
  <h1>
    contador: {{ count }}
  </h1>
  <button @click="increase">
    aumentar el contador
  </button>
  <button @click="decrease">
    boton para degradar
  </button>
  <p>vamos tu puedes </p>
</template>
