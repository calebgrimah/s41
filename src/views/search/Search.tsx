import { View, Text } from "react-native";
import { Screens } from "../../constants/AppConstants";

export default function SearchScreen() {
    return (
       <View>
           <Text style={{ fontFamily: "Poppins-Bold" }}> {Screens.Search}</Text>
       </View>
    )
   }