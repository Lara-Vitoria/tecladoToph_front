import React from "react";
import { View, useWindowDimensions } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './style';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.bottom}>
                <Svg
                    width="700"
                    height={useWindowDimensions().height}
                >
                    <Path d="M498.006,0h432.8l-3.379,179.286s-29.521-59.044-107.669-65.678c-58.3-4.949-249.752,
                        19.717-295.954,0-41.006-17.5-25.8-68.645-25.8-68.645"
                        transform="translate(939.81 185.29) rotate(-180)"
                        fill="#20ca26" 
                    />

                </Svg>
            </View>
        </View>
    )
};