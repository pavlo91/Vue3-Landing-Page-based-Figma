<template>
  <div class="">
    <div class="slogan-bg grid grid-flow-col relative gap-6 py-8 lg:py-12 lg:gap-14 image-container" id="slogan">
        <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
        <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
        <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
        <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
        <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
        <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
        <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
    </div>
  </div>
</template>

<style scoped>
  .partner-text {
    background-color: transparent;
    color: var(--m-3-sys-dark-secondary, #B1CCC5);
    text-transform: uppercase;
  }
  .image-container {
    white-space: nowrap;
  }

  .image-container img {
    display: inline-block;
    animation: scrollImages 10s linear infinite;
  }

  @keyframes scrollImages {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-150%);
    }
  }
</style>