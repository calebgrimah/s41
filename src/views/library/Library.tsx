import { View, Text } from "react-native";
import { Screens } from "../../constants/AppConstants";

export default function LibraryScreen() {
    return (
       <View>
           <Text style={{ fontFamily: "Poppins-Bold" }}> {Screens.Library}</Text>
       </View>
    )
   }