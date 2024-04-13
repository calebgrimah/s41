import {Text, View} from "react-native";
import {Screens} from "../../constants/AppConstants";
import {isLoaded} from "expo-font";

export default function HomeScreen() {
    if (!isLoaded("Poppins-Bold")) {
        return null;
    }
    return (
        <View>
            <Text style={{fontFamily: "Poppins-Bold"}}> {Screens.Home}</Text>
        </View>
    )
}
