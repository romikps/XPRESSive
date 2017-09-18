import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Expression from './Expression';

export default class ExpressionList extends React.Component {
    renderExpressions() {
        if (this.props.expressionList.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Expression Hunting Season is NOW OPEN!</p>
                </div>
            );
        } else {
            return this.props.expressionList.map((expression) => {
                return <Expression key={ expression._id } expression={ expression }/>;
            });
        }
    }
    
    render() {
        return (
            <div>
                <FlipMove>
                    { this.renderExpressions() }
                </FlipMove>
            </div>
        );
    }
}

ExpressionList.propTypes = {
    expressionList: PropTypes.array.isRequired
}