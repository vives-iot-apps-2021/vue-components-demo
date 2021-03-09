<template>
  <h1>Sensors</h1>
  {{ sensorValues }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  computed: {
    sensorValues() {
      return this.$store.state.sensors
    }
  }
})
</script>