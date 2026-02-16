let file, fileText;
let vals;
let currentTab = 0;

let rabbitStats = [];
let items = [];
let itemTotals = [];
let gems = [];
let gemTotals = [];

const NEVER = 99999999;

const rabbitNames = [
    "wizard", "assassin", "hblade", "dancer", "druid",
    "spellsword", "sniper", "bruiser", "defender", "ancient",
    "hammer", "pyro", "gunner", "shadow"
];
const diffs = [
    "Cute", "Normal", "Hard", "Lunar"
];
const types = [
    "Offline", "Online"
];
const itemNames = [
    "it_abyss_artifact",
    "it_altair_dagger",
    "it_amethyst_bracelet",
    "it_angels_halo",
    "it_apple_plate",
    "it_aquamarine_bracelet",
    "it_artist_smock",
    "it_assassins_knife",
    "it_ballroom_gown",
    "it_battery_shield",
    "it_battlemaiden_armor",
    "it_beach_sandals",
    "it_black_wakizashi",
    "it_blackbolt_ribbon",
    "it_blackhole_charm",
    "it_blacksteel_buckler",
    "it_blackwing_staff",
    "it_bladed_cloak",
    "it_blood_vial",
    "it_bloodflower_brooch",
    "it_bloodhound_greatsword",
    "it_bloody_bandage",
    "it_blue_rose",
    "it_bluebolt_staff",
    "it_bolt_staff",
    "it_book_of_cheats",
    "it_boulder_shield",
    "it_brightstorm_spear",
    "it_butterfly_hairpin",
    "it_butterfly_ocarina",
    "it_calling_bell",
    "it_canary_charm",
    "it_caramel_tea",
    "it_cavers_cloak",
    "it_chemists_coat",
    "it_chrome_shield",
    "it_clay_rabbit",
    "it_clockwork_tome",
    "it_cloud_guard",
    "it_coldsteel_shield",
    "it_colorful_earrings",
    "it_comforting_coat",
    "it_compound_gloves",
    "it_crane_katana",
    "it_crescentmoon_dagger",
    "it_crowfeather_hairpin",
    "it_crown_of_love",
    "it_crown_of_storms",
    "it_crown_of_swords",
    "it_curse_talon",
    "it_cursed_candlestaff",
    "it_dark_wings",
    "it_darkcloud_necklace",
    "it_darkcrystal_rose",
    "it_darkglass_spear",
    "it_darkmage_charm",
    "it_darkmagic_blade",
    "it_darkstorm_knife",
    "it_deathcap_tome",
    "it_demon_horns",
    "it_desert_earrings",
    "it_diamond_shield",
    "it_divine_mirror",
    "it_dragonhead_spear",
    "it_drill_shield",
    "it_dynamite_staff",
    "it_eaglewing_charm",
    "it_emerald_chestplate",
    "it_eternity_flute",
    "it_fairy_spear",
    "it_falconfeather_dagger",
    "it_fanciful_book",
    "it_feathered_overcoat",
    "it_firescale_corset",
    "it_firststrike_bracelet",
    "it_flame_bow",
    "it_flamedancer_dagger",
    "it_flamewalker_boots",
    "it_floral_bow",
    "it_fossil_dagger",
    "it_frost_dagger",
    "it_frozen_staff",
    "it_garnet_staff",
    "it_gemini_necklace",
    "it_ghost_spear",
    "it_giant_paintbrush",
    "it_giant_stone_club",
    "it_glacier_spear",
    "it_gladiator_helmet",
    "it_glittering_trumpet",
    "it_golden_chime",
    "it_golden_katana",
    "it_golems_claymore",
    "it_grandmaster_spear",
    "it_granite_greatsword",
    "it_grasswoven_bracelet",
    "it_greatsword_pendant",
    "it_greysteel_shield",
    "it_handmade_charm",
    "it_haste_boots",
    "it_haunted_gloves",
    "it_hawkfeather_fan",
    "it_heavens_codex",
    "it_hells_codex",
    "it_hermes_bow",
    "it_hexed_blindfold",
    "it_hidden_blade",
    "it_holy_greatsword",
    "it_hooked_staff",
    "it_hydrous_blob",
    "it_icicle_earrings",
    "it_iron_grieves",
    "it_iron_pickaxe",
    "it_ivy_staff",
    "it_jade_staff",
    "it_jesters_hat",
    "it_kappa_shield",
    "it_killing_note",
    "it_kunoichi_hood",
    "it_kyou_no_omikuji",
    "it_lancer_gauntlets",
    "it_lapis_sword",
    "it_large_anchor",
    "it_large_umbrella",
    "it_leech_staff",
    "it_lefthand_cast",
    "it_lightning_bow",
    "it_lion_charm",
    "it_lonesome_pendant",
    "it_lost_pendant",
    "it_lullaby_harp",
    "it_maid_outfit",
    "it_marble_clasp",
    "it_memory_greatsword",
    "it_mermaid_scale",
    "it_meteor_staff",
    "it_midsummer_dress",
    "it_mimick_rabbitfoot",
    "it_miners_headlamp",
    "it_moon_pendant",
    "it_moss_shield",
    "it_mountain_staff",
    "it_necronomicon",
    "it_night_sword",
    "it_nightguard_gloves",
    "it_nightingale_gown",
    "it_nightstar_grimoire",
    "it_ninja_robe",
    "it_ninjutsu_scroll",
    "it_nova_crown",
    "it_obsidian_hairpin",
    "it_obsidian_rod",
    "it_occult_dagger",
    "it_old_bonnet",
    "it_onepiece_swimsuit",
    "it_oni_staff",
    "it_opal_necklace",
    "it_ornamental_bell",
    "it_painters_beret",
    "it_pajama_hat",
    "it_palette_shield",
    "it_performers_shoes",
    "it_peridot_rapier",
    "it_phantom_dagger",
    "it_phoenix_charm",
    "it_pidgeon_bow",
    "it_pocketwatch",
    "it_pointed_ring",
    "it_poisonfrog_charm",
    "it_polar_coat",
    "it_purification_rod",
    "it_pyrite_earrings",
    "it_quartz_shield",
    "it_queens_crown",
    "it_raiju_crown",
    "it_rain_spear",
    "it_rainbow_cape",
    "it_raindrop_earrings",
    "it_raven_grimoire",
    "it_ravens_dagger",
    "it_reaper_cloak",
    "it_red_tanzaku",
    "it_redblack_ribbon",
    "it_reddragon_blade",
    "it_redwhite_ribbon",
    "it_reflection_shield",
    "it_ribboned_staff",
    "it_righthand_cast",
    "it_robe_of_dark",
    "it_robe_of_light",
    "it_rockdragon_mail",
    "it_rosered_leotard",
    "it_royal_staff",
    "it_ruby_circlet",
    "it_ruins_sword",
    "it_rusted_greatsword",
    "it_sacred_bow",
    "it_sacred_shield",
    "it_sacredstone_charm",
    "it_saltwater_staff",
    "it_sand_shovel",
    "it_sandpriestess_spear",
    "it_sapphire_violin",
    "it_sawtooth_cleaver",
    "it_seashell_shield",
    "it_sewing_sword",
    "it_shadow_bracelet",
    "it_sharpedged_shield",
    "it_shield_of_smiles",
    "it_shinobi_tabi",
    "it_shinsoku_katana",
    "it_shockwave_tome",
    "it_shrinemaidens_kosode",
    "it_silver_coin",
    "it_sketchbook",
    "it_sleeping_greatbow",
    "it_smoke_shield",
    "it_snakefang_dagger",
    "it_snipers_eyeglasses",
    "it_snow_boots",
    "it_spark_of_determination",
    "it_sparrow_feather",
    "it_spear_of_remorse",
    "it_spiderbite_bow",
    "it_spiked_shield",
    "it_spinning_chakram",
    "it_springloaded_scythe",
    "it_staff_of_sorrow",
    "it_starry_cloak",
    "it_staticshock_earrings",
    "it_stirring_spoon",
    "it_stonebreaker_staff",
    "it_stoneplate_armor",
    "it_storm_petticoat",
    "it_stormdance_gown",
    "it_straw_hat",
    "it_strawberry_cake",
    "it_strongmans_bar",
    "it_stuffed_rabbit",
    "it_sun_pendant",
    "it_sun_sword",
    "it_sunflower_crown",
    "it_sweet_taffy",
    "it_tactician_rod",
    "it_talon_charm",
    "it_teacher_knife",
    "it_thiefs_coat",
    "it_throwing_dagger",
    "it_thunderclap_gloves",
    "it_tidal_greatsword",
    "it_timemage_cap",
    "it_timespace_dagger",
    "it_timewarp_wand",
    "it_tiny_fork",
    "it_tiny_hourglass",
    "it_tiny_wings",
    "it_topaz_charm",
    "it_tornado_staff",
    "it_tough_gauntlet",
    "it_trick_shield",
    "it_twinstar_earrings",
    "it_unsacred_pendant",
    "it_usagi_kamen",
    "it_vampiric_dagger",
    "it_vanilla_wafers",
    "it_vega_spear",
    "it_venom_hood",
    "it_volcano_spear",
    "it_vorpal_dao",
    "it_waterfall_polearm",
    "it_watermage_pendant",
    "it_whiteflame_staff",
    "it_whitewing_bracelet",
    "it_wind_spear",
    "it_windbite_dagger",
    "it_winged_cap",
    "it_winter_hat",
    "it_witchs_cloak",
    "it_wolf_hood",
    "it_youkai_bracelet"
];
const gemNames = [
    "mv_ancient_0_emerald",
    "mv_ancient_0_garnet",
    "mv_ancient_0_opal",
    "mv_ancient_0_ruby",
    "mv_ancient_0_sapphire",
    "mv_ancient_1_emerald",
    "mv_ancient_1_garnet",
    "mv_ancient_1_opal",
    "mv_ancient_1_ruby",
    "mv_ancient_1_sapphire",
    "mv_ancient_2_emerald",
    "mv_ancient_2_garnet",
    "mv_ancient_2_opal",
    "mv_ancient_2_ruby",
    "mv_ancient_2_sapphire",
    "mv_ancient_3_emerald",
    "mv_ancient_3_garnet",
    "mv_ancient_3_opal",
    "mv_ancient_3_ruby",
    "mv_ancient_3_sapphire",
    "mv_assassin_0_emerald",
    "mv_assassin_0_garnet",
    "mv_assassin_0_opal",
    "mv_assassin_0_ruby",
    "mv_assassin_0_sapphire",
    "mv_assassin_1_emerald",
    "mv_assassin_1_garnet",
    "mv_assassin_1_opal",
    "mv_assassin_1_ruby",
    "mv_assassin_1_sapphire",
    "mv_assassin_2_emerald",
    "mv_assassin_2_garnet",
    "mv_assassin_2_opal",
    "mv_assassin_2_ruby",
    "mv_assassin_2_sapphire",
    "mv_assassin_3_emerald",
    "mv_assassin_3_garnet",
    "mv_assassin_3_opal",
    "mv_assassin_3_ruby",
    "mv_assassin_3_sapphire",
    "mv_bruiser_0_emerald",
    "mv_bruiser_0_garnet",
    "mv_bruiser_0_opal",
    "mv_bruiser_0_ruby",
    "mv_bruiser_0_sapphire",
    "mv_bruiser_1_emerald",
    "mv_bruiser_1_garnet",
    "mv_bruiser_1_opal",
    "mv_bruiser_1_ruby",
    "mv_bruiser_1_sapphire",
    "mv_bruiser_2_emerald",
    "mv_bruiser_2_garnet",
    "mv_bruiser_2_opal",
    "mv_bruiser_2_ruby",
    "mv_bruiser_2_sapphire",
    "mv_bruiser_3_emerald",
    "mv_bruiser_3_garnet",
    "mv_bruiser_3_opal",
    "mv_bruiser_3_ruby",
    "mv_bruiser_3_sapphire",
    "mv_dancer_0_emerald",
    "mv_dancer_0_garnet",
    "mv_dancer_0_opal",
    "mv_dancer_0_ruby",
    "mv_dancer_0_sapphire",
    "mv_dancer_1_emerald",
    "mv_dancer_1_garnet",
    "mv_dancer_1_opal",
    "mv_dancer_1_ruby",
    "mv_dancer_1_sapphire",
    "mv_dancer_2_emerald",
    "mv_dancer_2_garnet",
    "mv_dancer_2_opal",
    "mv_dancer_2_ruby",
    "mv_dancer_2_sapphire",
    "mv_dancer_3_emerald",
    "mv_dancer_3_garnet",
    "mv_dancer_3_opal",
    "mv_dancer_3_ruby",
    "mv_dancer_3_sapphire",
    "mv_defender_0_emerald",
    "mv_defender_0_garnet",
    "mv_defender_0_opal",
    "mv_defender_0_ruby",
    "mv_defender_0_sapphire",
    "mv_defender_1_emerald",
    "mv_defender_1_garnet",
    "mv_defender_1_opal",
    "mv_defender_1_ruby",
    "mv_defender_1_sapphire",
    "mv_defender_2_emerald",
    "mv_defender_2_garnet",
    "mv_defender_2_opal",
    "mv_defender_2_ruby",
    "mv_defender_2_sapphire",
    "mv_defender_3_emerald",
    "mv_defender_3_garnet",
    "mv_defender_3_opal",
    "mv_defender_3_ruby",
    "mv_defender_3_sapphire",
    "mv_druid_0_emerald",
    "mv_druid_0_garnet",
    "mv_druid_0_opal",
    "mv_druid_0_ruby",
    "mv_druid_0_sapphire",
    "mv_druid_1_emerald",
    "mv_druid_1_garnet",
    "mv_druid_1_opal",
    "mv_druid_1_ruby",
    "mv_druid_1_sapphire",
    "mv_druid_2_emerald",
    "mv_druid_2_garnet",
    "mv_druid_2_opal",
    "mv_druid_2_ruby",
    "mv_druid_2_sapphire",
    "mv_druid_3_emerald",
    "mv_druid_3_garnet",
    "mv_druid_3_opal",
    "mv_druid_3_ruby",
    "mv_druid_3_sapphire",
    "mv_gunner_0_emerald",
    "mv_gunner_0_garnet",
    "mv_gunner_0_opal",
    "mv_gunner_0_ruby",
    "mv_gunner_0_sapphire",
    "mv_gunner_1_emerald",
    "mv_gunner_1_garnet",
    "mv_gunner_1_opal",
    "mv_gunner_1_ruby",
    "mv_gunner_1_sapphire",
    "mv_gunner_2_emerald",
    "mv_gunner_2_garnet",
    "mv_gunner_2_opal",
    "mv_gunner_2_ruby",
    "mv_gunner_2_sapphire",
    "mv_gunner_3_emerald",
    "mv_gunner_3_garnet",
    "mv_gunner_3_opal",
    "mv_gunner_3_ruby",
    "mv_gunner_3_sapphire",
    "mv_hammer_0_emerald",
    "mv_hammer_0_garnet",
    "mv_hammer_0_opal",
    "mv_hammer_0_ruby",
    "mv_hammer_0_sapphire",
    "mv_hammer_1_emerald",
    "mv_hammer_1_garnet",
    "mv_hammer_1_opal",
    "mv_hammer_1_ruby",
    "mv_hammer_1_sapphire",
    "mv_hammer_2_emerald",
    "mv_hammer_2_garnet",
    "mv_hammer_2_opal",
    "mv_hammer_2_ruby",
    "mv_hammer_2_sapphire",
    "mv_hammer_3_emerald",
    "mv_hammer_3_garnet",
    "mv_hammer_3_opal",
    "mv_hammer_3_ruby",
    "mv_hammer_3_sapphire",
    "mv_hblade_0_emerald",
    "mv_hblade_0_garnet",
    "mv_hblade_0_opal",
    "mv_hblade_0_ruby",
    "mv_hblade_0_sapphire",
    "mv_hblade_1_emerald",
    "mv_hblade_1_garnet",
    "mv_hblade_1_opal",
    "mv_hblade_1_ruby",
    "mv_hblade_1_sapphire",
    "mv_hblade_2_emerald",
    "mv_hblade_2_garnet",
    "mv_hblade_2_opal",
    "mv_hblade_2_ruby",
    "mv_hblade_2_sapphire",
    "mv_hblade_3_emerald",
    "mv_hblade_3_garnet",
    "mv_hblade_3_opal",
    "mv_hblade_3_ruby",
    "mv_hblade_3_sapphire",
    "mv_pyro_0_emerald",
    "mv_pyro_0_garnet",
    "mv_pyro_0_opal",
    "mv_pyro_0_ruby",
    "mv_pyro_0_sapphire",
    "mv_pyro_1_emerald",
    "mv_pyro_1_garnet",
    "mv_pyro_1_opal",
    "mv_pyro_1_ruby",
    "mv_pyro_1_sapphire",
    "mv_pyro_2_emerald",
    "mv_pyro_2_garnet",
    "mv_pyro_2_opal",
    "mv_pyro_2_ruby",
    "mv_pyro_2_sapphire",
    "mv_pyro_3_emerald",
    "mv_pyro_3_garnet",
    "mv_pyro_3_opal",
    "mv_pyro_3_ruby",
    "mv_pyro_3_sapphire",
    "mv_shadow_0_emerald",
    "mv_shadow_0_garnet",
    "mv_shadow_0_opal",
    "mv_shadow_0_ruby",
    "mv_shadow_0_sapphire",
    "mv_shadow_1_emerald",
    "mv_shadow_1_garnet",
    "mv_shadow_1_opal",
    "mv_shadow_1_ruby",
    "mv_shadow_1_sapphire",
    "mv_shadow_2_emerald",
    "mv_shadow_2_garnet",
    "mv_shadow_2_opal",
    "mv_shadow_2_ruby",
    "mv_shadow_2_sapphire",
    "mv_shadow_3_emerald",
    "mv_shadow_3_garnet",
    "mv_shadow_3_opal",
    "mv_shadow_3_ruby",
    "mv_shadow_3_sapphire",
    "mv_sniper_0_emerald",
    "mv_sniper_0_garnet",
    "mv_sniper_0_opal",
    "mv_sniper_0_ruby",
    "mv_sniper_0_sapphire",
    "mv_sniper_1_emerald",
    "mv_sniper_1_garnet",
    "mv_sniper_1_opal",
    "mv_sniper_1_ruby",
    "mv_sniper_1_sapphire",
    "mv_sniper_2_emerald",
    "mv_sniper_2_garnet",
    "mv_sniper_2_opal",
    "mv_sniper_2_ruby",
    "mv_sniper_2_sapphire",
    "mv_sniper_3_emerald",
    "mv_sniper_3_garnet",
    "mv_sniper_3_opal",
    "mv_sniper_3_ruby",
    "mv_sniper_3_sapphire",
    "mv_spsword_0_emerald",
    "mv_spsword_0_garnet",
    "mv_spsword_0_opal",
    "mv_spsword_0_ruby",
    "mv_spsword_0_sapphire",
    "mv_spsword_1_emerald",
    "mv_spsword_1_garnet",
    "mv_spsword_1_opal",
    "mv_spsword_1_ruby",
    "mv_spsword_1_sapphire",
    "mv_spsword_2_emerald",
    "mv_spsword_2_garnet",
    "mv_spsword_2_opal",
    "mv_spsword_2_ruby",
    "mv_spsword_2_sapphire",
    "mv_spsword_3_emerald",
    "mv_spsword_3_garnet",
    "mv_spsword_3_opal",
    "mv_spsword_3_ruby",
    "mv_spsword_3_sapphire",
    "mv_wizard_0_emerald",
    "mv_wizard_0_garnet",
    "mv_wizard_0_opal",
    "mv_wizard_0_ruby",
    "mv_wizard_0_sapphire",
    "mv_wizard_1_emerald",
    "mv_wizard_1_garnet",
    "mv_wizard_1_opal",
    "mv_wizard_1_ruby",
    "mv_wizard_1_sapphire",
    "mv_wizard_2_emerald",
    "mv_wizard_2_garnet",
    "mv_wizard_2_opal",
    "mv_wizard_2_ruby",
    "mv_wizard_2_sapphire",
    "mv_wizard_3_emerald",
    "mv_wizard_3_garnet",
    "mv_wizard_3_opal",
    "mv_wizard_3_ruby",
    "mv_wizard_3_sapphire"
];

