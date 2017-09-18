import React from 'react';
import PropTypes from 'prop-types';

import { Vocab } from './../api/vocab';

export default class Expression extends React.Component {
    render() {
        let expression = this.props.expression;
        return (
            <div key={ this.props.expression._id } className="item" style={ { background: this.props.expression.color } }>
                <div className="expression">
                    <div>
                        <h3 className="expression__text">{ this.props.expression.expression }</h3>
                        <p className="expression__meaning">{ this.props.expression.meaning }</p>
                    </div>
                    <div className="expression__actions">
                        <button className="button button--round" onClick={ () => Vocab.update(this.props.expression._id,
                            { $set: { score: (expression.score < 5 ? expression.score + 1 : 5), date: new Date() } }) }>+1</button>
                        <button className="button button--round" onClick={ () => Vocab.update(this.props.expression._id,
                            { $set: { score: (expression.score > 0 ? expression.score - 1 : 0), date: new Date() } }) }>-1</button>
                        <button className="button button--round" onClick={ () => Vocab.remove(this.props.expression._id) }>X</button>
                    </div>
               </div>
            </div>
        );
    }
}

Expression.propTypes = {
    expression: PropTypes.object.isRequired
};