import { useEffect, useRef } from "react";
import axios from "axios";
import $ from 'jquery';
import secureLocalStorage from "react-secure-storage";
function Nodebtlist(){
    useEffect( ()=>{
        
        if(secureLocalStorage.getItem("PWALoginInfo")){
            const PWALoginInfo = secureLocalStorage.getItem("PWALoginInfo");
            const usrPWA = JSON.parse(PWALoginInfo).username;
            const loginStatus = JSON.parse(PWALoginInfo).status_desc;
            const apiStatus = JSON.parse(PWALoginInfo).status;

            if(!usrPWA && !loginStatus && !apiStatus){
                window.location.replace('/nodebt');
            }
        }else{
            window.location.replace('/nodebt');
        }



        

        const qType = {req_name: "nodebt_detial_all"}
        var tmp = {};
        var obj = [];
        //axios.post("http://reg2intranet.pwa.co.th:9000/nodebt",qType)
        axios.post("https://reg2intranet.pwa.co.th/api/nodebt",qType)
        .then((nodebtRes) => {
            for (var i = 0; i < nodebtRes.data.length; i ++) {
                //console.log(nodebtRes.data[i])
                var tmp = 
                    {
                        "cus_code":nodebtRes.data[i].CUS_CODE,
                        "org_owner_id":nodebtRes.data[i].ORG_OWNER_ID +" - "+ nodebtRes.data[i].short_name,
                        "org_name":"<span>"+nodebtRes.data[i].CUST_NAME+"</span>",
                        "mtr_no":"<span>"+nodebtRes.data[i].METER_NO+"</span>",
                        "mtr_state":"<span>"+nodebtRes.data[i].MRT_STATE_ID+"</span>",
                        "mtr_route_code":"<span style='color:blue; font-weight:bold'>"+nodebtRes.data[i].METER_ROUTE_CODE+"</span>",
                        "mtr_route_seq":"<span style='color:blue; font-weight:bold'>"+nodebtRes.data[i].METER_ROUTE_SEQ+"</span>",
                        "mtr_state":"<span>"+nodebtRes.data[i].MRT_STATE_ID+"</span>",
                        "remark":"<span>"+nodebtRes.data[i].REMARKS+"</span>",
                        "last_present_meter":"<span>"+nodebtRes.data[i].PRESENT_METER_DATE+"</span>"
                    }
               obj.push(tmp);
              }
            $('#tb_nodebtList tbody').empty();
             $('#tb_nodebtList').DataTable( {
                data: obj,
                "bDestroy": true,
                "pageLength": 10,
                "order": [[ 1, "asc" ]],
                columns: [
                    { data: 'cus_code' ,"width": "8%" },
                    { data: 'org_owner_id' ,"width": "10%"},
                    { data: 'org_name' ,"width": "20%"},
                    { data: 'mtr_no' },
                    { data: 'mtr_state' },
                    { data: 'mtr_route_code' },
                    { data: 'mtr_route_seq' },
                    { data: 'remark' },
                    { data: 'last_present_meter' }
                ]
              });

        });

    },[]);
    return(
        <div>
            <hr class="hr" />
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="card border">
                            <div className="card-header" style={{fontWeight: 'bold', color: '#3c8dbc'}}>รายละเอียดผู้ใช้น้ำที่ยังไม่ได้ตั้งหนี้ (ข้อมูล ณ วันที่ )</div>
                            <div className="card-body">
                            <table id="tb_nodebtList"  className="compact row-border">
                                <thead style={{backgroundColor:'#fee89a'}}>
                                    <tr>
                                        <th style={{color: 'black'}}>เลขที่ ผชน. <i className="fas fa-list-ol" /></th>
                                        <th style={{color: 'black'}}>สาขา </th>
                                        <th style={{color: 'black'}}>ชื่อ - สกุล </th>
                                        <th style={{color: 'black'}}>รหัสมาตร</th>
                                        <th style={{color: 'black'}}>สภาพมาตร </th>
                                        <th style={{color: 'black'}}>METER_ROUTE_CODE</th>
                                        <th style={{color: 'black'}}>METER_ROUTE_SEQ</th>
                                        <th style={{color: 'black'}}>สถานะ </th>
                                        <th style={{color: 'black'}}>วันที่อ่านมาตรล่าสุด </th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th style={{display: 'none'}}>เลขที่ ผชน.</th>
                                        <th style={{display: 'none'}}>สาขา</th>
                                        <th style={{display: 'none'}}>ชื่อ - สกุล</th>
                                        <th style={{display: 'none'}}>รหัสมาตร</th>
                                        <th style={{display: 'none'}}>สภาพมาตร</th>
                                        <th style={{display: 'none'}}>METER_ROUTE_CODE</th>
                                        <th style={{display: 'none'}}>METER_ROUTE_SEQ</th>
                                        <th style={{display: 'none'}}>สถานะ</th>
                                        <th style={{display: 'none'}}>วันที่อ่านมาตรล่าสุด</th>
                                    </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default Nodebtlist;