function init() {
    currentTab = 0;

    // handle dragging files in
    window.addEventListener("drop", (e) => { //process drag&drop behavior
        if ([...e.dataTransfer.items].some((item) => item.kind === "file")) {
            e.preventDefault();
            let file = e.dataTransfer.files[0];
            handleUpload(file);
        }
    });
    document.addEventListener("dragover", (e) => { //UI to reflect drag&drop ability
        const fileItems = [...e.dataTransfer.items].filter(
            (item) => item.kind === "file",
        );
        if (fileItems.length > 0) {
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
        }
    });
}

init();

function test() {
    console.log(fileText.indexOf('\n'));
    parseVals();
}

function changeTab (index) {
    if(index == currentTab) return;
    document.getElementById(`tab-${currentTab}`).classList.remove("active");
    document.getElementById(`tab-${index}`).classList.add("active");
    currentTab = index;
}


function handleUpload(file) {
    if(!file) {
        const elem = document.getElementById("save-upload");
        file = elem.files[0];
    } 
    if(!file) return;
    if(file.name != "savedata.ini") {
        document.getElementById("upload-error").classList.add("active");
        return;
    }
    else
        document.getElementById("upload-error").classList.remove("active");

    const reader = new FileReader();
    reader.onload = (e) => {
        fileText = e.target.result;
        parseVals();
        processRabbits();
        processItems();

        generateSummary();
        generateClasses();
        generateDifficulties();
        generateItems();
        generateRaw();
    }
    reader.readAsText(file);
}

