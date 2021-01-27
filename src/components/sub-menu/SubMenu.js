import './SubMenu.css';

//images
import vector from '../../images/vector.svg';
import studio from '../../images/studio.svg';

function SubMenu(){
    return(
        <div className="container-fluid">
            <div className="row align-items-stretch">
                <div className="col-12 col-sm-12 col-md-6 p-md-5 p-sm-3 mt-5 mt-md-0 d-flex align-items-center justify-content-center flex-column">
                    <div className="cursor-pointer w-100 d-flex justify-content-between align-items-center contLink active pb-3">
                        <h1>Dribbble</h1>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="w-100 pb-3 ">
                        <div className="line"></div>
                    </div>
                    <div className="cursor-pointer w-100 d-flex justify-content-between align-items-center contLink disabled pb-3">
                        <h1>Twitter</h1>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="row h-100">
                        <div className="col-12 p-5 col-sm-12 col-md-6 bg-dark d-flex justify-content-center align-items-center">
                            <div className="p-5">
                                <img src={vector} alt="challenge" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 bg-dark d-flex justify-content-center align-items-center p-0">
                            <img src={studio} alt="challenge" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubMenu;