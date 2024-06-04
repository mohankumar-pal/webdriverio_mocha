const path = require('path');
var exceltojson = require("xlsx-to-json-lc");

//var NodeXls = require('node-xls');

if (global.triptype == "roundtrip") {

    exceltojson({
        input: "test/testdata/userinput/RTandMB.xlsx",
        output: "test/testdata/json/RoundTrip.json"

    }, async function (err, result) {

        if (err) {
            console.error(err);
        } else {

            console.log(result);

        }
    });
}
else if (global.triptype == "oneway") {

    exceltojson({
        input: "test/testdata/userinput/OWandMB.xlsx",
        output: "test/testdata/json/OneWay.json"

    }, async function (err, result) {

        if (err) {
            console.error(err);
        } else {

            console.log(result);

        }
    });
    
}
else if (global.triptype == "multicity") {
    console.log('multicity')
    exceltojson({
        input: "test/testdata/userinput/MulticityMB.xlsx",
        output: "test/testdata/json/Multicity.json"
    }, async function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);

        }
    });
}
else if (global.triptype == "RecentSearch") {

    exceltojson({
        input: "test/testdata/userinput/mobile/OW_RecentSearch.xlsx",
        output: "test/testdata/json/mobile/OW_RecentSearch.json"

    }, async function (err, result) {

        if (err) {
            console.error(err);
        } else {

            console.log(result);

        }
    });
    
}
// else if (global.triptype == "oneway") {

//     exceltojson({
//         input: "test/testdata/userinput/OWandMBandCK.xlsx",
//         output: "test/testdata/json/OneWay.json"

//     }, function (err, result) {

//         if (err) {
//             console.error(err);
//         } else {

//             console.log(result);

//         }
//     });
// }