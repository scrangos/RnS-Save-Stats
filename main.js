let file, fileText;
let vals;
let currentTab = 0;
let prevSortTypes = {
    items: 1,
    gems: 1
}


let rabbitStats = [];
let itemsArray = [];
let itemTotals = [];
let gemsArray = [];
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

const wlLabels = [
    [
        "Total Attempts", "Total Wins", "Win Ratio",
        "Fastest Win (offline)", "Fastest Win (online)",
        "Most Wins", "Most Wins (offline)", "Most Wins (online)"
    ],
    [
        "Kingdom Attempts", "Kingdom Wins", "Kingdom Win Ratio",
        "Extra Attempts", "Extra Wins", "Extra Win Ratio"
    ],
    [
        "Outskirts Attempts", "Outskirts Wins", "Outskirts Win Ratio",
        "Nest Attempts", "Nest Wins", "Nest Win Ratio",
        "Arsenal Attempts", "Arsenal Wins", "Arsenal Win Ratio",
        "Darkhouse Attempts", "Darkhouse Wins", "Darkhouse Win Ratio",
        "Churchmouse Attempts", "Churchmouse Wins", "Churchmouse Win Ratio",
        "Lakeside Attempts", "Lakeside Wins", "Lakeside Win Ratio",
        "Pale Keep Attempts", "Pale Keep Wins", "Pale Keep Win Ratio"
    ],
    [
        "Geode Attempts", "Geode Wins", "Geode Win Ratio",
        "Depths Attempts", "Depths Wins", "Depths Win Ratio",
        "Aurum Attempts", "Aurum Wins", "Aurum Win Ratio",
        "Sanctum Attempts", "Sanctum Wins", "Sanctum Win Ratio",
        "Hallway Attempts", "Hallway Wins", "Hallway Win Ratio"
    ]
];
const wlIds = [
    [
        "wl-attempts", "wl-wins", "wl-ratio",
        "wl-fastest0", "wl-fastest1",
        "wl-winnest", "wl-winnest0", "wl-winnest1"
    ],
    [
        "wl-kingdom-attempts", "wl-kingdom-wins", "wl-kingdom-ratio",
        "wl-extra-attempts", "wl-extra-wins", "wl-extra-ratio"
    ],
    [
        "wl-outskirts-attempts", "wl-outskirts-wins", "wl-outskirts-ratio",
        "wl-nest-attempts", "wl-nest-wins", "wl-nest-ratio",
        "wl-arsenal-attempts", "wl-arsenal-wins", "wl-arsenal-ratio",
        "wl-darkhouse-attempts", "wl-darkhouse-wins", "wl-darkhouse-ratio",
        "wl-churchmouse-attempts", "wl-churchmouse-wins", "wl-churchmouse-ratio",
        "wl-lakeside-attempts", "wl-lakeside-wins", "wl-lakeside-ratio",
        "wl-keep-attempts", "wl-keep-wins", "wl-keep-ratio"
    ],
    [
        "wl-geode-attempts", "wl-geode-wins", "wl-geode-ratio",
        "wl-depths-attempts", "wl-depths-wins", "wl-depths-ratio",
        "wl-aurum-attempts", "wl-aurum-wins", "wl-aurum-ratio",
        "wl-sanctum-attempts", "wl-sanctum-wins", "wl-sanctum-ratio",
        "wl-hallway-attempts", "wl-hallway-wins", "wl-hallway-ratio"
    ]
];

