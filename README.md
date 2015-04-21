elizanode
=========

This is a node package of the elizaNode.js v.1.1 - ELIZA JS library (N.Landsteiner 2005)
  Eliza is a mock Rogerian psychotherapist.
  Original program by Joseph Weizenbaum in MAD-SLIP for "Project MAC" at MIT.

## interface
         new ElizaNode( <random-choice-disable-flag> )
         ElizaNode.prototype.transform( <inputstring> )
         ElizaNode.prototype.getInitial()
         ElizaNode.prototype.getFinal()
         ElizaNode.prototype.reset()

## usage
		 var ElizaNode = require('elizanode')
		 var eliza = new ElizaNode();
         var initial = eliza.getInitial();
         var reply = eliza.transform(inputstring);
         if (eliza.quit) {
             // last user input was a quit phrase
         }

         // method `transform()' returns a final phrase in case of a quit phrase
         // but you can also get a final phrase with:
         var final = eliza.getFinal();

         // other methods: reset memory and internal state
         eliza.reset();

         // to set the internal memory size override property `memSize':
         eliza.memSize = 100; // (default: 20)

         // to reproduce the example conversation given by J. Weizenbaum
         // initialize with the optional random-choice-disable flag
         var originalEliza = new ElizaNode(true);

## installation
npm install elizanode --save

# contributing
See [Contributing](CONTRIBUTING.md)
