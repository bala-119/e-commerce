function Navbar({cartCount}){
    return(
        <div className="nav">
            <h2>My shop</h2>
            <p>Cart : {cartCount}</p>
        </div>
    );
}

export default Navbar;