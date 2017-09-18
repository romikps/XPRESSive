import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddExpression from './AddExpression';
import ExpressionList from './ExpressionList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={ this.props.title } subtitle={ this.props.subtitle } />
                <div className="wrapper">
                    <AddExpression />
                    <ExpressionList expressionList={ this.props.expressionList } />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    expressionList: PropTypes.array.isRequired
};