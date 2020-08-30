<template lang="pug">
v-app-bar#app-bar(absolute, app, color="transparent", flat, height="75")
  v-btn.mr-3(elevation="1", fab, small, @click="setDrawer(!drawer)")
    v-icon mdi-dots-vertical
  v-toolbar-title.hidden-sm-and-down.font-weight-light(v-text="'Town'")
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>
