import scss from './FeedbackOptions.module.scss'
import capitalFirstLetter from 'utils/capitalFirstLetter';
import sound from 'utils/sound';

export default function FeedbackOptions({options, onLeaveFeedback}){
    return (
    <ul className={scss.btn_list}>
        {Object.keys(options).map(key=>
            <button 
                key={key} 
                type='button' 
                name={key} 
                className={scss.btn_feedback}
                onMouseDown={sound}
                onClick={onLeaveFeedback}
                >
                    {capitalFirstLetter(key)}
            </button>)} 
    </ul>
    )
}