
function storinglocallyfav(traindetails) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.mydatafav) {
            //console.log("my data is created already..");
            try {
                var retriveddata = localStorage.getItem("mydatafav");
                var retriveddataparsed = JSON.parse(retriveddata);
            }catch(error){
                //console.log("here is the error 3 :"+error);
            }
            try {
                _.pullAllWith(retriveddataparsed, [traindetails], _.isEqual);
                //   //console.log("some items pulled:"+JSON.stringify(retriveddataparsed));
            }catch(error){
                //console.log("here is the bug 6 :" +error);
            }
            retriveddataparsed.push(traindetails);
            localStorage.mydatafav=JSON.stringify(retriveddataparsed);
        } else {
            var data=[];
            //console.log("creating local storage");
            localStorage.mydatafav = JSON.stringify(data);
            storinglocallyfav(traindetails);
        }
    } else {

        //console.log("sorry no storage support");
        // Sorry! No Web Storage support..
    }
}

function loadmyfavtrains(){

    // var itemdisplay="<div id='history'>";
  //  var itemdisplay="<table class=\"table  \"> <thead><h2 class='search'>History<img src='dustbin.png' onclick=\"clear_cache()\" style='float:right' width='30px'></thead>";
    var itemdisplay = "<section class=\"table table-striped \"> <section> </section> <section>";

    var fetchdata=JSON.parse(localStorage.getItem("mydatafav"));
    try {
        if(fetchdata==null){
            //console.log("empty data");
        }else {
            //console.log(fetchdata[fetchdata.length - 1]);
//                fetchdata.forEach(function(f){
//                    itemdisplay +="<br>"+f.display;
//                });
            //console.log("else part of loadfav is running");
            var count = 0;
            try {
                for (var k = fetchdata.length - 1; k >= 0; k--) {
                    //  fetchdata.forEach(function (fetchdata) {
                    //console.log(JSON.stringify(fetchdata[k]));

                    count++;
                    try {

                        itemdisplay += "<section class=' " + fetchdata[k].number + "' style=''><section class='row' ><section  class='col-xs-8' id='" + fetchdata[k].number +  "'onclick='getlivestatusonclick("+JSON.stringify(fetchdata[k])+")' type=\"text\"  data-toggle=\"modal\" data-target=\"#myModal\" ><a href=\"#\">" +

                            fetchdata[k].name + "<br><strong>" + fetchdata[k].number + "</a></strong><br><p id='trainstatus'></p></section><section class='col-xs-2' id='delaytime' ><button class='btn btn-ra animated glyphicon glyphicon-map-marker flipInY' id='statusbutton' onclick='favtraindelaytime(" + JSON.stringify(fetchdata[k]) + ")'></button></section><section col-xs-2 id='favicon' onclick='dlt_favitem(" + JSON.stringify(fetchdata[k])+")'>" + " <button class='btn btn-ra animated glyphicon glyphicon-trash flipInY'></button>" + "</section></section></section>";


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
            $("#favorite").find("#trains").html(itemdisplay);

        }
    }catch(error){
        //console.log(" here is the bug inside reading history :"+error);
    }

    //console.log("fetching history!!!");
}
function favonclick(traindetails) {
    //console.log(JSON.stringify(traindetails));
    src =traindetails.src;
    //console.log(traindetails.src);
   // dst=destinationdetails1.code;
  //  //console.log(destinationdetails1.code);
  //  sourcedetails=sourcedetails1;
   // destinationdatails=destinationdetails1;
    //console.log("favorite onclick clicked!!!!...");
   // getdata();
}

function clear_favcache(){
    localStorage.removeItem("mydatafav");
    //console.log("history deleted!!!");
    $("#favorite").find("#trains").html("<h3>all favs. Deleted!!!</h3>");
}

function dlt_favitem(traindetails){

    //console.log(traindetails);
    var id="."+traindetails.number;
    if($(id)){
        //console.log("yes this "+id+" exists");
        try {
            var retriveddata = localStorage.getItem("mydatafav");
            var retriveddataparsed = JSON.parse(retriveddata);
        }catch(error){
            //console.log("here is the error 3 :"+error);
        }
        try {
            _.pullAllWith(retriveddataparsed, [traindetails], _.isEqual);
            localStorage.mydatafav=JSON.stringify(retriveddataparsed);
            //   //console.log("some items pulled:"+JSON.stringify(retriveddataparsed));
        }catch(error){
            //console.log("here is the bug 6 :" +error);
        }
        $("#favorite").find("#trains").find(id).remove();
    }
    //console.log("yeh it worked baby dlt_favitem!!!!!!!!!");

}


function favtraindelaytime(traindetails){
    error_found=false;
var train_no=traindetails.number;
var sourcedetails=traindetails.sourcedetails;
var id="."+traindetails.number;
    $(".table").find(id).find('#statusbutton').css("backgroundColor","white");
$(".table").find(id).find('#statusbutton').html("<span><img src=\"img/loading.svg\" style='height: 30px;width:20px;margin-left:-40px;margin-top:-5px;padding-left:3px;'></span>");
//console.log(id);
    trainroute(train_no).then(function (body) {
        //console.log(body);
        return trainstartday(body,sourcedetails,for_today_or_tommorow);
    },function (error) {
        error_found=true;
        $(".table").find(id).find("#trainstatus").append( "<li>problem :" + error + "</li>" );
        $(".table").find(id).find('#statusbutton').css("backgroundColor","");
        $(".table").find(id).find('#statusbutton').html("<span></span>");
    }).then(function (tsfulldate) {
        //console.log("this is ur train start date :"+tsfulldate);
         if(error_found==false) {
             return livetrainstatus(train_no, tsfulldate);
         }
    },function (error) {
        error_found=true;
        $(".table").find(id).find("#trainstatus").append( "<li>problem :" + error + "</li>" );
        $(".table").find(id).find('#statusbutton').css("backgroundColor","");
        $(".table").find(id).find('#statusbutton').html("<span></span>");
    }).then(function(body){
        if(error_found==false) {
            $(".table").find(id).find('#statusbutton').css("backgroundColor", "");
            $(".table").find(id).find('#statusbutton').html("<span></span>");
            return trainpositiondisplay(body, train_no);
        }
    },function (error) {
        $(".table").find(id).find("#trainstatus").append( "<li>problem :" + error + "</li>" );
        $(".table").find(id).find('#statusbutton').css("backgroundColor","");
        $(".table").find(id).find('#statusbutton').html("<span></span>");
    }).catch(function (error) {
        //console.log("errror caught!!! :"+error);
        $(".table").find(id).find("#trainstatus").append( "<li>problem : " + error + "</li>" );
        $(".table").find(id).find('#statusbutton').css("backgroundColor","");
        $(".table").find(id).find('#statusbutton').html("<span></span>");
    })
}

function  trainpositiondisplay(body,train_no) {

    var id = "." + train_no;
    $(".table").find(id).find("#trainstatus").html("<span strong style='color: red'>" + body.position+ "  </span>");

}

function favorite_train_list_creator(){
    return new Promise (function(resolve,reject){
         all_fav_train_list=[];
        var fav_train_data=JSON.parse(localStorage.getItem("mydatafav"));
        fav_train_data.forEach(function(train){
            all_fav_train_list.push({'number':train.number});
        });
        //console.log("your all fav. trains list :"+all_fav_train_list);
        resolve(all_fav_train_list);
    });

}
