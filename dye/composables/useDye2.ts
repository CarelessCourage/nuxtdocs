import { ref, watch } from 'vue'
import type { InjectionKey } from 'vue'
import { useMousePressed } from '@vueuse/core'
import { umbra } from '@umbrajs/core'
import { colorName } from './colorName'
import type { OutputColor } from '../composables/canvas'

export const DyeKey = Symbol() as InjectionKey<{
  color: globalThis.Ref<OutputColor>
  setColor: (value: OutputColor | string, updateHandle?: boolean) => void
  paintComponent: (background: string) => void
  wrapper: globalThis.Ref<HTMLDivElement | null>
  getWrapper: () => globalThis.Ref<HTMLDivElement | null>
  setWrapper: (el: HTMLDivElement) => void
  handleUpdates: globalThis.Ref<number>
}>

export const StoreKey = Symbol() as InjectionKey<{
  holding: globalThis.Ref<boolean>
  setHolding: (value: boolean) => void
  activeCanvas: globalThis.Ref<{
    addEventListener: (
      type: string,
      callback: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ) => void
    dispatchEvent: (event: Event) => boolean
    removeEventListener: (
      type: string,
      callback: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ) => void
  }>
  isActiveCanvas: (target?: EventTarget | HTMLCanvasElement | null) => boolean
  offCanvas: (e: MouseEvent, click: boolean) => boolean
}>

export const CanvasKey = Symbol() as InjectionKey<{
  colorCanvas: () => globalThis.Ref<HTMLCanvasElement>
  setColorCanvas: (el: HTMLCanvasElement) => void
}>

export function useColorCanvas() {
  const colorCanvas = ref<HTMLCanvasElement | null>(null)

  function getColorCanvas() {
    return colorCanvas
  }

  function setColorCanvas(el: HTMLCanvasElement) {
    colorCanvas.value = el
  }

  return {
    colorCanvas: getColorCanvas,
    setColorCanvas
  }
}

export function useDye() {
  const hex = '#000'
  const wrapper = ref<HTMLDivElement | null>(null)
  const color = ref({ name: colorName(hex).name, hex })
  const handleUpdates = ref(0)

  function setColor(value: OutputColor | string, updateHandle = false) {
    const isString = typeof value === 'string'
    const hex = isString ? value : value.hex

    if (isString) {
      const name = colorName(value).name
      color.value = { name, hex }
    } else color.value = value

    paintComponent(hex)
    if (updateHandle) handleUpdates.value++
  }

  paintComponent(color.value.hex)
  function paintComponent(background: string) {
    if (!wrapper.value) return
    umbra({ background }).apply({ target: wrapper.value })
  }

  function getWrapper() {
    return wrapper
  }

  function setWrapper(el: HTMLDivElement) {
    wrapper.value = el
  }

  return {
    color,
    setColor,
    paintComponent,
    wrapper,
    getWrapper,
    setWrapper,
    handleUpdates
  }
}

export function useDyeStore() {
  const holding = ref(false)
  const activeCanvas = ref<EventTarget | null>(null)

  const { pressed } = useMousePressed()
  watch(pressed, (value: boolean) => {
    if (value) return
    activeCanvas.value = null
    holding.value = value
  })

  function offCanvas(e: MouseEvent, click: boolean) {
    const returnCondition = !holding.value && !click
    if (!holding.value) activeCanvas.value = e.target
    if (activeCanvas.value === null) activeCanvas.value = e.target
    return returnCondition
  }

  function setHolding(value: boolean) {
    holding.value = value
  }

  function isActiveCanvas(target?: EventTarget | HTMLCanvasElement | null) {
    return activeCanvas.value !== target
  }

  return {
    holding,
    setHolding,
    activeCanvas,
    isActiveCanvas,
    offCanvas
  }
}
