/**
 * Created by kamlesh on 1/26/2017.
 */
function traindelaytimedisplay(body,train_no) {

    body.route.forEach(function(route) {
        if (route.station_.code == sourcedetails.code) {
            console.log("found the source station data for the train!!!");

            departuretime = route.actdep;
            delaytime = route.latemin;
            console.log("->" + departuretime + " Delay:" + delaytime);
        }


    });
    var id = "." + train_no;
    if(delaytime>0) {
        $(".table").find(id).find("#delaytime").html("<span strong style='color: red'>" + delaytime + " min </span>");
        $(".table").find(id).find("#actdep").html("<span strong style='color: red'>" + departuretime + " </span>");
    }else {
        $(".table").find(id).find("#delaytime").html("<span strong style='color: navy'>" + "On Time" + "</span>");
        $(".table").find(id).find("#actdep").html("<span strong style='color: navy'>" + departuretime + " </span>");
    }

}
