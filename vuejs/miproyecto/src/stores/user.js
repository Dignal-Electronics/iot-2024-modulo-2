import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const email = ref('juan_carlos@gmail.com');
    const name = ref('Juan');

    const getUser = computed(() => email.value);
    const getName = computed(() => name.value);

    const setUser =  (user) => {
        email.value = user;
    }

    const setEmail = (email) => {
        name.value = email;
    }

    return { getUser, getName, setUser, setEmail };
});
