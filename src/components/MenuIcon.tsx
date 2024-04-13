import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {IconProps} from "../@types";
import {ColorConstants, FontConstants} from "../constants/AppConstants";
import {StyleSheet, Text} from "react-native";

const MenuIcon: React.FC<IconProps> = ({focused, width, height, text}) => (
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
                strokeWidth={2}
                d="M26.75 6.25H4.25m0 8.75h22.5m0 8.75H4.25"
            />
        </Svg>
    </>
)


const styles = StyleSheet.create({
    label: {


    },
});

export default MenuIcon;
