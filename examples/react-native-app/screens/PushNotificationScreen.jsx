import React, { useEffect, useState } from "react";
import FormNotification from "../components/FormNotification";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../services/pushNotification";

const PushNotificationScreen = () => {
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();
  const [tokenDevice, setTokenDevice] = useState();

  const updateTitle = (value) => {
    setTitle(value);
  };

  const updateMessage = (value) => {
    setMessage(value);
  };

  const sendNotification = () => {
    console.log("title", title);
    const messageToSend = {
      to: tokenDevice,
      sound: "default",
      title: title,
      body: message,
      data: { someData: "goes here" },
    };
    console.log("messageToSend", messageToSend);
    sendPushNotification(messageToSend);
  };

  useEffect(() => {
    const fn = async () => {
      const token = await registerForPushNotificationsAsync();
      setTokenDevice(token);
    };

    fn();
    // registerForPushNotificationsAsync().then((token) => {
    //   // Llevar el token a la base de datos y
    //   // relacionarlo con el dispositivo del usuario
    //   setTokenDevice(token);
    // });
  }, []);

  return (
    <FormNotification
      message={message}
      updateMessage={updateMessage}
      title={title}
      updateTitle={updateTitle}
      sendNotification={sendNotification}
    />
  );
};

export default PushNotificationScreen;
