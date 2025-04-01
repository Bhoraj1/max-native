import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealCategory" component={CategoriesScreen} />
          <Stack.Screen name="MealOverView" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer> 
    </>
  );
}
const styles = StyleSheet.create({});
