
function storinglocallytbts(srcdst) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.mydatatbts) {
            //console.log("my data is created already..");
            try {
                var retriveddata = localStorage.getItem("mydatatbts");
                var retriveddataparsed = JSON.parse(retriveddata);
            }catch(error){
                //console.log("here is the error 3 :"+error);
            }
            try {
                _.pullAllWith(retriveddataparsed, [srcdst], _.isEqual);

            }catch(error){
                //console.log("here is the bug 6 :" +error);
            }
            retriveddataparsed.push(srcdst);
            localStorage.mydatatbts=JSON.stringify(retriveddataparsed);
        } else {
            var data=[];
            //console.log("creating local storage");
            localStorage.mydatatbts = JSON.stringify(data);
            storinglocallytbts(srcdst);
        }
    } else {

        //console.log("sorry no storage support");
        // Sorry! No Web Storage support..
    }
}

function loadhistorytbts(){


    var itemdisplay="<section class=\"table\" style='background-color:rgb(244,244,244)'><section class='row'><h3 class='search glyphicon glyphicon-trash  col-xs-12' onclick=\"clear_cache()\" align='right' ></h3></section></section>";

    var fetchdata=JSON.parse(localStorage.getItem("mydatatbts"));
    try {
        if(fetchdata==null){
            //console.log("empty data");
        }else {
            //console.log(fetchdata[fetchdata.length - 1]);

//console.log("else part of loadhsitory is running");
            var count = 0;
            try {
                for (var k = fetchdata.length - 1; k >= 0; k--) {

                 //console.log(JSON.stringify(fetchdata[k]));

                    count++;
                    try {

                       itemdisplay += "<section style='background-color:white;'><section style='background-color:rgb(244,244,244)' id='table_data' ><a class='row' href='#' id='data_hist' onclick='historyonclick(" + JSON.stringify(fetchdata[k].sourcedetails)+ "," + JSON.stringify(fetchdata[k].destinationdatails) +")' ><section class='col-xs-4' align='right'>" + fetchdata[k].sourcedetails.name + "</section><section class='col-xs-4' align='center'><img src='img/arrow.png' height='21px' width='70px'></section>"+"<section class='col-xs-4' align='left'>"+ fetchdata[k].destinationdatails.name +"</section>"+ "</a></section></section>";
                    }catch(error){
                        //console.log("here is the bug inside itemdisplay means:"+error);
                    }
                    if (count > 6) {
                        break;
                    }


            }
            }catch(error){
                //console.log("here is the bug inside the loop:"+error);
            }
            $(".table").html(itemdisplay);

        }
    }catch(error){
        //console.log(" here is the bug inside reading history :"+error);
    }

    //console.log("fetching history!!!");
}
function historyonclick(sourcedetails1,destinationdetails1) {
    // //console.log(JSON.stringify(sourcedetails1),JSON.stringify(destinationdetails1));
    // src =sourcedetails1.code;
    // //console.log(sourcedetails1.code);
    // dst=destinationdetails1.code;
    // //console.log(destinationdetails1.code);
   sourcedetails=sourcedetails1;
   destinationdatails=destinationdetails1;
    $("#dst").val(destinationdetails1.name);
    $("#src").val( sourcedetails1.name);
    //console.log("historyonclick clicked!!!!...");
    submitform();
}

function clear_cache(){
    localStorage.removeItem("mydatatbts");
    //console.log("history deleted!!!");
    $(".table").html("<h3>_________________________________________***_______________________________</h3>");
}
