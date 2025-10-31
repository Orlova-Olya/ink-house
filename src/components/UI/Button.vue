<template>
  <router-link v-if="link !== null" :to="link" class="ui-button" :class="secondary ? 'secondary' : 'primary'">
    {{ text }}
  </router-link>
  <button v-else class="ui-button" :class="secondary ? 'secondary' : 'primary'">{{ text }}</button>
</template>

<script>
export default {
  name: 'UIButton',
  props: {
    text: {
      type: String,
      required: true
    },
    secondary: {
      type: Boolean,
      default: false
    },
    link: {
      default: null
    }
  }
}
</script>

<style lang="scss">
.ui-button {
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;

  max-width: 100%;

  transition-duration: 300ms;

  border: none;

  font-size: 20px;

  $desktop: '(min-width: 1440px)';

  @media #{$desktop} {
    width: 227px;
    min-height: 65px;
    padding: 12px 32px;
  }
  @media #{$tablet} {
    width: 210px;
    min-height: 60px;
    padding: 10px 20px;
  }
  @media #{$small-tablet} {
    width: 178px;
    min-height: 50px;
    padding: 8px 16px;
  }
  @media #{$mobile} {
    width: 154px;
    min-height: 50px;
    padding: 6px 12px;
  }

  &.primary {
    color: var(--green);
    background-color: transparent;
    box-shadow: inset 0 0 0 1px var(--green);

    &:hover {
      color: var(--white_fake);
      background-color: var(--green);
    }
    &:focus-visible {
      color: var(--green);
      background-color: var(--green_light);
      box-shadow: inset 0 0 0 0 var(--green);
    }
    &:active {
      color: var(--white_fake);
      background-color: var(--green_dark);
    }
  }
  &.secondary {
    color: var(--black_fake);
    background-color: var(--yellow);
    box-shadow: inset 0 0 0 0 var(--yellow_very-dark);

    &:hover {
      background-color: var(--yellow_light);
    }
    &:focus-visible {
      background-color: var(--yellow_dark);
    }
    &:active {
      background-color: var(--yellow_light);
      box-shadow: inset 0 0 0 1px var(--yellow_very-dark);
    }
  }
}
</style>
