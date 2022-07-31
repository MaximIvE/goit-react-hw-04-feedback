import React, {Component} from "react";
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';

import scss from './Widget.module.scss';

export default class Widget extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleChange = e => {
    const {name} = e.target;
    this.setState((prevState) => {return{[name]: prevState[name]+1};});
    }

    percentages(){
        const {good, bad} = this.state;
        if (bad === 0) {
            if (good === 0) return 0
            else return 100;
        };
        return (Math.round(good*10000 / (good + bad)) / 100);
    }

    total(){
        const {good, bad, neutral} = this.state; 
        return good + bad + neutral;
    }

    render(){
        return (
            <div className={scss.widget}>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        options={this.state} 
                        onLeaveFeedback={this.handleChange}
                    />
                </Section>
                <Section title="Statistic">
                    <Statistics 
                        good={this.state.good} 
                        neutral={this.state.neutral} 
                        bad={this.state.bad} 
                        total={this.total()} 
                        positivePercentage={this.percentages()}
                    />
                </Section>
            </div>
        )
    }
}