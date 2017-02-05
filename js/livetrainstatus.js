/**
 * Created by kamlesh on 1/24/2017.
 */
function livetrainstatus(train_no,fulldate) {

    return new Promise(function (resolve,reject) {


        var url = "http://api.railwayapi.com/live/train/" + train_no + "/doj/" + fulldate + "/apikey/" + key[keyno] + "/";
        console.log("calling url :"+url);
        setTimeout(function(){reject("Server is not Responding!!!")}, 6000);
        $.get(url, function (body, status) {

            if(status=="success") {
                if(body.response_code==200) {
                    resolve(body);
                }else if(body.response_code==510) {
                    reject(body.response_code+"<br class='status'>"+"Sorry!!! Not able to fetch required Data!!!");
                }
                else if(body.response_code==204){
                    console.log(body);
                    reject( body.response_code+"<br class='status'>Not able to fetch required Data!!!Please Try after some time!!");
                }else{
                    reject("check ur response code .it is not 200!!!! :<br>Error :" + body.response_code);
                }
            }else {
                reject("get request is not success");
            }
        });

    })
}
