/**
 * Created by kamlesh on 1/26/2017.
 */
function tablemakerforlivestatus(body,train_no,train_name) {


    var livetabledata = "<table style='width:100%'> <thead> <tr> <th>#</th><th>Station</th> <th>Sch. Arrival</th> <th>Sch. Departure</th><th>Delay</th></tr> </thead> </tbody>";

    if (body.current_station.latemin > 0) {
        var trainposition = "<h4 strong><span  id=\"trainname\" style=\"color:midnightblue\"></span></h4><h5>Current Position :</strong><p style=\"color:red\">" + body.position + "</p></h5>";
    } else {
        var trainposition = "<h4 strong><span  id=\"trainname\" style=\"color:midnightblue\"></span></h4><h5>Current Position :</strong><p style=\"color:green\">" + body.position + "</p></h5>";
    }
    $("#currentposition").html(trainposition);
    $("#trainname").html(train_no + " | " + train_name +"<br>"+"Start Date : "+body.start_date);
    var k=0;
    body.route.forEach(function(route) {
        if(k==route.day) {
            livetabledata +="<tr><td></td><td style='color:rgb(66,44,100)'><h5><strong>Day "+ (k+1)+"</strong></h5></td><td></td><td></td><td></td></tr>";
            k++;
        }
        if (route.no < body.current_station.no) {
            if (route.latemin <= 0) {
                livetabledata += "<tr class='success' id='" + route.no + "'><td>" + route.no + ".</td><td> " + route.station_.name + "</td><td>" + route.scharr +
                    "<br><pp style=\"color:green\">" + route.actarr + " </pp></td><td>" + route.schdep + "<br><pp style=\"color:green\">" + route.actdep + "</pp></td><td><pp style=\"color:green\">" + route.latemin +
                    " min</pp></td></tr>";
            } else {
                livetabledata += "<tr class='success' id='" + route.no + "'><td>" + route.no + ".</td><td> " + route.station_.name + "</td><td>" + route.scharr +
                    "<br><pp style=\"color:red\">" + route.actarr + " </pp></td><td>" + route.schdep + "<br><pp style=\"color:red\">" + route.actdep + "</pp></td><td><pp style=\"color:red\">" + route.latemin +
                    " min</pp></td></tr>";
            }
        } else if (route.no == body.current_station.no) {
            if (route.latemin <= 0) {
                livetabledata += "<tr id='" + route.no + "' style='background-color:rgba(236,255,46,0.29)'><td>" + route.no + ".</td><td> " + route.station_.name + "</td><td>" + route.scharr +
                    "<br><pp style=\"color:green\">" + route.actarr + " </pp></td><td>" + route.schdep + "<br><pp style=\"color:green\">" + route.actdep + "</pp></td><td><pp style=\"color:green\">" + route.latemin +
                    " min</pp></td></tr>";
            } else {
                livetabledata += "<tr id='" + route.no + "' style='background-color:rgba(236,255,46,0.29)'><td>" + route.no + ".</td><td> " + route.station_.name + "</td><td>" + route.scharr +
                    "<br><pp style=\"color:red\">" + route.actarr + " </pp></td><td>" + route.schdep + "<br><pp style=\"color:red\">" + route.actdep + "</pp></td><td><pp style=\"color:red\">" + route.latemin +
                    " min</pp></td></tr>";

            }
        } else {
            if (route.latemin <= 0) {
                livetabledata += "<tr id='" + route.no + "'><td>" + route.no + ".</td><td> " + route.station_.name + "</td><td>" + route.scharr + "<br><pp style=\"color:green\">" + route.actarr + " </pp></td><td>" +
                    route.schdep + "<br><pp style=\"color:rgba(43,193,25,.55)\">" + route.actdep + "</pp></td><td><pp style=\"color:green\">" + route.latemin + " min</pp></td></tr>";
            } else {
                livetabledata += "<tr id='" + route.no + "'><td>" + route.no + ".</td><td> " + route.station_.name + "</td><td>" + route.scharr + "<br><pp style=\"color:red\">" + route.actarr + " </pp></td><td>" +
                    route.schdep + "<br><pp style=\"color:rgba(43,193,25,.55)\">" + route.actdep + "</pp></td><td><pp style=\"color:red\">" + route.latemin + " min</pp></td></tr>";
            }
        }

    });



    $(".tabledata").html(livetabledata);

}
