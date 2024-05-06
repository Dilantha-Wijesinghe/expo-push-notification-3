import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { usePushNotifications } from "./usePushNotifications";
import { useEffect } from "react";

export default function App() {
  const { expoPushToken, notification } = usePushNotifications();

  const data = JSON.stringify(notification, undefined, 2);

  useEffect(() => {
    console.log(expoPushToken?.data);
  }, [expoPushToken]);

  return (
    <ScrollView style={{ marginVertical: 100 }}>
      <View style={styles.container}>
        <Text>Token: {expoPushToken?.data ?? ""}</Text>
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
