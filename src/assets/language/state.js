import { useSessionStorage, useStorage } from '@vueuse/core'

export const currentLanguage = useSessionStorage('language', 'EN');