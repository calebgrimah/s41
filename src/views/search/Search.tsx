import {Text, View} from "react-native";
import {ColorConstants, Screens} from "../../constants/AppConstants";

export default function SearchScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:ColorConstants.background
        }}>
            <Text style={{fontFamily: "Poppins-Bold", color: ColorConstants.foreground}}> {Screens.Search}</Text>
        </View>
    )
}
