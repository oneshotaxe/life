<template lang="pug">
  v-app
    base-app-bar
    base-drawer
    base-view
</template>

<script>
import BaseAppBar from '@/components/BaseAppBar.vue'
import BaseDrawer from '@/components/BaseDrawer.vue'
import BaseView from '@/components/BaseView.vue'
export default {
  components: {
    BaseAppBar,
    BaseDrawer,
    BaseView
  }
}
</script>