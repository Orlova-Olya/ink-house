<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;

  height: 100%;
}
</style>
