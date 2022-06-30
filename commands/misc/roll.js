/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
	name: "roll",
	aliases: "Roll",
	usage: "[number]",

	execute(message, args) {
		if (!args.length) {
			message.channel.send({ content: "You must specify a number! Try *!roll 6*" });
			return;
		}

		var n = parseInt(args);
		if (n > 1000000000) {
			message.channel.send({ content: "I think that's an unreasonable number of sides." });
			return;
        }


		var ans = Math.floor(Math.random() * n) + 1; 
		message.channel.send({ content: `Rolling a ${n} sided die!\nResult: **${ans}**` });

	},
};