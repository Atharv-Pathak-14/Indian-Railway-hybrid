/**
 * Created by sahu on 2/2/2017.
 */

function storinglocallyStnSts(station) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.mydata_StnSts) {
            console.log("my data is created already..");
            try {
                var retriveddata = localStorage.getItem("mydata_StnSts");
                var retriveddataparsed = JSON.parse(retriveddata);
            }catch(error){
                console.log("here is the error 3 :"+error);
            }
            try {
                _.pullAllWith(retriveddataparsed, [station], _.isEqual);

            }catch(error){
                console.log("here is the bug 6 :" +error);
            }
            retriveddataparsed.push(station);
            localStorage.mydata_StnSts=JSON.stringify(retriveddataparsed);
        } else {
            var data=[];
            console.log("creating local storage");
            localStorage.mydata_StnSts = JSON.stringify(data);
            storinglocallyStnSts(station);
        }
    } else {

        console.log("sorry no storage support");
        // Sorry! No Web Storage support..
    }
}

function loadhistoryStnSts(){


    var itemdisplay="<table class=\"table table-condensed centered\"> <thead><h3 class='search glyphicon glyphicon-trash' onclick=\"clear_cache()\" style='float:right;background-color:rgb(248,248,248)'></h3>";

    var fetchdata=JSON.parse(localStorage.getItem("mydata_StnSts"));
    try {
        if(fetchdata==null){
            console.log("empty data");
        }else {
            console.log(fetchdata[fetchdata.length - 1]);

            console.log("else part of loadhsitory is running");
            var count = 0;
            try {
                for (var k = fetchdata.length - 1; k >= 0; k--) {

                    console.log(JSON.stringify(fetchdata[k]));

                    count++;
                    try {

                        itemdisplay += "<tr style='border:2px solid rgb(248,248,248);background-color:rgb(248,248,248);-webkit-shadow-box:10px 6px -6px black'><td style='text-align:center'><a style='color:black' href='#' onclick='historyonclick(" + JSON.stringify(fetchdata[k]) +")' style='color:black'>" + fetchdata[k].name + " (" + fetchdata[k].code + ")</a></td></tr>";
                    }catch(error){
                        console.log("here is the bug inside itemdisplay means:"+error);
                    }
                    if (count > 6) {
                        break;
                    }


                }
            }catch(error){
                console.log("here is the bug inside the loop:"+error);
            }
            $(".table").html(itemdisplay);

        }
    }catch(error){
        console.log(" here is the bug inside reading history :"+error);
    }

    console.log("fetching history!!!");
}
function historyonclick(stationdetails) {
    sourcedetails=stationdetails;
 console.log(stationdetails);

    $("#src").val(sourcedetails.name);
    console.log("historyonclick clicked!!!!...");
    request_live_station_status(sourcedetails,within_hours);
}

function clear_cache(){
    localStorage.removeItem("mydata_StnSts");
    console.log("history deleted!!!");
    $(".table").html("<h3>_________________________________________***_______________________________</h3>");
}
