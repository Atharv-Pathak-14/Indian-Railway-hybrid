
function upcoming_trains_listMaker(body){
    return new Promise(function (resolve,reject) {
        all_upcoming_train_list=[];
        if(body.total!=0) {
            //    body.train.forEach(function (train) {
            all_upcoming_train_list=body.train;
            //   })
        }else{
            reject("No Upcoming Trains in Next 4 hrs!!!");
        }
        console.log("These are all upcoming Trains :"+JSON.stringify(all_upcoming_train_list));
        resolve(all_upcoming_train_list);
    });

}
function upcoming_trains_for_Destination() {
    livestationstatus(sourcedetails.code,4).then(function (body) {
        console.log(body);
        console.log(JSON.stringify(body));
        return upcoming_trains_listMaker(body);
    },function (error) {
        console.log("Problem :"+error);
    }).then(function (all_Upcoming_train_list) {
        var intersection_upcoming=_.intersectionBy(all_Upcoming_train_list,all_train_list,"number");
        console.log(intersection_upcoming);
        var heading=false;
        $(".table").removeClass("table-striped");
        $(".table").addClass("table-condensed");
        intersection_upcoming.forEach(function (train) {
            var id="."+train.number;
            if(heading==false){
                $(id).attr("id","section1");
                heading=true;
            }
            if(train.delaydep!="RT") {
                $(id).find("#actdep").html("<span strong style='color: red'>" + train.actdep + " </span>");
                $(id).find("#delaytime").html("<span strong style='color: red'>" + train.delaydep + " hrs </span>");
            }else{
                $(id).find("#actdep").html("<span strong style='color:navy'>" + train.actdep + " </span>");
                $(id).find("#delaytime").html("<span strong style='color: navy'>" + train.delaydep + " </span>");
            }
            $(id).css('backgroundColor','#fff9c4 ');
        });

        $('#scroll span').trigger('click');


    }).catch(function (error) {
        console.log("error :"+error);
    });
}
/**
 * Created by kamlesh on 1/29/2017.
 */
