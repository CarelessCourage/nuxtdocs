<template>
  <div ref="circle" class="circle" />
</template>

<style scoped lang="scss">
.circle {
  --color: rgb(var(--accent-20) / 1);
  position: absolute;
  z-index: 20;
  left: 0px;
  top: -90vw;
  height: 100vw;
  width: 100vw;
  background: var(--color);
  border-radius: 60rem;
  box-shadow: 0px 100px 150px 47px var(--color);
}
</style>
