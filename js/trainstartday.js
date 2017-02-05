/**
 * Created by kamlesh on 1/26/2017.
 */
function trainstartday(body,sourcedetails,for_today_or_tommorow) {
console.log("this is given date:"+date);

    return new Promise(function(resolve,reject)
    {
        body.route.forEach(function (route) {
            if (route.code == sourcedetails.code) {
                sourceno = route.no;
                dayback = route.day - 1;
                console.log("this is dayback:"+dayback);
                console.log("here is the source no:" + route.no);

                total_dayback=dayback+for_today_or_tommorow;

                var d_tsd = new Date(new Date().getTime()-24*60*60*1000*(total_dayback));
                var tsdate=d_tsd.getDate();
                var tsmonth=d_tsd.getMonth()+1;
                var tsyear=d_tsd.getFullYear();
               // var tsdate = Number(date) - dayback;
                console.log("this is tsdate :"+tsdate);
                if (tsdate < 10) {
                    tsdate = "0" + tsdate;
                }
                if (tsmonth < 10) {
                    tsmonth = "0" + tsmonth;
                }
                var tsfulldate=tsyear+""+tsmonth+""+tsdate;
                console.log("here is tsfulldate created :"+tsdate+"/"+tsmonth+"/"+tsyear);
                resolve(tsfulldate);
            }
        });

    });
}
