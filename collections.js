const RABBITS = [
    {
        key: "wizard",
        name: "Wizard",
        code: "Wiz",
        color: "#694DDD",
        id: 0
    },
    {
        key: "assassin",
        name: "Assassin",
        code: "ASS",
        color: "#4C81FF",
        id: 1
    },
    {
        key: "hblade",
        name: "Heavyblade",
        code: "HB",
        color: "#E873A8",
        id: 2
    },
    {
        key: "dancer",
        name: "Dancer",
        code: "Dan",
        color: "#FFE0A1",
        id: 3
    },
    {
        key: "druid",
        name: "Druid",
        code: "Dru",
        color: "#59DF87",
        id: 4
    },
    {
        key: "spellsword",
        itemKey: "spsword",
        code: "SS",
        name: "Spellsword",
        color: "#C268FF",
        id: 5
    },
    {
        key: "sniper",
        name: "Sniper",
        code: "Sni",
        color: "#597BFF",
        id: 6
    },
    {
        key: "bruiser",
        name: "Bruiser",
        code: "Bru",
        color: "#D14040",
        id: 7
    },
    {
        key: "defender",
        name: "Defender",
        code: "Def",
        color: "#FFFAE8",
        id: 8
    },
    {
        key: "ancient",
        name: "Ancient",
        code: "Anc",
        color: "#6DDAA7",
        id: 9
    },
    {
        key: "hammer",
        name: "Hammermaid",
        code: "HM",
        color: "#FFDCE6",
        id: 10
    },
    {
        key: "pyro",
        name: "Pyromancer",
        code: "Pyro",
        color: "#FF6F66",
        id: 11
    },
    {
        key: "gunner",
        name: "Grenadier",
        code: "Gunny",
        color: "#6BFFCD",
        id: 12
    },
    {
        key: "shadow",
        name: "Shadow",
        code: "Sh",
        color: "#9C9C9C",
        id: 13
    },
];

