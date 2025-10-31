<template>
  <div class="ui-link-back">
    <router-link :to="to" class="ui-link-back__link link">{{ text }}</router-link>
    <div class="ui-link-back__triangle"></div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-link-back {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;

  margin-bottom: 16px;

  gap: 8px;

  &__link {
    line-height: 150%;

    @media #{$desktop-and-tablet} {
      font-size: 20px;
    }
    @media #{$small-tablet} {
      font-size: 18px;
    }
    @media #{$mobile} {
      font-size: 16px;
    }
  }

  &__triangle {
    width: 20px;
    height: 22px;

    transition-duration: 100ms;

    background-color: var(--green);

    clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }
  &__link:hover ~ &__triangle,
  &__link:focus-visible ~ &__triangle {
    translate: -4px;
  }
}
</style>
