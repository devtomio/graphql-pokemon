import GraphQLCollection from '../utils/GraphQLCollection';

/** Aliases for Pokémon */
export const pokedexAliases = new GraphQLCollection<string, string>([
  ['aboma', 'abomasnow'],
  ['aegi', 'aegislash'],
  ['aegiblade', 'aegislashblade'],
  ['aegis', 'aegislash'],
  ['aegislashs', 'aegislash'],
  ['aegislashshield', 'aegislash'],
  ['aero', 'aerodactyl'],
  ['alolandiglett', 'diglettalola'],
  ['alolandugtrio', 'dugtrioalola'],
  ['alolanexeggutor', 'exeggutoralola'],
  ['alolangeodude', 'geodudealola'],
  ['alolangolem', 'golemalola'],
  ['alolangraveler', 'graveleralola'],
  ['alolangrimer', 'grimeralola'],
  ['alolanmarowak', 'marowakalola'],
  ['alolanmeowth', 'meowthalola'],
  ['alolanmuk', 'mukalola'],
  ['alolanninetales', 'ninetalesalola'],
  ['alolanpersian', 'persianalola'],
  ['alolanraichu', 'raichualola'],
  ['alolanraticate', 'raticatealola'],
  ['alolanrattata', 'rattataalola'],
  ['alolansandshrew', 'sandshrewalola'],
  ['alolansandslash', 'sandslashalola'],
  ['alolanvulpix', 'vulpixalola'],
  ['amph', 'ampharos'],
  ['araquanidt', 'araquanidtotem'],
  ['arc', 'arceus'],
  ['arcbug', 'arceusbug'],
  ['arcdark', 'arceusdark'],
  ['arcdragon', 'arceusdragon'],
  ['arcelectric', 'arceuselectric'],
  ['arceusnormal', 'arceus'],
  ['arcfairy', 'arceusfairy'],
  ['arcfighting', 'arceusfighting'],
  ['arcfire', 'arceusfire'],
  ['arcflying', 'arceusflying'],
  ['arcghost', 'arceusghost'],
  ['arcgrass', 'arceusgrass'],
  ['arcground', 'arceusground'],
  ['arcice', 'arceusice'],
  ['arcpoison', 'arceuspoison'],
  ['arcpsychic', 'arceuspsychic'],
  ['arcrock', 'arceusrock'],
  ['arcsteel', 'arceussteel'],
  ['arcwater', 'arceuswater'],
  ['ashgren', 'greninjaash'],
  ['ashgreninja', 'greninjaash'],
  ['azu', 'azumarill'],
  ['baconbird', 'yveltal'],
  ['basculinb', 'basculinbluestriped'],
  ['basculinblue', 'basculinbluestriped'],
  ['basculinbluestripe', 'basculinbluestriped'],
  ['basculinr', 'basculin'],
  ['basculinred', 'basculin'],
  ['basculinredstripe', 'basculin'],
  ['basculinredstriped', 'basculin'],
  ['bdrill', 'beedrill'],
  ['bee', 'beedrill'],
  ['bert', 'sawk'],
  ['birdjesus', 'pidgeot'],
  ['blace', 'blacephalon'],
  ['blackbeltprop', 'pokestarblackbelt'],
  ['blackdoor', 'pokestarblackdoor'],
  ['blackdoorprop', 'pokestarblackdoor'],
  ['bliss', 'blissey'],
  ['brycen', 'pokestarbrycenman'],
  ['brycenman', 'pokestarbrycenman'],
  ['brycenmanprop', 'pokestarbrycenman'],
  ['bugceus', 'arceusbug'],
  ['bulbapedia', 'bulbasaur'],
  ['bulu', 'tapubulu'],
  ['burmygrass', 'burmy'],
  ['burmyplant', 'burmy'],
  ['burmysandy', 'burmy'],
  ['burmytrash', 'burmy'],
  ['calyrexice', 'calyrexice'],
  ['calyrexshadow', 'calyrexshadow'],
  ['camel', 'camerupt'],
  ['castformfire', 'castformsunny'],
  ['castformh', 'castformsnowy'],
  ['castformice', 'castformsnowy'],
  ['castformr', 'castformrainy'],
  ['castforms', 'castformsunny'],
  ['castformwater', 'castformrainy'],
  ['cathy', 'trevenant'],
  ['chandy', 'chandelure'],
  ['cherrimo', 'cherrim'],
  ['cherrimovercast', 'cherrim'],
  ['cherrims', 'cherrimsunshine'],
  ['cherrimsunny', 'cherrimsunshine'],
  ['chomp', 'garchomp'],
  ['clef', 'clefable'],
  ['coba', 'cobalion'],
  ['cofag', 'cofagrigus'],
  ['conk', 'conkeldurr'],
  ['cress', 'cresselia'],
  ['cube', 'kyuremblack'],
  ['cune', 'suicune'],
  ['darkceus', 'arceusdark'],
  ['darm', 'darmanitan'],
  ['darmanitangalarzen', 'darmanitangalarzen'],
  ['darmanitans', 'darmanitan'],
  ['darmanitanstandard', 'darmanitan'],
  ['darmanitanstandardmode', 'darmanitan'],
  ['darmanitanz', 'darmanitanzen'],
  ['darmanitanzengalar', 'darmanitangalarzen'],
  ['darmanitanzenmode', 'darmanitanzen'],
  ['darmgz', 'darmanitangalarzen'],
  ['dawnwings', 'necrozmadawnwings'],
  ['dawnwingsnecrozma', 'necrozmadawnwings'],
  ['deerlingautumn', 'deerling'],
  ['deerlingspring', 'deerling'],
  ['deerlingsummer', 'deerling'],
  ['deerlingwinter', 'deerling'],
  ['deoa', 'deoxysattack'],
  ['deod', 'deoxysdefense'],
  ['deon', 'deoxys'],
  ['deos', 'deoxysspeed'],
  ['deoxysa', 'deoxysattack'],
  ['deoxysd', 'deoxysdefense'],
  ['deoxysdefence', 'deoxysdefense'],
  ['deoxysnormal', 'deoxys'],
  ['deoxyss', 'deoxysspeed'],
  ['digletta', 'diglettalola'],
  ['dnite', 'dragonite'],
  ['dogars', 'koffing'],
  ['don', 'groudon'],
  ['dragonceus', 'arceusdragon'],
  ['drill', 'excadrill'],
  ['driller', 'excadrill'],
  ['dug', 'dugtrio'],
  ['duggy', 'dugtrio'],
  ['dugtrioa', 'dugtrioalola'],
  ['duskmane', 'necrozmaduskmane'],
  ['duskmanenecrozma', 'necrozmaduskmane'],
  ['eiscuen', 'eiscuenoice'],
  ['ekiller', 'arceus'],
  ['eleceus', 'arceuselectric'],
  ['entermax enternatus', 'eternatuseternamax'],
  ['ernie', 'throh'],
  ['esca', 'escavalier'],
  ['eternalfloette', 'floetteeternal'],
  ['exeggutora', 'exeggutoralola'],
  ['externamax', 'eternatuseternamax'],
  ['f00', 'pokestarf00'],
  ['f002', 'pokestarf002'],
  ['f002prop', 'pokestarf002'],
  ['f00prop', 'pokestarf00'],
  ['fairyceus', 'arceusfairy'],
  ['favna', 'dragonite'],
  ['ferro', 'ferrothorn'],
  ['fightceus', 'arceusfighting'],
  ['fini', 'tapufini'],
  ['fireceus', 'arceusfire'],
  ['flabb', 'flabebe'],
  ['flabbblue', 'flabebe'],
  ['flabborange', 'flabebe'],
  ['flabbred', 'flabebe'],
  ['flabbwhite', 'flabebe'],
  ['flabbyellow', 'flabebe'],
  ['flabebeblue', 'flabebe'],
  ['flabebeorange', 'flabebe'],
  ['flabebered', 'flabebe'],
  ['flabebewhite', 'flabebe'],
  ['flabebeyellow', 'flabebe'],
  ['floetteblue', 'floette'],
  ['floettee', 'floetteeternal'],
  ['floetteeternalflower', 'floetteeternal'],
  ['floetteorange', 'floette'],
  ['floettered', 'floette'],
  ['floettewhite', 'floette'],
  ['floetteyellow', 'floette'],
  ['florgesblue', 'florges'],
  ['florgesorange', 'florges'],
  ['florgesred', 'florges'],
  ['florgeswhite', 'florges'],
  ['florgesyellow', 'florges'],
  ['flyceus', 'arceusflying'],
  ['forry', 'forretress'],
  ['fug', 'rayquaza'],
  ['gar', 'gengar'],
  ['garde', 'gardevoir'],
  ['gastrodone', 'gastrodon'],
  ['gastrodoneast', 'gastrodon'],
  ['gastrodoneastsea', 'gastrodon'],
  ['gastrodonw', 'gastrodon'],
  ['gastrodonwest', 'gastrodon'],
  ['gastrodonwestsea', 'gastrodon'],
  ['gatr', 'feraligatr'],
  ['gene', 'genesect'],
  ['geodudea', 'geodudealola'],
  ['ghostceus', 'arceusghost'],
  ['giant', 'pokestargiant'],
  ['giant2', 'pokestargiant'],
  ['giantpropo1', 'pokestargiant'],
  ['giantpropo2', 'pokestargiant'],
  ['gigantamax alcremie', 'alcremiegmax'],
  ['gigantamax appletun', 'appletungmax'],
  ['gigantamax butterfree', 'butterfreegmax'],
  ['gigantamax centiskorch', 'centiskorchgmax'],
  ['gigantamax charizard', 'charizardgmax'],
  ['gigantamax coalossal', 'coalossalgmax'],
  ['gigantamax copperajah', 'copperajahgmax'],
  ['gigantamax corviknight', 'corviknightgmax'],
  ['gigantamax drednaw', 'drednawgmax'],
  ['gigantamax duraludon', 'duraludongmax'],
  ['gigantamax eevee', 'eeveegmax'],
  ['gigantamax enternatus', 'eternatuseternamax'],
  ['gigantamax flapple', 'flapplegmax'],
  ['gigantamax garbodor', 'garbodorgmax'],
  ['gigantamax gengar', 'gengargmax'],
  ['gigantamax grimmsnarl', 'grimmsnarlgmax'],
  ['gigantamax hatterene', 'hatterenegmax'],
  ['gigantamax kingler', 'kinglergmax'],
  ['gigantamax lapras', 'laprasgmax'],
  ['gigantamax machamp', 'machampgmax'],
  ['gigantamax melmetal', 'melmetalgmax'],
  ['gigantamax meowth', 'meowthgmax'],
  ['gigantamax orbeetle', 'orbeetlegmax'],
  ['gigantamax pikachu', 'pikachugmax'],
  ['gigantamax sandaconda', 'sandacondagmax'],
  ['gigantamax snorlax', 'snorlaxgmax'],
  ['gigantamax toxtricity', 'toxtricitygmax'],
  ['gira', 'giratina'],
  ['girao', 'giratinaorigin'],
  ['giratinaa', 'giratina'],
  ['giratinaaltered', 'giratina'],
  ['giratinao', 'giratinaorigin'],
  ['golema', 'golemalola'],
  ['goon', 'obstagoon'],
  ['gourgeistaverage', 'gourgeist'],
  ['gourgeisth', 'gourgeistsuper'],
  ['gourgeisthuge', 'gourgeistsuper'],
  ['gourgeistl', 'gourgeistlarge'],
  ['gourgeists', 'gourgeistsmall'],
  ['gourgeistxl', 'gourgeistsuper'],
  ['grassceus', 'arceusgrass'],
  ['gravelera', 'graveleralola'],
  ['gren', 'greninja'],
  ['grimera', 'grimeralola'],
  ['gross', 'metagross'],
  ['groundceus', 'arceusground'],
  ['gumshoost', 'gumshoostotem'],
  ['gyara', 'gyarados'],
  ['hera', 'heracross'],
  ['hippo', 'hippowdon'],
  ['ho-oh', 'hooh'],
  ['honch', 'honchkrow'],
  ['hoopac', 'hoopa'],
  ['hoopaconfined', 'hoopa'],
  ['hoopau', 'hoopaunbound'],
  ['humanoidprop', 'pokestarhumanoid'],
  ['iceceus', 'arceusice'],
  ['kanga', 'kangaskhan'],
  ['karp', 'magikarp'],
  ['keld', 'keldeo'],
  ['keldeoo', 'keldeo'],
  ['keldeoordinary', 'keldeo'],
  ['keldeor', 'keldeoresolute'],
  ['keldeoresolution', 'keldeoresolute'],
  ['klef', 'klefki'],
  ['koko', 'tapukoko'],
  ['kommoot', 'kommoototem'],
  ['kou', 'raikou'],
  ['krook', 'krookodile'],
  ['kyra', 'victini'],
  ['kyub', 'kyuremblack'],
  ['kyuremb', 'kyuremblack'],
  ['kyuremw', 'kyuremwhite'],
  ['kyuw', 'kyuremwhite'],
  ['lando', 'landorus'],
  ['landoi', 'landorus'],
  ['landorusi', 'landorus'],
  ['landorusincarnate', 'landorus'],
  ['landorusincarnation', 'landorus'],
  ['landorust', 'landorustherian'],
  ['landot', 'landorustherian'],
  ['lele', 'tapulele'],
  ['linda', 'fletchinder'],
  ['luke', 'lucario'],
  ['lurantist', 'lurantistotem'],
  ['lurk', 'golurk'],
  ['lycanrocd', 'lycanrocdusk'],
  ['lycanrocday', 'lycanroc'],
  ['lycanrocmidday', 'lycanroc'],
  ['lycanrocn', 'lycanrocmidnight'],
  ['lycanrocnight', 'lycanrocmidnight'],
  ['m00', 'missingno'],
  ['maero', 'aerodactylmega'],
  ['mage', 'magearna'],
  ['majin', 'pokestarspirit'],
  ['mamo', 'mamoswine'],
  ['mandi', 'mandibuzz'],
  ['marowaka', 'marowakalola'],
  ['marowakt', 'marowakalolatotem'],
  ['megaaero', 'aerodactylmega'],
  ['megabee', 'beedrillmega'],
  ['megabro', 'slowbromega'],
  ['megabunny', 'lopunnymega'],
  ['megacharizard', 'charizardmegay'],
  ['megacharizardx', 'charizardmegax'],
  ['megacharizardy', 'charizardmegay'],
  ['megacross', 'heracrossmega'],
  ['megadoom', 'houndoommega'],
  ['megadrill', 'beedrillmega'],
  ['megagard', 'gardevoirmega'],
  ['megagarde', 'gardevoirmega'],
  ['megagross', 'metagrossmega'],
  ['megahera', 'heracrossmega'],
  ['megakanga', 'kangaskhanmega'],
  ['megakhan', 'kangaskhanmega'],
  ['megalop', 'lopunnymega'],
  ['megaluc', 'lucariomega'],
  ['megaluke', 'lucariomega'],
  ['megamaw', 'mawilemega'],
  ['megamedi', 'medichammega'],
  ['megamence', 'salamencemega'],
  ['megamewtwo', 'mewtwomegay'],
  ['megamewtwox', 'mewtwomegax'],
  ['megamewtwoy', 'mewtwomegay'],
  ['megaobama', 'abomasnowmega'],
  ['megapert', 'swampertmega'],
  ['megaray', 'rayquazamega'],
  ['megasab', 'sableyemega'],
  ['megasable', 'sableyemega'],
  ['megasaur', 'venusaurmega'],
  ['megascept', 'sceptilemega'],
  ['megashark', 'sharpedomega'],
  ['megasnow', 'abomasnowmega'],
  ['megattar', 'tyranitarmega'],
  ['megavenu', 'venusaurmega'],
  ['megazam', 'alakazammega'],
  ['megazardx', 'charizardmegax'],
  ['megazardy', 'charizardmegay'],
  ['meloettaa', 'meloetta'],
  ['meloettaaria', 'meloetta'],
  ['meloettap', 'meloettapirouette'],
  ['meloettas', 'meloettapirouette'],
  ['meloettastep', 'meloettapirouette'],
  ['meloettavoice', 'meloetta'],
  ['mence', 'salamence'],
  ['mene', 'cosmog'],
  ['meowsticfemale', 'meowsticf'],
  ['meowsticm', 'meowstic'],
  ['meowsticmale', 'meowstic'],
  ['meowtha', 'meowthalola'],
  ['mgar', 'gengarmega'],
  ['mgross', 'metagrossmega'],
  ['milo', 'milotic'],
  ['mime jr.', 'mimejr'],
  ['mime jr', 'mimejr'],
  ['mime junior', 'mimejr'],
  ['mimikyut', 'mimikyutotem'],
  ['miniorblue', 'minior'],
  ['miniorgreen', 'minior'],
  ['miniorindigo', 'minior'],
  ['miniororange', 'minior'],
  ['miniorred', 'minior'],
  ['miniorviolet', 'minior'],
  ['minioryellow', 'minior'],
  ['mister mime', 'mrmime'],
  ['mmx', 'mewtwomegax'],
  ['mmy', 'mewtwomegay'],
  ['monica', 'pokestargiant'],
  ['monica2', 'pokestargiant'],
  ['monsterprop', 'pokestarmonster'],
  ['morfentshusbando', 'gengar'],
  ['morpekoh', 'MorpekoHangry'],
  ['mr mime', 'mrmime'],
  ['mr. mime', 'mrmime'],
  ['mray', 'rayquazamega'],
  ['mrmime', 'mrmime'],
  ['mt', 'pokestarmt'],
  ['mt2', 'pokestarmt2'],
  ['mt2prop', 'pokestarmt2'],
  ['mtprop', 'pokestarmt'],
  ['muka', 'mukalola'],
  ['muricabird', 'braviary'],
  ['mzor', 'scizormega'],
  ['naga', 'naganadel'],
  ['nape', 'infernape'],
  ['nebby', 'cosmog'],
  ['neckboy', 'exeggutoralola'],
  ['necrozma dawn wings', 'necrozmadawnwings'],
  ['necrozma dawn', 'necrozmadawnwings'],
  ['necrozma dusk mane', 'necrozmaduskmane'],
  ['necrozma dusk', 'necrozmaduskmane'],
  ['necrozma-dawn-wings', 'necrozmadawnwings'],
  ['necrozma-dawn', 'necrozmadawnwings'],
  ['necrozma-dusk-mane', 'necrozmaduskmane'],
  ['necrozma-dusk', 'necrozmaduskmane'],
  ['necrozmadawn', 'necrozmadawnwings'],
  ['necrozmadm', 'necrozmaduskmane'],
  ['necrozmadusk', 'necrozmaduskmane'],
  ['necrozmadw', 'necrozmadawnwings'],
  ['necrozmau', 'necrozmaultra'],
  ['nidoranfemale', 'nidoranf'],
  ['nidoranmale', 'nidoranm'],
  ['ninetalesa', 'ninetalesalola'],
  ['obama', 'abomasnow'],
  ['ogre', 'kyogre'],
  ['ohmagod', 'plasmanta'],
  ['oricoriob', 'oricorio'],
  ['oricoriobaile', 'oricorio'],
  ['oricorioe', 'oricoriopompom'],
  ['oricorioelectric', 'oricoriopompom'],
  ['oricoriof', 'oricorio'],
  ['oricoriofire', 'oricorio'],
  ['oricoriog', 'oricoriosensu'],
  ['oricorioghost', 'oricoriosensu'],
  ['oricoriop', 'oricoriopau'],
  ['oricoriopsychic', 'oricoriopau'],
  ['oricorios', 'oricoriosensu'],
  ['p2', 'porygon2'],
  ['pdon', 'groudonprimal'],
  ['perfectzygarde', 'zygardecomplete'],
  ['persiana', 'persianalola'],
  ['pert', 'swampert'],
  ['pex', 'toxapex'],
  ['phero', 'pheromosa'],
  ['pika', 'pikachu'],
  ['pikachu doctor', 'pikachuphd'],
  ['pikachu kanto', 'pikachuoriginal'],
  ['pogre', 'kyogreprimal'],
  ['poisonceus', 'arceuspoison'],
  ['pokestarblackbeltprop', 'pokestarblackbelt'],
  ['pokestarblackdoorprop', 'pokestarblackdoor'],
  ['pokestarbrycenmanprop', 'pokestarbrycenman'],
  ['pokestarf002prop', 'pokestarf002'],
  ['pokestarf00prop', 'pokestarf00'],
  ['pokestargiant2', 'pokestargiant'],
  ['pokestargiantpropo1', 'pokestargiant'],
  ['pokestargiantpropo2', 'pokestargiant'],
  ['pokestarhumanoidprop', 'pokestarhumanoid'],
  ['pokestarmonica2', 'pokestargiant'],
  ['pokestarmonsterprop', 'pokestarmonster'],
  ['pokestarmt2prop', 'pokestarmt2'],
  ['pokestarmtprop', 'pokestarmt'],
  ['pokestarpropc1', 'pokestarhumanoid'],
  ['pokestarpropc2', 'pokestarmonster'],
  ['pokestarpropg1', 'pokestarspirit'],
  ['pokestarproph1', 'pokestarbrycenman'],
  ['pokestarpropk1', 'pokestarblackbelt'],
  ['pokestarpropm1', 'pokestarmt'],
  ['pokestarpropm2', 'pokestarmt2'],
  ['pokestarpropo1', 'pokestargiant'],
  ['pokestarpropo2', 'pokestargiant'],
  ['pokestarpropr1', 'pokestarf00'],
  ['pokestarpropr2', 'pokestarf002'],
  ['pokestarpropt1', 'pokestartransport'],
  ['pokestarpropu1', 'pokestarufo'],
  ['pokestarpropu2', 'pokestarufo2'],
  ['pokestarpropw1', 'pokestarblackdoor'],
  ['pokestarpropw2', 'pokestarwhitedoor'],
  ['pokestarspiritprop', 'pokestarspirit'],
  ['pokestartransportprop', 'pokestartransport'],
  ['pokestarufof', 'pokestarufo'],
  ['pokestarufoflying', 'pokestarufo'],
  ['pokestarufopropu1', 'pokestarufo'],
  ['pokestarwhitedoorprop', 'pokestarwhitedoor'],
  ['pory2', 'porygon2'],
  ['poryz', 'porygonz'],
  ['primaldon', 'groudonprimal'],
  ['primalogre', 'kyogreprimal'],
  ['propc1', 'pokestarhumanoid'],
  ['propc2', 'pokestarmonster'],
  ['propg1', 'pokestarspirit'],
  ['proph1', 'pokestarbrycenman'],
  ['propk1', 'pokestarblackbelt'],
  ['propm1', 'pokestarmt'],
  ['propm2', 'pokestarmt2'],
  ['propo1', 'pokestargiant'],
  ['propo2', 'pokestargiant'],
  ['propr1', 'pokestarf00'],
  ['propr2', 'pokestarf002'],
  ['propt1', 'pokestartransport'],
  ['propu1', 'pokestarufo'],
  ['propu2', 'pokestarufo2'],
  ['propw1', 'pokestarblack Door'],
  ['propw2', 'pokestarwhitedoor'],
  ['psyceus', 'arceuspsychic'],
  ['pumpkabooaverage', 'pumpkaboo'],
  ['pumpkaboohuge', 'PumpkabooSuper'],
  ['pyuku', 'pyukumuku'],
  ['pz', 'porygonz'],
  ['queen', 'nidoqueen'],
  ['rachi', 'jirachi'],
  ['raichua', 'raichualola'],
  ['rank', 'reuniclus'],
  ['raticatea', 'raticatealola'],
  ['raticatet', 'raticatealolatotem'],
  ['rattataa', 'rattataalola'],
  ['ray', 'rayquaza'],
  ['reuni', 'reuniclus'],
  ['ribombeet', 'ribombeetotem'],
  ['rime', 'mrrime'],
  ['rockceus', 'arceusrock'],
  ['rockruffdusk', 'rockruff'],
  ['rotomc', 'rotommow'],
  ['rotomcut', 'rotommow'],
  ['rotomf', 'rotomfrost'],
  ['rotomh', 'rotomheat'],
  ['rotoms', 'rotomfan'],
  ['rotomspin', 'rotomfan'],
  ['rotomw', 'rotomwash'],
  ['sab', 'sableye'],
  ['sable', 'sableye'],
  ['salazzlet', 'salazzletotem'],
  ['sandshrewa', 'sandshrewalola'],
  ['sandslasha', 'sandslashalola'],
  ['sawsbuckautumn', 'sawsbuck'],
  ['sawsbuckspring', 'sawsbuck'],
  ['sawsbucksummer', 'sawsbuck'],
  ['sawsbuckwinter', 'sawsbuck'],
  ['scept', 'sceptile'],
  ['scoli', 'scolipede'],
  ['serebii', 'celebi'],
  ['serp', 'serperior'],
  ['shao', 'mienshao'],
  ['shayminl', 'shaymin'],
  ['shayminland', 'shaymin'],
  ['shaymins', 'shayminsky'],
  ['shelloseast', 'shellos'],
  ['shelloswest', 'shellos'],
  ['shep', 'ampharosmega'],
  ['shrek', 'kyogre'],
  ['skarm', 'skarmory'],
  ['skymin', 'shayminsky'],
  ['smogon', 'koffing'],
  ['smogonbird', 'talonflame'],
  ['spirit', 'pokestarspirit'],
  ['spiritprop', 'pokestarspirit'],
  ['steelceus', 'arceussteel'],
  ['sui', 'suicune'],
  ['talon', 'talonflame'],
  ['tang', 'tangrowth'],
  ['tapu bulu', 'tapubulu'],
  ['tapu fini', 'tapufini'],
  ['tapu koko', 'tapukoko'],
  ['tapu lele', 'tapulele'],
  ['terra', 'terrakion'],
  ['tflame', 'talonflame'],
  ['thundurusi', 'thundurus'],
  ['thundurusincarnate', 'thundurus'],
  ['thundurusincarnation', 'thundurus'],
  ['thundurust', 'thundurustherian'],
  ['thundy', 'thundurus'],
  ['thundyt', 'thundurustherian'],
  ['toed', 'politoed'],
  ['torn', 'tornadus'],
  ['tornadusi', 'tornadus'],
  ['tornadusincarnate', 'tornadus'],
  ['tornadusincarnation', 'tornadus'],
  ['tornadust', 'tornadustherian'],
  ['tornt', 'tornadustherian'],
  ['totemalolanmarowak', 'marowakalolatotem'],
  ['totemalolanraticate', 'raticatealolatotem'],
  ['totemaraquanid', 'araquanidtotem'],
  ['totemgumshoos', 'gumshoostotem'],
  ['totemkommoo', 'kommoototem'],
  ['totemlurantis', 'lurantistotem'],
  ['totemmarowak', 'marowakalolatotem'],
  ['totemmarowaka', 'marowakalolatotem'],
  ['totemmarowakalola', 'marowakalolatotem'],
  ['totemmimikyu', 'mimikyutotem'],
  ['totemraticate', 'raticatealolatotem'],
  ['totemraticatea', 'raticatealolatotem'],
  ['totemraticatealola', 'raticatealolatotem'],
  ['totemribombee', 'ribombeetotem'],
  ['totemsalazzle', 'salazzletotem'],
  ['totemvikavolt', 'vikavolttotem'],
  ['tran', 'heatran'],
  ['transport', 'pokestartransport'],
  ['transportprop', 'pokestartransport'],
  ['ttar', 'tyranitar'],
  ['type null', 'typenull'],
  ['type: null', 'typenull'],
  ['ub01', 'nihilego'],
  ['ub02a', 'buzzwole'],
  ['ub02b', 'pheromosa'],
  ['ub03', 'xurkitree'],
  ['ub04blade', 'kartana'],
  ['ub04blaster', 'celesteela'],
  ['ub05', 'guzzlord'],
  ['ubadhesive', 'poipole'],
  ['ubassembly', 'stakataka'],
  ['ubburst', 'blacephalon'],
  ['ufo', 'pokestarufo'],
  ['ufo2', 'pokestarufo2'],
  ['ufof', 'pokestarufo'],
  ['ufoflying', 'pokestarufo'],
  ['ufop', 'pokestarufo2'],
  ['ufopropu1', 'pokestarufo'],
  ['ufopropu2', 'pokestarufo2'],
  ['ufopsychic', 'pokestarufo2'],
  ['ultranecrozma', 'necrozmaultra'],
  ['urshifurapid', 'urshifurapidstrike'],
  ['urshifurs', 'urshifurapidstrike'],
  ['venu', 'venusaur'],
  ['vikavoltt', 'vikavolttotem'],
  ['viriz', 'virizion'],
  ['vivillonarchipelago', 'vivillon'],
  ['vivilloncontinental', 'vivillon'],
  ['vivillonelegant', 'vivillon'],
  ['vivillongarden', 'vivillon'],
  ['vivillonhighplains', 'vivillon'],
  ['vivillonicysnow', 'vivillon'],
  ['vivillonjungle', 'vivillon'],
  ['vivillonmarine', 'vivillon'],
  ['vivillonmodern', 'vivillon'],
  ['vivillonmonsoon', 'vivillon'],
  ['vivillonocean', 'vivillon'],
  ['vivillonpolar', 'vivillon'],
  ['vivillonriver', 'vivillon'],
  ['vivillonsandstorm', 'vivillon'],
  ['vivillonsavanna', 'vivillon'],
  ['vivillonsun', 'vivillon'],
  ['vivillontundra', 'vivillon'],
  ['vulpixa', 'vulpixalola'],
  ['waterceus', 'arceuswater'],
  ['watershifu', 'urshifurapidstrike'],
  ['whimsi', 'whimsicott'],
  ['whitedoor', 'pokestarwhitedoor'],
  ['whitedoorprop', 'pokestarwhitedoor'],
  ['wishiwashisolo', 'wishiwashi'],
  ['wormadamg', 'wormadamsandy'],
  ['wormadamgrass', 'wormadam'],
  ['wormadamground', 'wormadamsandy'],
  ['wormadamp', 'wormadam'],
  ['wormadamplant', 'wormadam'],
  ['wormadamplantcloak', 'wormadam'],
  ['wormadams', 'wormadamtrash'],
  ['wormadamsandycloak', 'wormadamsandy'],
  ['wormadamsteel', 'wormadamtrash'],
  ['wormadamtrashcloak', 'wormadamtrash'],
  ['xern', 'xerneas'],
  ['xurk', 'xurkitree'],
  ['ygod', 'yveltal'],
  ['zam', 'alakazam'],
  ['zamazentac', 'zamazentacrowned'],
  ['zanianc', 'zaciancrowned'],
  ['zard', 'charizard'],
  ['zardx', 'charizardmegax'],
  ['zardy', 'charizardmegay'],
  ['zong', 'bronzong'],
  ['zor', 'scizor'],
  ['zyc', 'zygardecomplete'],
  ['zydog', 'zygarde10'],
  ['zydoge', 'zygarde10'],
  ['zyg', 'zygarde'],
  ['zygarde100', 'zygardecomplete'],
  ['zygarde50', 'zygarde'],
  ['zygardec', 'zygardecomplete'],
  ['zygardedog', 'zygarde10'],
  ['zygardefull', 'zygardecomplete'],
  ['zygod', 'zygardecomplete']
]);

