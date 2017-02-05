/**
 * Created by kamlesh on 1/26/2017.
 */
function getlivestatusonclick(traindetails) {
    // console.log("date:"+date);
    // console.log("this is for today or tomorrow:"+for_today_or_tommorow);

    sourcedetails = traindetails.sourcedetails;
    console.log(sourcedetails);
    console.log(traindetails);
    train_no= traindetails.number;
    train_name=traindetails.name;
    $(".tabledata").html("");
    $(".tabledata").html("");
    $(".tabledata").addClass("spinner spinn");
    $("#currentposition").html("");
    $("#trainname").html("");

    trainroute(train_no).then(function (body) {
        console.log(body);

        return trainstartday(body,sourcedetails,for_today_or_tommorow);
    },function (error) {
        $(".tabledata").removeClass("spinner spinn");
        $(".tabledata").append( "<li>problem :" + error + "</li>" );
    }).then(function (tsfulldate) {
        console.log("this is ur train start date :"+tsfulldate);

        return livetrainstatus(train_no,tsfulldate);
    },function (error) {
        $(".tabledata").removeClass("spinner spinn");
        $(".tabledata").append( "<li>problem :" + error + "</li>" );
    }).then(function(body){
        $(".tabledata").removeClass("spinner spinn");
        $(".tabledata").removeClass("spinner spinn");
        return tablemakerforlivestatus(body,train_no,train_name);
    },function (error) {
        $(".tabledata").removeClass("spinner spinn");
        $(".tabledata").append( "<li>problem :" + error + "</li>" );
    }).catch(function (error) {
        console.log("errror caught!!! :"+error);
        $(".tabledata").removeClass("spinner spinn");
        $(".tabledata").append( "<li>problem :" + error + "</li>" );
    })
}
