<template>
  <h1>System Info</h1>
  {{ systemInfo }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    this.$store.dispatch('getSystemInfo')
  },
  computed: {
    systemInfo() {
      return this.$store.state.system
    }
  }
})
</script>