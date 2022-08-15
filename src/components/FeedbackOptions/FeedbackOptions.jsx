import PropTypes from 'prop-types';
import scss from './FeedbackOptions.module.scss'
import capitalFirstLetter from 'utils/capitalFirstLetter';
import sound from 'utils/sound';

export default function FeedbackOptions({options, onLeaveFeedback}){
    // console.log("FeedbackOptions");
    return (
    <ul className={scss.btn_list}>
        {Object.keys(options).map(key=>
            <button 
                key={key} 
                type='button' 
                name={key} 
                className={scss.btn_feedback}
                onMouseDown={sound}
                onClick={onLeaveFeedback }
                >
                    {capitalFirstLetter(key)}
            </button>)} 
    </ul>
    )
}

FeedbackOptions.propTypes={
    options: PropTypes.shape({
        good: PropTypes.number,    
        neutral: PropTypes.number,
        bad: PropTypes.number,
      }).isRequired,    
    onLeaveFeedback: PropTypes.func.isRequired,
    
}