import {PagerItem} from "../@types";
import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Image} from "expo-image";
import AppButton from "./AppButton";
import {ColorConstants, FontConstants, SizeConstants, Strings} from "../constants/AppConstants";


interface PagerItemComponentProps {
    pagerItem: PagerItem
}


const PagerItemComponent: React.FC<PagerItemComponentProps> = ({pagerItem}) => {
    return (
        <View style={styles.page} key={pagerItem.id + 4}>
            <Image
                style={styles.image}
                source={pagerItem.image}
                contentFit="cover"
                transition={1000}
            />
            <Text style={styles.header}>
                {pagerItem.title}
            </Text>
            <Text style={styles.description}>
                {pagerItem.description}
            </Text>
            <View
                style={styles.buttonRow}>
                <AppButton buttonText={Strings.ViewMore} onButtonClicked={() => {
                    //show toast
                }}/>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    pager: {
        flex: 1,
        height: Dimensions.get('window').height * 0.65,
    },
    header: {
        padding: SizeConstants.paddingLarge,
        fontFamily: FontConstants.familySemiBold,
        fontSize: FontConstants.sizeHeader,
        color: ColorConstants.foreground
    },
    box: {
        backgroundColor: ColorConstants.pagerBackground,
        width: 16, height: 16,
        marginRight: SizeConstants.paddingRegular
    },
    description: {
        fontFamily: FontConstants.familyRegular,
        fontSize: FontConstants.sizeRegular,
        color: ColorConstants.foreground,
        paddingLeft: SizeConstants.paddingLarge,
        paddingRight: SizeConstants.paddingLarge,
        paddingBottom: SizeConstants.paddingLarge
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: SizeConstants.paddingLarge,
        paddingRight: SizeConstants.paddingLarge,
        paddingBottom: SizeConstants.paddingLarge
    },

    page: {
        flex: 1,
        height: '70%'
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
        width: Dimensions.get('window').width,
        objectFit: 'fill'
    }
})


export default PagerItemComponent;
