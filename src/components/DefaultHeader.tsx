import React, { FunctionComponent, useState } from 'react'
import {
    Animated,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native'


const DefaultHeader:FunctionComponent = ({ children }) => {
    const [offsetY, setOffsetY] = useState(new Animated.Value(0))
    
    const headerOpacity = offsetY.interpolate({
        inputRange: [0, 50],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })

    return (
        <>
            <ScrollView
                style={styles.scrollView}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: offsetY}}}]
                )}
            >
                {children}
            </ScrollView>
            <Animated.View style={[styles.header, {opacity: headerOpacity}]}>
            </Animated.View>
            <Text style={styles.add}>New</Text>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 130,
        paddingLeft: 30,
        paddingRight: 30,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: 'white',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    add: {
        position: 'absolute',
        top: 55,
        right: 30,
        fontSize: 16,
        color: 'green'
    }
})

export default DefaultHeader