function parseVals() {
    if(!fileText) return;

    vals = {};
    let lines = fileText.split("\n");
    let group = lines[0];
    for(let i in lines) {
        if(lines[i].length < 2) continue;
        let equalInd = lines[i].indexOf('=');
        if(equalInd == -1) {
            group = lines[i].substring(1,lines[i].length-2);
            vals[group] = {};
            continue;
        };

        let periodInd = lines[i].indexOf(".", equalInd);
        let quoteInd = lines[i].indexOf("\"", equalInd+2);

        let key = lines[i].substring(0, equalInd);
        let val;
        if(periodInd == -1)
            val = lines[i].substring(equalInd+2, quoteInd);
        else {
            val = lines[i].substring(equalInd+2, periodInd); 
            let int = parseInt(val);
            if(int == int) val = int;
        }

        vals[group][key] = val;
    }
}

function processRabbits() {
    rabbitStats = [];
    for(let i in rabbitNames) {
        rabbitStats.push({
            id: i,
            class: rabbitNames[i],
            FastestWinTime: NEVER,
            FastestWinDiff: -1,
            FastestWinType: -1,
            FastestOfflineTime: NEVER,
            FastestOfflineDiff: -1,
            FastestOnlineTime: NEVER,
            FastestOnlineDiff: -1,
            TotalWins: 0,
            OfflineWins: 0,
            OnlineWins: 0
        });
    }
    for(let i in vals["AllyWin"]) {
        for(let j in rabbitNames) {
            if(i.includes(rabbitNames[j])) {
                let diff = i[i.length-1];
                let type = i[i.length-3];
                rabbitStats[j][types[type] + diffs[diff] + "Count"] = vals["AllyWin"][i];
                rabbitStats[j]["TotalWins"] += vals["AllyWin"][i];
                if(type == 0) rabbitStats[j]["OfflineWins"] += vals["AllyWin"][i];
                else rabbitStats[j]["OnlineWins"] += vals["AllyWin"][i];
            }
        }
    }
    for(let i in vals["AllyWinTime"]) {
        for(let j in rabbitNames) {
            if(i.includes(rabbitNames[j])) {
                let diff = i[i.length-1];
                let type = i[i.length-3];
                rabbitStats[j][types[type] + diffs[diff] + "Fastest"] = vals["AllyWinTime"][i];
                if(vals["AllyWinTime"][i] > 0) {
                    if(rabbitStats[j].FastestWinTime == NEVER
                            || vals["AllyWinTime"][i] < rabbitStats[j].FastestWinTime) {
                        rabbitStats[j].FastestWinTime = vals["AllyWinTime"][i];
                        rabbitStats[j].FastestWinDiff = diff;
                        rabbitStats[j].FastestWinType = type;
                    }
                    
                    if(type == 0 && (rabbitStats[j].FastestOfflineTime == NEVER
                            || vals["AllyWinTime"][i] < rabbitStats[j].FastestOfflineTime)) {
                        rabbitStats[j].FastestOfflineTime = vals["AllyWinTime"][i];
                        rabbitStats[j].FastestOfflineDiff = diff;
                    }
                    
                    if(type == 1 && (rabbitStats[j].FastestOfflineTime == NEVER
                            || vals["AllyWinTime"][i] < rabbitStats[j].FastestOnlineTime)) {
                        rabbitStats[j].FastestOnlineTime = vals["AllyWinTime"][i];
                        rabbitStats[j].FastestOnlineDiff = diff;
                    }
                }
            }
        }
    }
}

