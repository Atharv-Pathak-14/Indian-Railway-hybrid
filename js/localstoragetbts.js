
function storinglocallytbts(srcdst) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.mydatatbts) {
            console.log("my data is created already..");
            try {
                var retriveddata = localStorage.getItem("mydatatbts");
                var retriveddataparsed = JSON.parse(retriveddata);
            }catch(error){
                console.log("here is the error 3 :"+error);
            }
            try {
                _.pullAllWith(retriveddataparsed, [srcdst], _.isEqual);

            }catch(error){
                console.log("here is the bug 6 :" +error);
            }
            retriveddataparsed.push(srcdst);
            localStorage.mydatatbts=JSON.stringify(retriveddataparsed);
        } else {
            var data=[];
            console.log("creating local storage");
            localStorage.mydatatbts = JSON.stringify(data);
            storinglocallytbts(srcdst);
        }
    } else {

        console.log("sorry no storage support");
        // Sorry! No Web Storage support..
    }
}

function loadhistorytbts(){


    var itemdisplay="<table class=\"table table-condensed centered main_history_table\"><thead><h4 class='search glyphicon glyphicon-trash trash' onclick=\"clear_cache()\" style='float:right'>";

    var fetchdata=JSON.parse(localStorage.getItem("mydatatbts"));
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

                       itemdisplay += "<tr id='table_row' ><td style='background-color:rgb(244,244,244)' id='table_data' ><a href='#' id='data_hist' onclick='historyonclick(" + JSON.stringify(fetchdata[k].sourcedetails)+ "," + JSON.stringify(fetchdata[k].destinationdatails) +")' >" + fetchdata[k].sourcedetails.name + "<section align='center' style='position:absolute;margin:-25px 0% 0% 31%'><img src='img/arrow.png'  height='30px' width='90px'></section>"+"<spam style='float:right;margin:0px 15px 0px 0px;'>"+ fetchdata[k].destinationdatails.name +"</spam>"+ "</a></td></tr>";
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
function historyonclick(sourcedetails1,destinationdetails1) {
    // console.log(JSON.stringify(sourcedetails1),JSON.stringify(destinationdetails1));
    // src =sourcedetails1.code;
    // console.log(sourcedetails1.code);
    // dst=destinationdetails1.code;
    // console.log(destinationdetails1.code);
   sourcedetails=sourcedetails1;
   destinationdatails=destinationdetails1;
    $("#dst").val(destinationdetails1.name);
    $("#src").val( sourcedetails1.name);
    console.log("historyonclick clicked!!!!...");
    submitform();
}

function clear_cache(){
    localStorage.removeItem("mydatatbts");
    console.log("history deleted!!!");
    $(".table").html("<h3>_________________________________________***_______________________________</h3>");
}
