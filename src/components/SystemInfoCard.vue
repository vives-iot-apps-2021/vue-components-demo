<template>
    <div class="card">
        <div class="card-content">
        <h4>{{ title }}</h4>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: { title: String }
})
</script>