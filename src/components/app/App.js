//react
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//components
import Header from '../header/Header';
import SubMenu from '../sub-menu/SubMenu';
import Menu from '../menu/Menu';

//estilos
import './App.css';

//images
import cell from '../../images/cell.svg';

//store
const initialState = {
  menu: false
};

function reducer(state, action){
  switch (action.type) {
    case 'SET_MENU': {
      return {...state, menu: action.payload};
    }
    default: {
      console.log('ACTION OF REDUX');
      return state;
    }
  }
}

const store = createStore(reducer, initialState);

function App() {  
  return (
    <Provider store={store}>
      <div className="w-100 app">
        <div className="container-fluid">
          <div className="row d-flex flex-sm-row-reverse">
            <div className="col-12 col-sm-12 col-md-6 p-0 contHeader position-relative">
              <Header/>
              <div className="contTextMain">
                <h1 className="w-50 text-main p-4">Digital products lovingly made with a human touch.</h1>
              </div>
              <Menu/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 p-0">
              <img src={cell} className="w-100" alt="cellphone"/>
            </div>
          </div>
        </div>
        <SubMenu/>
      </div>
    </Provider>
  );
}

export default App;
