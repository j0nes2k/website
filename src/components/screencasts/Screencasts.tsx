import React from 'react'

import styled from '@emotion/styled'
import Screencast, { ScreencastProps } from './Screencast'

const StyledScreencasts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5rem 0;
    max-width: 1000px;

    & > * {
        flex: 0 0 48%;
        margin-bottom: 5rem;
    }
`

const Screencasts = ({ screencasts }: { screencasts: ScreencastProps[] }) => (
    <StyledScreencasts className="row">
        {
            screencasts.map(
                (screencast: ScreencastProps, i) => <Screencast
                    key={i+screencast.title}
                    {...screencast} 
                />
            )
        }
    </StyledScreencasts>
)

export default Screencasts
