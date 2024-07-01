<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
// Boton de acción cambio de mensaje
const mensaje = ref('');

const actualizaMensaje = () => {
  mensaje.value = 'HOLA';
}

// Funciones del ciclo de vida de vue
onBeforeMount(() => {
  console.log('Antes de montar la app.');
});

onMounted(() => {
  console.log('Aplicación montada.');
});

// Operadores aritmeticos
const n1 = ref(0);
const n2 = ref(80);
const operador = ref(null);
const resultado = ref(0)

const operacion = () => {
  // Number => Obtiene el valor numerico de un parametro.
  // isNaN => Verifica que un valor dado sea de tipo "Not-a-Number"
  //               true      "10ed" => NaN
  const numero1 = isNaN(Number(n1.value)) ? 0 : Number(n1.value);
  const numero2 = isNaN(Number(n2.value)) ? 0 : Number(n2.value);

  // eval => Evalua que su parametro sea codigo valido de JS.
  resultado.value = eval(`${numero1}${operador.value}${numero2}`);
}

// Directiva v-if
// if () {
//    Si la condición se cumple.
// } else {
//    Si la condición no se cumple.
//}
const edad = ref(0);
</script>

<template>
  <main>
    <TheWelcome :text="mensaje"/>
    <p>{{ mensaje }}</p>
    <button @click="actualizaMensaje()">Actualizar mensaje</button>

    <hr><br>

    <input type="text" v-model="n1" @keyup="operacion()">
    <select v-model="operador" @change="operacion()">
      <option>+</option>
      <option>-</option>
      <option>*</option>
    </select>
    <input type="text" v-model="n2" @keyup="operacion()">

    <h2>{{ `El resultado de la operación es ${resultado}` }}</h2>

    <hr><br><br>

    <input type="number" v-model="edad">
    <h2 v-if="edad >= 18">Es mayor de edad</h2>
    <h2 v-else>Es menor de edad</h2>

  </main>
</template>