function processItems() {
    items = [];
    itemTotals = [0, 0, 0, 0, 0, 0];
    for(let i in itemNames) {
        if(vals["ItemDiscovery"][itemNames[i]]) {
            let seen = (vals["ItemDiscovery"][itemNames[i]] & 1) > 0;
            let held = (vals["ItemDiscovery"][itemNames[i]] & 2) > 0;
            let cute = (vals["ItemDiscovery"][itemNames[i]] & 4) > 0;
            let normal = (vals["ItemDiscovery"][itemNames[i]] & 8) > 0;
            let hard = (vals["ItemDiscovery"][itemNames[i]] & 16) > 0;
            let lunar = (vals["ItemDiscovery"][itemNames[i]] & 32) > 0;
            items.push({
                key: itemNames[i],
                seen: seen,
                held: held,
                cute: cute,
                normal: normal,
                hard: hard,
                lunar: lunar,
            });
            if(seen) itemTotals[0]++;
            if(held) itemTotals[1]++;
            if(cute) itemTotals[2]++;
            if(normal) itemTotals[3]++;
            if(hard) itemTotals[4]++;
            if(lunar) itemTotals[5]++;
        }
    }
    
    gems = [];
    gemTotals = [0, 0, 0, 0, 0, 0];
    for(let i in gemNames) {
        if(vals["ItemDiscovery"][gemNames[i]]) {
            let seen = (vals["ItemDiscovery"][gemNames[i]] & 1) > 0;
            let held = (vals["ItemDiscovery"][gemNames[i]] & 2) > 0;
            let cute = (vals["ItemDiscovery"][gemNames[i]] & 4) > 0;
            let normal = (vals["ItemDiscovery"][gemNames[i]] & 8) > 0;
            let hard = (vals["ItemDiscovery"][gemNames[i]] & 16) > 0;
            let lunar = (vals["ItemDiscovery"][gemNames[i]] & 32) > 0;
            items.push({
                key: gemNames[i],
                seen: seen,
                held: held,
                cute: cute,
                normal: normal,
                hard: hard,
                lunar: lunar,
            });
            if(seen) gemTotals[0]++;
            if(held) gemTotals[1]++;
            if(cute) gemTotals[2]++;
            if(normal) gemTotals[3]++;
            if(hard) gemTotals[4]++;
            if(lunar) gemTotals[5]++;
        }
    }
}

