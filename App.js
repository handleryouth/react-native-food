import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SearchScreen, ResultsShowScreen } from "./src";

const navigator = createStackNavigator(
  {
    //createStackNavigator will create a stack of screens
    //while creating screens, createStackNavigator will pass some props to the screen that can be used in the screen to access the navigation object
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    //this is the default screen or the first screen that will be displayed
    initialRouteName: "Search",
    //defaultnavigationOptions is the default options that will be applied to all the screens
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

//anything that is exported from this file is automatically shown in the App.js file
export default createAppContainer(navigator);
