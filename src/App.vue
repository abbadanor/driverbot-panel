<template>
  <div class="bg-black h-screen text-white">
    <Header></Header>
    <Panels></Panels>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import Panels from "./components/Panels.vue"
import Footer from "./components/Footer.vue"
import mqtt, { MqttClient } from 'mqtt'

const host = "broker.mqttdashboard.com"
const port = 8000
let client: MqttClient;

function createConnection() {
  try {
    client = mqtt.connect(`ws://${host}:${port}/mqtt`)
    client.on('connect', () => {
      console.log('connection success!')
    })
    client.on('error', () => {
      console.log('connection failed!')
    })
    client.on('message', (topic, message) => {
      console.log(`received message ${message} from topic ${topic}`)
    })
    client.subscribe("fittamedkuk", { qos: 0 }, (error, res) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
      console.log('Subscribe to topics res', res)
    })
  }
  catch (error) {
    console.log('error', error)
  }
}

function publish() {
  client.publish("fittamedkuk", "hej", { qos: 0 }, error => {
    if (error) {
      console.log('Publish error', error)
    }
  })
}

//createConnection()
</script>