function saveStats () {

    const contElem = document.getElementById("stats");
    while(contElem.hasChildNodes())
        contElem.firstChild.remove();

    // playtime
    let playtimeElem = document.createElement("div");
    let playH = (vals.Playtime.Playtime / 3600).toFixed(1);
    playtimeElem.textContent = "Total playtime: " + playH + " hours";

    contElem.appendChild(playtimeElem);

    // solo/online
    let nAttempts = vals.SaveInfo.runCountLocal + vals.SaveInfo.runCountOnline;

    let pCountElem = document.createElement("div");
    let countRatio = (vals.SaveInfo.runCountLocal / (nAttempts)).toFixed(2) * 100;
    pCountElem.innerText = "Solo to Multiplayer ratio: "
            + vals.SaveInfo.runCountLocal + ':' + vals.SaveInfo.runCountOnline
            + '  (' + countRatio + ':' + (100 - countRatio) + ')';

    contElem.appendChild(pCountElem);

    // attempts, wins, and ratio
    let numWinsSingle = [0,0,0,0];
    let numWinsMulti = [0,0,0,0];
    for(let i in vals["AllyWin"]) {
        if(i.length < 4) continue;
        let type = i[i.length-3];
        let diff = i[i.length-1];
        if(type == 0)
            numWinsSingle[diff] += vals["AllyWin"][i];
        else
            numWinsMulti[diff] += vals["AllyWin"][i];
    }

    let nWins = 0;
    for(let i in numWinsSingle)
        nWins += numWinsSingle[i];
    for(let i in numWinsMulti)
        nWins += numWinsMulti[i];

    let winLossElem = document.createElement("div");
    winLossElem.textContent = "Wins/Attempts: "
            + nWins + "/" + nAttempts
            + ` (${(nWins/nAttempts * 100).toFixed(2)}%)`;
    
    contElem.appendChild(winLossElem);

    // shops visited stats (and per attempt ratio)

    // top 3 most won classes

    // top 3 fastest classes/difficulties

    // area statistics

    // shop count statistics

    // class win summary, in a table




    // in true random, all visits and wins count as normal
    // in chaotic random, i'm not sure what counts tbh. 
        // visits, no clue
        // wins are determined by which boss you faced
    // mapWinChaosRand and mapWinTrueRand increment on beating the final boss

    // item/upgrade stats are binary, with the following values (i'm guessing)
        // 1's digit if seen
        // 2's digit if ever picked up
        // 4's digit if won with on cute
        // 8's digit if won with on normal
        // 16's digit if won with on hard
        // 32's digit if won with on lunar
}

