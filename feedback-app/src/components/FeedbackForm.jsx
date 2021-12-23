import React, {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

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

    return (
        <Card>
            <form>
                <h2>How would you rate our service? </h2>
                {/* TODO: Rating select component */}

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
