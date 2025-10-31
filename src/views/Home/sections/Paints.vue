<template>
  <section class="paints-section padding-x-classic">
    <div class="paints-section__head">
      <h2 class="h2">Репродукции</h2>
      <UIInputCountry :value="currentCountryId" @countryChange="handleCountryChange" />
    </div>
    <UICarousel v-if="currentCountryId !== null" ref="carousel" :listHeight="730">
      <li v-for="picture of currentPictures" :key="picture.id" class="paints-section__carousel-item">
        <UICardPicture :picture="picture" />
      </li>
    </UICarousel>
  </section>
</template>

<script>
import authors from '@/data/authors.json'
import countries from '@/data/countries.json'
import pictures from '@/data/pictures.json'

export default {
  data: () => ({
    countries,
    pictures,
    authors,

    currentCountryId: null
  }),

  computed: {
    currentPictures() {
      if (this.currentCountryId === null) return []
      return this.pictures.filter(picture => picture.countryId === this.currentCountryId)
    }
  },

  methods: {
    handleCountryChange(country) {
      this.currentCountryId = country
      if (this.$refs.carousel !== undefined) {
        this.$refs.carousel.resetProperties()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.paints-section {
  padding-bottom: 60px;

  &__head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-bottom: 30px;

    gap: 20px;
  }

  &__carousel-item {
    display: flex;
    justify-content: center;
  }
}
</style>
