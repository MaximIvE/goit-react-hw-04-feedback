import React, {Component} from "react";
import scss from './Widget.module.scss';

export default class Widget extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      handleChange = e => {
        const {name} = e.target;
        console.log(name);
        console.log(this.state);
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
                <div>
                    Please leave feedback
                    <ul>
                    <button type='button' name='good' onClick={this.handleChange}>Good</button>
                    <button type='button' name='neutral' onClick={this.handleChange}>Neutral</button>
                    <button type='button' name='bad' onClick={this.handleChange}>Bad</button>
                    </ul>
                </div>
                {this.total() > 0 ? <div>
                    Statistics
                    <ul className={scss.statistic_list}>
                       <li>Good: {this.state.good}</li>
                       <li>Neutral: {this.state.neutral}</li>
                       <li>Bad: {this.state.bad}</li>
                       <li>Total: {this.total()}</li>
                       <li>Positive feedback: {this.percentages() === 0 ? 0 : this.percentages()+"%"}</li>
                    </ul>
                </div> : <p style={{
                fontSize: 14}}>There is no feedback</p>}
            </div>

        )
    }

}
