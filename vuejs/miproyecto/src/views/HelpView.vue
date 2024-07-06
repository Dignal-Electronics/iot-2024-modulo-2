<template>
    <h2>Preguntas frecuentes</h2>

    <div v-for="pregunta in preguntas" :key="pregunta.pregunta">
        <h3 class="pregunta">{{ pregunta.pregunta }}</h3>
        <p>{{  pregunta.respuesta }}</p>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const preguntas = ref([
    {
        pregunta: '¿Cómo puedo comprar?',
        respuesta: 'Texto de respuesta'
    },
    {
        pregunta: '¿Cómo puedo comunicarme con soporte?',
        respuesta: 'Texto de respuesta'
    },
    {
        pregunta: '¿Cómo puedo solicitar un reembolso?',
        respuesta: 'Texto de respuesta'
    }
])
</script>

<style>
.pregunta {
    color: darkgreen;
}
</style>