function generateSummary() {
    // index 1 is Type: offline or online
    // index 2 is Diff
    let numWinsPerTypeDiff = [[0,0,0,0],[0,0,0,0]];
    for(let i in vals["AllyWin"]) {
        if(i.length < 2) continue;
        numWinsPerTypeDiff[i[i.length-3]][i[i.length-1]] += vals["AllyWin"][i];
    }

    // index 1 is Mode: Kingdom, Extra, True Random, or Chaos Random
    // index 2 is Diff
    let numWinsPerModeDiff = [
        [
            vals["SaveInfo"]["mapWinPinnacleC"],
            vals["SaveInfo"]["mapWinPinnacleN"],
            vals["SaveInfo"]["mapWinPinnacleH"],
            vals["SaveInfo"]["mapWinPinnacleL"]
        ],
        [
            vals["SaveInfo"]["mapWinReflectionC"],
            vals["SaveInfo"]["mapWinReflectionN"],
            vals["SaveInfo"]["mapWinReflectionH"],
            vals["SaveInfo"]["mapWinReflectionL"]
        ],
        [
            vals["SaveInfo"]["mapWinTrueRandC"],
            vals["SaveInfo"]["mapWinTrueRandN"],
            vals["SaveInfo"]["mapWinTrueRandH"],
            vals["SaveInfo"]["mapWinTrueRandL"]
        ],
        [
            vals["SaveInfo"]["mapWinChaosRandC"],
            vals["SaveInfo"]["mapWinChaosRandN"],
            vals["SaveInfo"]["mapWinChaosRandH"],
            vals["SaveInfo"]["mapWinChaosRandL"]
        ]
    ];

    // index 1 is Mode: Kingdom or Extra
    // index 2 is Diff
    // results are kinda scuffed by true/chaos random runs
    let numAttemptsPerModeDiff = [
        [
            vals["SaveInfo"]["mapVisitOutskirtsC"],
            vals["SaveInfo"]["mapVisitOutskirtsN"],
            vals["SaveInfo"]["mapVisitOutskirtsH"],
            vals["SaveInfo"]["mapVisitOutskirtsL"],
        ],
        [
            vals["SaveInfo"]["mapVisitGeodeC"],
            vals["SaveInfo"]["mapVisitGeodeN"],
            vals["SaveInfo"]["mapVisitGeodeH"],
            vals["SaveInfo"]["mapVisitGeodeL"],
        ]
    ];

    // an array of classes that have the most wins: total, offline, online
    let mostWins = [];
    rabbitStats.sort((a, b) => {return b.TotalWins - a.TotalWins});
    mostWins[0] = rabbitStats[0];
    
    rabbitStats.sort((a, b) => {return b.OfflineWins - a.OfflineWins});
    mostWins[1] = rabbitStats[0];
    
    rabbitStats.sort((a, b) => {return b.OnlineWins - a.OnlineWins});
    mostWins[2] = rabbitStats[0];

    // an array of classes that have the most wins on each diff
    let mostWinsByDiff = [];
    for(let i in diffs) {
        rabbitStats.sort((a, b) => {
            let aWins = a["Offline" + diffs[i] + "Count"] + a["Online" + diffs[i] + "Count"];
            let bWins = b["Offline" + diffs[i] + "Count"] + a["Online" + diffs[i] + "Count"];
            return bWins - aWins
        });
        mostWinsByDiff[i] = [];
        for(let j in rabbitStats) {
            if(rabbitStats[j]["Offline" + diffs[i] + "Count"]
                    + rabbitStats[j]["Online" + diffs[i] + "Count"]
                    == rabbitStats[0]["Offline" + diffs[i] + "Count"]
                    + rabbitStats[0]["Online" + diffs[i] + "Count"])
                mostWinsByDiff[i].push(rabbitStats[j]);
            else break;
        }
    }

    //an array of classes that have the fastest wins: offline, online
    let fastestWins = [];
    rabbitStats.sort((a, b) => {
        return a.FastestOfflineTime - b.FastestOfflineTime
    });
    fastestWins[0] = rabbitStats[0];

    rabbitStats.sort((a, b) => {
        return a.FastestOnlineTime - b.FastestOnlineTime
    });
    fastestWins[1] = rabbitStats[0];

    // an array of classes that have the fastest wins on each diff (in case of tie)
    let fastestWinsByDiff = [];
    for(let i in diffs) {

        // sort by fastest clear on this diff
        rabbitStats.sort((a, b) => {
            let aTime0 = a["Offline" + diffs[i] + "Fastest"];
            let aTime1 = a["Online" + diffs[i] + "Fastest"];
            let aTime = getMinIfNotZero(aTime0, aTime1);
            let bTime0 = b["Offline" + diffs[i] + "Fastest"];
            let bTime1 = b["Online" + diffs[i] + "Fastest"];
            let bTime = getMinIfNotZero(bTime0, bTime1);
            return aTime - bTime;
        });

        fastestWinsByDiff[i] = [];

        let oTime0 = rabbitStats[0]["Offline" + diffs[i] + "Fastest"];
        let oTime1 = rabbitStats[0]["Online" + diffs[i] + "Fastest"];
        let oTime = getMinIfNotZero(oTime0, oTime1);

        // save all results that are equal to the fastest
        for(let j in rabbitStats) {

            let jTime0 = rabbitStats[j]["Offline" + diffs[i] + "Fastest"];
            let jTime1 = rabbitStats[j]["Online" + diffs[i] + "Fastest"];
            let jTime = getMinIfNotZero(jTime0, jTime1);

            if(jTime == oTime)
                fastestWinsByDiff[i].push(rabbitStats[j]);
            else break;
        }
    }

    document.getElementById("playtime").innerText = (vals["Playtime"]["Playtime"]/3600).toFixed(1) + " hours";

    let nAttempts0 = vals["SaveInfo"]["runCountLocal"];
    let nAttempts1 = vals["SaveInfo"]["runCountOnline"];
    let nWins0 = arraySum(numWinsPerTypeDiff[0]);
    let nWins1 = arraySum(numWinsPerTypeDiff[1]);
    let nShops0 = vals["SaveInfo"]["shopCountLocal_v3"];
    let nShops1 = vals["SaveInfo"]["shopCountOnline"];
    document.getElementById("attempts-0").innerText = nAttempts0 + nAttempts1;
    document.getElementById("attempts-1").innerText = nAttempts0;
    document.getElementById("attempts-2").innerText = nAttempts1;
    document.getElementById("wins-0").innerText = nWins0 + nWins1;
    document.getElementById("wins-1").innerText = nWins0;
    document.getElementById("wins-2").innerText = nWins1;
    document.getElementById("winloss-0").innerText = ((nWins0 + nWins1) / (nAttempts0 + nAttempts1) * 100).toFixed(1) + '%';
    document.getElementById("winloss-1").innerText = (nWins0 / nAttempts0 * 100).toFixed(1) + '%';
    document.getElementById("winloss-2").innerText = (nWins1 / nAttempts1 * 100).toFixed(1) + '%';

    document.getElementById("shops-0").innerText = nShops0 + nShops1;
    document.getElementById("shops-1").innerText = nShops0;
    document.getElementById("shops-2").innerText = nShops1;
    document.getElementById("shopratio-0").innerText = ((nShops0 + nShops1) / (nAttempts0 + nAttempts1)).toFixed(2);
    document.getElementById("shopratio-1").innerText = (nShops0 / nAttempts0).toFixed(2);
    document.getElementById("shopratio-2").innerText = (nShops1 / nAttempts1).toFixed(2);

    
    //todo: this is incomplete, doesn't sort by solo/online
    //tbh, I'd rather just track fastest/winnest 1, not 3
    document.getElementById("fastest0-1").innerText = fastestWins[0].class + ': ' + msToString(fastestWins[0].FastestOfflineTime);
    document.getElementById("fastest0-2").innerText = fastestWins[1].class + ': ' + msToString(fastestWins[1].FastestOnlineTime);

    document.getElementById("winnest0-0").innerText = mostWins[0].class + ': ' + mostWins[0].TotalWins;
    document.getElementById("winnest0-1").innerText = mostWins[1].class + ': ' + mostWins[1].OfflineWins;
    document.getElementById("winnest0-2").innerText = mostWins[2].class + ': ' + mostWins[2].OnlineWins;

    

    document.getElementById("kingdomattempts-0").innerText = vals["SaveInfo"]["mapVisitOutskirtsC"];
    document.getElementById("kingdomattempts-1").innerText = vals["SaveInfo"]["mapVisitOutskirtsN"];
    document.getElementById("kingdomattempts-2").innerText = vals["SaveInfo"]["mapVisitOutskirtsH"];
    document.getElementById("kingdomattempts-3").innerText = vals["SaveInfo"]["mapVisitOutskirtsL"];

    document.getElementById("kingdomwins-0").innerText = vals["SaveInfo"]["mapWinPinnacleC"];
    document.getElementById("kingdomwins-1").innerText = vals["SaveInfo"]["mapWinPinnacleN"];
    document.getElementById("kingdomwins-2").innerText = vals["SaveInfo"]["mapWinPinnacleH"];
    document.getElementById("kingdomwins-3").innerText = vals["SaveInfo"]["mapWinPinnacleL"];

    document.getElementById("kingdomratio-0").innerText = (vals["SaveInfo"]["mapWinPinnacleC"]/vals["SaveInfo"]["mapVisitOutskirtsC"]*100).toFixed(1) + '%';
    document.getElementById("kingdomratio-1").innerText = (vals["SaveInfo"]["mapWinPinnacleN"]/vals["SaveInfo"]["mapVisitOutskirtsN"]*100).toFixed(1) + '%';
    document.getElementById("kingdomratio-2").innerText = (vals["SaveInfo"]["mapWinPinnacleH"]/vals["SaveInfo"]["mapVisitOutskirtsH"]*100).toFixed(1) + '%';
    document.getElementById("kingdomratio-3").innerText = (vals["SaveInfo"]["mapWinPinnacleL"]/vals["SaveInfo"]["mapVisitOutskirtsL"]*100).toFixed(1) + '%';


    document.getElementById("extraattempts-0").innerText = vals["SaveInfo"]["mapVisitGeodeC"];
    document.getElementById("extraattempts-1").innerText = vals["SaveInfo"]["mapVisitGeodeN"];
    document.getElementById("extraattempts-2").innerText = vals["SaveInfo"]["mapVisitGeodeH"];
    document.getElementById("extraattempts-3").innerText = vals["SaveInfo"]["mapVisitGeodeL"];

    document.getElementById("extrawins-0").innerText = vals["SaveInfo"]["mapWinReflectionC"];
    document.getElementById("extrawins-1").innerText = vals["SaveInfo"]["mapWinReflectionN"];
    document.getElementById("extrawins-2").innerText = vals["SaveInfo"]["mapWinReflectionH"];
    document.getElementById("extrawins-3").innerText = vals["SaveInfo"]["mapWinReflectionL"];

    document.getElementById("extraratio-0").innerText = (vals["SaveInfo"]["mapWinReflectionC"]/vals["SaveInfo"]["mapVisitGeodeC"]*100).toFixed(1) + '%';
    document.getElementById("extraratio-1").innerText = (vals["SaveInfo"]["mapWinReflectionN"]/vals["SaveInfo"]["mapVisitGeodeN"]*100).toFixed(1) + '%';
    document.getElementById("extraratio-2").innerText = (vals["SaveInfo"]["mapWinReflectionH"]/vals["SaveInfo"]["mapVisitGeodeH"]*100).toFixed(1) + '%';
    document.getElementById("extraratio-3").innerText = (vals["SaveInfo"]["mapWinReflectionL"]/vals["SaveInfo"]["mapVisitGeodeL"]*100).toFixed(1) + '%';

    
    document.getElementById("truerand-0").innerText = vals["SaveInfo"]["mapWinTrueRandC"];
    document.getElementById("truerand-1").innerText = vals["SaveInfo"]["mapWinTrueRandN"];
    document.getElementById("truerand-2").innerText = vals["SaveInfo"]["mapWinTrueRandH"];
    document.getElementById("truerand-3").innerText = vals["SaveInfo"]["mapWinTrueRandL"];

    document.getElementById("chaosrand-0").innerText = vals["SaveInfo"]["mapWinChaosRandC"];
    document.getElementById("chaosrand-1").innerText = vals["SaveInfo"]["mapWinChaosRandN"];
    document.getElementById("chaosrand-2").innerText = vals["SaveInfo"]["mapWinChaosRandH"];
    document.getElementById("chaosrand-3").innerText = vals["SaveInfo"]["mapWinChaosRandL"];


    //items
    document.getElementById("items-0").innerText = itemTotals[0] + '/' + itemNames.length;
    document.getElementById("items-1").innerText = itemTotals[1] + '/' + itemNames.length;
    document.getElementById("items-2").innerText = itemTotals[2] + '/' + itemNames.length;
    document.getElementById("items-3").innerText = itemTotals[3] + '/' + itemNames.length;
    document.getElementById("items-4").innerText = itemTotals[4] + '/' + itemNames.length;
    document.getElementById("items-5").innerText = itemTotals[5] + '/' + itemNames.length;

    //gems
    document.getElementById("gems-0").innerText = gemTotals[0] + '/' + gemNames.length;
    document.getElementById("gems-1").innerText = gemTotals[1] + '/' + gemNames.length;
    document.getElementById("gems-2").innerText = gemTotals[2] + '/' + gemNames.length;
    document.getElementById("gems-3").innerText = gemTotals[3] + '/' + gemNames.length;
    document.getElementById("gems-4").innerText = gemTotals[4] + '/' + gemNames.length;
    document.getElementById("gems-5").innerText = gemTotals[5] + '/' + gemNames.length;







}