/** Aliases for Pokémon abilities */
export const abilityAliases = new GraphQLCollection<string, string>([
  ['asoneglastrier', 'asoneasoneglastrier'],
  ['asonespectrier', 'asonespectrier'],
  ['ph', 'poisonheal'],
  ['stag', 'shadowtag']
]);

/** Aliases for Pokémon items */
export const itemAliases = new GraphQLCollection<string, string>([
  ['assvest', 'assaultvest'],
  ['av', 'assaultvest'],
  ['band', 'choiceband'],
  ['boots', 'heavydutyboots'],
  ['cb', 'choiceband'],
  ['chesto', 'chestoberry'],
  ['chople', 'chopleberry'],
  ['custap', 'custapberry'],
  ['ebelt', 'expertbelt'],
  ['fightgem', 'fightinggem'],
  ['flightgem', 'flyinggem'],
  ['goggles', 'safetygoggles'],
  ['hdb', 'heavydutyboots'],
  ['lefties', 'leftovers'],
  ['leppa', 'leppaberry'],
  ['lo', 'lifeorb'],
  ['lorb', 'lifeorb'],
  ['lum', 'lumberry'],
  ['occa', 'occaberry'],
  ['petaya', 'petayaberry'],
  ['salac', 'salacberry'],
  ['sash', 'focussash'],
  ['scarf', 'choicescarf'],
  ['sitrus', 'sitrusberry'],
  ['specs', 'choicespecs'],
  ['wp', 'weaknesspolicy'],
  ['yache', 'yacheberry']
]);

