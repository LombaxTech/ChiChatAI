import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Image, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const bgUrl =
  //   "https://cdn.pixabay.com/photo/2021/06/29/06/14/water-drops-6373296_1280.jpg";
  "https://images.unsplash.com/photo-1624139283061-adee53a59791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
//   "https://wallpaperaccess.com/full/862222.jpg";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Text>ChitChatAI</Text>
    </SafeAreaView>
  );
}
