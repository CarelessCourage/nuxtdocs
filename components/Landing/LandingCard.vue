<template>
  <div
    ref="el"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`
    }"
    :class="ui.wrapper"
    v-bind="attrs"
  >
    <UCard :ui="ui">
      <div :class="ui.container">
        <NuxtLink
          v-if="to"
          :aria-label="ariaLabel"
          v-bind="nuxtLinkProps"
          class="focus:outline-none"
          tabindex="-1"
        >
          <span class="absolute inset-0" aria-hidden="true" />
        </NuxtLink>

        <div v-if="icon || $slots.icon" :class="ui.icon.wrapper">
          <slot name="icon">
            <UIcon :name="icon" :class="ui.icon.base" class="!text-gray-50" />
          </slot>
        </div>

        <p v-if="title || $slots.title" class="!text-gray-50" :class="ui.title">
          <slot name="title">
            {{ title }}
          </slot>
        </p>

        <p v-if="description || $slots.description" :class="ui.description">
          <slot name="description">
            {{ description }}
          </slot>
        </p>

        <slot name="container" />
      </div>

      <slot v-if="$slots.default" />
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { twJoin } from 'tailwind-merge'
import { getSlotChildrenText } from '../../lib/slots'
import type { NuxtLinkProps } from '#app'
import colors from '#tailwind-config/theme/colors'

const el = ref<HTMLDivElement>()

const slots = useSlots()
const { elementX, elementY } = useSharedMouseInElement(el)

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<
    {
      title?: string
      description?: string
      icon?: string
      color?: string
      orientation?: 'vertical' | 'horizontal'
      ui?: Partial<typeof config>
      class?: any
    } & NuxtLinkProps
  >(),
  {
    title: '',
    description: undefined,
    icon: undefined,
    color: 'primary',
    orientation: 'vertical',
    ui: () => ({}),
    class: undefined
  }
)

const colorLight = computed(() => {
  if (props.color === 'primary') {
    return 'rgb(var(--color-primary-DEFAULT))'
  }
  return colors[props.color]?.['500'] || props.color
})
const colorDark = computed(() => {
  if (props.color === 'primary') {
    return 'rgb(var(--color-primary-DEFAULT))'
  }
  return colors[props.color]?.['400'] || props.color
})

const config = computed(() => {
  return {
    wrapper:
      'relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow',
    base: 'flex-1 flex flex-col',
    container: '',
    body: {
      base: twJoin(
        'gap-x-8 gap-y-4 rounded-xl flex-1',
        props.orientation === 'vertical' && 'flex flex-col',
        !!slots.default &&
          props.orientation === 'horizontal' &&
          'grid lg:grid-cols-2 lg:items-center'
      )
    },
    background: 'hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]',
    ring: '',
    rounded: 'rounded-xl',
    shadow: '',
    icon: {
      wrapper: 'mb-2 pointer-events-none',
      base: 'w-8 h-8 flex-shrink-0'
    },
    title: 'text-base font-bold truncate',
    description: 'text-[15px] mt-1'
  }
})

const { ui, attrs } = useUI('landing.card', toRef(props, 'ui'), config, toRef(props, 'class'), true)

const omittedProps = new Set(['title', 'description', 'icon', 'ui', 'class'])
const nuxtLinkProps = computed(() => {
  const _props = {}

  for (const prop in props) {
    if (omittedProps.has(prop) || !props[prop]) {
      continue
    }
    _props[prop] = props[prop]
  }

  return _props
})
const ariaLabel = computed(() =>
  (props.title || (slots.title && getSlotChildrenText(slots.title())) || 'Card link').trim()
)
</script>

<style scoped>
.background-gradient::before {
  background: radial-gradient(
    250px circle at var(--x) var(--y),
    v-bind(colorLight) 0%,
    transparent 100%
  );
  will-change: background;
}

.dark {
  .background-gradient::before {
    background: radial-gradient(
      250px circle at var(--x) var(--y),
      v-bind(colorDark) 0%,
      transparent 100%
    );
  }
}
</style>
