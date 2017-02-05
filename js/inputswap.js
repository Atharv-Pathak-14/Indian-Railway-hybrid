/**
 * Created by kamlesh on 1/26/2017.
 */
function swap() {

    var x = $("#src").val();
    var y = $("#dst").val();
    $("#dst").val(x);
    $("#src").val(y);

    console.log("sourcedetails.code:" + sourcedetails.code);
    console.log("destinationdatails.code:" + destinationdatails.code);
    tmp = sourcedetails;
    sourcedetails = destinationdatails;
    destinationdatails = tmp;

    console.log("input value swapped!!");

    submitform();
    console.log("under get data in swap");


}
