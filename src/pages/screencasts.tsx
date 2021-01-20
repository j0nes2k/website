import React from 'react'
import IndexLayout from '../layouts'
import Hero from '../components/screencasts/Hero'
import { ScreencastProps } from '../components/screencasts/Screencast'
import Screencasts from '../components/screencasts/Screencasts'

const screencasts: ScreencastProps[] = [
    {
        title: 'Always ready-to-code',
        duration: 3,
        tile: 'screencast-placeholder.png',
    },
    {
        title: 'Personalize your workspace',
        duration: 2,
        tile: 'screencast-placeholder.png',
    },
    {
        title: 'Automate your project\'s dev setup',
        duration: 4,
        tile: 'screencast-placeholder.png',
    },
    {
        title: 'Continuously prebuild your project',
        duration: 2,
        tile: 'screencast-placeholder.png',
    },
    {
        title: 'Fresh dev environments for each new task',
        duration: 1,
        tile: 'screencast-placeholder.png',
    },
    {
        title: 'Collaborating with your team',
        duration: 2,
        tile: 'screencast-placeholder.png',
    }
]

const ScreencastsPage = () => (
    <IndexLayout canonical='/screencasts/'>
        <Hero />
        <Screencasts 
            screencasts={screencasts}
        />
    </IndexLayout>
)

export default ScreencastsPage
