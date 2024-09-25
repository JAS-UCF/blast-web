import { MQTT_URL } from "$env/static/private";
import mqtt from "mqtt";

const client = mqtt.connect(MQTT_URL);

client.on("connect",(p)=>{
    console.log(p);
});

client.on("error",(p)=>{
    console.warn(p);
});

export default client;