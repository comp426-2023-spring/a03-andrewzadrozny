#!/usr/bin/env node

import {rps} from "../lib/rpsls.js"
import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));

if (argv.h || argv.help) {
    console.log('Usage: node-rps [MOVE]', '\n', 
    'Play Rock Paper Scissors (RPS)', '\n', 
    
     ' -h, --help      display this help message and exit', '\n', 
     ' -r, --rules     display the rules and exit', '\n', 
    
    'Examples:', '\n', 
     ' node-rps        Return JSON with single player RPS result.', '\n', 
                     ' e.g. {"player":"rock"}', '\n', 
      'node-rps rock   Return JSON with results for RPS played against a simulated opponent.', '\n', 
                      'e.g {"player":"rock","opponent":"scissors","result":"win"}'
    );
    process.exit(0);
}

if (argv.r || argv.rules){
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    process.exit(0);

}

try {
    const res = rps(argv._[0]);
    console.log(JSON.stringify(res));
  } catch (error) {
    if (error instanceof RangeError) {
      console.log(`Usage: node-rps [MOVE]
      Play Rock Paper Scissors (RPS)
      
        -h, --help      display this help message and exit
        -r, --rules     display the rules and exit
      
      Examples:
        node-rps        Return JSON with single player RPS result.
                        e.g. {"player":"rock"}
        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"scissors","result":"win"}`);
      console.log(`Rules for Rock Paper Scissors:
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock CRUSHES Scissors
      - Lizard POISONS Spock
      - Spock SMASHES Scissors
      - Scissors DECAPITATES Lizard
      - Lizard EATS Paper
      - Paper DISPROVES Spock
      - Spock VAPORIZES Rock
      - Rock CRUSHES Scissors`);
      process.exit(1);
    }
  }
