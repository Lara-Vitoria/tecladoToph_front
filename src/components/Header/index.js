import React from "react";
import { View, useWindowDimensions } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './style';

export default function Header() {
    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Svg
                    width="700"
                    height={useWindowDimensions().height}
                >

                    <Path d="M957.772,314.355s-57.5,7.171-131.379,24.134c-59.1,
                    13.57-121.418,33.729-161.045,88.225-57.12,78.554-123.853,
                    26.094-151.632-29.841-15.545-31.3-16.8-75.883-16.8-75.883l3.435-95.538H957.772Z" 
                    transform="translate(-496.913 -225.451)" fill="#158d19" />

                    <Path d="M450.225,135.4s-53.219-7.705-125.9-22.975C266.181,100.21,
                    174.526,77.9,135.539,28.843,79.341-41.871,44.029,9.515,16.7,59.868c-15.294,
                    28.177-19.663,69.9-19.663,69.9L1.028,237.94l258.737-8.551,193.692-6.4Z" 
                    transform="matrix(-0.999, -0.035, 0.035, -0.999, 453.383, 253.62)" fill="#0cff14" />

                    <Path d="M501.947,0H961.2V223.152s-26.62-101.438-110.286-109.738c-62.418-6.192-267.971,
                    29.791-317.434,5.121-43.9-21.9-31.531-60.262-31.531-60.262" 
                    transform="translate(-491.34 6)" fill="#20ca26" />

                </Svg>
            </View>
        </View>

    )
};