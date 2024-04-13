import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import HeaderPagerComponent from "../../components/HeaderPagerComponent";
import {ColorConstants, FontConstants, SizeConstants, Strings} from "../../constants/AppConstants";
import React from "react";
import SectionItemComponent from "../../components/SectionItemComponent";
import {SectionItem} from "../../@types";

const pilgrimImage = require('../../../assets/images/pilgrim.png');
const gachetImage = require('../../../assets/images/gachet.png');
const gentleManImage = require('../../../assets/images/gentlemen.png');


const premierReleaseItems: Array<SectionItem> = [{
    title: Strings.Pilgrim,
    description: Strings.PilgrimDescription,
    image: pilgrimImage
}, {
    title: Strings.BadSeed,
    description: Strings.BadSeedDescription,
    image: gachetImage
}, {
    title: Strings.Pilgrim,
    description: Strings.PilgrimDescription,
    image: pilgrimImage
}, {
    title: Strings.BadSeed,
    description: Strings.BadSeedDescription,
    image: gachetImage
},]

const adventureItems: Array<SectionItem> = [{
    title: Strings.GameForGentleMen,
    description: Strings.GameForGentleMenDescription,
    image: gentleManImage
}, {
    title: Strings.Afterlive,
    description: Strings.AfterliveDescription,
    image: gachetImage
}, {
    title: Strings.GameForGentleMen,
    description: Strings.GameForGentleMenDescription,
    image: gentleManImage
}, {
    title: Strings.Afterlive,
    description: Strings.AfterliveDescription,
    image: gachetImage
},
]
export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <HeaderPagerComponent />
            <SectionItemComponent id={1} sectionItems={premierReleaseItems} sectionTitle={Strings.PremierRelease}/>
            <SectionItemComponent id={2} sectionItems={adventureItems} sectionTitle={Strings.Adventure}/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: ColorConstants.background,
    },
    premier: {
        fontSize: FontConstants.sizeHeader,
        fontFamily: FontConstants.familyBold,
        padding: SizeConstants.paddingLarge,
        color: ColorConstants.foreground,
    },
    pilgrim: {
        fontSize: FontConstants.sizeHeader,
        fontFamily: FontConstants.familySemiBold,
        marginTop: SizeConstants.paddingLarge,
        color: ColorConstants.foreground,
    },
    pilgrimDescription: {
        fontSize: FontConstants.sizeRegular,
        fontFamily: FontConstants.familyRegular,
        marginTop: SizeConstants.paddingLarge,
        marginBottom: SizeConstants.paddingLarge,
        color: ColorConstants.foreground,

    },
    imageView: {
        width: Dimensions.get('window').width / 2,
        justifyContent: 'flex-start',
        paddingLeft: SizeConstants.paddingLarge,
        paddingTop: SizeConstants.paddingRegular,
        marginBottom: SizeConstants.paddingLarge
    },
    image: {
        height: Dimensions.get('window').width / 2
    }
})
