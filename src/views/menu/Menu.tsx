import { View, Text } from "react-native";
import { Screens } from "../../constants/AppConstants";

export default function MenuScreen() {
    return (
       <View>
           <Text style={{ fontFamily: "Poppins-Bold" }}> {Screens.Menu}</Text>
       </View>
    )
   }