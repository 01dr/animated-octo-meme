/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 21.03.17
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'highlight.js/styles/darcula.css';
import '../common/global.pcss';
import s from './main.pcss';

import { Layout, Content, Sidebar } from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
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
            const name = currentQuestionData.id;

            return currentQuestionData.variants.map(item => (
                <div className={s.button} key={`${name}_${item.value}`}>
                    <Button
                        hint={item.hint}
                        code={item.code}
                        onClick={this.handleButtonClick.bind(this, name, item.value)}/>
                </div>
            ));
        }

        return null;
    }

    render() {
        const { config } = this.props;

        return (
            <div>
                <Header/>
            <Layout>
                <Sidebar>
                    <Config config={config}/>
                </Sidebar>
                <Content>
                    <div className={s.questions}>
                        <h1 className={s.title}>Build your own config</h1>
                        <p>Choose the code sample you like more:</p>

                        <div className={s.buttons}>
                            {this.renderButtons()}
                        </div>
                    </div>
                </Content>
            </Layout>
            </div>
        )
    }
}

export default connect(state => ({
    config: state.stylelintConfig,
    question: state.question
}))(Main)