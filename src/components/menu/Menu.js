import './Menu.css';

function Menu(){
    return(
        <div className="menu d-flex justify-content-center align-items-center flex-column">
            <button className="btn">Home</button>
            <button className="btn">About</button>
            <button className="btn">Work</button>
        </div>
    );
}

export default Menu;