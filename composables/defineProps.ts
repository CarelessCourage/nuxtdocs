import { defineProps } from 'vue'

export function dp<T>() {
    return defineProps<T>()
}   