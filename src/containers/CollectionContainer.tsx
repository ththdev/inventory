import React from 'react'
import styled from 'styled-components/native'
import ScrollableHeader from '../components/ScrollableHeader'
import Collections from '../components/Collections'

const CollectionContainer = () => {
    return (
        <ScrollableHeader title="Collections">
            <Collections />
        </ScrollableHeader>
    )
}

const Container = styled.View`

`

export default CollectionContainer