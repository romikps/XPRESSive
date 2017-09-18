import { Mongo } from 'meteor/mongo';

export const Vocab = new Mongo.Collection('vocab');

export const determineRainbowColor = (expressions) => {
    return expressions.map((expression, index) => {
        let opacity = 0.3;
        let colors = [
            [255, 105, 180],
            [255, 0, 0],
            [255, 142, 0],
            [255, 255, 0],
            [0, 142, 0],
            [0, 192, 192],
            [64, 0, 152],
            [142, 0, 142]
        ];

        let color = colors[index % 8];
        // color = [255, 255, 255];

        return {
            ...expression,
            color: `rgba(${ color[0] }, ${ color[1] }, ${ color[2] }, ${ opacity })`
        };
    });  
};