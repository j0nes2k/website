import React from 'react'

import styled from '@emotion/styled'
import ImageProvider from '../ImageProvider'

const StyledScreencast = styled.div`
    padding: 2rem;
    text-align: center;
    border-radius: 3px;

    .h3 { 
        font-size: 1.9rem;
        margin: 2rem 0 .8rem;
    }

    .duration {
        font-size: 1.5rem;
    }
`

export interface ScreencastProps {
    title: string;
    duration: number;
    tile: string;
}

const Screencast = ({tile, title, duration}: ScreencastProps) => (
    <StyledScreencast
        className="pattern-bg"
    >
        <ImageProvider
            fileName={tile} 
            alt="Screencast" 
            isBlurred={true} 
            providerStyles={{height: 'auto', boxShadow: '0 2rem 4rem rgba(0,0,0, .2)'}} 
            imageStyles={{ borderRadius: '3px' }}
        />
        <h2 className="h3">{title}</h2>
        <div className="duration">Duration: {duration*60} secs</div>
    </StyledScreencast>
)

export default Screencast