function generateClasses() {

}

function generateDifficulties() {

}

function generateItems() {
    //todo: sort
    //todo: real names
    let itemsElem = document.getElementById("item-grid");
    let itemsChildren = itemsElem.children;
    for(let i = 7; i < itemsChildren.length; i++)
        itemsChildren[i].remove();

    for(let i in itemNames) {
        let labelElem = document.createElement("div");
        if(vals["ItemDiscovery"][itemNames[i]]) {
            labelElem.innerText = itemNames[i];
        }
        else
            labelElem.innerText = "Undiscovered Item";
        itemsElem.appendChild(labelElem);
        
        for(let j = 0; j < 6; j++) {
            let valElem = document.createElement("div");
            valElem.innerText = (vals["ItemDiscovery"][itemNames[i]] & Math.pow(2, j)) > 0;
            itemsElem.appendChild(valElem);
        }
    }
    
    let gemsElem = document.getElementById("gems-grid");
    let gemschildren = gemsElem.children;
    for(let i = 7; i < gemschildren.length; i++)
        gemschildren[i].remove();

    for(let i in itemNames) {
        let labelElem = document.createElement("div");
        if(vals["ItemDiscovery"][gemNames[i]]) {
            labelElem.innerText = gemNames[i];
        }
        else
            labelElem.innerText = "Undiscovered Item";
        gemsElem.appendChild(labelElem);
        
        for(let j = 0; j < 6; j++) {
            let valElem = document.createElement("div");
            valElem.innerText = (vals["ItemDiscovery"][gemNames[i]] & Math.pow(2, j)) > 0;
            gemsElem.appendChild(valElem);
        }
    }
}

