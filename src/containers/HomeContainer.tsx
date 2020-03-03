import * as React from 'react'
import styled from 'styled-components/native'

// Components
import ScrollableHeader from '../components/ScrollableHeader'
import DefaultHeader from '../components/DefaultHeader'
import Collections from '../components/Collections'

const HomeContainer = () => {
    return (
        <ScrollableHeader title="Collections">
            <Sample>
                <Collections />
            </Sample>
        </ScrollableHeader>
        // <DefaultHeader>
        //     <Title>Collections</Title>
        //     <Collection />
        //     <Collection />
        //     <Collection />
        // </DefaultHeader>
    )
}

const Sample = styled.View`
    padding-left: 20px;
    padding-right: 20px;
`

export default HomeContainer