function init() {
    currentTab = 0;
    buildWLTables();

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

function buildWLTables() {
    let gridElem = document.getElementById("wl-grid");

    //heading
    let elem = document.createElement("div");
    elem.classList.add("grid-top");
    gridElem.appendChild(elem);
    for(let i in diffs) {
        elem = document.createElement("div");
        elem.classList.add("grid-top");
        elem.innerText = diffs[i];
        gridElem.appendChild(elem);
    }
    elem = document.createElement("div");
    elem.classList.add("grid-top");
    elem.innerText = "Total";
    gridElem.appendChild(elem);



    for(let i in wlLabels) {
        for(let j in wlLabels[i]) {
            elem = document.createElement("div");
            elem.classList.add("grid-left");
            elem.innerText = wlLabels[i][j];
            gridElem.appendChild(elem);
            
            for(let k = 0; k < 5; k++) {
                elem = document.createElement("div");
                elem.innerText = '-';
                elem.setAttribute("id", wlIds[i][j] + '-' + k);
                gridElem.appendChild(elem);
            }
        }
        
        elem = document.createElement("div");
        elem.classList.add("fullrow");
        gridElem.appendChild(elem);
    }


}

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
        generateRabbits();
        generateWinLoss();
        generateItems();
        generateGems();
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
    itemsArray = [];
    itemTotals = [0, 0, 0, 0, 0, 0];
    for(let i in ITEMS) {
        if(vals["ItemDiscovery"][ITEMS[i].key]) {
            let seen = (vals["ItemDiscovery"][ITEMS[i].key] & 1) > 0;
            let held = (vals["ItemDiscovery"][ITEMS[i].key] & 2) > 0;
            let cute = (vals["ItemDiscovery"][ITEMS[i].key] & 4) > 0;
            let normal = (vals["ItemDiscovery"][ITEMS[i].key] & 8) > 0;
            let hard = (vals["ItemDiscovery"][ITEMS[i].key] & 16) > 0;
            let lunar = (vals["ItemDiscovery"][ITEMS[i].key] & 32) > 0;
            itemsArray.push({
                key: ITEMS[i].key,
                name: ITEMS[i].name,
                id: ITEMS[i].id,
                seen: seen,
                held: held,
                cute: cute,
                normal: normal,
                hard: hard,
                lunar: lunar
            });
            if(seen) itemTotals[0]++;
            if(held) itemTotals[1]++;
            if(cute) itemTotals[2]++;
            if(normal) itemTotals[3]++;
            if(hard) itemTotals[4]++;
            if(lunar) itemTotals[5]++;
        }
    }
    
    gemsArray = [];
    gemTotals = [0, 0, 0, 0, 0, 0];
    for(let i in GEMS) {
        if(vals["ItemDiscovery"][GEMS[i].key]) {
            let seen = (vals["ItemDiscovery"][GEMS[i].key] & 1) > 0;
            let held = (vals["ItemDiscovery"][GEMS[i].key] & 2) > 0;
            let cute = (vals["ItemDiscovery"][GEMS[i].key] & 4) > 0;
            let normal = (vals["ItemDiscovery"][GEMS[i].key] & 8) > 0;
            let hard = (vals["ItemDiscovery"][GEMS[i].key] & 16) > 0;
            let lunar = (vals["ItemDiscovery"][GEMS[i].key] & 32) > 0;
            gemsArray.push({
                key: GEMS[i].key,
                type: GEMS[i].type,
                cId: GEMS[i].cId,
                slot: GEMS[i].slot,
                id: GEMS[i].id,
                seen: seen,
                held: held,
                cute: cute,
                normal: normal,
                hard: hard,
                lunar: lunar
            });
            if(seen && GEMS[i].type > 0) gemTotals[0]++;
            if(held && GEMS[i].type > 0) gemTotals[1]++;
            if(cute) gemTotals[2]++;
            if(normal) gemTotals[3]++;
            if(hard) gemTotals[4]++;
            if(lunar) gemTotals[5]++;
        }
    }
}

