/**
 * Created by sahu on 2/2/2017.
 */
/**
 * Created by sahu on 2/2/2017.
 */

function storinglocally_trainroute(traindetails) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.mydata_route) {
            console.log("my data is created already..");
            try {
                var retriveddata = localStorage.getItem("mydata_route");
                var retriveddataparsed = JSON.parse(retriveddata);
            }catch(error){
                console.log("here is the error 3 :"+error);
            }
            try {
                _.pullAllWith(retriveddataparsed, [traindetails], _.isEqual);

            }catch(error){
                console.log("here is the bug 6 :" +error);
            }
            retriveddataparsed.push(traindetails);
            localStorage.mydata_route=JSON.stringify(retriveddataparsed);
        } else {
            var data=[];
            console.log("creating local storage");
            localStorage.mydata_route = JSON.stringify(data);
            storinglocally_trainroute(traindetails);
        }
    } else {

        console.log("sorry no storage support");
        // Sorry! No Web Storage support..
    }
}

function loadhistory_trainroute(){


    var itemdisplay="<table class=\"table table-condensed centered\"> <thead><tr></tr><h3 class='search glyphicon glyphicon-trash' style='float:right;background-color:rgb(248,248,248)'   onclick=\"clear_cache()\" ></h3>";

    var fetchdata=JSON.parse(localStorage.getItem("mydata_route"));
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

                        itemdisplay += "<tr ><td style='border:2px solid rgb(248,248,248);background-color:rgb(248,248,248);-webkit-shadow-box:10px 6px -6px black;text-align:center;' ><a href='#' onclick='historyonclick(" + JSON.stringify(fetchdata[k]) +")' style='color:black;text-align:center'>" + fetchdata[k].number + " | " + fetchdata[k].name + "</a></td></tr>";
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
function historyonclick(traindetails) {
    train_details=traindetails;
    console.log(traindetails);

    $("#train").val(traindetails.name);
    console.log("historyonclick clicked!!!!...");
    if(route_or_live==0) {
        request_train_route();
    }else if(route_or_live==1){
        option_maker_for_live_TrainStatus();
    }

}

function clear_cache(){
    localStorage.removeItem("mydata_route");
    console.log("history deleted!!!");
    $(".table").html("<h3>_________________________________________***_______________________________</h3>");
}
