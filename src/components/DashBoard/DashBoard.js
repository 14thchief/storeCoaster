import SideBar from "./SideBar";
import RightSide from "./RightSide";
import './DashBoard.css';

const DashBoard= ()=>{

    return (
        <div className="dashBoard">
            <SideBar />
            <RightSide />
        </div>
    )
}

export default DashBoard;