<script>
import Header from "./components/Header.vue"

export default {
  components: {
    Header,
  }
}
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<style lang="scss"></style>
