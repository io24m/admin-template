<template>
  <div class="l-container-margin l-container-padding">
    <a-card class="bg-white">
      <slot></slot>
    </a-card>
  </div>
</template>
<style scoped>
.l-container-padding {
  padding: 5px;
}
.l-container-margin {
  margin: 5px;
}
.bg-white {
  background-color: #fff;
}
.l-radiusb{
  border-radius: 4px;
}
</style>
