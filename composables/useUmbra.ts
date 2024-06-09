import { useDebounceFn } from '@vueuse/core'
import type { Promisify } from '@vueuse/core'
import type { UmbraInput, FormatedRange, UmbraOutputs } from '../core'
import { umbra, rgb, isDark } from '../core'

const settings = {
  formater: rgb
}

const themeInput: UmbraInput = {
  foreground: '#ffffff',
  background: '#000000',
  accents: ['#9999ff'],
  inversed: {
    foreground: '#000000',
    background: '#ffffff',
    accents: ['#ff0000']
  }
}

interface UseUmbra {
  input: globalThis.Ref<UmbraInput>
  formated: globalThis.Ref<FormatedRange[]>
  isDark: globalThis.Ref<boolean>
  inverse: () => UmbraOutputs
  change: (scheme: UmbraInput) => Promisify<UmbraOutputs>
  apply: (scheme?: UmbraInput) => UmbraOutputs
}

export const useUmbra = defineStore('umbra', () => {
  const input = ref<UmbraInput>(themeInput)
  const formated = ref<FormatedRange[]>([])
  const dark = ref<boolean>(true)
  let settings = undefined

  function store(theme: UmbraOutputs) {
    input.value = {
      background: theme.input.background,
      foreground: theme.input.foreground,
      accents: theme.input.accents,
      inversed: {
        background: theme.input.inversed.background,
        foreground: theme.input.inversed.foreground,
        accents: theme.input.inversed.accents
      }
    }
    settings = theme.input.settings
    formated.value = theme.formated
    dark.value = isDark(theme.input.background)
    return theme
  }

  function apply(scheme?: UmbraInput) {
    const theme = umbra({
      settings: settings,
      ...input.value,
      ...scheme
    })
    const output = theme.apply()
    return store(output)
  }

  const debounced = useDebounceFn((s) => apply(s), 50, {
    maxWait: 200
  })

  function inverse() {
    const theme = umbra({
      settings: settings,
      ...input.value
    }).inverse()
    const output = theme.apply()
    return store(output)
  }

  return {
    input,
    formated,
    isDark: dark,
    inverse,
    change: (scheme: UmbraInput) => debounced(scheme),
    apply: (scheme?: UmbraInput) => apply(scheme)
  } as UseUmbra
})
