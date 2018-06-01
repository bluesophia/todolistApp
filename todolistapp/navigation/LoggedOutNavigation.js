import { createStackNavigator } from "react-navigation";
import LogInScreen from "../screens/Login";

const LoggedOutNavigation = createStackNavigator({
  Login: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default LoggedOutNavigation;
