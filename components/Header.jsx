import { TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Image, Text } from "native-base";

import AntIcon from "react-native-vector-icons/AntDesign";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
// import { mainGradient } from "../gradients";

const discordLink = "https://discord.gg/CuRzFySVjB";

export default function Header() {
  const navigation = useNavigation();

  return (
    <Box className="flex flex-row items-center justify-between p-2 pb-4">
      {/* Logo */}
      <TouchableOpacity
        onPress={() => navigation.navigate("MainScreen")}
      ></TouchableOpacity>
      {/* Links */}
      <Box className="flex flex-row items-center gap-4">
        {/* <TouchableOpacity onPress={() => navigation.navigate("UpgradeScreen")}>
          <Box
            bg={{ linearGradient: mainGradient }}
            p={1}
            px={3}
            rounded={"3xl"}
          >
            <Text
              textTransform={"uppercase"}
              color={"white"}
              fontWeight={"bold"}
              fontSize={isProMember ? "xs" : "sm"}
            >
              {isProMember ? "Pro Unlocked" : "Get Pro"}
            </Text>
          </Box>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            console.log("take to discord...");
            // Linking.openURL(discordLink);
          }}
        >
          <MCIcon name="discord" size={35} color={"white"} />
        </TouchableOpacity>
        {/*<AntIcon name="setting" size={35} color={"white"} /> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
          <MIcon name="create" size={35} color={"white"} />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("MyGenerations")}>
          <IonIcon
            // name="person-circle-sharp"
            name={"person-circle-sharp"}
            size={35}
            color={"white"}
          />
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