function processLocations() {

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
    document.getElementById("attempts-0").innerText = nAttempts0 + nAttempts1;
    document.getElementById("attempts-1").innerText = nAttempts0;
    document.getElementById("attempts-2").innerText = nAttempts1;
    let nWins0 = arraySum(numWinsPerTypeDiff[0]);
    let nWins1 = arraySum(numWinsPerTypeDiff[1]);
    document.getElementById("wins-0").innerText = nWins0 + nWins1;
    document.getElementById("wins-1").innerText = nWins0;
    document.getElementById("wins-2").innerText = nWins1;
    let winRatio = resolveNaN((nWins0 + nWins1) / (nAttempts0 + nAttempts1));
    let winRatio0 = resolveNaN(nWins0 / nAttempts0);
    let winRatio1 = resolveNaN(nWins1 / nAttempts1);
    document.getElementById("winloss-0").innerText = (winRatio * 100).toFixed(1) + '%';
    document.getElementById("winloss-1").innerText = (winRatio0 * 100).toFixed(1) + '%';
    document.getElementById("winloss-2").innerText = (winRatio1 * 100).toFixed(1) + '%';

    let nShops0 = vals["SaveInfo"]["shopCountLocal_v3"];
    let nShops1 = vals["SaveInfo"]["shopCountOnline"];
    document.getElementById("shops-0").innerText = nShops0 + nShops1;
    document.getElementById("shops-1").innerText = nShops0;
    document.getElementById("shops-2").innerText = nShops1;
    let shopRatio = resolveNaN((nShops0 + nShops1) / (nAttempts0 + nAttempts1));
    let shopRatio0 = resolveNaN(nShops0 / nAttempts0);
    let shopRatio1 = resolveNaN(nShops1 / nAttempts1);
    document.getElementById("shopratio-0").innerText = (shopRatio).toFixed(2);
    document.getElementById("shopratio-1").innerText = (shopRatio0).toFixed(2);
    document.getElementById("shopratio-2").innerText = (shopRatio1).toFixed(2);

    
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

    document.getElementById("kingdomratio-0").innerText = resolveNaN(vals["SaveInfo"]["mapWinPinnacleC"]/vals["SaveInfo"]["mapVisitOutskirtsC"]*100).toFixed(1) + '%';
    document.getElementById("kingdomratio-1").innerText = resolveNaN(vals["SaveInfo"]["mapWinPinnacleN"]/vals["SaveInfo"]["mapVisitOutskirtsN"]*100).toFixed(1) + '%';
    document.getElementById("kingdomratio-2").innerText = resolveNaN(vals["SaveInfo"]["mapWinPinnacleH"]/vals["SaveInfo"]["mapVisitOutskirtsH"]*100).toFixed(1) + '%';
    document.getElementById("kingdomratio-3").innerText = resolveNaN(vals["SaveInfo"]["mapWinPinnacleL"]/vals["SaveInfo"]["mapVisitOutskirtsL"]*100).toFixed(1) + '%';


    document.getElementById("extraattempts-0").innerText = vals["SaveInfo"]["mapVisitGeodeC"];
    document.getElementById("extraattempts-1").innerText = vals["SaveInfo"]["mapVisitGeodeN"];
    document.getElementById("extraattempts-2").innerText = vals["SaveInfo"]["mapVisitGeodeH"];
    document.getElementById("extraattempts-3").innerText = vals["SaveInfo"]["mapVisitGeodeL"];

    document.getElementById("extrawins-0").innerText = vals["SaveInfo"]["mapWinReflectionC"];
    document.getElementById("extrawins-1").innerText = vals["SaveInfo"]["mapWinReflectionN"];
    document.getElementById("extrawins-2").innerText = vals["SaveInfo"]["mapWinReflectionH"];
    document.getElementById("extrawins-3").innerText = vals["SaveInfo"]["mapWinReflectionL"];

    document.getElementById("extraratio-0").innerText = resolveNaN(vals["SaveInfo"]["mapWinReflectionC"]/vals["SaveInfo"]["mapVisitGeodeC"]*100).toFixed(1) + '%';
    document.getElementById("extraratio-1").innerText = resolveNaN(vals["SaveInfo"]["mapWinReflectionN"]/vals["SaveInfo"]["mapVisitGeodeN"]*100).toFixed(1) + '%';
    document.getElementById("extraratio-2").innerText = resolveNaN(vals["SaveInfo"]["mapWinReflectionH"]/vals["SaveInfo"]["mapVisitGeodeH"]*100).toFixed(1) + '%';
    document.getElementById("extraratio-3").innerText = resolveNaN(vals["SaveInfo"]["mapWinReflectionL"]/vals["SaveInfo"]["mapVisitGeodeL"]*100).toFixed(1) + '%';

    
    document.getElementById("truerand-0").innerText = vals["SaveInfo"]["mapWinTrueRandC"];
    document.getElementById("truerand-1").innerText = vals["SaveInfo"]["mapWinTrueRandN"];
    document.getElementById("truerand-2").innerText = vals["SaveInfo"]["mapWinTrueRandH"];
    document.getElementById("truerand-3").innerText = vals["SaveInfo"]["mapWinTrueRandL"];

    document.getElementById("chaosrand-0").innerText = vals["SaveInfo"]["mapWinChaosRandC"];
    document.getElementById("chaosrand-1").innerText = vals["SaveInfo"]["mapWinChaosRandN"];
    document.getElementById("chaosrand-2").innerText = vals["SaveInfo"]["mapWinChaosRandH"];
    document.getElementById("chaosrand-3").innerText = vals["SaveInfo"]["mapWinChaosRandL"];


    //items
    document.getElementById("items-0").innerText = itemTotals[0] + '/' + ITEMS.length;
    document.getElementById("items-1").innerText = itemTotals[1] + '/' + ITEMS.length;
    document.getElementById("items-2").innerText = itemTotals[2] + '/' + ITEMS.length;
    document.getElementById("items-3").innerText = itemTotals[3] + '/' + ITEMS.length;
    document.getElementById("items-4").innerText = itemTotals[4] + '/' + ITEMS.length;
    document.getElementById("items-5").innerText = itemTotals[5] + '/' + ITEMS.length;

    //gems
    document.getElementById("gems-0").innerText = gemTotals[0] + '/' + (GEMS.length - RABBITS.length * 4);
    document.getElementById("gems-1").innerText = gemTotals[1] + '/' + (GEMS.length - RABBITS.length * 4);
    document.getElementById("gems-2").innerText = gemTotals[2] + '/' + GEMS.length;
    document.getElementById("gems-3").innerText = gemTotals[3] + '/' + GEMS.length;
    document.getElementById("gems-4").innerText = gemTotals[4] + '/' + GEMS.length;
    document.getElementById("gems-5").innerText = gemTotals[5] + '/' + GEMS.length;







}

