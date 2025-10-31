<template>
  <main class="contacts-page padding-x-classic padding-y-classic">
    <h1 class="h1">Контакты</h1>
    <p class="contacts-page__paragraph text">
      Мы небольшая компания, напрямую раюотающая с художниками, выполняющими репродукции.
    </p>
    <p class="contacts-page__paragraph text">
      По вопросам сотрудничества и приобретения репродукций звоните и пишите нам сюда:
    </p>
    <a href="tel:+78005553535" class="contacts-page__contact-link link h2">8 (800) 555-35-35</a>
    <a href="mailto:ink@house.ru" class="contacts-page__contact-link link h2">ink@house.ru</a>
  </main>
</template>

<style lang="scss" scoped>
.contacts-page {
  &__paragraph {
    margin: 32px 0;
  }
  &__contact-link {
    display: block;

    color: var(--green_dark);

    & + & {
      margin-top: 12px;
    }
  }
}
</style>
