import { useEffect } from "react";
import AppRouter from "./AppRouter";

function AppHeader(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/nodebt">รายงานผู้ใช้น้ำที่ยังไม่ได้ตั้งหนี้</a>
                    </li>
                    <li className="nav-item">
                        <div className="vr" style={{height: 35}} />
                    </li>
                    
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        เลือกรายงาน
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="/nodebt/nodebtlist">รายละเอียด ผชน. ที่ยังไม่ได้ตั้งหนี้</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/nodebt/nodebtBrn">สรุปรายสาขา</a>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <a className="dropdown-item" href="#">TBA</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default AppHeader;