function generateRabbits() {
    let rabbitsElem = document.getElementById("rabbits-content");
    while(rabbitsElem.hasChildNodes())
        rabbitsElem.firstChild.remove();

    // overview, with a pie graph of rabbits by win count
    // leaderboard/bar graph of fastest rabbits

    rabbitStats.sort((a, b) => {return a.id - b.id});

    for(let i in rabbitStats) {
        //todo: skip if character is undiscovered

        let rabbitCont = document.createElement("div");
        let color = blendColor(RABBITS[rabbitStats[i].id].color, "#FFFFFF", 1, 4);
        let styleString = `background: ${color}`;
        rabbitCont.setAttribute("style", styleString);
        rabbitCont.classList.add("box");

        let titleElem = document.createElement("div");
        titleElem.classList.add("title");
        titleElem.textContent = RABBITS[rabbitStats[i].id].name;

        rabbitCont.appendChild(titleElem);

        //per rabbit: 
        let gridElem = document.createElement("div");
        gridElem.classList.add("grid");
        gridElem.classList.add("grid-5");

        // headings
        let elem = document.createElement("div");
        elem.classList.add("grid-top");
        elem.innerText = "";
        gridElem.appendChild(elem);
        for(let j in diffs) {
            elem = document.createElement("div");
            elem.classList.add("grid-top");
            elem.innerText = diffs[j];
            gridElem.appendChild(elem);
        }
        elem = document.createElement("div");
        elem.classList.add("grid-top");
        elem.innerText = "Total";
        gridElem.appendChild(elem);

        // total clears
        elem = document.createElement("div");
        elem.classList.add("grid-left");
        elem.innerText = "Total Clears";
        gridElem.appendChild(elem);
        for(let j in diffs) {
            elem = document.createElement("div");
            elem.innerText = rabbitStats[i][`Offline${diffs[j]}Count`] + rabbitStats[i][`Online${diffs[j]}Count`];
            gridElem.appendChild(elem);
        }
        elem = document.createElement("div");
        elem.innerText = rabbitStats[i].TotalWins;
        gridElem.appendChild(elem);

        // offline clears
        elem = document.createElement("div");
        elem.classList.add("grid-left");
        elem.innerText = "Offline Clears";
        gridElem.appendChild(elem);
        for(let j in diffs) {
            elem = document.createElement("div");
            elem.innerText = rabbitStats[i][`Offline${diffs[j]}Count`];
            gridElem.appendChild(elem);
        }
        elem = document.createElement("div");
        elem.innerText = rabbitStats[i].OfflineWins;
        gridElem.appendChild(elem);

        // online clears
        elem = document.createElement("div");
        elem.classList.add("grid-left");
        elem.innerText = "Online Clears";
        gridElem.appendChild(elem);
        for(let j in diffs) {
            elem = document.createElement("div");
            elem.innerText = rabbitStats[i][`Online${diffs[j]}Count`];
            gridElem.appendChild(elem);
        }
        elem = document.createElement("div");
        elem.innerText = rabbitStats[i].OnlineWins;
        gridElem.appendChild(elem);

        // offline fastest
        elem = document.createElement("div");
        elem.classList.add("grid-left");
        elem.innerText = "Offline Fastest";
        gridElem.appendChild(elem);
        for(let j in diffs) {
            elem = document.createElement("div");
            let t = rabbitStats[i][`Offline${diffs[j]}Fastest`];
            if(t) elem.innerText = msToString(t);
            else elem.innerText = '-';
            gridElem.appendChild(elem);
        }
        elem = document.createElement("div");
        elem.innerText = msToString(rabbitStats[i].FastestOfflineTime);
        gridElem.appendChild(elem);

        // online fastest
        elem = document.createElement("div");
        elem.classList.add("grid-left");
        elem.innerText = "Online Fastest";
        gridElem.appendChild(elem);
        for(let j in diffs) {
            elem = document.createElement("div");
            let t = rabbitStats[i][`Online${diffs[j]}Fastest`];
            if(t) elem.innerText = msToString(t);
            else elem.innerText = '-';
            gridElem.appendChild(elem);
        }
        elem = document.createElement("div");
        elem.innerText = msToString(rabbitStats[i].FastestOnlineTime);
        gridElem.appendChild(elem);

        rabbitCont.appendChild(gridElem);

        rabbitCont.appendChild(document.createElement("br"));

        let rabbitGems = [0, 0, 0, 0, 0, 0];
        for(let j in gemsArray) {
            let rName = RABBITS[rabbitStats[i].id].key;
            if(RABBITS[rabbitStats[i].id].itemKey) rName = RABBITS[rabbitStats[i].id].itemKey;
            if(gemsArray[j].key.includes(rName)) {
                if(gemsArray[j].seen && gemsArray[j].type != 0) rabbitGems[0]++;
                if(gemsArray[j].held && gemsArray[j].type != 0) rabbitGems[1]++;
                if(gemsArray[j].cute) rabbitGems[2]++;
                if(gemsArray[j].normal) rabbitGems[3]++;
                if(gemsArray[j].hard) rabbitGems[4]++;
                if(gemsArray[j].lunar) rabbitGems[5]++;
            }
        }

        titleElem = document.createElement("div");
        titleElem.classList.add("centered");
        titleElem.textContent = "Gem Progress";

        rabbitCont.appendChild(titleElem);

        gridElem = document.createElement("div");
        gridElem.classList.add("grid");
        gridElem.classList.add("grid-5");

        // headings
        elem = document.createElement("div");
        elem.classList.add("grid-top");
        elem.innerText = "Seen";
        gridElem.appendChild(elem);
        elem = document.createElement("div");
        elem.classList.add("grid-top");
        elem.innerText = "Purchased";
        gridElem.appendChild(elem);
        for(let j in diffs) {
            elem = document.createElement("div");
            elem.classList.add("grid-top");
            elem.innerText = diffs[j];
            gridElem.appendChild(elem);
        }

        elem = document.createElement("div");
        elem.innerText = `${rabbitGems[0]}/20`;
        gridElem.appendChild(elem);
        elem = document.createElement("div");
        elem.innerText = `${rabbitGems[1]}/20`;
        gridElem.appendChild(elem);
        elem = document.createElement("div");
        elem.innerText = `${rabbitGems[2]}/24`;
        gridElem.appendChild(elem);
        elem = document.createElement("div");
        elem.innerText = `${rabbitGems[3]}/24`;
        gridElem.appendChild(elem);
        elem = document.createElement("div");
        elem.innerText = `${rabbitGems[4]}/24`;
        gridElem.appendChild(elem);
        elem = document.createElement("div");
        elem.innerText = `${rabbitGems[5]}/24`;
        gridElem.appendChild(elem);

        rabbitCont.appendChild(gridElem);

        rabbitCont.appendChild(document.createElement("br"));

        rabbitsElem.appendChild(rabbitCont);
    }
}

