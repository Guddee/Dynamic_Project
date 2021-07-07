import { getApi } from "./CustomApi";
import { browserData, deviceData, getIpAddress, queryForm } from "./Helper";

var projectId;
var RegNo;
var city;

let getData=getApi().then((data) => {
    projectId = data.Project.p_id;
    city = data.Project.Region.city;
    RegNo = data.Project.Region.region_name;
})


 const saveLead=async(data)=>
{
    debugger;
   const user_device=deviceData();
   const user_browser=browserData();
   const getUtmData=queryForm();
   const ipAddress=await getIpAddress();
    let obj = {};
    obj.name = data.name;
    obj.number = data.number;
    obj.email = data.email;
    obj.country_code = data.countrycode;
    obj.admin_message = data.location;
    obj.nationality=1;
    obj.source_id = 31;
    obj.project_id = projectId;
    if(getUtmData){
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
    }
   return obj;
}
export {saveLead}