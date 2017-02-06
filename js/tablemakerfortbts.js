/**
 * Created by kamlesh on 1/25/2017.
 */
function tablemakertbts(body) {
    return new Promise(function (resolve,reject) {
        all_train_list=[];
        var weeklist=['M','Tu','W','Th','F','Sa','Su'];
        var table = "<table class='table table-striped' > <thead> <tr><th>Train</th> <th>Dep.Time</th> <th>Arr.Time</th> <th>Delay</th> </tr> </thead> <tbody>";
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
            table += "<tr class=" + train.number + "><td><k id='name'  onclick='getlivestatusonclick("+JSON.stringify(traindetails)+")' type=\"text\"  data-toggle=\"modal\" data-target=\"#myModal\" ><a href=\"#\"><strong>" + train.name + "</strong><br>" + train.number+ "</a></k>" +

                "<k style='padding-left: 10px' class='glyphicon glyphicon-heart-empty' id='favicon' onclick='savefav("+JSON.stringify(traindetails)+")' ></k><p id='weekdays' style='margin-top: 10px'>"+weekdata+"</p><p id='errormsg'></p></td><td><p id='schdep'>" + train.src_departure_time + "</p><p id='actdep'>" + "</p></td><td>" + train.dest_arrival_time +  "</td><td id='delaytime' onclick='gettraindelaytime(" + train.number + ")'><button class='btn btn-default btn-md' style='border-radius: 55%'><span class='glyphicon glyphicon-time'></span></button></div></td></tr>";

        });

        resolve(table);
    });
}
