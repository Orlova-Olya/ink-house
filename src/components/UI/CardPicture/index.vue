<template>
  <router-link
    :to="`/products/${picture.id}`"
    :title="`Перейти на страницу картины ` + picture.name"
    class="card-picture"
  >
    <div class="card-picture__image-container">
      <img :src="picture.url" alt="" class="card-picture__image" />
    </div>
    <p v-if="!noAuthor" class="card-picture__author">{{ authorName }}</p>
    <h3 class="card-picture__name">{{ picture.name }}</h3>
    <p class="card-picture__info">{{ picture.info }}</p>
  </router-link>
</template>

<script>
import authors from '@/data/authors.json'

export default {
  props: {
    picture: {
      required: true
    },
    noAuthor: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    authors
  }),
  computed: {
    authorName() {
      return this.authors.find(author => author.id === this.picture.authorId).name
    }
  }
}
</script>

<style lang="scss">
.card-picture {
  --x-padding: 20px;
  --hover-transition-duration: 200ms;

  @media (min-width: 1200px) {
    --image-width: 310px;
  }
  @media (max-width: 1200px) and (min-width: 768px) {
    --image-width: 290px;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    --image-width: 200px;
  }
  @media (max-width: 576px) {
    --image-width: 250px;
  }

  & {
    position: relative;

    width: calc(var(--image-width) + 2 * var(--x-padding));
    min-height: 100%;
    padding: 20px var(--x-padding) 30px;

    transition-duration: 200ms;

    background-color: var(--green_very-light);
  }

  &__image-container {
    position: relative;

    overflow: hidden;

    width: var(--image-width);
    max-width: 100%;

    @media (min-width: 1200px) {
      height: 422px;
    }
    @media (max-width: 1200px) and (min-width: 768px) {
      height: 422px;
    }
    @media (max-width: 768px) and (min-width: 576px) {
      height: 250px;
    }
    @media (max-width: 576px) {
      height: 250px;
    }

    &::after {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      content: '';
      transition-duration: var(--hover-transition-duration);
      pointer-events: none;
    }
  }
  @media (hover: hover) {
    &:focus-visible &__image-container::after,
    &:hover &__image-container::after {
      box-shadow: inset 0 0 1px 1px var(--green_dark), inset 0 0 12px 0 var(--black_fake);
    }
  }
  &__image {
    width: 100%;
    height: 100%;

    transition-duration: var(--hover-transition-duration);

    object-fit: cover;
  }
  @media (hover: hover) {
    &:focus-visible &__image,
    &:hover &__image {
      scale: 1.05;
    }
  }

  &__author {
    margin-top: 20px;

    color: var(--gray);

    @media (min-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  &__name {
    margin-top: 10px;

    @media (min-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  &__info {
    margin-top: 8px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
