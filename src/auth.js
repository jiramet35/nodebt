import axios from "axios";
import { useRef, useState } from "react";
import $ from 'jquery';
import Swal from "sweetalert2";
import { Navigate,useNavigate } from "react-router-dom";
import "./auth.css"
import logo from './img/pwalogo.png';
import secureLocalStorage from "react-secure-storage";

function Auth(){
    const refUser = useRef();
    const refPass = useRef();
    const [stateUsr,setUser] = useState(null);
    const [stateLogin,setStateLogin] = useState(null);
    const [loginStatus , setloginStatus] = useState(null);
    const navigate = useNavigate();

    const logon = () =>{
        //const bodyData = JSON.stringify({"pwaUser" : refUser.current.value,"pwaPass" : refPass.current.value});
        const bodyData = {usr: refUser.current.value , pwd :  refPass.current.value}
        axios.post('https://reg2intranet.pwa.co.th/api/authen',bodyData)
        .then(res => {
          const pwaStaff = res.data;
          if(pwaStaff.status == "success"){
            //console.log(pwaStaff)
          }else if(pwaStaff.status == "notsuccess"){
            sessionStorage.clear();
          }
          if(pwaStaff.status == "success"){
            sessionStorage.setItem("PWAusr", pwaStaff.username);
            sessionStorage.setItem("PWAstaffname", pwaStaff.firstname + " " +pwaStaff.lastname);
            sessionStorage.setItem("PWAusr", pwaStaff.username);
            sessionStorage.setItem("APIStatus", pwaStaff.status);
            sessionStorage.setItem("PWALoginStatus", pwaStaff.status_desc);
            sessionStorage.setItem("PWALoginInfo", JSON.stringify(pwaStaff));

            secureLocalStorage.setItem("PWAusr", pwaStaff.username);
            secureLocalStorage.setItem("PWALoginInfo", JSON.stringify(pwaStaff));
            Swal.fire({
                icon: 'success',
                title: 'Login Success',
                text: 'เข้าสู่ระบบสำเร็จ',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate("/nodebtlist");
                } else if (result.isDenied) {
                  Swal.fire('ยกเลิก', '', 'error');
                  sessionStorage.clear();
                }
            });
            
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'username หรือ รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
              })
            }
        })
    }

    const clrTextField = () =>{
        refUser.current.value = "";
        refPass.current.value = "";
    }

    return(
        <div>
            <div>
                <div className="container">
                    <div className="row">
                    <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3 centerPanel">
                        <div className="panel border bg-white">
                        <div className="panel-heading">
                            <br />
                            <img src={logo} width="38%" />
                            <h3 className="pt-3 font-weight-bold">การประปาส่วนภูมิภาคเขต 2</h3>
                        </div>
                        <div className="panel-body p-3">

                            <form action="" method="POST">


                            <div className="form-group py-2">
                                <div className="input-field">
                                <span className="far fa-user p-2" />
                                <input type="text" placeholder="Username" ref={refUser} id="textUser" required />
                                </div>
                            </div>
                            <div className="form-group py-1 pb-2">
                                <div className="input-field">
                                <span className="fas fa-lock px-2" />
                                <input type="password" ref={refPass} id="textPwd" placeholder="Enter your Password" required />
                                </div>
                            </div>
                            <span style={{color: 'red'}}><b><i>** เข้าสู่ระบบด้วย username และ password กปภ. **</i></b></span>
                                <hr />
                                <div className="btn btn-success" id="login" onClick={logon}>เข้าสู่ระบบ</div>
                                &nbsp;
                                <div className="btn btn-danger" id="clrText" onClick={clrTextField}> &nbsp;ยกเลิก &nbsp; </div>
                                {/* <div class="btn btn-primary btn-block mt-3" id="loout">Logout</div> */}
                                <hr />
                            </form></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;