<template>
  <main class="products-page padding-x-classic padding-y-classic">
    <div class="products-page__head">
      <h1 class="h1">Репродукции</h1>
      <UIInputCountry byQuery />
    </div>

    <div class="products-page__pictures-block">
      <UICardPicture v-for="picture of currentPictures" :key="picture.id" :picture="picture" />
    </div>
  </main>
</template>

<script>
import countries from '@/data/countries.json'
import pictures from '@/data/pictures.json'

export default {
  data: () => ({
    pictures,
    countries
  }),

  computed: {
    currentPictures() {
      const currentCountryId =
        this.$route.query.country !== undefined ? this.$route.query.country : this.countries[0].id
      return this.pictures.filter(picture => picture.countryId === currentCountryId)
    }
  }
}
</script>

<style lang="scss" scoped>
.products-page {
  &__head {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 20px;
  }

  &__pictures-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 30px;

    @media #{$not-mobile} {
      margin-top: 36px;
    }
    @media #{$mobile} {
      margin-top: 24px;
    }
  }
}
</style>
