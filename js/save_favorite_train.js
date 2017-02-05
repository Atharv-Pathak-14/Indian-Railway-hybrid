/**
 * Created by sahu on 1/30/2017.
 */
function savefav(traindetails){
    console.log(traindetails);

    console.log($("#favicon").attr('src','img/lf.png'));
    var id="."+traindetails.number;
    if($(id).find("#favicon").attr('src')==="img/lf.png"){
        $(id).find("#favicon").attr('src','img/Like.png');
        storinglocallyfav(traindetails);
    }else if($(id).find("#favicon").attr('src')==='img/Like.png'){
        $(id).find("#favicon").attr('src',"img/lf.png" );
        dlt_favitem(traindetails);
        console.log('else part working!!!');
    }
    console.log("yeh it worked baby!!!!!!!!!");
}
