<template>
  <section class="team-section padding-x-classic">
    <img alt="" src="images/team-section.png" class="team-section__image" />

    <div class="team-section__content-block">
      <h2 class="h2">Наша команда</h2>
      <p class="team-section__paragraph text">
        Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
        экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
        консультация с широким активом.
      </p>

      <div class="team-section__team-members">
        <img
          alt="Член команды"
          src="images/team-section_1.jpg"
          width="80"
          height="80"
          class="team-section__team-member"
        />
        <img
          alt="Член команды"
          src="images/team-section_2.jpg"
          width="80"
          height="80"
          class="team-section__team-member"
        />
        <img
          alt="Член команды"
          src="images/team-section_3.jpg"
          width="80"
          height="80"
          class="team-section__team-member"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.team-section {
  @media #{$desktop-and-tablet} {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media #{$small-tablet} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media #{$mobile} {
    padding-top: 60px;
    padding-bottom: 94px;
  }

  @media #{$desktop} {
    display: flex;
    align-items: center;

    gap: 30px;
  }

  &__image {
    @media #{$desktop} {
      width: 445px;
      height: 440px;
    }
    @media #{$tablet} {
      width: 510px;
      height: 504px;
    }
    @media #{$small-tablet} {
      width: 375px;
      height: 370px;
    }
    @media #{$mobile} {
      width: 100%;
    }
  }

  &__content-block {
    @media #{$desktop} {
      margin: auto 0 44px;
    }
    @media #{$tablet} {
      max-width: 690px;
      margin-top: 40px;
    }
    @media #{$small-tablet-and-mobile} {
      margin-top: 30px;
    }
  }
  &__paragraph {
    @media #{$desktop} {
      margin: 20px 0;
    }
    @media #{$tablet} {
      margin: 30px 0;
    }
    @media #{$small-tablet-and-mobile} {
      margin: 20px 0;
    }
  }

  &__team-members {
    display: flex;
    justify-content: space-between;

    max-width: 300px;
  }
  &__team-member {
    border-radius: 50%;
  }
}
</style>
