/**
 * Created by kamlesh on 1/24/2017.
 */
function tbts(src,dst,date,month) {
    return new Promise(function (resolve,reject) {

        url = "http://api.railwayapi.com/between/source/" + src + "/dest/" + dst + "/date/" + date + "-" + month + "/apikey/" + key[keyno] + "/";
        //console.log("calling url :"+url);

        $.ajax({
            url:url,
            cache: false,
            timeout:7000,
            success:function (body, status) {
                if (status == "success") {
                if (body.response_code == 200) {
                    if (body.total != 0) {
                        resolve(body);
                    } else if (body.total == 0) {

                        reject("Server Error please Re-Try!!!");
                    }
                } else if (body.response_code == 204) {
                    reject("not able to fetch required data from railway :" + body.error);
                } else {
                    reject("check ur response code .it is not 200!!!! :" + body.error);
                }
            } else {
                reject("get request is not success");
            }

            },
            error:function (jqXHR,textStatus,errorThrown) {
                console.log(textStatus);
                if(textStatus=='timeout'){
                    reject("Server is not Responding!!! Pls ReTry");
                }else {
                    reject('Check Ur Internet Connection!!!');
                }
            }
        });

    })

};

