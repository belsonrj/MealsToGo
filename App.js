import * as firebase from "firebase";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme/index";

const firebaseConfig = {
  apiKey: "AIzaSyADKIRNd7jLvRdsZDhB9rlxccd2Ov1yTSg",
  authDomain: "mealstogo-addf8.firebaseapp.com",
  projectId: "mealstogo-addf8",
  storageBucket: "mealstogo-addf8.appspot.com",
  messagingSenderId: "1053883252830",
  appId: "1:1053883252830:web:58bfe53931abc8748174cf",
};

//if statement to prevent error on hot refresh
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
