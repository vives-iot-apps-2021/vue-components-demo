import { settings, systemInfo, sensorValues } from './FakeData'

export default class WebSocket {

    callback?: Function
    private _readyState = 0

    constructor(url: string) {
      console.log(`Fake websocket connecting to: ${url}`)
      setTimeout( () => {
        this._readyState = 1
      }, 1000)
    }

    get readyState() {
      return this._readyState
    }

    addEventListener(event: string, callback: Function) {
      this.callback = callback
      setInterval( () => {
        this.generateResponse(sensorValues())
      }, 5000)
    }

    send(payload: string) {
      if(this._readyState === 0) {
        return
      }
      const message = JSON.parse(payload)
      if(message.get.find( (needle: string) => { return needle === 'settings'})) {
        this.generateResponse(settings)
      }
      if(message.get.find( (needle: string) => { return needle === 'system_info'})) {
        this.generateResponse(systemInfo)
      }
    }

    private generateResponse( data: object ){
      if(this.callback){
        this.callback(JSON.stringify( { data } ))
      }
    }
}