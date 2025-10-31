<template>
  <section class="first-section padding-x-classic">
    <img alt="" src="images/first-section.png" class="first-section__image" />
    <div>
      <h1 class="first-section__title h1">
        Реплики картин
        <br />
        от
        <span class="first-section__green-text">Ink. House</span>
      </h1>
      <p class="first-section__text text">
        Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
      </p>
      <UIButton text="Продукция" link="/products" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.first-section {
  display: flex;
  align-items: center;

  min-height: 100svh;

  column-gap: 30px;

  @media #{$small-tablet} {
    padding-top: calc(var(--header-height) + 50px);
  }
  @media #{$mobile} {
    padding-top: calc(var(--header-height) + 60px);
  }

  &__image {
    @media #{$desktop} {
      max-width: calc((540 / 1110) * 100%);
    }
    @media #{$tablet} {
      max-width: calc((330 / 690) * 100%);
    }
    @media #{$small-tablet} {
      max-width: calc((195 / 510) * 100%);
    }
    @media #{$mobile} {
      display: none;
    }
  }
  &__title {
    @media #{$desktop} {
      line-height: 110%;
    }
  }
  &__green-text {
    color: var(--green);
  }
  &__text {
    color: var(--gray);

    @media #{$desktop} {
      margin-top: 20px;
      margin-bottom: 60px;
    }
    @media #{$tablet} {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    @media #{$small-tablet} {
      margin: 10px 0;
    }
    @media #{$mobile} {
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }
}
</style>
