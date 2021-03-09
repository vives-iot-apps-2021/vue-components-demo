<template>
  <h1>Settings</h1>
  {{ settings }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    this.$store.dispatch('getSettings')
  },
  computed: {
    settings() {
      return this.$store.state.settings
    }
  }
})
</script>