/**
 * @type {import('../../typings').LegacyCommand}
*/
module.exports = {
	name: "randomweapon",
	aliases: ["weapon", "rw", "weaponrandom","weaponrand"],

	execute(message, args) {
		const weapons = [".52 Gal",".96 Gal","Aerospray MG", "Aerospray RG (Little Timmy Glue Gun Deluxe","Ballpoint Splatling","Big Swig Roller","Bamboozler 14 Mk I","Blaster","Bloblobber","Carbon Roller","Carbon Roller Deco","Clash Blaster","Classic Squiffer","Custom Splattershot Jr.","Dapple Duallies","Dapple Dualies Nouveau","Dark Tetra Dualies","Dualie Squelchers","Dynamo Roller","E-liter 4K","E-Liter 4K Scope","Explosher","Flingza Roller","Forge Splatterrshot Pro","Glooga Dualies","GOD Tuber","H-3 Nozzlenose","Heavy Splatling","Hero Shot Replica","Hydra Splatling","Inkbrush","Inkbrush Nouveau","Jet Squelcher","L-3 Nozzlenose","Luna Blaster","Luna Blaster Neo","Mini Splatling","N-ZAP '85","Nautilus 47","Octobrush","Range Blaster","Rapid Blaster","Rapid Blaster Pro","REEF-LUX 450","Slosher","Sloshing Machine","Snipewriter 5H","Splash-o-matic","Splat Brella","Splat Charger","Splat Dualies","Splat Roller","Splatana Wiper","Splatana Stamper","Splatterscope","Splattershot","Splattershot Jr.","Splattershot Nova","Splattershot Pro","Sploosh-o-matic","Squeezer","Tenta Brella","Tenetek Splattershot","Tri-Slosher","Tri-Stringer","Undercover Brella","Zink Mini Splatling"];
		var weap = weapons[Math.floor((weapons.length) * Math.random())];

		message.channel.send({ content: `${message.author}, your weapon is:**${weap}**` });
	},
};

module.exports = {
	name: "randomweaponold",
	aliases: ["weaponold", "rwold", "weaponrandomold","weaponrandold"],

	execute(message, args) {
		const weaponsold = [" Sploosh-o-matic", " Neo Sploosh-o-matic", " Sploosh-o-matic 7", " Splattershot Jr.", " Custom Splattershot Jr.", " Kensa Splattershot Jr.", " Splash-o-matic", " Neo Splash-o-matic", " Aerospray MG", " Aerospray RG", " Aerospray PG", " Splattershot", " Tentatek Splatterrshot", " Kensa Splattershot", " Hero Shot Replica", " Octo Shot Replica", " .52 Gal", " .52 Gal Deco", " Kensa .52 Gal", " N-ZAP 85", " N-ZAP 89", " N-ZAP 83", " Splattershot Pro", " Forge Splattershot Pro", " Kensa Splattershot Pro", " .96 Gal", " .96 Gal Deco", " Jet Squelcher", " Custom Jet Squelcher", " Luna Blaster", " Luna Blaster Neo", " Kensa Luna Blaster", " Blaster", " Custom Blaster", " Hero Blaster Replica", " Range Blaster", " Custom Range Blaster", " Grim Range Blaster", " Clash Blaster", " Clash Blaster Neo", " Rapid Blaster", " Rapid Blaster Deco", " Kensa Rapid Blaster", " Rapid Blaster Pro", " Rapid Blaster Pro Deco", " L-3 Nozzlenose", " L-3 Nozzlenose D", " Kensa L-3 Nozzlenose", " H-3 Nozzlenose", " H-3 Nozzlenose D", " Cherry H-3 Nozzlenose", " Squeezer", " Foil Squeezer", " Carbon Roller", " Carbon Roller Deco", " Splat Roller", " Krak-On Splat Roller", " Kensa Splat Roller", " Hero Roller Replica", " Dynamo Roller", " Gold Dynamo Roller", " Kensa Dynamo Roller", " Flingza Roller", " Foil Flingza Roller", " Inkbrush", " Inkbrush Nouveau", " Permanent Inkbrush", " Octobrush", " Octobrush Nouveau", " Kensa Octobrush", " Herobrush Replica", " Classic Squiffer", " New Squiffer", " Fresh Squiffer", " Splat Charger", " Firefin Splat Charger", " Kensa Splat Charger", " Hero Charger Replica", " Splatterscope", " Firefin Splatterscope", " Kensa Splatterscope", " E-liter 4K", " Custom E-liter 4K", " E-liter 4K Scope", " Custom E-liter 4K Scope", " Bamboozler 14 Mk I", " Bamboozler 14 Mk II", " Bamboozler 14 Mk III", " Goo tuber", " God Tuber", " Custom Goo tuber", " Slosher", " Slosher Deco", " Soda Slosher", " Hero Slosher Replica", " Tri-Slosher", " Tri-Slosher Nouveau", " Sloshing Machine", " Neo Sloshing Machine", " Kensa Sloshing Machine", " Bloblobber", " Bloblobber Deco", " Explosher", " Custom Explosher", " Mini Splatling", " Zink Mini Splatling", " Kensa Mini Splatling", " Heavy Splatling", " Heavy Splatling Deco", " Heavy Splatling Remix", " Hero Splatling Replica", " Hydra Splatling", " Custom Hydra Splatling", " Ballpoint Splatling", " Ballpoint Splatling Nouveau", " Nautilus 47", " Nautilus 79", " Dapple Dualies", " Dapple Dualies Nouveau", " Clear Dapple Dualies", " Splat Dualies", " Enperry Splat Dualies", " Kensa Splat Dualies", " Hero Dualie Replicas", " Glooga Dualies", " Glooga Dualies Deco", " Kensa Glooga Dualies", " Dualie Squelchers", " Custom Dualie Squelchers", " Dark Tetra Dualies", " Light Tetra Dualies", " Splat Brella", " Sorella Brella", " Hero Brella Replica", " Tenta Brella", " Tenta Sorella Brella", " Tenta Camo Brella", " Undercover Brella", " Undercover Sorella Brella", " Kensa Undercover Brella"];
		var weap = weaponsold[Math.floor((weaponsold.length) * Math.random())];

		message.channel.send({ content: `${message.author}, your weapon is:**${weap}**` });
	},
};
