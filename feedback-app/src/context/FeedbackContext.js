import {createContext, useState} from 'react';
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: '1',
            text: 'This is a feedback item 1',
            rating : 1
        },
        {
            id: '2',
            text: 'This is a feedback item 2',
            rating : 7
        },
        {
            id: '3',
            text: 'This is a feedback item 3',
            rating : 9
        },
        {
            id: '4',
            text: 'This is a feedback item 4',
            rating : 10
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    //delte feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

      //add feedbacl
      const addFeedback = (newFeedback) => {
          newFeedback.id = uuidv4();
          setFeedback([newFeedback, ...feedback]);
        };

    // update feedback
        const updateFeedback = (id, updItem) =>{
            setFeedback(feedback.map((item) => (item.id === id ?{...item, ...updItem} : item)));
        }
        
        // to edit a feedback item
        const editFeedback = (item) => {
            setFeedbackEdit({
                item: item,
                edit: true
            });
        }
        return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;