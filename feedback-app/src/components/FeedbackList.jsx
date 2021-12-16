import React from 'react'

function FeedbackList(feedback) {
    if (!feedback || feedback.length===0) {
        return <p>No feedback given</p>
    }
    return (
        <div>
            list
        </div>
    )
}

export default FeedbackList
