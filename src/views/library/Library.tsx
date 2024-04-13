import { View, Text } from "react-native";
import {ColorConstants, Screens} from "../../constants/AppConstants";

export default function LibraryScreen() {
    return (
       <View style={{
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor:ColorConstants.background
       }}>
           <Text style={{ fontFamily: "Poppins-Bold" , color: ColorConstants.foreground}}> {Screens.Library}</Text>
       </View>
    )
   }
