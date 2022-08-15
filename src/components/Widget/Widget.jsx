import React from "react";
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import { useState } from "react";

import scss from './Widget.module.scss';

const Widget = () => {
    const [state, setState] = useState({good: 0, neutral: 0, bad: 0,});

    const handleChange = e => {
    const {name} = e.target;
    setState((prevState) => {return{...prevState, [name]: prevState[name]+1};});
    };

    function percentages(){
        const {good, bad} = state;
        if (bad === 0) {
            if (good === 0) return 0
            else return 100;
        };
        return (Math.round(good*10000 / (good + bad)) / 100);
    };

    function total(){
        const {good, neutral, bad}=state;
        return good + bad + neutral;
    };

    return (
        <div className={scss.widget}>
            <Section title="Please leave feedback">
                <FeedbackOptions 
                    options= {state}
                    onLeaveFeedback={handleChange}
                />
            </Section>
            <Section title="Statistic">
                <Statistics 
                    good={state.good} 
                    neutral={state.neutral} 
                    bad={state.bad} 
                    total={total()} 
                    positivePercentage={percentages()}
                />
            </Section>
        </div>
    )
}

export default Widget;