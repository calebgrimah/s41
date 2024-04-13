import * as React from "react"
import {StyleSheet, Text} from 'react-native';
import Svg, {Path} from "react-native-svg"
import {IconProps} from "../@types";
import {ColorConstants, FontConstants} from "../constants/AppConstants";

const HomeIcon: React.FC<IconProps> = ({focused, width, height, text}) => (
    <>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
        >
            <Path
                stroke={focused ? ColorConstants.foreground : ColorConstants.buttonBackground}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1.781 11.594 13.5 1.28l11.719 10.313M5.53 8.78v14.063H21.47V8.78H5.53Z"
            />
        </Svg>
    </>
)


const styles = StyleSheet.create({
    label: {
        fontSize: FontConstants.sizeRegular,
        fontFamily: FontConstants.familySemiBold
    },
});

export default HomeIcon;
