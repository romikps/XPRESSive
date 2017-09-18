import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Vocab } from './../imports/api/vocab';
import { determineRainbowColor } from './../imports/api/vocab';
import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let vocab = Vocab.find({}, {
            sort: {
                score: 1,
                date: -1
            }
        }).fetch();
        let rainbowVocab = determineRainbowColor(vocab);
        let title = 'XPRESSive';
        let subtitle = 'Snatch that new expression on the go';
        ReactDOM.render(<App title={ title } subtitle={ subtitle } expressionList={ rainbowVocab } />, document.getElementById('app'));
    });
    
});