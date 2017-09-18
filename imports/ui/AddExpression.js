import React from 'react';

import { Vocab } from './../api/vocab';

export default class AddExpression extends React.Component {
    handleSubmit(e) {
        e.preventDefault();  
        
        let enteredExpression = e.target.expression.value;
        let enteredMeaning = e.target.meaning.value;
        e.target.expression.value = '';
        e.target.meaning.value = '';

        if (enteredExpression) {
            Vocab.insert({
                expression: enteredExpression,
                meaning: enteredMeaning,
                score: 0,
                date: new Date()
            });
        } else {
            alert('What was that?');
        }
    }
    
    render() {
        return (
            <div className="item">
                <form className="form" onSubmit={ this.handleSubmit }>
                    <div className="form__input__group">
                        <input className="form__input" type="text" name="expression" placeholder="Here's a great expression :)" />
                        <input className="form__input" type="text" name="meaning" placeholder="And a note about it" />
                    </div>
                    <button className="button">Save</button>
                </form>
            </div>
        );
    }
}