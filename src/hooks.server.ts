import MqttClient from "$lib/mqttClient";

MqttClient.on("message",(t,m)=>{
    // t is the topic in which we got a new message on
    // m is the message that we rescieved on that topic
    // blast-shield pressureTransducer1
    // blast-shield pressureTransducer2
    // blast-shield tempTransducer1
    // blast-shield tempTransducer2
    // blast-shield tempTransducer3
    // blast-shield tempTransducer4
    // blast-shield tempTransducer5
    // blast-shield tempTransducer6
    // blast-shield throttle
    // blast-shield servo1
    // blast-shield servo2
    // blast-shield error code stats
})