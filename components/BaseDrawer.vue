<template lang="pug">
v-navigation-drawer#navigation-drawer(
  v-model="drawer",
  mobile-breakpoint="960",
  app,
  width="260"
)
  v-list(expand, nav)
    v-list-item
      v-list-item-content
        v-list-item-title(v-text="'Home'")
    v-list-item
      v-list-item-content
        v-list-item-title(v-text="'Page'")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      }
  }
};
</script>
