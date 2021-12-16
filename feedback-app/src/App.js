import {useState} from 'react';
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  return (
    
    <div className='container'>
        <Header />
        <FeedbackList  feedback={feedback}/>
    </div>
    
  );
}

export default App;
