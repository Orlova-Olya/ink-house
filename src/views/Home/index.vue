<template>
  <main>
    <SectionFirst />
    <SectionPaints />
    <SectionNews />
    <SectionTeam />
  </main>
</template>

<script>
import SectionFirst from './sections/First.vue'
import SectionNews from './sections/News.vue'
import SectionPaints from './sections/Paints.vue'
import SectionTeam from './sections/Team.vue'

export default {
  components: {
    SectionFirst,
    SectionPaints,
    SectionNews,
    SectionTeam
  }
}
</script>
