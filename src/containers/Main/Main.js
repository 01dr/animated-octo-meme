/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../common/global.pcss';
import s from './main.pcss';

import Config from '../../components/Config/Config';
import Button from '../../components/Button/Button';

import questions from '../../data/questions.json';
import { addRuleToConfig, nextQuestion } from '../../actions/StylelintConfigActions';

class Main extends Component {
    handleButtonClick(name, value) {
        const { dispatch } = this.props;

        dispatch(addRuleToConfig(name, value));
        dispatch(nextQuestion());
    }

    renderButtons() {
        const { question } = this.props;
        const length = questions.length - 1;

        if (question <= length) {
            const currentQuestionData = questions[question];
            const name = currentQuestionData.name;

            return currentQuestionData.variants.map(item => {
                const key = `${name}_${item.label}`;
                return (
                    <Button
                        key={key}
                        onClick={this.handleButtonClick.bind(this, name, item.value)}
                    >{item.label}</Button>
                )
            });
        }

        return null;
    }

    render() {
        return (
            <div>
                <div className={s.container}>
                    <div className={s.config}>
                        <Config config={this.props.config}/>
                    </div>

                    <div className={s.questions}>
                        <h1 className={s.title}>Build your own config</h1>
                        <p>Choose the code sample you like more:</p>

                        {this.renderButtons()}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    config: state.stylelintConfig,
    question: state.question
}))(Main)