const ITEMS = [
    {
        key: "it_raven_grimoire",
        name: "Raven Grimoire",
        id: "0"
    },
    {
        key: "it_blackwing_staff",
        name: "Blackwing Staff",
        id: "1"
    },
    {
        key: "it_curse_talon",
        name: "Curse Talon",
        id: "2"
    },
    {
        key: "it_darkmagic_blade",
        name: "Darkmagic Blade",
        id: "3"
    },
    {
        key: "it_witchs_cloak",
        name: "Witch's Cloak",
        id: "4"
    },
    {
        key: "it_crowfeather_hairpin",
        name: "Crowfeather Hairpin",
        id: "5"
    },
    {
        key: "it_redblack_ribbon",
        name: "Redblack Ribbon",
        id: "6"
    },
    {
        key: "it_opal_necklace",
        name: "Opal Necklace",
        id: "7"
    },
    {
        key: "it_sleeping_greatbow",
        name: "Sleeping Greatbow",
        id: "8"
    },
    {
        key: "it_crescentmoon_dagger",
        name: "Crescentmoon Dagger",
        id: "9"
    },
    {
        key: "it_lullaby_harp",
        name: "Lullaby Harp",
        id: "10"
    },
    {
        key: "it_nightstar_grimoire",
        name: "Nightstar Grimoire",
        id: "11"
    },
    {
        key: "it_moon_pendant",
        name: "Moon Pendant",
        id: "12"
    },
    {
        key: "it_pajama_hat",
        name: "Pajama Hat",
        id: "13"
    },
    {
        key: "it_stuffed_rabbit",
        name: "Stuffed Rabbit",
        id: "14"
    },
    {
        key: "it_nightingale_gown",
        name: "Nightingale Gown",
        id: "15"
    },
    {
        key: "it_eternity_flute",
        name: "Eternity Flute",
        id: "16"
    },
    {
        key: "it_timewarp_wand",
        name: "Timewarp Wand",
        id: "17"
    },
    {
        key: "it_chrome_shield",
        name: "Chrome Shield",
        id: "18"
    },
    {
        key: "it_clockwork_tome",
        name: "Clockwork Tome",
        id: "19"
    },
    {
        key: "it_haste_boots",
        name: "Metronome Boots",
        id: "20"
    },
    {
        key: "it_timemage_cap",
        name: "Timemage Cap",
        id: "21"
    },
    {
        key: "it_starry_cloak",
        name: "Starry Cloak",
        id: "22"
    },
    {
        key: "it_gemini_necklace",
        name: "Gemini Necklace",
        id: "23"
    },
    {
        key: "it_hawkfeather_fan",
        name: "Hawkfeather Fan",
        id: "24"
    },
    {
        key: "it_windbite_dagger",
        name: "Windbite Dagger",
        id: "25"
    },
    {
        key: "it_pidgeon_bow",
        name: "Pidgeon Bow",
        id: "26"
    },
    {
        key: "it_shinsoku_katana",
        name: "Shinsoku Katana",
        id: "27"
    },
    {
        key: "it_eaglewing_charm",
        name: "Eaglewing Charm",
        id: "28"
    },
    {
        key: "it_sparrow_feather",
        name: "Sparrow Feather",
        id: "29"
    },
    {
        key: "it_winged_cap",
        name: "Winged Cap",
        id: "30"
    },
    {
        key: "it_thiefs_coat",
        name: "Thief's Coat",
        id: "31"
    },
    {
        key: "it_vampiric_dagger",
        name: "Vampiric Dagger",
        id: "32"
    },
    {
        key: "it_bloody_bandage",
        name: "Bloody Bandage",
        id: "33"
    },
    {
        key: "it_leech_staff",
        name: "Leech Staff",
        id: "34"
    },
    {
        key: "it_bloodhound_greatsword",
        name: "Bloodhound Greatsword",
        id: "35"
    },
    {
        key: "it_reaper_cloak",
        name: "Reaper Cloak",
        id: "36"
    },
    {
        key: "it_bloodflower_brooch",
        name: "Bloodflower Brooch",
        id: "37"
    },
    {
        key: "it_wolf_hood",
        name: "Wolf Hood",
        id: "38"
    },
    {
        key: "it_blood_vial",
        name: "Blood Vial",
        id: "39"
    },
    {
        key: "it_black_wakizashi",
        name: "Black Wakizashi",
        id: "40"
    },
    {
        key: "it_throwing_dagger",
        name: "Throwing Dagger",
        id: "41"
    },
    {
        key: "it_assassins_knife",
        name: "Assassin's Knife",
        id: "42"
    },
    {
        key: "it_ninjutsu_scroll",
        name: "Ninjutsu Scroll",
        id: "43"
    },
    {
        key: "it_shadow_bracelet",
        name: "Shadow Bracelet",
        id: "44"
    },
    {
        key: "it_ninja_robe",
        name: "Ninja Robe",
        id: "45"
    },
    {
        key: "it_kunoichi_hood",
        name: "Kunoichi Hood",
        id: "46"
    },
    {
        key: "it_shinobi_tabi",
        name: "Shinobi Tabi",
        id: "47"
    },
    {
        key: "it_dragonhead_spear",
        name: "Dragonhead Spear",
        id: "48"
    },
    {
        key: "it_granite_greatsword",
        name: "Granite Greatsword",
        id: "49"
    },
    {
        key: "it_greysteel_shield",
        name: "Greysteel Shield",
        id: "50"
    },
    {
        key: "it_stonebreaker_staff",
        name: "Stonebreaker Staff",
        id: "51"
    },
    {
        key: "it_tough_gauntlet",
        name: "Tough Gauntlet",
        id: "52"
    },
    {
        key: "it_rockdragon_mail",
        name: "Rockdragon Mail",
        id: "53"
    },
    {
        key: "it_obsidian_hairpin",
        name: "Obsidian Hairpin",
        id: "54"
    },
    {
        key: "it_iron_grieves",
        name: "Iron Greaves",
        id: "55"
    },
    {
        key: "it_volcano_spear",
        name: "Volcano Spear",
        id: "56"
    },
    {
        key: "it_reddragon_blade",
        name: "Reddragon Blade",
        id: "57"
    },
    {
        key: "it_flame_bow",
        name: "Flame Bow",
        id: "58"
    },
    {
        key: "it_meteor_staff",
        name: "Meteor Staff",
        id: "59"
    },
    {
        key: "it_phoenix_charm",
        name: "Phoenix Charm",
        id: "60"
    },
    {
        key: "it_firescale_corset",
        name: "Firescale Corset",
        id: "61"
    },
    {
        key: "it_demon_horns",
        name: "Demon Horns",
        id: "62"
    },
    {
        key: "it_flamewalker_boots",
        name: "Flamewalker Boots",
        id: "63"
    },
    {
        key: "it_diamond_shield",
        name: "Diamond Shield",
        id: "64"
    },
    {
        key: "it_peridot_rapier",
        name: "Peridot Rapier",
        id: "65"
    },
    {
        key: "it_garnet_staff",
        name: "Garnet Staff",
        id: "66"
    },
    {
        key: "it_sapphire_violin",
        name: "Sapphire Violin",
        id: "67"
    },
    {
        key: "it_emerald_chestplate",
        name: "Emerald Chestplate",
        id: "68"
    },
    {
        key: "it_amethyst_bracelet",
        name: "Amethyst Bracelet",
        id: "69"
    },
    {
        key: "it_topaz_charm",
        name: "Topaz Charm",
        id: "70"
    },
    {
        key: "it_ruby_circlet",
        name: "Ruby Circlet",
        id: "71"
    },
    {
        key: "it_brightstorm_spear",
        name: "Brightstorm Spear",
        id: "72"
    },
    {
        key: "it_bolt_staff",
        name: "Bolt Staff",
        id: "73"
    },
    {
        key: "it_lightning_bow",
        name: "Lightning Bow",
        id: "74"
    },
    {
        key: "it_darkstorm_knife",
        name: "Darkstorm Knife",
        id: "75"
    },
    {
        key: "it_darkcloud_necklace",
        name: "Darkcloud Necklace",
        id: "76"
    },
    {
        key: "it_crown_of_storms",
        name: "Crown of Storms",
        id: "77"
    },
    {
        key: "it_thunderclap_gloves",
        name: "Thunderclap Gloves",
        id: "78"
    },
    {
        key: "it_storm_petticoat",
        name: "Storm Petticoat",
        id: "79"
    },
    {
        key: "it_holy_greatsword",
        name: "Holy Greatsword",
        id: "80"
    },
    {
        key: "it_sacred_bow",
        name: "Sacred Bow",
        id: "81"
    },
    {
        key: "it_purification_rod",
        name: "Purification Rod",
        id: "82"
    },
    {
        key: "it_ornamental_bell",
        name: "Ornamental Bell",
        id: "83"
    },
    {
        key: "it_shrinemaidens_kosode",
        name: "Shrinemaiden's Kosode",
        id: "84"
    },
    {
        key: "it_redwhite_ribbon",
        name: "Redwhite Ribbon",
        id: "85"
    },
    {
        key: "it_divine_mirror",
        name: "Divine Mirror",
        id: "86"
    },
    {
        key: "it_golden_chime",
        name: "Golden Chime",
        id: "87"
    },
    {
        key: "it_book_of_cheats",
        name: "Book of Cheats",
        id: "88"
    },
    {
        key: "it_golden_katana",
        name: "Golden Katana",
        id: "89"
    },
    {
        key: "it_glittering_trumpet",
        name: "Glittering Trumpet",
        id: "90"
    },
    {
        key: "it_royal_staff",
        name: "Royal Staff",
        id: "91"
    },
    {
        key: "it_ballroom_gown",
        name: "Ballroom Gown",
        id: "92"
    },
    {
        key: "it_silver_coin",
        name: "Silver Coin",
        id: "93"
    },
    {
        key: "it_queens_crown",
        name: "Queen's Crown",
        id: "94"
    },
    {
        key: "it_mimick_rabbitfoot",
        name: "Mimick Rabbitfoot",
        id: "95"
    },
    {
        key: "it_butterfly_ocarina",
        name: "Butterfly Ocarina",
        id: "96"
    },
    {
        key: "it_fairy_spear",
        name: "Fairy Spear",
        id: "97"
    },
    {
        key: "it_moss_shield",
        name: "Moss Shield",
        id: "98"
    },
    {
        key: "it_floral_bow",
        name: "Floral Bow",
        id: "99"
    },
    {
        key: "it_blue_rose",
        name: "Blue Rose",
        id: "100"
    },
    {
        key: "it_sunflower_crown",
        name: "Sunflower Crown",
        id: "101"
    },
    {
        key: "it_midsummer_dress",
        name: "Midsummer Dress",
        id: "102"
    },
    {
        key: "it_grasswoven_bracelet",
        name: "Grasswoven Bracelet",
        id: "103"
    },
    {
        key: "it_snakefang_dagger",
        name: "Snakefang Dagger",
        id: "104"
    },
    {
        key: "it_ivy_staff",
        name: "Ivy Staff",
        id: "105"
    },
    {
        key: "it_deathcap_tome",
        name: "Deathcap Tome",
        id: "106"
    },
    {
        key: "it_spiderbite_bow",
        name: "Spiderbite Bow",
        id: "107"
    },
    {
        key: "it_compound_gloves",
        name: "Compound Gloves",
        id: "108"
    },
    {
        key: "it_poisonfrog_charm",
        name: "Poisonfrog Charm",
        id: "109"
    },
    {
        key: "it_venom_hood",
        name: "Venom Hood",
        id: "110"
    },
    {
        key: "it_chemists_coat",
        name: "Chemist's Coat",
        id: "111"
    },
    {
        key: "it_seashell_shield",
        name: "Seashell Shield",
        id: "112"
    },
    {
        key: "it_necronomicon",
        name: "Necronomicon",
        id: "113"
    },
    {
        key: "it_tidal_greatsword",
        name: "Tidal Greatsword",
        id: "114"
    },
    {
        key: "it_occult_dagger",
        name: "Occult Dagger",
        id: "115"
    },
    {
        key: "it_mermaid_scale",
        name: "Mermaid Scalemail",
        id: "116"
    },
    {
        key: "it_hydrous_blob",
        name: "Hydrous Blob",
        id: "117"
    },
    {
        key: "it_abyss_artifact",
        name: "Abyss Artifact",
        id: "118"
    },
    {
        key: "it_lost_pendant",
        name: "Lost Pendant",
        id: "119"
    },
    {
        key: "it_sawtooth_cleaver",
        name: "Sawtooth Cleaver",
        id: "120"
    },
    {
        key: "it_ravens_dagger",
        name: "Raven's Dagger",
        id: "121"
    },
    {
        key: "it_killing_note",
        name: "Killing Note",
        id: "122"
    },
    {
        key: "it_blacksteel_buckler",
        name: "Blacksteel Buckler",
        id: "123"
    },
    {
        key: "it_nightguard_gloves",
        name: "Nightguard Gloves",
        id: "124"
    },
    {
        key: "it_snipers_eyeglasses",
        name: "Sniper's Eyeglasses",
        id: "125"
    },
    {
        key: "it_darkmage_charm",
        name: "Darkmage Charm",
        id: "126"
    },
    {
        key: "it_firststrike_bracelet",
        name: "Firststrike Bracelet",
        id: "127"
    },
    {
        key: "it_obsidian_rod",
        name: "Obsidian Rod",
        id: "128"
    },
    {
        key: "it_darkglass_spear",
        name: "Darkglass Spear",
        id: "129"
    },
    {
        key: "it_timespace_dagger",
        name: "Timespace Dagger",
        id: "130"
    },
    {
        key: "it_quartz_shield",
        name: "Quartz Shield",
        id: "131"
    },
    {
        key: "it_pocketwatch",
        name: "Pocketwatch",
        id: "132"
    },
    {
        key: "it_nova_crown",
        name: "Nova Crown",
        id: "133"
    },
    {
        key: "it_blackhole_charm",
        name: "Blackhole Charm",
        id: "134"
    },
    {
        key: "it_twinstar_earrings",
        name: "Twinstar Earrings",
        id: "135"
    },
    {
        key: "it_kyou_no_omikuji",
        name: "Kyou No Omikuji",
        id: "136"
    },
    {
        key: "it_youkai_bracelet",
        name: "Youkai Bracelet",
        id: "137"
    },
    {
        key: "it_oni_staff",
        name: "Oni Staff",
        id: "138"
    },
    {
        key: "it_kappa_shield",
        name: "Kappa Shield",
        id: "139"
    },
    {
        key: "it_usagi_kamen",
        name: "Usagi Kamen",
        id: "140"
    },
    {
        key: "it_red_tanzaku",
        name: "Red Tanzaku",
        id: "141"
    },
    {
        key: "it_vega_spear",
        name: "Vega Spear",
        id: "142"
    },
    {
        key: "it_altair_dagger",
        name: "Altair Dagger",
        id: "143"
    },
    {
        key: "it_ghost_spear",
        name: "Ghost Spear",
        id: "144"
    },
    {
        key: "it_phantom_dagger",
        name: "Phantom Dagger",
        id: "145"
    },
    {
        key: "it_cursed_candlestaff",
        name: "Cursed Candlestaff",
        id: "146"
    },
    {
        key: "it_smoke_shield",
        name: "Smoke Shield",
        id: "147"
    },
    {
        key: "it_haunted_gloves",
        name: "Haunted Gloves",
        id: "148"
    },
    {
        key: "it_old_bonnet",
        name: "Old Bonnet",
        id: "149"
    },
    {
        key: "it_maid_outfit",
        name: "Maid Outfit",
        id: "150"
    },
    {
        key: "it_calling_bell",
        name: "Calling Bell",
        id: "151"
    },
    {
        key: "it_grandmaster_spear",
        name: "Grandmaster Spear",
        id: "152"
    },
    {
        key: "it_teacher_knife",
        name: "Teacher Knife",
        id: "153"
    },
    {
        key: "it_tactician_rod",
        name: "Tactician Rod",
        id: "154"
    },
    {
        key: "it_spiked_shield",
        name: "Spiked Shield",
        id: "155"
    },
    {
        key: "it_battlemaiden_armor",
        name: "Battlemaiden Armor",
        id: "156"
    },
    {
        key: "it_gladiator_helmet",
        name: "Gladiator Helmet",
        id: "157"
    },
    {
        key: "it_lancer_gauntlets",
        name: "Lancer Gauntlets",
        id: "158"
    },
    {
        key: "it_lion_charm",
        name: "Lion Charm",
        id: "159"
    },
    {
        key: "it_bluebolt_staff",
        name: "Bluebolt Staff",
        id: "160"
    },
    {
        key: "it_lapis_sword",
        name: "Lapis Sword",
        id: "161"
    },
    {
        key: "it_shockwave_tome",
        name: "Shockwave Tome",
        id: "162"
    },
    {
        key: "it_battery_shield",
        name: "Battery Shield",
        id: "163"
    },
    {
        key: "it_raiju_crown",
        name: "Raiju Crown",
        id: "164"
    },
    {
        key: "it_staticshock_earrings",
        name: "Staticshock Earrings",
        id: "165"
    },
    {
        key: "it_stormdance_gown",
        name: "Stormdance Gown",
        id: "166"
    },
    {
        key: "it_blackbolt_ribbon",
        name: "Blackbolt Ribbon",
        id: "167"
    },
    {
        key: "it_crane_katana",
        name: "Crane Katana",
        id: "168"
    },
    {
        key: "it_falconfeather_dagger",
        name: "Falconfeather Dagger",
        id: "169"
    },
    {
        key: "it_tornado_staff",
        name: "Tornado Staff",
        id: "170"
    },
    {
        key: "it_cloud_guard",
        name: "Cloud Guard",
        id: "171"
    },
    {
        key: "it_hermes_bow",
        name: "Hermes Bow",
        id: "172"
    },
    {
        key: "it_talon_charm",
        name: "Talon Charm",
        id: "173"
    },
    {
        key: "it_tiny_wings",
        name: "Tiny Wings",
        id: "174"
    },
    {
        key: "it_feathered_overcoat",
        name: "Feathered Overcoat",
        id: "175"
    },
    {
        key: "it_sandpriestess_spear",
        name: "Sandpriestess Spear",
        id: "176"
    },
    {
        key: "it_flamedancer_dagger",
        name: "Flamedancer Dagger",
        id: "177"
    },
    {
        key: "it_whiteflame_staff",
        name: "Whiteflame Staff",
        id: "178"
    },
    {
        key: "it_sacred_shield",
        name: "Sacred Shield",
        id: "179"
    },
    {
        key: "it_marble_clasp",
        name: "Marble Clasp",
        id: "180"
    },
    {
        key: "it_sun_pendant",
        name: "Sun Pendant",
        id: "181"
    },
    {
        key: "it_tiny_hourglass",
        name: "Tiny Hourglass",
        id: "182"
    },
    {
        key: "it_desert_earrings",
        name: "Desert Earrings",
        id: "183"
    },
    {
        key: "it_giant_stone_club",
        name: "Giant Stone Club",
        id: "184"
    },
    {
        key: "it_ruins_sword",
        name: "Ruins Sword",
        id: "185"
    },
    {
        key: "it_mountain_staff",
        name: "Mountain Staff",
        id: "186"
    },
    {
        key: "it_boulder_shield",
        name: "Boulder Shield",
        id: "187"
    },
    {
        key: "it_golems_claymore",
        name: "Golem's Claymore",
        id: "188"
    },
    {
        key: "it_stoneplate_armor",
        name: "Stoneplate Armor",
        id: "189"
    },
    {
        key: "it_sacredstone_charm",
        name: "Sacredstone Charm",
        id: "190"
    },
    {
        key: "it_clay_rabbit",
        name: "Clay Rabbit",
        id: "191"
    },
    {
        key: "it_waterfall_polearm",
        name: "Waterfall Polearm",
        id: "192"
    },
    {
        key: "it_vorpal_dao",
        name: "Vorpal Dao",
        id: "193"
    },
    {
        key: "it_jade_staff",
        name: "Jade Staff",
        id: "194"
    },
    {
        key: "it_reflection_shield",
        name: "Reflection Shield",
        id: "195"
    },
    {
        key: "it_butterfly_hairpin",
        name: "Butterfly Hairpin",
        id: "196"
    },
    {
        key: "it_watermage_pendant",
        name: "Watermage Pendant",
        id: "197"
    },
    {
        key: "it_raindrop_earrings",
        name: "Raindrop Earrings",
        id: "198"
    },
    {
        key: "it_aquamarine_bracelet",
        name: "Aquamarine Bracelet",
        id: "199"
    },
    {
        key: "it_glacier_spear",
        name: "Glacier Spear",
        id: "200"
    },
    {
        key: "it_frost_dagger",
        name: "Frost Dagger",
        id: "201"
    },
    {
        key: "it_frozen_staff",
        name: "Frozen Staff",
        id: "202"
    },
    {
        key: "it_coldsteel_shield",
        name: "Coldsteel Shield",
        id: "203"
    },
    {
        key: "it_polar_coat",
        name: "Polar Coat",
        id: "204"
    },
    {
        key: "it_icicle_earrings",
        name: "Icicle Earrings",
        id: "205"
    },
    {
        key: "it_winter_hat",
        name: "Winter Hat",
        id: "206"
    },
    {
        key: "it_snow_boots",
        name: "Snow Boots",
        id: "207"
    },
    {
        key: "it_spear_of_remorse",
        name: "Spear of Remorse",
        id: "208"
    },
    {
        key: "it_memory_greatsword",
        name: "Memory Greatsword",
        id: "209"
    },
    {
        key: "it_staff_of_sorrow",
        name: "Staff of Sorrow",
        id: "210"
    },
    {
        key: "it_shield_of_smiles",
        name: "Shield of Smiles",
        id: "211"
    },
    {
        key: "it_lonesome_pendant",
        name: "Lonesome Pendant",
        id: "212"
    },
    {
        key: "it_spark_of_determination",
        name: "Spark of Determination",
        id: "213"
    },
    {
        key: "it_crown_of_love",
        name: "Crown of Love",
        id: "214"
    },
    {
        key: "it_comforting_coat",
        name: "Comforting Coat",
        id: "215"
    },
    {
        key: "it_righthand_cast",
        name: "Righthand Cast",
        id: "216"
    },
    {
        key: "it_lefthand_cast",
        name: "Lefthand Cast",
        id: "217"
    },
    {
        key: "it_hexed_blindfold",
        name: "Hexed Blindfold",
        id: "218"
    },
    {
        key: "it_angels_halo",
        name: "Angel's Halo",
        id: "219"
    },
    {
        key: "it_unsacred_pendant",
        name: "Unsacred Pendant",
        id: "220"
    },
    {
        key: "it_whitewing_bracelet",
        name: "Whitewing Bracelet",
        id: "221"
    },
    {
        key: "it_darkcrystal_rose",
        name: "Darkcrystal Rose",
        id: "222"
    },
    {
        key: "it_dark_wings",
        name: "Dark Wings",
        id: "223"
    },
    {
        key: "it_giant_paintbrush",
        name: "Giant Paintbrush",
        id: "224"
    },
    {
        key: "it_sewing_sword",
        name: "Sewing Sword",
        id: "225"
    },
    {
        key: "it_sketchbook",
        name: "Sketchbook",
        id: "226"
    },
    {
        key: "it_palette_shield",
        name: "Palette Shield",
        id: "227"
    },
    {
        key: "it_handmade_charm",
        name: "Handmade Charm",
        id: "228"
    },
    {
        key: "it_painters_beret",
        name: "Painter's Beret",
        id: "229"
    },
    {
        key: "it_artist_smock",
        name: "Artist Smock",
        id: "230"
    },
    {
        key: "it_colorful_earrings",
        name: "Colorful Earrings",
        id: "231"
    },
    {
        key: "it_sun_sword",
        name: "Daylight Sword",
        id: "232"
    },
    {
        key: "it_night_sword",
        name: "Nightgleam Sword",
        id: "233"
    },
    {
        key: "it_wind_spear",
        name: "Spear of Winds",
        id: "234"
    },
    {
        key: "it_rain_spear",
        name: "Spear of Rains",
        id: "235"
    },
    {
        key: "it_heavens_codex",
        name: "Heaven's Codex",
        id: "236"
    },
    {
        key: "it_hells_codex",
        name: "Hell's Codex",
        id: "237"
    },
    {
        key: "it_robe_of_light",
        name: "Robe of Light",
        id: "238"
    },
    {
        key: "it_robe_of_dark",
        name: "Robe of Dark",
        id: "239"
    },
    {
        key: "it_hooked_staff",
        name: "Hooked Staff",
        id: "240"
    },
    {
        key: "it_springloaded_scythe",
        name: "Springloaded Scythe",
        id: "241"
    },
    {
        key: "it_hidden_blade",
        name: "Hidden Blade",
        id: "242"
    },
    {
        key: "it_sharpedged_shield",
        name: "Sharpedged Shield",
        id: "243"
    },
    {
        key: "it_pointed_ring",
        name: "Pointed Ring",
        id: "244"
    },
    {
        key: "it_crown_of_swords",
        name: "Crown of Swords",
        id: "245"
    },
    {
        key: "it_bladed_cloak",
        name: "Bladed Cloak",
        id: "246"
    },
    {
        key: "it_greatsword_pendant",
        name: "Greatsword Pendant",
        id: "247"
    },
    {
        key: "it_rusted_greatsword",
        name: "Rusted Greatsword",
        id: "248"
    },
    {
        key: "it_sand_shovel",
        name: "Sand Shovel",
        id: "249"
    },
    {
        key: "it_saltwater_staff",
        name: "Saltwater Staff",
        id: "250"
    },
    {
        key: "it_large_umbrella",
        name: "Large Umbrella",
        id: "251"
    },
    {
        key: "it_onepiece_swimsuit",
        name: "Onepiece Swimsuit",
        id: "252"
    },
    {
        key: "it_straw_hat",
        name: "Straw Hat",
        id: "253"
    },
    {
        key: "it_large_anchor",
        name: "Large Anchor",
        id: "254"
    },
    {
        key: "it_beach_sandals",
        name: "Beach Sandals",
        id: "255"
    },
    {
        key: "it_strongmans_bar",
        name: "Strongman's Bar",
        id: "256"
    },
    {
        key: "it_spinning_chakram",
        name: "Spinning Chakram",
        id: "257"
    },
    {
        key: "it_ribboned_staff",
        name: "Ribboned Staff",
        id: "258"
    },
    {
        key: "it_trick_shield",
        name: "Trick Shield",
        id: "259"
    },
    {
        key: "it_rosered_leotard",
        name: "Rosered Leotard",
        id: "260"
    },
    {
        key: "it_jesters_hat",
        name: "Jester's Hat",
        id: "261"
    },
    {
        key: "it_rainbow_cape",
        name: "Rainbow Cape",
        id: "262"
    },
    {
        key: "it_performers_shoes",
        name: "Performer's Shoes",
        id: "263"
    },
    {
        key: "it_iron_pickaxe",
        name: "Iron Pickaxe",
        id: "264"
    },
    {
        key: "it_dynamite_staff",
        name: "Dynamite Staff",
        id: "265"
    },
    {
        key: "it_fossil_dagger",
        name: "Fossil Dagger",
        id: "266"
    },
    {
        key: "it_drill_shield",
        name: "Drill Shield",
        id: "267"
    },
    {
        key: "it_canary_charm",
        name: "Canary Charm",
        id: "268"
    },
    {
        key: "it_pyrite_earrings",
        name: "Pyrite Earrings",
        id: "269"
    },
    {
        key: "it_cavers_cloak",
        name: "Caver's Cloak",
        id: "270"
    },
    {
        key: "it_miners_headlamp",
        name: "Miner's Headlamp",
        id: "271"
    },
    {
        key: "it_tiny_fork",
        name: "Tiny Fork",
        id: "272"
    },
    {
        key: "it_stirring_spoon",
        name: "Stirring Spoon",
        id: "273"
    },
    {
        key: "it_fanciful_book",
        name: "Fanciful Book",
        id: "274"
    },
    {
        key: "it_apple_plate",
        name: "Apple Plate",
        id: "275"
    },
    {
        key: "it_vanilla_wafers",
        name: "Vanilla Wafers",
        id: "276"
    },
    {
        key: "it_caramel_tea",
        name: "Caramel Tea",
        id: "277"
    },
    {
        key: "it_strawberry_cake",
        name: "Strawberry Cake",
        id: "278"
    },
    {
        key: "it_sweet_taffy",
        name: "Sweet Taffy",
        id: "279"
    }
];

const GEMTYPES = [
    "base", "opal", "sapphire", "ruby", "garnet", "emerald"
]

const GEMTYPESCAPS = [
    "Base", "Opal", "Sapphire", "Ruby", "Garnet", "Emerald"
]

const ABILITIES = [
    "Primary", "Secondary", "Special", "Defensive"
];

const GEMS = [
];

// sort by:
    // 1. character id
    // 2. type: base, opal, sapphire, ruby, garnet, emerald
function buildGemsObject() {
    let ind = 0;
    for(let i in RABBITS) {
        for(let j = 0; j < 4; j++) {
            for(let k in GEMTYPES) {
                let rKey = RABBITS[i].key;
                if(RABBITS[i].itemKey) rKey = RABBITS[i].itemKey;

                let key = `mv_${rKey}_${j}`
                if(k > 0) key += `_${GEMTYPES[k]}`;
                GEMS.push({
                    key: key,
                    type: k,
                    cId: i,
                    id: ind,
                    slot: j
                });
                ind++;
            }
        }
    }
}

buildGemsObject();