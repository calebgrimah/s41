import {Dimensions, StyleSheet,} from 'react-native';
import PagerView from 'react-native-pager-view';
import React from "react";
import {Strings} from "../constants/AppConstants";
import {PagerItem} from "../@types";
import PagerItemComponent from "./PagerItemComponent";

export const headerImage = require('../../assets/images/placard.png');

const pagerItems: Array<PagerItem> = [
    {
        id: 1,
        image: headerImage,
        description: Strings.DanDareSeasonOneDescription,
        title: Strings.DanDareSeasonOne
    },
    {
        id: 2,
        image: headerImage,
        description: Strings.DanDareSeasonOneDescription,
        title: Strings.DanDareSeasonOne
    },
    {
        id: 3,
        image: headerImage,
        description: Strings.DanDareSeasonOneDescription,
        title: Strings.DanDareSeasonOne
    },
]


export default function HeaderPagerComponent() {
    return (

        <>
            <PagerView style={styles.pager} initialPage={0}>
                {pagerItems.map((item)=>{
                    return (
                        <PagerItemComponent pagerItem ={item}/>
                    )
                })}
            </PagerView>
        </>

    );
}

const styles = StyleSheet.create({
    pager: {
        flex: 1,
        height: Dimensions.get('window').height * 0.65,
        // backgroundColor: ColorConstants.backgroundLight
    },
})
