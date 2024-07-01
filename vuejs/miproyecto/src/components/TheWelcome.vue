<template>
  <!-- Comentario -->
  <h2 style="color: cadetblue;">{{ text }}</h2>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    default: 'Hola desde la prop'
  }
});

</script>