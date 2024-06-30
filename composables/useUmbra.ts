import { useDebounceFn } from '@vueuse/core'
import type { Promisify } from '@vueuse/core'
import type { UmbraInput, FormatedRange, UmbraOutputs, UmbraSettings } from '../core'
import { umbra, rgb, isDark } from '../core'

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
  readability: globalThis.Ref<{ target: number; value: number }>
  setReadability: (value: number) => { target: number; value: number }
  inverse: () => UmbraOutputs
  change: (scheme: UmbraInput) => Promisify<UmbraOutputs>
  apply: (scheme?: UmbraInput) => UmbraOutputs
}

export const useUmbra = defineStore('umbra', () => {
  const input = ref<UmbraInput>(themeInput)
  const formated = ref<FormatedRange[]>([])
  const dark = ref<boolean>(true)

  const readability = ref({
    target: 50,
    value: 50
  })

  let settings: UmbraSettings = {
    readability: readability.value.target,
    formater: rgb
  }

  function stringableInput(input: UmbraInput) {
    // Returns only the part of the input that can be stringified
    return {
      background: input.background,
      foreground: input.foreground,
      accents: input.accents,
      inversed: {
        background: input.inversed.background,
        foreground: input.inversed.foreground,
        accents: input.inversed.accents
      }
    }
  }

  function store(theme: UmbraOutputs) {
    input.value = stringableInput(theme.input)
    settings = theme.input.settings
    formated.value = theme.formated
    dark.value = isDark(theme.input.background)
    return theme
  }

  function apply(scheme?: UmbraInput) {
    const schemeInput = {
      ...input.value, // previous input
      ...scheme // new input
    }

    const schemeSettings = {
      ...settings, // default settings
      ...scheme?.settings // new settings
    }

    const theme = umbra({
      ...schemeInput,
      settings: schemeSettings
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

  function setReadability(value: number) {
    console.log('setReadability', value)
    readability.value = {
      target: value,
      value: value
    }
    const settings = {
      readability: value
    }
    apply({ settings })
    return readability.value
  }

  return {
    input,
    formated,
    isDark: dark,
    readability,
    setReadability,
    inverse,
    change: (scheme: UmbraInput) => debounced(scheme),
    apply: (scheme?: UmbraInput) => apply(scheme)
  } as UseUmbra
})
