import './SubMenu.css';

//images
import vector from '../../images/vector.svg';
import studio from '../../images/studio.svg';

function SubMenu(){
    return(
        <div className="row align-items-center">
            <div className="col">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 p-5">
                        <div className="d-flex justify-content-between align-items-center contLink">
                            <h1>Dribbble</h1>
                            <i className="fas fa-arrow-right degArrow"></i>
                        </div>
                    </div>
                    <div className="px-5 col-12">
                        <div className="lineBlack w-100"></div>
                    </div>
                    <div className="col-12 p-5 disabled">
                        <div className="d-flex justify-content-between align-items-center contLink">
                            <h1>Twitter</h1>
                            <i className="fas fa-arrow-right degArrow"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col p-0">
            <div className="row">
                <div className="col p-0 d-flex justify-content-center align-items-center bg-black">
                    <img alt="challenge mxn" src={vector} className="img-fluid"/>
                </div>
                <div className="col p-0">
                    <img alt="challenge mxn" src={studio} className="studioImg"/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SubMenu;