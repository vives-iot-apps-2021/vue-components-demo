<template>
  <div class="row">
    <div class="col s12">
      <label for="disabled">{{ label }}</label>
      <input
        disabled
        :value="value"
        type="text"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: { value: String, label: String }
})
</script>

