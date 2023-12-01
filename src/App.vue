<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style lang="scss">
*:focus {
  outline: 0;
  outline: none;
}

html,
body,
#app {
  background-color: #eff2f7;
}

#app {
  min-width: 780px;
}

//滚动条的宽度
::-webkit-scrollbar {
  width: 13px;
  height: 13px;
}

//滚动条的滑块
::-webkit-scrollbar-thumb {
  background-color: rgba(45, 95, 255, 0.2);
  border-radius: 10px;
}
</style>
