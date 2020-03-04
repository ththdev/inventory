import React, { FunctionComponent, useState } from 'react'
import { 
    Animated, 
    StyleSheet, 
    ScrollView,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

interface Props {
    title: string,
    addButton?: boolean | false
}

const HEADER_MIN_HEIGHT = 100
const HEADER_MAX_HEIGHT = 150
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT
const FONT_MIN_SIZE = 24
const FONT_MAX_SIZE = 32

const ScrollableHeader: FunctionComponent<Props> = ({ title, addButton, children }) => {
    const [offsetY, setOffsetY] = useState(new Animated.Value(0))

    const headerHeight = offsetY.interpolate({
        inputRange: [0, SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })

    const fontSize = offsetY.interpolate({
        inputRange: [0, SCROLL_DISTANCE],
        outputRange: [FONT_MAX_SIZE, FONT_MIN_SIZE],
        extrapolate: 'clamp'
    })

    return (
        <>
            <ScrollView
                style={styles.scrollView}
                scrollEventThrottle={16}
                contentInset={{ bottom: 200 }}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: offsetY}}}]
                )}
            >
                {children}
            </ScrollView>
            <Animated.View style={[styles.header, {height: headerHeight}]}>
                <Animated.Text style={[styles.title, {fontSize: fontSize}]}>
                    {title}
                </Animated.Text>
                {addButton &&
                    <TouchableOpacity style={styles.add}>
                        <Icon name="plus" size={24} />
                    </TouchableOpacity> 
                }
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: HEADER_MAX_HEIGHT + 30,
        paddingLeft: 30,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 30,
        paddingBottom: 10,
    },
    title: {
        position: 'absolute',
        bottom: 10,
        left: 30,
        fontSize: 32,
        fontWeight: 'bold',
    },
    add: {
        position: 'absolute',
        top: 60,
        right: 30,
    }
})

export default ScrollableHeader