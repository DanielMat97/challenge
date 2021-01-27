//react
//redux
import { useDispatch, useSelector } from 'react-redux';

// estilos
import './Menu.css';

// images
import home from '../../images/home.svg';



function Menu() {
    const menuFlag = useSelector(state => state.menu);
    const dispatch = useDispatch();

    function handleMenu() {
        if (menuFlag) {
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

    return ( <div> {
            menuFlag ? <div className="animate__animated animate__fadeInRight menu d-flex justify-content-center align-items-center flex-column" >
            <button className="btn btnExitMenu" onClick={handleMenu}> <i className="fas fa-times fa-2x"></i> </button> 
            <div >
            <button className = "btn text-white">
                < img src={home} alt="home"/>
            </button> 
            </div> 
            <div >
            <button className = "btn" > About </button> 
            </div> <div >
            <button className = "btn" > Work </button> </div> </div> : null
        } </div>
    );
}

export default Menu;