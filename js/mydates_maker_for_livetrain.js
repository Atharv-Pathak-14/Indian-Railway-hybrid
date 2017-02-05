/**
 * Created by sahu on 2/1/2017.
 */
function mydate_array_maker() {
    return new Promise(function(resolve, reject)
    {
        var mydate_array = [];
        var ad = [];
        var weekday = new Array(7);
        weekday[0] = "SUN";
        weekday[1] = "MON";
        weekday[2] = "TUE";
        weekday[3] = "WED";
        weekday[4] = "THU";
        weekday[5] = "FRI";
        weekday[6] = "SAT";
        var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
      //  ad[0] = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        ad[0] = new Date(new Date().getTime());
        ad[1] = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        ad[2] = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2);

        for (var k = 0; k < 3; k++) {

            m_date = ad[k].getDate();
            m_month = ad[k].getMonth() + 1;
            m_year = ad[k].getFullYear();
            if (m_date < 10) {
                m_date = "0" + m_date;
            }
            if (m_month < 10) {
                m_month = "0" + m_month;
            }
            v_fulldate = m_year + "" + m_month + "" + m_date;
            d_fulldate = weekday[ad[k].getDay()]+","+m_date + " " + monthNames[m_month-1] + " " + 17;
            mydate_array[k] = {"day": ad[k].getDay(), "D_date": d_fulldate, "V_date": v_fulldate};
        }
     //   console.log(mydate_array);
       // console.log(JSON.stringify(mydate_array));
        console.log("my dates for check created!!!!");
        resolve(mydate_array);
    });
}
