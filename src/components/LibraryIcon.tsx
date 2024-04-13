import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {IconProps} from "../@types";
import {ColorConstants, FontConstants} from "../constants/AppConstants";
import {StyleSheet} from "react-native";

const LibraryIcon: React.FC<IconProps> = ({focused, width, height, text}) => (
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
                strokeWidth={1}
                d="m13.832 10.005.23-.006h9.376a4.062 4.062 0 0 1 4.056 3.831l.006.231v9.375a4.062 4.062 0 0 1-3.832 4.056l-.23.007h-9.375a4.063 4.063 0 0 1-4.057-3.833L10 23.437v-9.375a4.063 4.063 0 0 1 3.832-4.056v-.001Zm9.605 1.869h-9.375a2.187 2.187 0 0 0-2.18 2.007l-.007.18v9.375a2.187 2.187 0 0 0 2.009 2.18l.178.008h9.376a2.188 2.188 0 0 0 2.18-2.009l.007-.179v-9.375a2.188 2.188 0 0 0-2.188-2.187ZM18.75 13.75a.938.938 0 0 1 .938.938v3.122h3.125a.938.938 0 0 1 0 1.875h-3.125v3.128a.937.937 0 1 1-1.875 0v-3.128h-3.125a.937.937 0 1 1 0-1.875h3.124v-3.122a.938.938 0 0 1 .938-.938Zm.727-8.459.066.222.866 3.235h-1.941l-.735-2.75a2.188 2.188 0 0 0-2.68-1.548L5.997 6.878A2.188 2.188 0 0 0 4.41 9.37l.04.185 2.428 9.055A2.187 2.187 0 0 0 8.75 20.22v1.883a4.065 4.065 0 0 1-3.619-2.786l-.065-.22-2.426-9.056a4.063 4.063 0 0 1 2.65-4.91l.223-.065 9.055-2.426a4.063 4.063 0 0 1 4.91 2.65v.001Z"
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

export default LibraryIcon;
