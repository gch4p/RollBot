/**
 * @file Sample Use Context Menu interaction
 * @author Krish Garg
 * @since 3.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../../typings').ContextInteractionCommand}
 */
module.exports = {
	data: {
		name: "Beautiful Context Menu",
		type: 2, // 2 is for user context menus
	},

	async execute(interaction) {
		await interaction.reply({
			content: "I'm Roll. Did you know I'm 4\'9\"?",
		});
		return;
	},
};
