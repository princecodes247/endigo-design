export const pathing: any = {

    "idle": [],

    "up-down": [
        {path: 'down'},
        {path: 'wait', delay: 8000},
        {path: 'up'},
        {path: 'up'},
        {path: 'wait', delay: 8000},
        {path: 'down'},
    ],
    
    "left-right": [
        {path: 'right'},
        {path: 'wait', delay: 6000},
        {path: 'left'},
        {path: 'left'},
        {path: 'wait', delay: 6000},
        {path: 'right'},
    ],

    "circle": [
        {path: 'right'},
        {path: 'wait', delay: 10000},
        {path: 'down'},
        {path: 'wait', delay: 4000},
        {path: 'left'},
        {path: 'wait', delay: 10000},
        {path: 'up'},
        {path: 'wait', delay: 4000},
    ]

};