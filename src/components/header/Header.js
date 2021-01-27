//react
//redux
import { useDispatch, useSelector } from 'react-redux';

//estilos
import './Header.css';

function Header() {

    // estado global de menu
    const menuFlag = useSelector(state => state.menu);
    const dispatch = useDispatch();

    // manejador de menu
    function handleMenu(){
      if(menuFlag){
        dispatch({
          type: 'SET_MENU',
          payload: false
        });
      } else {
        dispatch({
          type: 'SET_MENU',
          payload: true
        });
      }
    }


    return (
      <header className="w-100 p-3 bg-white">
        <div className="w-100 d-flex justify-content-between align-items-center subHeader">
            <h1 className="logo">Lagom</h1>
            <button className="btn" onClick={handleMenu}><i className="fas fa-bars fa-2x"></i></button>
        </div>
      </header>
    );
}
  
  export default Header;
  