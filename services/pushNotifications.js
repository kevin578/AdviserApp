import { AsyncStorage } from "react-native";
import { Permissions, Notifications } from "expo";
import axios from "axios";

const PUSH_ENDPOINT = "http://rallycoding.herokuapp.com/api/tokens";

export default async () => {
  let previousToken = await AsyncStorage.getItem("pushtoken");
  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    console.log(status);
    if (status !== "granted") {
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();

    await axios.post(PUSH_ENDPOINT, { token: { token } });
    AsyncStorage.setItem("pushtoken", token);
  }
};
