<template>
  <section class="news-section padding-x-classic">
    <img src="images/news-section.jpg" alt="" class="news-section__image" />
    <div class="news-section__image-noize" :style="{ backgroundImage: 'url(images/noize.png)' }" />
    <div class="news-section__shadow" />
    <div class="news-section__content-container">
      <div class="news-section__title-container">
        <svg
          width="80"
          height="79"
          viewBox="0 0 80 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          alt=""
          class="news-section__title-icon"
        >
          <path
            d="M46.6407 21.9227L58.5227 11.1781L53.685 26.4498L52.9462 28.782L55.3599 28.3827L71.1646 25.7676L58.8384 35.9995L56.956 37.5621L59.2023 38.531L73.9119 44.8758L58.0107 46.8194L55.5823 47.1162L56.9482 49.1458L65.8925 62.436L51.4647 55.4741L49.2614 54.4109L49.3132 56.8568L49.6523 72.8729L41.2788 59.2159L40 57.1303L38.7212 59.2159L30.3477 72.8729L30.6868 56.8568L30.7386 54.4109L28.5353 55.4741L14.1075 62.436L23.0518 49.1458L24.4177 47.1162L21.9893 46.8194L6.08807 44.8758L20.7977 38.531L23.044 37.5621L21.1616 35.9995L8.83541 25.7676L24.6401 28.3827L27.0538 28.782L26.315 26.4498L21.4773 11.1781L33.3593 21.9227L35.1738 23.5636L35.8132 21.2022L40 5.73935L44.1868 21.2022L44.8262 23.5636L46.6407 21.9227Z"
            stroke-width="3"
          />
        </svg>
        <h2 class="news-section__title h2">
          Коллекция
          <br />
          французских авторов
        </h2>
      </div>
      <p class="text">
        Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь,
        должны быть заблокированы в рамках своих собственных рациональных ограничений.
      </p>
      <div class="text">&nbsp;</div>
      <p class="text">
        Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность
        направлений прогрессивного развития.
      </p>
      <UIButton
        text="Ознакомиться"
        :link="{ name: 'Products', query: { country: 'france' } }"
        secondary
        class="news-section__button"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.news-section {
  position: relative;

  overflow: hidden;

  --desktop-content-container-width: 540px;

  @media #{$desktop} {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media #{$tablet} {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media #{$small-tablet} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media #{$mobile} {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  &__image {
    position: absolute;
    z-index: -3;
    top: 0;
    left: 50%;

    display: block;

    width: 102%;
    min-height: 136.3%;

    transform: translate(-50%, -18.15%) scaleX(-1);

    object-fit: cover;
  }
  &__image-noize {
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: 0.7;
    background-repeat: repeat;
  }
  &__shadow {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;

    height: 0;

    box-shadow: 0 0 315px 315px #000000aa;

    @media #{$desktop} {
      width: 317px;

      transform: translateX(-550px);
    }
    @media #{$not-desktop} {
      width: calc(100% - var(--padding_x) * 2);

      transform: translate(-50%, -50%);
    }
  }

  &__content-container {
    @media #{$desktop} {
      width: var(--desktop-content-container-width);
    }
  }

  &__title-container {
    display: flex;
    align-items: flex-start;

    margin-bottom: 20px;

    color: var(--white_fake);

    @media #{$not-mobile} {
      column-gap: 20px;
    }
    @media #{$mobile} {
      column-gap: 10px;
    }
  }
  &__title-icon {
    stroke: var(--yellow);

    @media #{$tablet} {
      width: 60px;
      height: 60px;
    }
    @media #{$small-tablet} {
      width: 50px;
      height: 50px;
    }
    @media #{$mobile} {
      width: 50px;
      height: 50px;
    }
  }
  &__title {
    color: var(--white_fake);
  }

  &__button {
    @media #{$desktop} {
      margin-top: 60px;
    }
    @media #{$tablet} {
      margin-top: 30px;
    }
    @media #{$small-tablet} {
      margin-top: 20px;
    }
    @media #{$mobile} {
      width: 100%;
      margin-top: 30px;
    }
  }

  .text {
    color: var(--white_fake);
  }
}
</style>
