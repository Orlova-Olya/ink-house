<template>
  <main v-if="author" class="author-page padding-x-classic padding-y-classic">
    <UILinkBack to="/authors" text="Все авторы" />
    <h1 class="author-page__title">
      {{ author.name }}
    </h1>
    <p></p>
    <div class="author-page__pictures-block">
      <UICardPicture v-for="picture of picturesOfAuthors" :key="picture.id" :picture="picture" noAuthor />
    </div>
  </main>
</template>

<script>
import authors from '@/data/authors.json'
import pictures from '@/data/pictures.json'

export default {
  data: () => ({
    authors,
    pictures
  }),

  computed: {
    author() {
      return this.authors.find(author => author.id == this.$route.params.id)
    },
    picturesOfAuthors() {
      return this.pictures.filter(picture => picture.authorId === this.author.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.author-page {
  &__title {
    text-align: center;
  }

  &__pictures-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 30px;

    @media #{$not-mobile} {
      margin-top: 32px;
    }
    @media #{$mobile} {
      margin-top: 24px;
    }
  }
}
</style>
