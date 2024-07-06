import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref({
      email: 'juan@gmail.com',
      name: 'Juan'
    })

    const getUser = computed(() => user.value);

    const setUser =  (email, name) => {
        user.value.email = email
        user.value.name = name
    }

    return { getUser, setUser };
});
