<template>
  <main class="authors-page padding-x-classic padding-y-classic">
    <h1 class="h1">Художники</h1>
    <ul class="authors-page__list">
      <li v-for="author of authorsList" :key="author.id">
        <router-link
          :to="`/authors/${author.id}`"
          class="text link"
          :title="`Перейти на страницу художника ` + author.name"
        >
          {{ author.name }}:
          {{ author.paintsCount }}
          {{ pluralize(author.paintsCount, 'картина', 'картины', 'картин') }}
        </router-link>
      </li>
    </ul>
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
    authorsList() {
      let list = this.authors

      list.forEach(author => {
        author.paintsCount = this.pictures.filter(picture => picture.authorId === author.id).length
      })
      list = list.filter(author => author.paintsCount > 0)

      list.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1
        }
        return 0
      })

      return list
    }
  }
}
</script>

<style lang="scss" scoped>
.authors-page {
  &__list {
    list-style: none;

    @media #{$not-mobile} {
      margin-top: 24px;
    }
    @media #{$mobile} {
      margin-top: 16px;
    }
  }
}
</style>
