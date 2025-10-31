<template>
  <header class="header">
    <div class="header__home-link-container">
      <router-link to="/" class="header__home-link">
        <!-- <img class="logo" src="images/logo.svg" alt="logo" /> -->
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" alt="logo">
          <path
            d="M17.5 0L19.9652 9.10444L26.9612 2.77806L24.1128 11.77L33.4186 10.2302L26.1609 16.2547L34.8219 19.9905L25.4593 21.1349L30.7256 28.9601L22.2306 24.861L22.4303 34.2911L17.5 26.25L12.5697 34.2911L12.7694 24.861L4.27438 28.9601L9.54072 21.1349L0.178125 19.9905L8.83906 16.2547L1.58144 10.2302L10.8872 11.77L8.03879 2.77806L15.0348 9.10444L17.5 0Z"
            class="header__logo-path"
          />
        </svg>

        <span class="header__home-link-text bold">Ink. House</span>
      </router-link>
    </div>
    <nav class="header__header-links-container">
      <router-link to="/products" class="link">Репродукции</router-link>
      <router-link to="/authors" class="link">Художники</router-link>
      <router-link to="/contacts" class="link">Контакты</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 100;

  display: flex;
  flex-shrink: 0;

  width: 100%;
  height: var(--header-height);

  @media #{$desktop} {
    align-items: center;
  }
  @media #{$tablet} {
    align-items: center;
  }
  @media #{$small-tablet} {
    flex-direction: column;
  }
  @media #{$mobile} {
    flex-direction: column;
  }
  @media #{$not-mobile} {
    justify-content: space-between;

    padding: 0 var(--padding_x);

    background-color: var(--green_light);
  }

  &__home-link-container {
    @media #{$small-tablet} {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 68px;

      box-shadow: inset 0 -1px 0 0 var(--green_super-light);
    }
    @media #{$mobile} {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 16px var(--padding_x);

      background-color: var(--white);
    }
  }
  &__home-link {
    display: flex;
    align-items: center;

    column-gap: 8px;
  }
  &__logo-path {
    fill: var(--green);
  }

  &__home-link-text {
    color: var(--green);

    font-size: 20px;
  }
  &__home-link:hover &__home-link-text {
    text-decoration: underline;
  }

  &__header-links-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media #{$small-tablet} {
      height: 56px;
    }
    @media #{$not-mobile} {
      column-gap: 40px;
    }
    @media #{$mobile} {
      padding: 16px var(--padding_x);

      background-color: var(--green_light);
    }
  }
}
</style>
