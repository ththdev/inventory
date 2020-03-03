import React from 'react'
import {
    FlatList,
    YellowBox
} from 'react-native'
import styled from 'styled-components/native'
import data from '../data/collections'

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const Collections = () => {
    return (
        <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => {
                return (
                    <Collection>
                        <MainImage source={{uri: item.imageUrl}} />
                        <Title>{item.name}</Title>
                    </Collection>
                )
            }}
            keyExtractor={item => item.name}
        />
    )
}

const Collection = styled.TouchableOpacity`
    flex: 1;
    border-width: 10px;
    border-color: white;
    border-radius: 5px;
`

const MainImage = styled.Image`
    border-radius: 5px;   
    height: ${315/2 - 10}px;
`

const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
`

const ItemSperator = styled.View`
    height: ${315/2}px;
    width: 5px;
    background: red;
`

export default Collections