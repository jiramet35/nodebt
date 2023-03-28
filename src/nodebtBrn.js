import { useEffect } from "react";
import axios from "axios";
import $ from 'jquery';
import DataTables from 'datatables.net-dt';
import Auth from "./auth";

function NodebtBrn(){

    useEffect( ()=>{
        if(!sessionStorage.getItem("PWAusr")){
            window.location.replace('/nodebt');
        }
        const qType = {req_name: "count_nodebt"}
        var tmp = {};
        var obj = [];
        //axios.post("http://reg2intranet.pwa.co.th:9000/nodebt",qType)
        axios.post("https://reg2intranet.pwa.co.th/api/nodebt",qType)
        .then((countNodebt)=>{
            for(var i=0; i< countNodebt.data.length; i++){
                var tmp = 
                {
                    "brnName":"<span style='color:blue'>"+countNodebt.data[i].ba+" - "+countNodebt.data[i].short_name+"</span>",
                    "count_nodebt":countNodebt.data[i].COUNT_NODEBT
                }
                obj.push(tmp);
            }
            $('#tb_countnodeb tbody').empty();
            $('#tb_countnodeb').DataTable( {
               data: obj,
               "bDestroy": true,
               "pageLength": 30,
               "order": [[ 1, "desc" ]],
               columns: [
                   { data: 'brnName' },
                   { data: 'count_nodebt' }
               ]
             });
        })
    },[]);

    return(
        <div>
            <hr class="hr" />
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="card">
                                <div className="card-header" style={{fontWeight: 'bold', color: '#3c8dbc'}}>รายละเอียดผู้ใช้น้ำที่ยังไม่ได้ตั้งหนี้สรุปรายสาขา</div>
                                <div className="card-body">
                                <table id="tb_countnodeb" className="compact row-border">
                                <thead>
                                    <tr>
                                        <th style={{color: 'black'}}>กปภ.สาขา <i className="fas fa-list-ol" /></th>
                                        <th style={{color: 'black'}}>จำนวน (ราย)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th style={{display: 'none'}}>กปภ.สาขา </th>
                                        <th style={{display: 'none'}}>จำนวน (ราย)</th>
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

export default NodebtBrn;