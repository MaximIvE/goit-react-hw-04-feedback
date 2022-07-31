import capitalFirstLetter from "utils/capitalFirstLetter";
import scss from './Statistics.module.scss';

export default function Statistics(props){
        return (props.total > 0
            // Ця перевірка потрібна для відображення статисктикиякщо є хоча б одиг відгук
            ? 
               <ul className={scss.statistic_list}>
                   {Object.keys(props).map(key=>{
                    return <li 
                    key={key}
                    className={scss.statistic_item}>
                        {/* Ця перевірка потрібна для останньої лішки, бо в неї назва не співпадає з ключем */}
                        {key !== 'positivePercentage' 
                        ? 
                        capitalFirstLetter(key) +': ' + props[key]
                        : 
                        props.positivePercentage === 0 
                            ? 
                            'Positive feedback: 0'
                            : 'Positive feedback: ' + props.positivePercentage+"%"
                    }      
                </li>
                }
                   )}
               </ul>
           : 
            <p className={scss.form_message}>There is no feedback.</p>)
}