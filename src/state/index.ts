import { createStore, Store } from 'vuex'
import WebSocket from './FakeWebSocket'

export type State = {
  ws: WebSocket;
  settings?: object;
  system?: object;
  sensors?: {
    temperature: number;
    pressure: number;
    humidity: number;
  };
}

export default createStore({
  state: {
    ws: new WebSocket(`ws://${window.location.hostname}:3000`),
  },
  getters: {},
  mutations: {
    updateSensorValues:(state, values) => {
      state.sensors = values
    },
    updateSettings: (state, settings) => {
      state.settings = settings
    },
    updateSystemInfo: (state, systemInfo) => {
      state.system = systemInfo
    }
  },
  actions: {
    parseMessage: (store, message) => {
      if(message.sensor_values) {
        store.commit('updateSensorValues', message.sensor_values)
      }
      if(message.settings) {
        store.commit('updateSettings', message.settings)
      }
      if(message.system_info) {
        store.commit('updateSystemInfo', message.system_info)
      }
    },
    socketSend: (store, message: string) => {
      const ws = store.state.ws
      if(ws.readyState === 1){
        ws.send(JSON.stringify({get: [message]}))
      } else {
        const retryIntervale = setInterval( () => {
          if(ws.readyState === 1){
            ws.send(JSON.stringify({get: [message]}))
            clearInterval(retryIntervale)
          }
        }, 100)
      }
      
    },
    getSettings: (store) => {
      store.dispatch('socketSend', 'settings')
    },
    getSystemInfo: (store) => {
      store.dispatch('socketSend', 'system_info')
    }
  },
  plugins: [
    (store: Store<State>) => {
      // TODO: SHOULD NOT BE ANY !!!!!! Needs fix (GitHub Stickers?!)
      store.state.ws.addEventListener('message', (message: any) => {
        console.log(message.data)
        store.dispatch('parseMessage', JSON.parse(message.data))
      })
    }
  ]
})