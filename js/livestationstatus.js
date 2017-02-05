/**
 * Created by kamlesh on 1/24/2017.
 */
function livestationstatus(station,withinhours) {

    return new Promise(function (resolve,reject) {

        var url="http://api.railwayapi.com/arrivals/station/"+station+"/hours/"+withinhours+"/apikey/" + key[keyno] + "/";
        console.log("calling url :"+url);
        setTimeout(function(){reject("Server is not Responding!!!")}, 6000);
        $.get(url, function (body, status) {
            if(status=="success") {
                if(body.response_code==200) {
                    resolve(body);
                }else if(body.response_code==204){
                    reject('Error :'+body.response_code+"<br>Not able to fetch required Data!!!Pls Try Later ")
                }
                else  {
                    reject("check ur response code .it is not 200!!!! :\nthis is resopse code from railway api :" + body.response_code);
                }
            }else {
                reject("get request is not success");
            }
        });

    })
}
