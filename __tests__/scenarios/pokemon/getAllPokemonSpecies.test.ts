import { getAllPokemonSpecies } from '#test-utils/queries/pokemon';
import { gCall } from '#test-utils/testUtils';

describe('getAllPokemonSpecies', () => {
  test('GIVEN a limit of 5 THEN returns the first 5 Pokémon', async () => {
    const { data } = await gCall<'getAllPokemonSpecies'>({
      source: getAllPokemonSpecies,
      variableValues: { take: 5 }
    });

    expect(data.getAllPokemonSpecies).toEqual(['Syclar', 'Syclant', 'Revenankh', 'Embirch', 'Flarelm']);
  });

  test('GIVEN a limit of 5 and offset of 5 THEN returns the second 5 Pokémon', async () => {
    const { data } = await gCall<'getAllPokemonSpecies'>({
      source: getAllPokemonSpecies,
      variableValues: { take: 5, offset: 5 }
    });

    expect(data.getAllPokemonSpecies).toEqual(['Pyroak', 'Breezi', 'Fidgit', 'Rebble', 'Tactite']);
  });

  test('GIVEN a limit of 5 and reverse THEN returns the last 5 Pokémon', async () => {
    const { data } = await gCall<'getAllPokemonSpecies'>({
      source: getAllPokemonSpecies,
      variableValues: { take: 5, reverse: true }
    });

    expect(data.getAllPokemonSpecies).toEqual([
      'Pokestar Ufo-propu2',
      'Pokestar Black Belt',
      'Pokestar White Door',
      'Pokestar Black Door',
      'Pokestar Spirit'
    ]);
  });

  test('GIVEN no parameters THEN returns all Pokémon', async () => {
    const { data } = await gCall<'getAllPokemonSpecies'>({
      source: getAllPokemonSpecies,
      variableValues: {}
    });

    expect(data.getAllPokemonSpecies).toEqual([
      'Syclar',
      'Syclant',
      'Revenankh',
      'Embirch',
      'Flarelm',
      'Pyroak',
      'Breezi',
      'Fidgit',
      'Rebble',
      'Tactite',
      'Stratagem',
      'Privatyke',
      'Arghonaut',
      'Kitsunoh',
      'Cyclohm',
      'Colossoil',
      'Krilowatt',
      'Voodoll',
      'Voodoom',
      'Scratchet',
      'Tomohawk',
      'Necturine',
      'Necturna',
      'Mollux',
      'Cupra',
      'Argalis',
      'Aurumoth',
      'Brattler',
      'Malaconda',
      'Cawdet',
      'Cawmodore',
      'Volkritter',
      'Volkraken',
      'Snugglow',
      'Plasmanta',
      'Floatoy',
      'Caimanoe',
      'Naviathan',
      'Crucibelle',
      'Crucibelle-mega',
      'Pluffle',
      'Kerfluffle',
      'Pajantom',
      'Mumbao',
      'Jumbao',
      'Fawnifer',
      'Electrelk',
      'Caribolt',
      'Smogecko',
      'Smoguana',
      'Smokomodo',
      'Swirlpool',
      'Coribalis',
      'Snaelstrom',
      'Justyke',
      'Equilibra',
      'Solotl',
      'Astrolotl',
      'Miasmite',
      'Miasmaw',
      'Chromera',
      'Nohface',
      'Monohm',
      'Duohm',
      'Dorsoil',
      'Protowatt',
      'Venomicon',
      'Venomicon-epilogue',
      'Missingno.',
      'Bulbasaur',
      'Ivysaur',
      'Venusaur',
      'Venusaur-gmax',
      'Venusaur-mega',
      'Charmander',
      'Charmeleon',
      'Charizard',
      'Charizard-mega-x',
      'Charizard-mega-y',
      'Charizard-gmax',
      'Squirtle',
      'Wartortle',
      'Blastoise',
      'Blastoise-gmax',
      'Blastoise-mega',
      'Caterpie',
      'Metapod',
      'Butterfree',
      'Butterfree-gmax',
      'Weedle',
      'Kakuna',
      'Beedrill',
      'Beedrill-mega',
      'Pidgey',
      'Pidgeotto',
      'Pidgeot',
      'Pidgeot-mega',
      'Rattata',
      'Rattata-alola',
      'Raticate',
      'Raticate-alola',
      'Raticate-alola-totem',
      'Spearow',
      'Fearow',
      'Ekans',
      'Arbok',
      'Pikachu',
      'Pikachu-gmax',
      'Pikachu-cosplay',
      'Pikachu-rock-star',
      'Pikachu-belle',
      'Pikachu-pop-star',
      'Pikachu-phd',
      'Pikachu-libre',
      'Pikachu-original',
      'Pikachu-hoenn',
      'Pikachu-sinnoh',
      'Pikachu-unova',
      'Pikachu-kalos',
      'Pikachu-alola',
      'Pikachu-partner',
      'Pikachu-starter',
      'Pikachu-world',
      'Raichu',
      'Raichu-alola',
      'Sandshrew',
      'Sandshrew-alola',
      'Sandslash',
      'Sandslash-alola',
      'Nidoranf',
      'Nidorina',
      'Nidoqueen',
      'Nidoranm',
      'Nidorino',
      'Nidoking',
      'Clefairy',
      'Clefable',
      'Vulpix',
      'Vulpix-alola',
      'Ninetales',
      'Ninetales-alola',
      'Jigglypuff',
      'Wigglytuff',
      'Zubat',
      'Golbat',
      'Oddish',
      'Gloom',
      'Vileplume',
      'Paras',
      'Parasect',
      'Venonat',
      'Venomoth',
      'Diglett',
      'Diglett-alola',
      'Dugtrio',
      'Dugtrio-alola',
      'Meowth',
      'Meowth-alola',
      'Meowth-galar',
      'Meowth-gmax',
      'Persian',
      'Persian-alola',
      'Psyduck',
      'Golduck',
      'Mankey',
      'Primeape',
      'Growlithe',
      'Growlithe-hisui',
      'Arcanine',
      'Arcanine-hisui',
      'Poliwag',
      'Poliwhirl',
      'Poliwrath',
      'Abra',
      'Kadabra',
      'Alakazam',
      'Alakazam-mega',
      'Machop',
      'Machoke',
      'Machamp',
      'Machamp-gmax',
      'Bellsprout',
      'Weepinbell',
      'Victreebel',
      'Tentacool',
      'Tentacruel',
      'Geodude',
      'Geodude-alola',
      'Graveler',
      'Graveler-alola',
      'Golem',
      'Golem-alola',
      'Ponyta',
      'Ponyta-galar',
      'Rapidash',
      'Rapidash-galar',
      'Slowpoke',
      'Slowpoke-galar',
      'Slowbro',
      'Slowbro-galar',
      'Slowbro-mega',
      'Magnemite',
      'Magneton',
      "Farfetch'd",
      "Farfetch'd-galar",
      'Doduo',
      'Dodrio',
      'Seel',
      'Dewgong',
      'Grimer',
      'Grimer-alola',
      'Muk',
      'Muk-alola',
      'Shellder',
      'Cloyster',
      'Gastly',
      'Haunter',
      'Gengar',
      'Gengar-mega',
      'Gengar-gmax',
      'Onix',
      'Drowzee',
      'Hypno',
      'Krabby',
      'Kingler',
      'Kingler-gmax',
      'Voltorb',
      'Voltorb-hisui',
      'Electrode',
      'Electrode-hisui',
      'Exeggcute',
      'Exeggutor',
      'Exeggutor-alola',
      'Cubone',
      'Marowak',
      'Marowak-alola',
      'Marowak-alola-totem',
      'Hitmonlee',
      'Hitmonchan',
      'Lickitung',
      'Koffing',
      'Weezing',
      'Weezing-galar',
      'Rhyhorn',
      'Rhydon',
      'Chansey',
      'Tangela',
      'Kangaskhan',
      'Kangaskhan-mega',
      'Horsea',
      'Seadra',
      'Goldeen',
      'Seaking',
      'Staryu',
      'Starmie',
      'Mr. Mime',
      'Mr. Mime-galar',
      'Scyther',
      'Jynx',
      'Electabuzz',
      'Magmar',
      'Pinsir',
      'Pinsir-mega',
      'Tauros',
      'Magikarp',
      'Gyarados',
      'Gyarados-mega',
      'Lapras',
      'Lapras-gmax',
      'Ditto',
      'Eevee',
      'Eevee-starter',
      'Eevee-gmax',
      'Vaporeon',
      'Jolteon',
      'Flareon',
      'Porygon',
      'Omanyte',
      'Omastar',
      'Kabuto',
      'Kabutops',
      'Aerodactyl',
      'Aerodactyl-mega',
      'Snorlax',
      'Snorlax-gmax',
      'Articuno',
      'Articuno-galar',
      'Zapdos',
      'Zapdos-galar',
      'Moltres',
      'Moltres-galar',
      'Dratini',
      'Dragonair',
      'Dragonite',
      'Mewtwo',
      'Mewtwo-mega-x',
      'Mewtwo-mega-y',
      'Mew',
      'Chikorita',
      'Bayleef',
      'Meganium',
      'Cyndaquil',
      'Quilava',
      'Typhlosion',
      'Typhlosion-hisui',
      'Totodile',
      'Croconaw',
      'Feraligatr',
      'Sentret',
      'Furret',
      'Hoothoot',
      'Noctowl',
      'Ledyba',
      'Ledian',
      'Spinarak',
      'Ariados',
      'Crobat',
      'Chinchou',
      'Lanturn',
      'Pichu',
      'Pichu-spiky-eared',
      'Cleffa',
      'Igglybuff',
      'Togepi',
      'Togetic',
      'Natu',
      'Xatu',
      'Mareep',
      'Flaaffy',
      'Ampharos',
      'Ampharos-mega',
      'Bellossom',
      'Marill',
      'Azumarill',
      'Sudowoodo',
      'Politoed',
      'Hoppip',
      'Skiploom',
      'Jumpluff',
      'Aipom',
      'Sunkern',
      'Sunflora',
      'Yanma',
      'Wooper',
      'Quagsire',
      'Espeon',
      'Umbreon',
      'Murkrow',
      'Slowking',
      'Slowking-galar',
      'Misdreavus',
      'Unown',
      'Wobbuffet',
      'Girafarig',
      'Pineco',
      'Forretress',
      'Dunsparce',
      'Gligar',
      'Steelix',
      'Steelix-mega',
      'Snubbull',
      'Granbull',
      'Qwilfish',
      'Qwilfish',
      'Scizor',
      'Scizor-mega',
      'Shuckle',
      'Heracross',
      'Heracross-mega',
      'Sneasel',
      'Sneasel',
      'Teddiursa',
      'Ursaring',
      'Slugma',
      'Magcargo',
      'Swinub',
      'Piloswine',
      'Corsola',
      'Corsola-galar',
      'Remoraid',
      'Octillery',
      'Delibird',
      'Mantine',
      'Skarmory',
      'Houndour',
      'Houndoom',
      'Houndoom-mega',
      'Kingdra',
      'Phanpy',
      'Donphan',
      'Porygon2',
      'Stantler',
      'Smeargle',
      'Tyrogue',
      'Hitmontop',
      'Smoochum',
      'Elekid',
      'Magby',
      'Miltank',
      'Blissey',
      'Raikou',
      'Entei',
      'Suicune',
      'Larvitar',
      'Pupitar',
      'Tyranitar',
      'Tyranitar-mega',
      'Lugia',
      'Ho-oh',
      'Celebi',
      'Treecko',
      'Grovyle',
      'Sceptile',
      'Sceptile-mega',
      'Torchic',
      'Combusken',
      'Blaziken',
      'Blaziken-mega',
      'Mudkip',
      'Marshtomp',
      'Swampert',
      'Swampert-mega',
      'Poochyena',
      'Mightyena',
      'Zigzagoon',
      'Zigzagoon-galar',
      'Linoone',
      'Linoone-galar',
      'Wurmple',
      'Silcoon',
      'Beautifly',
      'Cascoon',
      'Dustox',
      'Lotad',
      'Lombre',
      'Ludicolo',
      'Seedot',
      'Nuzleaf',
      'Shiftry',
      'Taillow',
      'Swellow',
      'Wingull',
      'Pelipper',
      'Ralts',
      'Kirlia',
      'Gardevoir',
      'Gardevoir-mega',
      'Surskit',
      'Masquerain',
      'Shroomish',
      'Breloom',
      'Slakoth',
      'Vigoroth',
      'Slaking',
      'Nincada',
      'Ninjask',
      'Shedinja',
      'Whismur',
      'Loudred',
      'Exploud',
      'Makuhita',
      'Hariyama',
      'Azurill',
      'Nosepass',
      'Skitty',
      'Delcatty',
      'Sableye',
      'Sableye-mega',
      'Mawile',
      'Mawile-mega',
      'Aron',
      'Lairon',
      'Aggron',
      'Aggron-mega',
      'Meditite',
      'Medicham',
      'Medicham-mega',
      'Electrike',
      'Manectric',
      'Manectric-mega',
      'Plusle',
      'Minun',
      'Volbeat',
      'Illumise',
      'Roselia',
      'Gulpin',
      'Swalot',
      'Carvanha',
      'Sharpedo',
      'Sharpedo-mega',
      'Wailmer',
      'Wailord',
      'Numel',
      'Camerupt',
      'Camerupt-mega',
      'Torkoal',
      'Spoink',
      'Grumpig',
      'Spinda',
      'Trapinch',
      'Vibrava',
      'Flygon',
      'Cacnea',
      'Cacturne',
      'Swablu',
      'Altaria',
      'Altaria-mega',
      'Zangoose',
      'Seviper',
      'Lunatone',
      'Solrock',
      'Barboach',
      'Whiscash',
      'Corphish',
      'Crawdaunt',
      'Baltoy',
      'Claydol',
      'Lileep',
      'Cradily',
      'Anorith',
      'Armaldo',
      'Feebas',
      'Milotic',
      'Castform',
      'Castform-sunny',
      'Castform-rainy',
      'Castform-snowy',
      'Kecleon',
      'Shuppet',
      'Banette',
      'Banette-mega',
      'Duskull',
      'Dusclops',
      'Tropius',
      'Chimecho',
      'Absol',
      'Absol-mega',
      'Wynaut',
      'Snorunt',
      'Glalie',
      'Glalie-mega',
      'Spheal',
      'Sealeo',
      'Walrein',
      'Clamperl',
      'Huntail',
      'Gorebyss',
      'Relicanth',
      'Luvdisc',
      'Bagon',
      'Shelgon',
      'Salamence',
      'Salamence-mega',
      'Beldum',
      'Metang',
      'Metagross',
      'Metagross-mega',
      'Regirock',
      'Regice',
      'Registeel',
      'Latias',
      'Latias-mega',
      'Latios',
      'Latios-mega',
      'Kyogre',
      'Kyogre-primal',
      'Groudon',
      'Groudon-primal',
      'Rayquaza',
      'Rayquaza-mega',
      'Jirachi',
      'Deoxys',
      'Deoxys-attack',
      'Deoxys-defense',
      'Deoxys-speed',
      'Turtwig',
      'Grotle',
      'Torterra',
      'Chimchar',
      'Monferno',
      'Infernape',
      'Piplup',
      'Prinplup',
      'Empoleon',
      'Starly',
      'Staravia',
      'Staraptor',
      'Bidoof',
      'Bibarel',
      'Kricketot',
      'Kricketune',
      'Shinx',
      'Luxio',
      'Luxray',
      'Budew',
      'Roserade',
      'Cranidos',
      'Rampardos',
      'Shieldon',
      'Bastiodon',
      'Burmy',
      'Wormadam',
      'Wormadam-sandy',
      'Wormadam-trash',
      'Mothim',
      'Combee',
      'Vespiquen',
      'Pachirisu',
      'Buizel',
      'Floatzel',
      'Cherubi',
      'Cherrim',
      'Cherrim-sunshine',
      'Shellos',
      'Gastrodon',
      'Ambipom',
      'Drifloon',
      'Drifblim',
      'Buneary',
      'Lopunny',
      'Lopunny-mega',
      'Mismagius',
      'Honchkrow',
      'Glameow',
      'Purugly',
      'Chingling',
      'Stunky',
      'Skuntank',
      'Bronzor',
      'Bronzong',
      'Bonsly',
      'Mime Jr.',
      'Happiny',
      'Chatot',
      'Spiritomb',
      'Gible',
      'Gabite',
      'Garchomp',
      'Garchomp-mega',
      'Munchlax',
      'Riolu',
      'Lucario',
      'Lucario-mega',
      'Hippopotas',
      'Hippowdon',
      'Skorupi',
      'Drapion',
      'Croagunk',
      'Toxicroak',
      'Carnivine',
      'Finneon',
      'Lumineon',
      'Mantyke',
      'Snover',
      'Abomasnow',
      'Abomasnow-mega',
      'Weavile',
      'Magnezone',
      'Lickilicky',
      'Rhyperior',
      'Tangrowth',
      'Electivire',
      'Magmortar',
      'Togekiss',
      'Yanmega',
      'Leafeon',
      'Glaceon',
      'Gliscor',
      'Mamoswine',
      'Porygon-z',
      'Gallade',
      'Gallade-mega',
      'Probopass',
      'Dusknoir',
      'Froslass',
      'Rotom',
      'Rotom-heat',
      'Rotom-wash',
      'Rotom-frost',
      'Rotom-fan',
      'Rotom-mow',
      'Uxie',
      'Mesprit',
      'Azelf',
      'Dialga',
      'Dialga-origin',
      'Palkia',
      'Palkia-origin',
      'Heatran',
      'Regigigas',
      'Giratina',
      'Giratina-origin',
      'Cresselia',
      'Phione',
      'Manaphy',
      'Darkrai',
      'Shaymin',
      'Shaymin-sky',
      'Arceus',
      'Arceus-bug',
      'Arceus-dark',
      'Arceus-dragon',
      'Arceus-electric',
      'Arceus-fairy',
      'Arceus-fighting',
      'Arceus-fire',
      'Arceus-flying',
      'Arceus-ghost',
      'Arceus-grass',
      'Arceus-ground',
      'Arceus-ice',
      'Arceus-poison',
      'Arceus-psychic',
      'Arceus-rock',
      'Arceus-steel',
      'Arceus-water',
      'Arceus-legend',
      'Victini',
      'Snivy',
      'Servine',
      'Serperior',
      'Tepig',
      'Pignite',
      'Emboar',
      'Oshawott',
      'Dewott',
      'Samurott',
      'Samurott-hisui',
      'Patrat',
      'Watchog',
      'Lillipup',
      'Herdier',
      'Stoutland',
      'Purrloin',
      'Liepard',
      'Pansage',
      'Simisage',
      'Pansear',
      'Simisear',
      'Panpour',
      'Simipour',
      'Munna',
      'Musharna',
      'Pidove',
      'Tranquill',
      'Unfezant',
      'Blitzle',
      'Zebstrika',
      'Roggenrola',
      'Boldore',
      'Gigalith',
      'Woobat',
      'Swoobat',
      'Drilbur',
      'Excadrill',
      'Audino',
      'Audino-mega',
      'Timburr',
      'Gurdurr',
      'Conkeldurr',
      'Tympole',
      'Palpitoad',
      'Seismitoad',
      'Throh',
      'Sawk',
      'Sewaddle',
      'Swadloon',
      'Leavanny',
      'Venipede',
      'Whirlipede',
      'Scolipede',
      'Cottonee',
      'Whimsicott',
      'Petilil',
      'Lilligant',
      'Lilligant-hisui',
      'Basculin',
      'Basculin-blue-striped',
      'Basculin-white-striped',
      'Sandile',
      'Krokorok',
      'Krookodile',
      'Darumaka',
      'Darumaka-galar',
      'Darmanitan',
      'Darmanitan-galar',
      'Darmanitan-zen',
      'Darmanitan-galar-zen',
      'Maractus',
      'Dwebble',
      'Crustle',
      'Scraggy',
      'Scrafty',
      'Sigilyph',
      'Yamask',
      'Yamask-galar',
      'Cofagrigus',
      'Tirtouga',
      'Carracosta',
      'Archen',
      'Archeops',
      'Trubbish',
      'Garbodor',
      'Garbodor-gmax',
      'Zorua',
      'Zorua-hisui',
      'Zoroark',
      'Zoroark-hisui',
      'Minccino',
      'Cinccino',
      'Gothita',
      'Gothorita',
      'Gothitelle',
      'Solosis',
      'Duosion',
      'Reuniclus',
      'Ducklett',
      'Swanna',
      'Vanillite',
      'Vanillish',
      'Vanilluxe',
      'Deerling',
      'Sawsbuck',
      'Emolga',
      'Karrablast',
      'Escavalier',
      'Foongus',
      'Amoonguss',
      'Frillish',
      'Frillish-female',
      'Jellicent',
      'Jellicent-female',
      'Alomomola',
      'Joltik',
      'Galvantula',
      'Ferroseed',
      'Ferrothorn',
      'Klink',
      'Klang',
      'Klinklang',
      'Tynamo',
      'Eelektrik',
      'Eelektross',
      'Elgyem',
      'Beheeyem',
      'Litwick',
      'Lampent',
      'Chandelure',
      'Axew',
      'Fraxure',
      'Haxorus',
      'Cubchoo',
      'Beartic',
      'Cryogonal',
      'Shelmet',
      'Accelgor',
      'Stunfisk',
      'Stunfisk-galar',
      'Mienfoo',
      'Mienshao',
      'Druddigon',
      'Golett',
      'Golurk',
      'Pawniard',
      'Bisharp',
      'Bouffalant',
      'Rufflet',
      'Braviary',
      'Braviary-hisui',
      'Vullaby',
      'Mandibuzz',
      'Heatmor',
      'Durant',
      'Deino',
      'Zweilous',
      'Hydreigon',
      'Larvesta',
      'Volcarona',
      'Cobalion',
      'Terrakion',
      'Virizion',
      'Tornadus',
      'Tornadus-therian',
      'Thundurus',
      'Thundurus-therian',
      'Reshiram',
      'Zekrom',
      'Landorus',
      'Landorus-therian',
      'Kyurem',
      'Kyurem-black',
      'Kyurem-white',
      'Keldeo',
      'Keldeo-resolute',
      'Meloetta',
      'Meloetta-pirouette',
      'Genesect',
      'Genesect-douse',
      'Genesect-shock',
      'Genesect-burn',
      'Genesect-chill',
      'Chespin',
      'Quilladin',
      'Chesnaught',
      'Fennekin',
      'Braixen',
      'Delphox',
      'Froakie',
      'Frogadier',
      'Greninja',
      'Greninja-ash',
      'Bunnelby',
      'Diggersby',
      'Fletchling',
      'Fletchinder',
      'Talonflame',
      'Scatterbug',
      'Spewpa',
      'Vivillon',
      'Vivillon-fancy',
      'Vivillon-pokeball',
      'Litleo',
      'Pyroar',
      'Flabebe',
      'Floette',
      'Floette-eternal',
      'Florges',
      'Skiddo',
      'Gogoat',
      'Pancham',
      'Pangoro',
      'Furfrou',
      'Espurr',
      'Meowstic',
      'Meowstic-f',
      'Honedge',
      'Doublade',
      'Aegislash',
      'Aegislash-blade',
      'Spritzee',
      'Aromatisse',
      'Swirlix',
      'Slurpuff',
      'Inkay',
      'Malamar',
      'Binacle',
      'Barbaracle',
      'Skrelp',
      'Dragalge',
      'Clauncher',
      'Clawitzer',
      'Helioptile',
      'Heliolisk',
      'Tyrunt',
      'Tyrantrum',
      'Amaura',
      'Aurorus',
      'Sylveon',
      'Hawlucha',
      'Dedenne',
      'Carbink',
      'Goomy',
      'Sliggoo',
      'Sliggoo-hisui',
      'Goodra',
      'Goodra-hisui',
      'Klefki',
      'Phantump',
      'Trevenant',
      'Pumpkaboo',
      'Pumpkaboo-small',
      'Pumpkaboo-large',
      'Pumpkaboo-super',
      'Gourgeist',
      'Gourgeist-small',
      'Gourgeist-large',
      'Gourgeist-super',
      'Bergmite',
      'Avalugg',
      'Avalugg-hisui',
      'Noibat',
      'Noivern',
      'Xerneas',
      'Xerneas-neutral',
      'Yveltal',
      'Zygarde',
      'Zygarde-10',
      'Zygarde-complete',
      'Diancie',
      'Diancie-mega',
      'Hoopa',
      'Hoopa-unbound',
      'Volcanion',
      'Rowlet',
      'Dartrix',
      'Decidueye',
      'Decidueye-hisui',
      'Litten',
      'Torracat',
      'Incineroar',
      'Popplio',
      'Brionne',
      'Primarina',
      'Pikipek',
      'Trumbeak',
      'Toucannon',
      'Yungoos',
      'Gumshoos',
      'Gumshoos-totem',
      'Grubbin',
      'Charjabug',
      'Vikavolt',
      'Vikavolt-totem',
      'Crabrawler',
      'Crabominable',
      'Oricorio',
      'Oricorio-pom-pom',
      "Oricorio-pa'u",
      'Oricorio-sensu',
      'Cutiefly',
      'Ribombee',
      'Ribombee-totem',
      'Rockruff',
      'Lycanroc',
      'Lycanroc-midnight',
      'Lycanroc-dusk',
      'Wishiwashi',
      'Wishiwashi-school',
      'Mareanie',
      'Toxapex',
      'Mudbray',
      'Mudsdale',
      'Dewpider',
      'Araquanid',
      'Araquanid-totem',
      'Fomantis',
      'Lurantis',
      'Lurantis-totem',
      'Morelull',
      'Shiinotic',
      'Salandit',
      'Salazzle',
      'Salazzle-totem',
      'Stufful',
      'Bewear',
      'Bounsweet',
      'Steenee',
      'Tsareena',
      'Comfey',
      'Oranguru',
      'Passimian',
      'Wimpod',
      'Golisopod',
      'Sandygast',
      'Palossand',
      'Pyukumuku',
      'Type: Null',
      'Silvally',
      'Silvally-bug',
      'Silvally-dark',
      'Silvally-dragon',
      'Silvally-electric',
      'Silvally-fairy',
      'Silvally-fighting',
      'Silvally-fire',
      'Silvally-flying',
      'Silvally-ghost',
      'Silvally-grass',
      'Silvally-ground',
      'Silvally-ice',
      'Silvally-poison',
      'Silvally-psychic',
      'Silvally-rock',
      'Silvally-steel',
      'Silvally-water',
      'Minior',
      'Minior-meteor',
      'Komala',
      'Turtonator',
      'Togedemaru',
      'Togedemaru-totem',
      'Mimikyu',
      'Mimikyu-busted',
      'Mimikyu-totem',
      'Mimikyu-busted-totem',
      'Bruxish',
      'Drampa',
      'Dhelmise',
      'Jangmo-o',
      'Hakamo-o',
      'Kommo-o',
      'Kommo-o-totem',
      'Tapu Koko',
      'Tapu Lele',
      'Tapu Bulu',
      'Tapu Fini',
      'Cosmog',
      'Cosmoem',
      'Solgaleo',
      'Lunala',
      'Nihilego',
      'Buzzwole',
      'Pheromosa',
      'Xurkitree',
      'Celesteela',
      'Kartana',
      'Guzzlord',
      'Necrozma',
      'Necrozma-dusk-mane',
      'Necrozma-dawn-wings',
      'Necrozma-ultra',
      'Magearna',
      'Magearna-original',
      'Marshadow',
      'Poipole',
      'Naganadel',
      'Stakataka',
      'Blacephalon',
      'Zeraora',
      'Meltan',
      'Melmetal',
      'Melmetal-gmax',
      'Grookey',
      'Thwackey',
      'Rillaboom',
      'Rillaboom-gmax',
      'Scorbunny',
      'Raboot',
      'Cinderace',
      'Cinderace-gmax',
      'Sobble',
      'Drizzile',
      'Inteleon',
      'Inteleon-gmax',
      'Skwovet',
      'Greedent',
      'Rookidee',
      'Corvisquire',
      'Corviknight',
      'Corviknight-gmax',
      'Blipbug',
      'Dottler',
      'Orbeetle',
      'Orbeetle-gmax',
      'Nickit',
      'Thievul',
      'Gossifleur',
      'Eldegoss',
      'Wooloo',
      'Dubwool',
      'Chewtle',
      'Drednaw',
      'Drednaw-gmax',
      'Yamper',
      'Boltund',
      'Rolycoly',
      'Carkol',
      'Coalossal',
      'Coalossal-gmax',
      'Applin',
      'Flapple',
      'Flapple-gmax',
      'Appletun',
      'Appletun-gmax',
      'Silicobra',
      'Sandaconda',
      'Sandaconda-gmax',
      'Cramorant',
      'Cramorant-gulping',
      'Cramorant-gorging',
      'Arrokuda',
      'Barraskewda',
      'Toxel',
      'Toxtricity',
      'Toxtricity-low-key',
      'Toxtricity-gmax',
      'Toxtricity-low-key-gmax',
      'Sizzlipede',
      'Centiskorch',
      'Centiskorch-gmax',
      'Clobbopus',
      'Grapploct',
      'Sinistea',
      'Sinistea-antique',
      'Polteageist',
      'Polteageist-antique',
      'Hatenna',
      'Hattrem',
      'Hatterene',
      'Hatterene-gmax',
      'Impidimp',
      'Morgrem',
      'Grimmsnarl',
      'Grimmsnarl-gmax',
      'Obstagoon',
      'Perrserker',
      'Cursola',
      "Sirfetch'd",
      'Mr. Rime',
      'Runerigus',
      'Milcery',
      'Alcremie',
      'Alcremie-gmax',
      'Falinks',
      'Pincurchin',
      'Snom',
      'Frosmoth',
      'Stonjourner',
      'Eiscue',
      'Eiscue-noice',
      'Indeedee',
      'Indeedee-f',
      'Morpeko',
      'Morpeko-hangry',
      'Cufant',
      'Copperajah',
      'Copperajah-gmax',
      'Dracozolt',
      'Arctozolt',
      'Dracovish',
      'Arctovish',
      'Duraludon',
      'Duraludon-gmax',
      'Dreepy',
      'Drakloak',
      'Dragapult',
      'Zacian',
      'Zacian-crowned',
      'Zamazenta',
      'Zamazenta-crowned',
      'Eternatus',
      'Eternatus-eternamax',
      'Kubfu',
      'Urshifu',
      'Urshifu-rapid-strike',
      'Urshifu-gmax',
      'Urshifu-rapid-strike-gmax',
      'Zarude',
      'Zarude-dada',
      'Regieleki',
      'Regidrago',
      'Glastrier',
      'Spectrier',
      'Calyrex',
      'Calyrex-ice',
      'Calyrex-shadow',
      'Wyrdeer',
      'Kleavor',
      'Ursaluna',
      'Basculegion',
      'Basculegion',
      'Sneasler',
      'Overqwil',
      'Enamorus',
      'Enamorus-therian',
      'Pokestar Smeargle',
      'Pokestar Ufo',
      'Pokestar Ufo-2',
      'Pokestar Brycen-man',
      'Pokestar Mt',
      'Pokestar Mt2',
      'Pokestar Transport',
      'Pokestar Giant',
      'Pokestar Humanoid',
      'Pokestar Monster',
      'Pokestar F-00',
      'Pokestar F-002',
      'Pokestar Spirit',
      'Pokestar Black Door',
      'Pokestar White Door',
      'Pokestar Black Belt',
      'Pokestar Ufo-propu2'
    ]);
  });
});
