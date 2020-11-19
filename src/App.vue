<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
}
/*fade*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
