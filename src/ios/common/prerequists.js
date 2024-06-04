const path = require('path');
var exceltojson = require("xlsx-to-json-lc");

//var NodeXls = require('node-xls');
const excelToJsonWrapper = async function () {
    await new Promise((resolve, reject) => {
        if (global.triptype == "roundtrip") {

            exceltojson({
                input: "test/testdata/userinput/mobile/RTandMB.xlsx",
                output: "test/testdata/json/mobile/RoundTrip.json"

            }, async function (err, result) {

                if (err) {
                    console.error(err);
                    reject()
                } else {

                    console.log(result);
                    resolve()

                }
            });
        }
        else if (global.triptype == "oneway") {

            exceltojson({
                input: "test/testdata/userinput/mobile/OWandMB.xlsx",
                output: "test/testdata/json/mobile/OneWay.json"

            }, async function (err, result) {

                if (err) {
                    console.error(err);
                    reject()
                } else {

                    console.log(result);
                    resolve()

                }
            });

        }
        else if (global.triptype == "multicity") {
            console.log('multicity')
            exceltojson({
                input: "test/testdata/userinput/mobile/MulticityMB.xlsx",
                output: "test/testdata/json/mobile/Multicity.json"
            }, async function (err, result) {
                if (err) {
                    console.error(err);
                    reject()
                } else {
                    console.log(result);
                    resolve()

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
                    reject()
                } else {

                    console.log(result);
                    resolve()

                }
            });

        }
        else if (global.triptype == 'transactionalflow' || global.triptype == 'navigatealltabs') {
            exceltojson({
                input: "test/testdata/userinput/mobile/TransactionalFlow.xlsx",
                output: "test/testdata/json/mobile/TransactionalFlow.json"
            }, function (err, result) {
                if (err) {
                    console.error(err);
                    reject()
                } else {
                    console.log(result);
                    resolve()
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
    })
}
exports.excelToJsonWrapper = excelToJsonWrapper;