/** Aliases for Pokémon moves */
export const moveAliases = new GraphQLCollection<string, string>([
  ['10mv', '10000000voltthunderbolt'],
  ['10mvt', '10000000voltthunderbolt'],
  ['bb', 'bravebird'],
  ['bd', 'bellydrum'],
  ['bde', 'babydolleyes'],
  ['bp', 'batonpass'],
  ['bpass', 'batonpass'],
  ['cc', 'closecombat'],
  ['clangorous', 'clangoroussoulblaze'],
  ['cm', 'calmmind'],
  ['cs', 'clangoroussoulblaze'],
  ['dbond', 'destinybond'],
  ['dd', 'dragondance'],
  ['dv', 'darkvoid'],
  ['ee', 'extremeevoboost'],
  ['eq', 'earthquake'],
  ['espeed', 'extremespeed'],
  ['extreme', 'extremeevoboost'],
  ['faintattack', 'feintattack'],
  ['genesis', 'genesissupernova'],
  ['glowpunch', 'poweruppunch'],
  ['goa', 'guardianofalola'],
  ['gs', 'genesissupernova'],
  ['guardian', 'guardianofalola'],
  ['hijumpkick', 'highjumpkick'],
  ['hjk', 'highjumpkick'],
  ['hp', 'hiddenpower'],
  ['hpbug', 'hiddenpowerbug'],
  ['hpdark', 'hiddenpowerdark'],
  ['hpdragon', 'hiddenpowerdragon'],
  ['hpelectric', 'hiddenpowerelectric'],
  ['hpfighting', 'hiddenpowerfighting'],
  ['hpfire', 'hiddenpowerfire'],
  ['hpflying', 'hiddenpowerflying'],
  ['hpghost', 'hiddenpowerghost'],
  ['hpgrass', 'hiddenpowergrass'],
  ['hpground', 'hiddenpowerground'],
  ['hpice', 'hiddenpowerice'],
  ['hppoison', 'hiddenpowerpoison'],
  ['hppsychic', 'hiddenpowerpsychic'],
  ['hprock', 'hiddenpowerrock'],
  ['hpsteel', 'hiddenpowersteel'],
  ['hpwater', 'hiddenpowerwater'],
  ['lets', 'letssnuggleforever'],
  ['light', 'lightthatburnsthesky'],
  ['lsf', 'letssnuggleforever'],
  ['ltbts', 'lightthatburnsthesky'],
  ['malicious', 'maliciousmoonsault'],
  ['maxbug', 'maxflutterby'],
  ['maxdark', 'maxdarkness'],
  ['maxdragon', 'maxwyrmwind'],
  ['maxelectric', 'maxlightning'],
  ['maxfairy', 'maxstarfall'],
  ['maxfighting', 'maxknuckle'],
  ['maxfire', 'maxflare'],
  ['maxflying', 'maxairstream'],
  ['maxghost', 'maxphantasm'],
  ['maxgrass', 'maxovergrowth'],
  ['maxground', 'maxquake'],
  ['maxice', 'maxhailstorm'],
  ['maxnormal', 'maxstrike'],
  ['maxpoison', 'maxooze'],
  ['maxprotect', 'maxguard'],
  ['maxpsychic', 'maxmindstorm'],
  ['maxrock', 'maxrockfall'],
  ['maxstatus', 'maxguard'],
  ['maxsteel', 'maxsteelspike'],
  ['maxwater', 'maxgeyser'],
  ['menacing', 'menacingmoonrazemaelstrom'],
  ['mmm', 'menacingmoonrazemaelstrom'],
  ['moonsault', 'maliciousmoonsault'],
  ['np', 'nastyplot'],
  ['oceanic', 'oceanicoperetta'],
  ['oo', 'oceanicoperetta'],
  ['pfists', 'plasmafists'],
  ['playaround', 'playrough'],
  ['pp', 'pulverizingpancake'],
  ['pulverizing', 'pulverizingpancake'],
  ['pup', 'poweruppunch'],
  ['qd', 'quiverdance'],
  ['rocks', 'stealthrock'],
  ['sar', 'sinisterarrowraid'],
  ['sd', 'swordsdance'],
  ['se', 'stoneedge'],
  ['searing', 'searingsunrazesmash'],
  ['sideshellarm', 'shellsidearm'],
  ['sinister', 'sinisterarrowraid'],
  ['soul', 'soulstealing7starstrike'],
  ['soulstealingsevenstarstrike', 'soulstealing7starstrike'],
  ['spin', 'rapidspin'],
  ['splintered', 'splinteredstormshards'],
  ['sr', 'stealthrock'],
  ['ss', 'stokedsparksurfer'],
  ['ss7ss', 'soulstealing7starstrike'],
  ['ssa', 'shellsidearm'],
  ['sss', 'searingsunrazesmash'],
  ['sssss', 'soulstealing7starstrike'],
  ['stoked', 'stokedsparksurfer'],
  ['stormshards', 'splinteredstormshards'],
  ['sub', 'substitute'],
  ['tbolt', 'thunderbolt'],
  ['tr', 'trickroom'],
  ['troom', 'trickroom'],
  ['tspikes', 'toxicspikes'],
  ['twave', 'thunderwave'],
  ['vicegrip', 'visegrip'],
  ['web', 'stickyweb'],
  ['wow', 'willowisp'],
  ['zbug', 'savagespinout'],
  ['zclangingscales', 'clangoroussoulblaze'],
  ['zdark', 'blackholeeclipse'],
  ['zdarkestlariat', 'maliciousmoonsault'],
  ['zdawnwingsnecrozma', 'menacingmoonrazemaelstrom'],
  ['zdecidueye', 'sinisterarrowraid'],
  ['zdragon', 'devastatingdrake'],
  ['zduskmanenecrozma', 'searingsunrazesmash'],
  ['zeevee', 'extremeevoboost'],
  ['zelectric', 'gigavolthavoc'],
  ['zevo', 'extremeevoboost'],
  ['zfairy', 'twinkletackle'],
  ['zfighting', 'alloutpummeling'],
  ['zfire', 'infernooverdrive'],
  ['zflying', 'supersonicskystrike'],
  ['zghost', 'neverendingnightmare'],
  ['zgigaimpact', 'pulverizingpancake'],
  ['zgrass', 'bloomdoom'],
  ['zground', 'tectonicrage'],
  ['zice', 'subzeroslammer'],
  ['zincineroar', 'maliciousmoonsault'],
  ['zkommoo', 'clangoroussoulblaze'],
  ['zlastresort', 'extremeevoboost'],
  ['zlunala', 'menacingmoonrazemaelstrom'],
  ['zlycanroc', 'splinteredstormshards'],
  ['zmarshadow', 'soulstealing7starstrike'],
  ['zmew', 'genesissupernova'],
  ['zmimikyu', 'letssnuggleforever'],
  ['zmoongeistbeam', 'menacingmoonrazemaelstrom'],
  ['znaturesmadness', 'guardiano alola'],
  ['znecrozma', 'lightthatburnsthesky'],
  ['znormal', 'breakneckblitz'],
  ['zphotongeyser', 'lightthatburnsthesky'],
  ['zpikachu', 'catastropika'],
  ['zpikachucap', '10000000voltthunderbolt'],
  ['zplayrough', 'letssnuggleforever'],
  ['zpoison', 'aciddownpour'],
  ['zprimarina', 'oceanicoperetta'],
  ['zpsychic', 'shatteredpsyche'],
  ['zraichu', 'stokedsparksurfer'],
  ['zrock', 'continentalcrush'],
  ['zsnorlax', 'pulverizingpancake'],
  ['zsolgaleo', 'searingsunrazesmash'],
  ['zsparklingaria', 'oceanicoperetta'],
  ['zspectralthief', 'soulstealing7starstrike'],
  ['zspiritshackle', 'sinisterarrowraid'],
  ['zsteel', 'corkscrewcrash'],
  ['zstoneedge', 'splinteredstormshards'],
  ['zsunsteelstrike', 'searingsunrazesmash'],
  ['ztapu', 'guardianofalola'],
  ['zthunderbolt', '10000000voltthunderbolt'],
  ['zultranecrozma', 'lightthatburnsthesky'],
  ['zvolttackle', 'catastropika'],
  ['zwater', 'hydrovortex']
]);