function generateRaw () {
    let rawElem = document.getElementById("raw-content");
    while(rawElem.hasChildNodes())
        rawElem.firstChild.remove();

    for(let i in vals) {
        let catElem = document.createElement("div");
        catElem.classList.add("raw-category");

        let catTitle = document.createElement("span");
        catTitle.classList.add("raw-category-title");
        catTitle.textContent = i;

        catElem.appendChild(catTitle);
        
        for(let j in vals[i]) {
            let entryElem = document.createElement("div");
            let labelElem = document.createElement("label");
            let contElem = document.createElement("span");
            labelElem.textContent = j + ': ';
            contElem.textContent = vals[i][j]
            entryElem.appendChild(labelElem);
            entryElem.appendChild(contElem);
            catElem.appendChild(entryElem);
        }
        rawElem.appendChild(catElem);
    }
}

function getMinIfNotZero(in1, in2) {
    if(in1 <= 0 && in2 <= 0) return NEVER;
    if(in1 <= 0) return in2;
    if(in2 <= 0) return in1;
    return Math.min(in1, in2);
}

function arraySum(arr) {
    let ret = 0;
    for(let i in arr)
        ret += arr[i];
    return ret;
}

function msToString(time) {
    let mins = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    seconds = seconds > 10 ? seconds : '0' + seconds;
    let ms = time % 1000;
    return `${mins}:${seconds}`;
}