function generateWinLoss() {
    const diffChars = "CHNL";

    for(let i in diffs) {
        let attempts = vals.SaveInfo[`mapVisitOutskirts${diffChars[i]}`] + vals.SaveInfo[`mapVisitGeode${diffChars[i]}`];
        let wins = vals.SaveInfo[`mapWinPinnacle${diffChars[i]}`] + vals.SaveInfo[`mapWinReflection${diffChars[i]}`];
        document.getElementById(`wl-attempts-${i}`).innerText = attempts;
        document.getElementById(`wl-wins-${i}`).innerText = wins;
        document.getElementById(`wl-ratio-${i}`).innerText = (wins / attempts * 100).toFixed(1) + '%';
        //fastest0
        //fastest1
        //winnest
        //winnest0
        //winnest1

        //kingdom
        //extra
        //true random
        //chaotic random

        let doLocMan = (id, attempts, wins) => {
            let ratio = (wins / attempts * 100).toFixed(1) + '%';
            if(!attempts || !(wins || wins == 0)) {
                ratio = '-';
                wins = '-';
            }
            if(!attempts && attempts != 0) attempts = '-';
            document.getElementById(`wl-${id}-attempts-${i}`).innerText = attempts;
            document.getElementById(`wl-${id}-wins-${i}`).innerText = wins;
            document.getElementById(`wl-${id}-ratio-${i}`).innerText = ratio;
        };
        let doLoc = (id, key) => {
            let attempts = vals.SaveInfo[`mapVisit${key}${diffChars[i]}`];
            let wins = vals.SaveInfo[`mapWin${key}${diffChars[i]}`];
            doLocMan(id, attempts, wins);
        };

        //no win count :c
        doLocMan("outskirts", vals.SaveInfo[`mapVisitOutskirts${diffChars[i]}`]);
        doLoc("nest", "Nest");
        doLoc("arsenal", "Arsenal");
        doLoc("darkhouse", "Lighthouse");
        doLoc("churchmouse", "Streets");
        doLoc("lakeside", "Lakeside");
        //manual
        let keepVisits = vals.SaveInfo[`mapVisitKeep${diffChars[i]}`];
        let keepWins = vals.SaveInfo[`mapWinPinnacle${diffChars[i]}`];
        doLocMan("keep", keepVisits, keepWins);

        //no win count :c
        doLocMan("geode", vals.SaveInfo[`mapVisitGeode${diffChars[i]}`]);
        doLoc("depths", "Depths");
        doLoc("aurum", "Aurum");
        doLoc("sanctum", "Sanct");
        //manual
        let loopVisits = vals.SaveInfo[`mapVisitDarkhall${diffChars[i]}`];
        let loopWins = vals.SaveInfo[`mapWinReflection${diffChars[i]}`];
        doLocMan("hallway", loopVisits, loopWins);
    }

    let doTotalLocMan = (id, attempts, wins) => {
        let ratio = (wins / attempts * 100).toFixed(1) + '%';
        if(!attempts || !(wins || wins == 0)) {
            ratio = '-';
            wins = '-';
        }
        if(!attempts && attempts != 0) attempts = '-';
        document.getElementById(`wl-${id}-attempts-${4}`).innerText = attempts;
        document.getElementById(`wl-${id}-wins-${4}`).innerText = wins;
        document.getElementById(`wl-${id}-ratio-${4}`).innerText = ratio;

    };
    let doTotalLoc = (id, key) => {
        let attempts = 0, wins = 0;
        for(let i in diffs) {
            attempts += vals.SaveInfo[`mapVisit${key}${diffChars[i]}`];
            wins += vals.SaveInfo[`mapWin${key}${diffChars[i]}`];
        }
        doTotalLocMan(id, attempts, wins);
    };
    let outskirtVisits = 0;
    let keepVisits = 0;
    let keepWins = 0;
    let geodeVisits = 0;
    let loopVisits = 0;
    let loopWins = 0;
    for(let i in diffs) {
        outskirtVisits += vals.SaveInfo[`mapVisitOutskirts${diffChars[i]}`];
        keepVisits += vals.SaveInfo[`mapVisitKeep${diffChars[i]}`];
        keepWins += vals.SaveInfo[`mapWinPinnacle${diffChars[i]}`];
        geodeVisits += vals.SaveInfo[`mapVisitGeode${diffChars[i]}`];
        loopVisits += vals.SaveInfo[`mapVisitDarkhall${diffChars[i]}`];
        loopWins += vals.SaveInfo[`mapWinReflection${diffChars[i]}`];
    }
    //no win count :c
    doTotalLocMan("outskirts", outskirtVisits);
    doTotalLoc("nest", "Nest");
    doTotalLoc("arsenal", "Arsenal");
    doTotalLoc("darkhouse", "Lighthouse");
    doTotalLoc("churchmouse", "Streets");
    doTotalLoc("lakeside", "Lakeside");
    //manual
    doTotalLocMan("keep", keepVisits, keepWins);

    //no win count :c
    doTotalLocMan("geode", geodeVisits);
    doTotalLoc("depths", "Depths");
    doTotalLoc("aurum", "Aurum");
    doTotalLoc("sanctum", "Sanct");
    //manual
    doTotalLocMan("hallway", loopVisits, loopWins);
}

