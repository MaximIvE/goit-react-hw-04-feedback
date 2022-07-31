import React, {Component} from "react";
import capitalFirstLetter from "utils/capitalFirstLetter";
import scss from './Widget.module.scss';
import clap from '../../sound/clap.wav'

export default class Widget extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    sound(){
    const audio = new Audio(clap);
    audio.volume = 0.075;
    audio.play();
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
                <div className={scss.form_element}>
                    Please leave feedback
                    <ul className={scss.btn_list}>
                        {Object.keys(this.state)
                        .map(key=>
                        <button 
                            key={key} 
                            type='button' 
                            name={key} 
                            className={scss.btn_feedback}
                            onMouseDown={this.sound}
                            onClick={this.handleChange}>
                                {capitalFirstLetter(key)}
                        </button>)}
                    </ul>
                </div>
                {this.total() > 0
                 ? 
                <div className={scss.form_element}>
                    Statistics
                    <ul className={scss.statistic_list}>
                        {Object.keys(this.state)
                        .map(key=>
                        <li 
                            key={key}>
                                {capitalFirstLetter(key)}: {this.state[key]}
                        </li>)}

                       <li style={{paddingTop: 12}}>Total: {this.total()}</li>
                       <li>Positive feedback: {this.percentages() === 0 ? 0 : this.percentages()+"%"}</li>
                    </ul>
                </div>
                 : 
                 <p className={scss.form_message}>There is no feedback.</p>}
            </div>
        )
    }
}