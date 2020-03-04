import React from 'react'
import {
    FlatList,
    YellowBox,
    Dimensions,
    View
} from 'react-native'
import styled from 'styled-components/native'
import data from '../data/collections'

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const { width } = Dimensions.get('window')

const Collections = () => {
    console.log(width)
    return (
        <Collection>
            <FlatList
                data={data[0].items}
                renderItem={({ item, index }) => (
                    <Item>
                        <ItemImage source={{ uri: item.images[0] }} />
                        <Details>
                            <View>
                                <Name>{ item.name }</Name>
                                <Price>{ item.price }</Price>
                            </View>
                            <Status>{ item.status }</Status>
                        </Details>
                    </Item>
                )}
                keyExtractor={item => item.name}
            />
        </Collection>
    )
}

const Collection = styled.View`
    width: ${width - 60}px;
    height: 500px;
    border-radius: 7px;
    background-color: white;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
`

const Item = styled.View`
    margin-bottom: 20px;
    flex-direction: row;
`

const ItemImage = styled.Image`
    width: 60px;
    height: 60px;
`

const Details = styled.View`
    margin-left: 20px;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
`

const Name = styled.Text`
    font-size: 14px;
    margin-bottom: 5px;
`

const Price = styled.Text`
    font-size: 12px;
`

const Status = styled.Text`
    font-size: 14px;
    color: #219653;
    text-align: right;
`

export default Collections