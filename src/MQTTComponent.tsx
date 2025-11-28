import { useState, useEffect } from "react";
import mqtt from "mqtt";

//public server
const client = mqtt.connect("mqtt://test.mosquitto.org:8081", {
  protocol: "mqtts",
  clientId: "MiguelGarduno",
});
/*
const client = mqtt.connect("mqtt://test.mosquitto.org:1883", {
  clientId: "MiguelGarduno",
}); */

function MqttComp() {
  const [message, setMessage] = useState<string>("Nothing is published yet");
  const [topic, setTopic] = useState<string>("");

  useEffect(() => {
    const topicName = "TEAM2/HomeX/dist";

    // ensure we're subscribed (callback logs subscribe errors)
    client.subscribe(topicName, (err) => {
      if (err) console.error("MQTT subscribe error:", err);
    });

    const handleMessage = (
      topicFromTheBroker: string,
      messageFromTheBroker: Buffer
    ) => {
      const text = messageFromTheBroker.toString();
      setMessage(text);
      setTopic(topicFromTheBroker);
      console.log("MQTT message:", topicFromTheBroker, text);
    };

    client.on("message", handleMessage);

    return () => {
      // clean up listener when component unmounts to avoid duplicate handlers
      client.off("message", handleMessage);
      // we don't call client.end() here because other parts of the app
      // may share the client; unsubscribing is optional.
    };
  }, []);

  return (
    <>
      <p>The message is {message}</p>
      <p>{topic ? <em>{topic}</em> : null}</p>
    </>
  );
}

export default MqttComp;
