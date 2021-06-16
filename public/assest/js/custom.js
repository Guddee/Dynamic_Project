
// Get data Only using ajax get call method 
var projectId;
var RegNo;
var city;


let apiDataGet = async () => {
    let data = getProjectData(1302) // Change Project_ID Integer Value only Ex:1131
        .then((data) => {
            phone_no = data.result.phone;
            whatsapp_url = data.result.wp_links_sms;
            whatsapp_url = whatsapp_url.split("=");
            whatsapp_url[2] = "I want to know more about " + whatsapp_url[2];
            whatsapp_url = whatsapp_url.join("=");
            projectId = data.result.Project.p_id;
            city = data.result.Project.Region.city;
            RegNo = data.result.Project.Region.region_name;
            $(".phone_url").attr("href", "tel:" + phone_no + "");
            $(".whatsapp_url").attr("href", whatsapp_url + ".");
            $(".phone_no").html(phone_no);

        })
        .catch((error) => {
            var whatsapp_url = "https://api.whatsapp.com/send?phone=917304412403&text=Hi!"
            $(".whatsapp_url").attr("href", whatsapp_url);
            $(".phone_url").attr("href", "tel:" + 917304927701 + "");
            $(".phone_no").html("917304927701")
        });
}
apiDataGet();
// UTM Data Call
var param_region_id = RegNo;
var param_nationality = 1;
// main function to store the data and post data to api


async function saveLead(name, email, number, country_code, checkbox, pref) {
    debugger;

    var getUtmData = queryForm();
    var ipAddress = await getIpAddress();
    var user_device = deviceData();
    var user_browser = browserData();


    var obj = {};
    obj.name = name;
    obj.number = number;
    obj.email = email;
    obj.country_code = country_code;
    obj.is_tc_agree = parseInt(checkbox);
    // obj.admin_message= message; 
    obj.nationality = param_nationality; // 1 for indian & 2 for NRI (int)
    // obj.is_magnet = 1 ; // 1 for yes and 0 for no (int),
    // magnet_id =39603; //if magnet else blank (int)
    obj.source_id = 31;
    obj.project_id = projectId;
    console.log(obj.project_id);
    if (getUtmData) {
        obj.Utm = {
            utm_medium: getUtmData.utmmedium,
            utm_source: getUtmData.utmsource,
            utm_content: getUtmData.utmcontent,
            utm_term: getUtmData.utmterm
        };
    }
    obj.Digital = {
        user_device: user_device,
        user_browser: user_browser,
        campaing_type: getUtmData ? getUtmData.utmcampaign : null,
        launch_name: "",
        client_ipaddress: ipAddress,
        client_pref: pref
    }
    if (pref == 'DownloadBrochure_overview_homepage') {
        SendLead(obj, "thankyou.html");
    } else {
        SendLead(obj, "thankyou.html");
    }
}

window.$zopim || (function(g, a) {
    var f = $zopim = function(d) {
            f._.push(d)
        },
        b = f.s = g.createElement(a),
        c = g.getElementsByTagName(a)[0];
    f.set = function(d) {
        f.set._.push(d)
    };
    f._ = [];
    f.set._ = [];
    b.async = !0;
    b.setAttribute("charset", "utf-8");
    b.src = "//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4";
    f.t = +new Date;
    b.type = "text/javascript";
    c.parentNode.insertBefore(b, c)
})(document, "script");
$zopim(function() {
    $zopim.livechat.button.setOffsetVerticalMobile(55);
    $zopim.livechat.button.setOffsetHorizontalMobile(10)
})

