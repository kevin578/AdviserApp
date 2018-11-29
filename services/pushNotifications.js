import { AsyncStorage } from "react-native";
import { Permissions, Notifications } from "expo";
import axios from "axios";

const PUSH_ENDPOINT = "https://clarknotifications.herokuapp.com/api/addDevice";

export default async () => {
  const previousToken = await AsyncStorage.getItem("pushtoken");
  if (previousToken) {
    return;
  }
  
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") {
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { token });
    AsyncStorage.setItem("pushtoken", token);
    AsyncStorage.setItem("databaseURL", PUSH_ENDPOINT);
};
