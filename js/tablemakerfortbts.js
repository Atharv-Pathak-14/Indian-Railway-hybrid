/**
 * Created by kamlesh on 1/25/2017.
 */
function tablemakertbts(body) {
    return new Promise(function (resolve,reject) {
        all_train_list=[];
        var weeklist=['M','Tu','W','Th','F','Sa','Su'];
        var table = "<div class='table table-striped animated bounceInUp' > <section> <section class='no'><section class='bord'>Train</section> <section class='bord'>Dep.Time</section> <section class='bord'>Arr.Time</section> <section class='bord'>Delay</section> </section> </section> <div>";
        body.train.forEach(function (train) {
            var weekdata="<h7>";
            all_train_list.push({"number":train.number});
            for(var k=0;k<7;k++){
                if(train.days[k].runs=="Y"){

                    weekdata+="<day style='color:navy;margin-left: 7px'>"+weeklist[k]+"</day>";
                } else if((train.days[k].runs=="N")){

                    weekdata+="<day style='color:red;margin-left:7px'>"+weeklist[k]+"</day>";
                }
            }
                weekdata+="</h7>";
            var traindetails={'number':train.number,'name':train.name,'sourcedetails':sourcedetails};
            table += "<section class=" + train.number + "><section class='row'><section class='col-xs-12' align='center' style='font-size:20px;'><k id='name'  onclick='getlivestatusonclick("+JSON.stringify(traindetails)+")' type=\"text\"  data-toggle=\"modal\" data-target=\"#myModal\" ><span align='center'></span><br><a href=\"#\"><strong>" + train.name + "</strong><br>" + train.number+ "</a></k>" +

                "<k style='padding-left: 10px' class='glyphicon glyphicon-heart-empty' id='favicon' onclick='savefav("+JSON.stringify(traindetails)+")' ></k><p id='weekdays' style='margin-top: 10px'>"+weekdata+"</p><p id='errormsg'></p></section><section align='center' style='font-size:15px;' class='col-xs-4'>Dep.Time<p id='schdep'>" + train.src_departure_time + "</p><p id='actdep'>" + "</p></section><section align='center' style='font-size:15px;' class='col-xs-4'>Arr.Time<br>" + train.dest_arrival_time +  "</section><section class='col-xs-4' style='font-size:15px;' align='center' id='delaytime' onclick='gettraindelaytime(" + train.number + ")'><button class='btn btn-default btn-md' style='border-radius: 55%'><span class='glyphicon glyphicon-time'></span></button></section></section></section>";

        });

        resolve(table);
    });
}
