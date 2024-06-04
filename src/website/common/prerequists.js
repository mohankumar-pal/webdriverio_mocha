const fs = require('fs')
var exceltojson = require("xlsx-to-json-lc");
var NodeXls = require('node-xls');
var i = 0;
if (global.triptype == 'oneway') {
    console.log('oneway :' + (i + 1));
    exceltojson({
        input: "test/testdata/userinput/website/OWandMB.xlsx",
        output: "test/testdata/json/website/OWandMB.json"
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
} 
else if (global.triptype == 'onewayandroid') {
  console.log('oneway :' + (i + 1));
  exceltojson({
      input: "test/testdata/userinput/website/OWandMB.xlsx",
      output: "test/testdata/json/website/OWandMB.json"
  }, function(err, result) {
      if (err) {
          console.error(err);
      } else {
          console.log(result);
      }
  });
}else if (global.triptype == 'Multicity') {
    console.log('multicity')
    exceltojson({
        input: "test/testdata/userinput/website/MulticityMB.xlsx",
        output: "test/testdata/json/website/MulticityMB.json"
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
} else if (global.triptype == 'roundtrip') {
    console.log('roundtrip');
    exceltojson({
        input: "test/testdata/userinput/website/RTandMB.xlsx",
        output: "test/testdata/json/website/RTandMB.json"
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
}
else if (global.triptype == 'flightstatus') {
    console.log('flightstatus');
    exceltojson({

        input: "test/testdata/userinput/website/FlighStatus.xlsx",
        output: "test/testdata/json/website/FlightStatus.json"
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);

        }
    });
}
else if (global.triptype == 'flightschedule') {
    console.log('flightschedule');
    exceltojson({

        input: "test/testdata/userinput/website/FlighSchedule.xlsx",
        output: "test/testdata/json/website/FlightSchedule.json"
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);

        }
    });
}
else if(global.triptype=="Reissue")
{
  exceltojson({

    input: "test/testdata/userinput/website/Reissue.xlsx",
    output: "test/testdata/json/website/Reissue.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      
    }
  });
}
else if(global.triptype=="modifydetails")
{
  exceltojson({

    input: "test/testdata/userinput/website/ModifyDetails.xlsx",
    output: "test/testdata/json/website/ModifyDetails.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      
    }
  });
}
else if(global.triptype=="cancel")
{
  exceltojson({

    input: "test/testdata/userinput/website/Cancel.xlsx",
    output: "test/testdata/json/website/Cancel.json"

  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      
    }
  });
}
else if(global.triptype=="additionalservice")
{
  exceltojson({

    input: "test/testdata/userinput/website/AdditionalService.xlsx",
    output: "test/testdata/json/website/AdditionalService.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      
    }
  });
}

else if(global.triptype=="managebooking")
{
  exceltojson({

    input: "test/testdata/userinput/website/ManageBook.xls",
    output: "test/testdata/json/website/ManageBook.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      
    }
  });
}
else if(global.triptype=="checkin")
{
  exceltojson({

    input: "test/testdata/userinput/website/WebCheckin.xlsx",
    output: "test/testdata/json/website/WebCheckin.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      
    }
  });
}
else if (global.triptype == 'chatbot') {
  console.log('chatbot :' + (i+1));
  exceltojson({
    input: "test/testdata/userinput/website/chatbotdemo.xlsx",
    output: "test/testdata/json/website/OneWay.json"

  }, function (err, result) {

    if (err) {
      console.error(err);
    } else {

      console.log(result);

    }
  });
  
}
if (global.triptype == 'transactionalflow' || global.triptype == 'flightstatusvalidation') {
  console.log('oneway :' + (i + 1));
  exceltojson({
      input: "test/testdata/userinput/website/TransactionalFlow.xlsx",
      output: "test/testdata/json/website/OWandMB.json"
  }, function(err, result) {
      if (err) {
          console.error(err);
      } else {
          console.log(result);
      }
  });
}
