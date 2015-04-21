ElizaData = require('../elizadata');
ElizaBot = require('../elizabot');

describe("Confirm non-random eliza responses", function() {
  eliza = new ElizaBot();
  elizaData = new ElizaData();

  it("should start with a known message", function() {
    expect(elizaData.elizaInitials).toContain(eliza.getInitial());
  });

  it("should finish with a known message", function() {
    expect(elizaData.elizaFinals).toContain(eliza.getFinal());
  });

  it("should finish for known goodbye words", function() {
    elizaData.elizaQuits.forEach (function (word) {
      expect(elizaData.elizaFinals).toContain(eliza.transform(word));
    });
  });
});

describe("Hold a known conversation", function() {
  eliza = new ElizaBot(true);

  conversation = [];
  conversation.push("Men are all alike.");
  conversation.push("IN WHAT WAY?");
  conversation.push("They're always bugging us about something or other.");
  conversation.push("CAN YOU THINK OF A SPECIFIC EXAMPLE?");
  conversation.push("Well, my boyfriend made me come here.");
  conversation.push("YOUR BOYFRIEND MADE YOU COME HERE?");
  conversation.push("He says I'm depressed much of the time.");
  conversation.push("I AM SORRY TO HEAR THAT YOU ARE DEPRESSED.");
  conversation.push("It's true. I am unhappy.");
  conversation.push("DO YOU THINK COMING HERE WILL HELP YOU NOT TO BE UNHAPPY?");
  conversation.push("I need some help, that much seems certain.");
  conversation.push("WHAT WOULD IT MEAN TO YOU IF YOU GOT SOME HELP?");
  conversation.push("Perhaps I could learn to get along with my mother.");
  conversation.push("TELL ME MORE ABOUT YOUR FAMILY.");
  conversation.push("My mother takes care of me.");
  conversation.push("WHO ELSE IN YOUR FAMILY TAKES CARE OF YOU?");
  conversation.push("My father.");
  conversation.push("YOUR FATHER?");
  conversation.push("You are like my father in some ways.");
  conversation.push("WHAT RESEMBLENCE DO YOU SEE?");
  conversation.push("You are not very aggressive but I think you don't want me to notice that.");
  conversation.push("WHAT MAKES YOU THINK I AM NOT VERY AGGRESSIVE?");
  conversation.push("You don't argue with me.");
  conversation.push("WHY DO YOU THINK I DON'T ARGUE WITH YOU?");
  conversation.push("You are afraid of me.");
  conversation.push("DOES IT PLEASE YOU TO BELIEVE I AM AFRAID OF YOU?");
  conversation.push("My father is afraid of everybody.");
  conversation.push("WHAT ELSE COMES TO YOUR MIND WHEN YOU THINK OF YOUR FATHER?");
  conversation.push("Bullies.");
  conversation.push("DOES THAT HAVE ANYTHING TO DO WITH THE FACT THAT YOUR BOYFRIEND MADE YOU COME HERE?");

  it("should follow the conversation", function() {
  	var i,
  		response;

  	// eliza.reset();
  	for (var i = 0; i < conversation.length; i = i + 2) {
  		response = eliza.transform(conversation[i]);
  		expect(conversation[i + 1]).toEqual(response.toUpperCase());
  	}
  })
});