function generateItems(sortType) {
    itemsArray.sort((a, b) => {
        return a.id - b.id;
    });
    if(sortType) {
        const SORTS = ["", "id", "name", "seen", "held", "cute", "normal", "hard", "lunar"];
        if(sortType > SORTS.length) {
            console.error("attempted to sort by out of bounds value");
        }
        else {
            let checkVar = SORTS[sortType];
            let sortMult = 1;
            if(sortType == prevSortTypes.items) {
                sortMult = -1;
                prevSortTypes.items = -sortType;
            }
            else
                prevSortTypes.items = sortType;

            itemsArray.sort((a, b) => {
                return sortMult * (a[checkVar] > b[checkVar] ? 1 : -1);
            });
        }
    }

    let itemsElem = document.getElementById("item-grid");
    let itemsChildren = itemsElem.children;
    while(itemsChildren.length > 7)
        itemsChildren[7].remove();

    for(let i in itemsArray) {
        // add a gap every 8 if sorted by default
        if((!sortType || sortType == 1) && i && !(i % 8)) {
            for(let j = 0; j < 7; j++) {
                let fillElem = document.createElement("div");
                fillElem.setAttribute("style", "height: 0.5em");
                itemsElem.appendChild(fillElem);
            }
        }

        let labelElem = document.createElement("div");
        if(vals["ItemDiscovery"][itemsArray[i].key]) {
            labelElem.innerText = itemsArray[i].name;
        }
        else
            labelElem.innerText = "Undiscovered Item";

        if(i%2) labelElem.classList.add("odd");
        else labelElem.classList.add("even");
        labelElem.classList.add("grid-left");

        itemsElem.appendChild(labelElem);
        
        for(let j = 0; j < 6; j++) {
            let valElem = document.createElement("div");
            valElem.innerText = (vals["ItemDiscovery"][itemsArray[i].key] & Math.pow(2, j)) > 0 ? "X" : "";
            
            if(i%2) valElem.classList.add("odd");
            else valElem.classList.add("even");
            itemsElem.appendChild(valElem);
        }
    }
}

