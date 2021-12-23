import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
    return (
        <Card >
            <div className="about">
                <h1>About this project</h1>
                <p>This is a react app to leave feedback for a project</p>
                <p>version : 1.0.0</p>

                <p>
                    <a href="/">back to home</a>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
