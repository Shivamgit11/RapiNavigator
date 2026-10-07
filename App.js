import React from "react";
import AppNavigator from "./src/navigator/AppNavigator.js";
import { ThemeProvider } from "react-native-rapi-ui";

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
