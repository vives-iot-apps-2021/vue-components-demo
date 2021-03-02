<template>
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">SenseApp</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Sensors</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
          <li><router-link to="/system-info">System Info</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  }
});
</script>

<style>

</style>
