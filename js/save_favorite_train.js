/**
 * Created by sahu on 1/30/2017.
 */
function savefav(traindetails){
    console.log(traindetails);

   // console.log($("#favicon").attr('src','img/lf.png'));glyphicon glyphicon-heart
    var id="."+traindetails.number;
    if($(id).find("#favicon").hasClass('glyphicon glyphicon-heart-empty')){
        $(id).find("#favicon").removeClass('glyphicon glyphicon-heart-empty').addClass('glyphicon glyphicon-heart');
        storinglocallyfav(traindetails);
    }else  if($(id).find("#favicon").hasClass('glyphicon glyphicon-heart')){
        $(id).find("#favicon").removeClass('glyphicon glyphicon-heart').addClass('glyphicon glyphicon-heart-empty');
        dlt_favitem(traindetails);
        console.log('else part working!!!');
    }
    console.log("yeh it worked baby!!!!!!!!!");
}
