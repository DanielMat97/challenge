//components
import Header from '../header/Header';
import SubMenu from '../sub-menu/SubMenu';

//estilos
import './App.css';

//images
import cell from '../../images/cell.svg';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          <img src={cell} className="w-100" alt="cellphone"/>
        </div>
        <div className="col p-0 d-flex align-items-center justify-content-center flex-column position-relative">
          <Header/>
          <div className="d-flex justify-content-center align-items-center h-auto">
            <h1 className="w-50 text-main">Digital products lovingly made with a human touch.</h1>
          </div>
        </div>
      </div>
      <SubMenu/>
    </div>
  );
}

export default App;
