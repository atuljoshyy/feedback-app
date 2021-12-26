import React, {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(()=>{
        if (feedbackEdit.edit === true){
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            setBtnDisabled(false)
        }


    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text ===''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text!=='' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('Please enter at least 10 characters')
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length>10){
            const newFeedback = {
                text, 
                rating
            }
            if (feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{

                addFeedback(newFeedback)
            }
            setText('')
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }

    } 
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service? </h2>
                <RatingSelect select={(rating)=> setRating(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder='write a review' onChange={handleTextChange} value={text}/>
                    <Button version='primary' type='submit' isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && <p className='message'>{message}</p>}
            </form>
        </Card>

    )
}

export default FeedbackForm
