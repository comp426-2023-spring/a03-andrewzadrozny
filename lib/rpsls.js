const RULES = {
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
        'spock': 'lose'
    },
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'tie',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose',
        'spock': 'tie'
    }
};

export function rps(move) {
    const options = ['rock', 'paper', 'scissors'];
    
    if (move === undefined)
        return {player: options[Math.floor(Math.random() * 3)]};

    move = move.toLowerCase();
    if (!options.includes(move)) {
        console.error(`${move} is not a valid move.`);
        throw new RangeError(`${move} is not a valid move.`);
    }

    const opp_move = options[Math.floor(Math.random() * 3)];
    return {player: move, opponent: opp_move, result: RULES[move][opp_move]}

}

export function rpsls(move) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    
    if (move === undefined)
        return {player: options[Math.floor(Math.random() * 5)]};

    move = move.toLowerCase();
    if (!options.includes(move)) {
        console.error(`${move} is not a valid move.`);
        throw new RangeError(`${move} is not a valid move.`);
    }

    const opp_move = options[Math.floor(Math.random() * 3)];
    return {player: move, opponent: opp_move, result: RULES[move][opp_move]}

}


