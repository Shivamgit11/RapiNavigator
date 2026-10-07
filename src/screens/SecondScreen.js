import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  Text,
  Button,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

const SecondScreen = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="SecondScreen"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.dark}
          />
        }
        rightAction={() => {
            if(isDarkmode) {
                setTheme("light");
            } else {
                setTheme("dark");
            }
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "bold" }}>
              These Contents are from rapi ui
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="Go To Home Screen"
              onPress={() => navigation.navigate("Home")}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};

export default SecondScreen;
