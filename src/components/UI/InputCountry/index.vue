<template>
  <nav v-if="byQuery" class="input-country">
    <router-link
      v-for="country of countries"
      :to="{ query: { country: country.id } }"
      class="input-country__link"
      :class="{ current: $route.query.country === country.id }"
    >
      {{ country.name }}
    </router-link>
  </nav>
  <fieldset v-else class="input-country">
    <legend class="input-country__legend">Страна</legend>
    <div v-for="country of countries" class="input-country__input-container">
      <input
        name="country"
        :id="`country_${country.id}`"
        :value="country.id"
        :checked="value === country.id"
        type="radio"
        class="input-country__input"
        @change="$emit('countryChange', country.id)"
      />
      <label :for="`country_${country.id}`" class="input-country__label">
        {{ country.name }}
      </label>
    </div>
  </fieldset>
</template>

<script>
import countries from '@/data/countries.json'

export default {
  props: {
    byQuery: {
      type: Boolean,
      default: false
    },
    value: {
      type: [null, String],
      required: false
    }
  },
  data: () => ({
    countries
  }),

  mounted() {
    if (!this.byQuery) {
      this.$emit('countryChange', this.countries[0].id)
    } else {
      this.checkQuery(this.$route.query.country)
    }
  },

  watch: {
    'route.query.country'(newValue) {
      this.checkQuery(newValue)
    }
  },

  methods: {
    checkQuery(value) {
      if (value === undefined || !this.countries.find(country => country.id === value)) {
        this.$router.push({ query: { country: this.countries[0].id } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-country {
  display: flex;
  flex-wrap: wrap;

  @media #{$not-mobile} {
    gap: 20px 32px;
  }
  @media #{$mobile} {
    gap: 12px 16px;
  }

  &__link {
    padding: 10px 20px;

    transition-duration: 150ms;

    border-radius: 22px;
    outline: 0 solid var(--green);

    @media #{$desktop-and-tablet} {
      font-size: 20px;
    }
    @media #{$small-tablet-and-mobile} {
      font-size: 18px;
    }

    &:focus-visible {
      outline-offset: 4px;
    }
    &:hover,
    &:focus-visible {
      outline-width: 4px;
    }

    &:not(.current) {
      color: var(--black_fake);
      background-color: var(--green_light);
    }
    &.current {
      color: var(--white_fake);
      background-color: var(--green_dark);
    }
  }

  &__legend {
    overflow: hidden;

    width: 0;
    height: 0;

    user-select: none;
    pointer-events: none;

    opacity: 0;
  }
  &__input-container {
    position: relative;
  }
  &__input {
    position: absolute;

    width: 100%;
    height: 100%;

    opacity: 0;

    &:not(.checked) {
      cursor: pointer;
    }
  }
  &__label {
    display: block;

    padding: 10px 20px;

    transition-duration: 150ms;

    border-radius: 22px;
    outline: 0 solid var(--green);

    @media #{$desktop-and-tablet} {
      font-size: 20px;
    }
    @media #{$small-tablet-and-mobile} {
      font-size: 18px;
    }
  }
  &__input:not(:checked) + &__label {
    color: var(--black_fake);
    background-color: var(--green_light);
  }
  &__input:hover + &__label,
  &__input:focus-visible + &__label {
    outline-width: 4px;
  }
  &__input:focus-visible + &__label {
    outline-offset: 4px;
  }
  &__input:checked + &__label {
    color: var(--white_fake);
    background-color: var(--green_dark);
  }
}
</style>
