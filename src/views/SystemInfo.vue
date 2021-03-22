<template>
  <h1>System Info</h1>
  <div v-if="systemInfo">
    <SystemInfoCard title="Versions">
        <SystemInfoEntity 
          label="SenseApp Version:" 
          :value="systemInfo['version']"
        />
        <SystemInfoEntity 
          label="Operating System:" 
          :value="systemInfo['os']"
        />
        <SystemInfoEntity 
          label="Python version:" 
          :value="systemInfo['python']['version']"
        />
        <SystemInfoEntity 
          label="Node version:" 
          :value="systemInfo['node']['version']"
        />
    </SystemInfoCard>
    <SystemInfoCard title="Host">
        <SystemInfoEntity 
          label="Hostname:" 
          :value="systemInfo['hostname']"
        />
        <SystemInfoEntity 
          label="Uptime:" 
          :value="systemInfo['uptime']"
        />
    </SystemInfoCard>
    <SystemInfoCard title="Network">
      <div v-for="(settings, networkAdapter) in systemInfo['network']" :key="networkAdapter">
        <h5>{{ networkAdapter }}</h5>
          <SystemInfoEntity 
            v-for="(address, name) in settings"
            :label="name" 
            :value="address ? address : 'Not connected'"
            :key="address"
          />
      </div>
    </SystemInfoCard>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SystemInfoEntity from '../components/SystemInfoEntity.vue'
import SystemInfoCard from '../components/SystemInfoCard.vue'

export default defineComponent({
  components: { SystemInfoEntity, SystemInfoCard },
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