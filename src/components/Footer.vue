<template>
  <footer class="footer padding-x-classic">
    <router-link to="/" class="home-link">
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" alt="logo">
        <path
          d="M17.5 0L19.9652 9.10444L26.9612 2.77806L24.1128 11.77L33.4186 10.2302L26.1609 16.2547L34.8219 19.9905L25.4593 21.1349L30.7256 28.9601L22.2306 24.861L22.4303 34.2911L17.5 26.25L12.5697 34.2911L12.7694 24.861L4.27438 28.9601L9.54072 21.1349L0.178125 19.9905L8.83906 16.2547L1.58144 10.2302L10.8872 11.77L8.03879 2.77806L15.0348 9.10444L17.5 0Z"
          class="home-link__logo-path"
        />
      </svg>

      <span class="home-link__text bold">Ink. House</span>
    </router-link>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-shrink: 0;
  justify-content: center;

  min-height: 80px;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: var(--green_light);

  .home-link {
    display: flex;
    align-items: center;

    column-gap: 8px;

    &__logo-path {
      fill: var(--green);
    }
    &__text {
      color: var(--green);

      font-size: 20px;
    }
    &:hover &__text {
      text-decoration: underline;
    }
  }
}
</style>
