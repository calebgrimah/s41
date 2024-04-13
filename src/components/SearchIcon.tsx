import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {IconProps} from "../@types";
import {ColorConstants, SizeConstants} from "../constants/AppConstants";
import {StyleSheet} from "react-native";

const SearchIcon: React.FC<IconProps> = ({focused, width, height, text}) => (
    <>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            style={styles.svg}

        >
            <Path
                stroke={focused ? ColorConstants.foreground : ColorConstants.buttonBackground}
                strokeLinecap="round"
                strokeWidth={2}
                d="m25 24.5-5.234-5.243L25 24.5Zm-2.333-12.25a9.916 9.916 0 1 1-19.833 0 9.916 9.916 0 0 1 19.833 0v0Z"
            />
        </Svg>
    </>
)


const styles = StyleSheet.create({
    svg: {
        paddingTop: SizeConstants.paddingLarge
    }
});

export default SearchIcon;
