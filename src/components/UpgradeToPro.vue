<template>
  <VBtn
    color="error"
    class="product-upgrade-to-pro"
    href="https://github.com/dixitcoder"
    target="_blank"
    rel="noopener noreferrer"
  >
      Github
  </VBtn>
</template>

<style lang="scss" scoped>
.product-upgrade-to-pro {
  position: fixed;

  // To keep upgrade to pro button on top of v-layout
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 79px;

  .v-application &.v-btn.v-btn--elevated {
    box-shadow: 0 1px 20px 1px rgb(var(--v-theme-error)) !important;

    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
