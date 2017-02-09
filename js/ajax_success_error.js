/**
 * Created by kamlesh on 1/25/2017.
 */
$(document).ajaxError(function( event, request, settings ) {

    $( ".status" ).html( "<li class='label-warning'>Check Internet Connection</li>" );
    $(".table").removeClass("spinner spinn");
console.log(request);
    // $( ".tabledata" ).html( "<li class='label-warning'>Error requesting page</li>" );
    $(".tabledata").removeClass("spinner spinn");
     //  lastfunction_clicked_saver();
    //console.log("internet connecting error!!!");
});
$(document).ajaxSuccess(function( event, request, settings ) {
   // $( ".status" ).find("#success").html( "<li>success requesting page " + settings.url + "</li>" );
    //console.log("success requesting page :"+settings.url);
});
var lastfucntion_clicked_data="";
function lastfunction_clicked_saver() {
    console.log(lastfucntion_clicked_data);
}
