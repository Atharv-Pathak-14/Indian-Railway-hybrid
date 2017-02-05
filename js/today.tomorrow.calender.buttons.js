/**
 * Created by kamlesh on 1/26/2017.
 */
$(document).ready(function() {

    var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    var d = new Date();
    date = d.getDate();
    if (date < 10) {
        date = "0" + date;
    }
    month = d.getMonth() + 1;
    var monthname = monthNames[d.getMonth()];
    if (month < 10) {
        month = "0" + month;
    }
    year = d.getFullYear();
    $(".today").click(function() {
        // $(this).button('toggle');
        $(".utc").show();
        $(this).addClass('active').siblings().removeClass('active');
        $("#calendar_icon").html("");
        var d = new Date();
        date = d.getDate();
        if (date < 10) {
            date = "0" + date;
        }
        month = d.getMonth() + 1;
        monthname = monthNames[d.getMonth()];
        if (month < 10) {
            month = "0" + month;
        }
        for_today_or_tommorow=0;
        year = d.getFullYear();
        daydiscription = "Today(" + date + " " + monthname + ")";
        console.log("today clicked :" + date + "-" + month + "-" + year);
 submitform();
    });
    $(".tomorrow").click(function() {

        $(this).addClass('active').siblings().removeClass('active');
        $("#calendar_icon").html("");
        var d = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        date = d.getDate() ;
        if (date < 10) {
            date = "0" + date;
        }
        for_today_or_tommorow=-1;
        month = d.getMonth() + 1;
        monthname = monthNames[d.getMonth()];
        if (month < 10) {
            month = "0" + month;
        }
        year = d.getFullYear();

        console.log("tomorrow clicked:" + date + "-" + month + "-" + year);
        daydiscription = "Tomorrow (" + date + " " + monthname + ")";
        submitform();
    });
    $(".calendaricon").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        console.log("calender clicked");
    });

});