function generateGems (sortType) {
    gemsArray.sort((a, b) => {
        return a.id - b.id;
    });
    if(sortType) {
        const SORTS = ["", "id", "key", "seen", "held", "cute", "normal", "hard", "lunar"];
        if(sortType > SORTS.length) {
            console.error("attempted to sort by out of bounds value");
        }
        else {
            let checkVar = SORTS[sortType];
            let sortMult = 1;
            if(sortType == prevSortTypes.gems) {
                sortMult = -1;
                prevSortTypes.gems = -sortType;
            }
            else
                prevSortTypes.gems = sortType;

            gemsArray.sort((a, b) => {
                return sortMult * (a[checkVar] > b[checkVar] ? 1 : -1);
            });
        }
    }

    let gemsElem = document.getElementById("gems-grid");
    let gemschildren = gemsElem.children;
    while(gemschildren.length > 7)
        gemschildren[7].remove();

    let cId = -1;
    for(let i in gemsArray) {

        // add a character label if this is a different char
        if(cId != gemsArray[i].cId) {
            cId = gemsArray[i].cId;
            let styleString = `background:${RABBITS[cId].color};`;
            let charElem = document.createElement("div");
            charElem.setAttribute("style", styleString);
            charElem.classList.add("fullrow");
            charElem.textContent = RABBITS[cId].name;
            gemsElem.appendChild(charElem);
        }

        let c;
        if(i % 2) c = blendColor(RABBITS[cId].color, "#FFFFFF", 1, 4);
        else c = blendColor(RABBITS[cId].color, "#FFFFFF", 1, 16);
        let styleString = `background:${c}`;

        let labelElem = document.createElement("div");
        labelElem.setAttribute("style", styleString);
        labelElem.innerText = `${GEMTYPESCAPS[gemsArray[i].type]} ${ABILITIES[gemsArray[i].slot]}`;

        labelElem.classList.add("grid-left");

        gemsElem.appendChild(labelElem);
        
        for(let j = 0; j < 6; j++) {
            let valElem = document.createElement("div");
            if(gemsArray[i].type == 0 && j < 2)
                valElem.innerText = '-';
            else
                valElem.innerText = (vals["ItemDiscovery"][gemsArray[i].key] & Math.pow(2, j)) > 0 ? "X" : ""

            valElem.setAttribute("style", styleString);

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

function resolveNaN(num) {
    if(num != num)
        return 0;
    return num;
}

function blendColor(c1, c2, r1, r2) {
    if(!r1) r1 = 1;
    if(!r2) r2 = 1;
    let red1 = parseInt(c1.substring(1, 3), 16),
        red2 = parseInt(c2.substring(1, 3), 16),
        green1 = parseInt(c1.substring(3, 5), 16),
        green2 = parseInt(c2.substring(3, 5), 16),
        blue1 = parseInt(c1.substring(5, 7), 16),
        blue2 = parseInt(c2.substring(5, 7), 16);
    let ret = '#' + Math.floor((red1 * r1 + red2 * r2) / (r1 + r2)).toString(16)
         + Math.floor((green1 * r1 + green2 * r2) / (r1 + r2)).toString(16)
         + Math.floor((blue1 * r1 + blue2 * r2) / (r1 + r2)).toString(16);
    return ret;
}