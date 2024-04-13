import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import {ColorConstants, FontConstants, SizeConstants} from "../constants/AppConstants";


interface AppButtonProps {
    buttonText: string;
    onButtonClicked: () => void;
}


const AppButton: React.FC<AppButtonProps> = ({buttonText, onButtonClicked}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onButtonClicked()}>
            <Text
                numberOfLines={1}
                style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: ColorConstants.buttonBackground,
        padding: SizeConstants.paddingSmall,
        borderRadius: SizeConstants.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        padding: SizeConstants.paddingRegular,
        borderRadius: SizeConstants.borderRadius,
        fontSize: FontConstants.sizeRegular,
        fontFamily: FontConstants.familySemiBold,
        color: ColorConstants.foreground
    },

});
export default AppButton;
