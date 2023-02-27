import './navbar.css'

function CartWidget(){
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            
          <img src="https://img.icons8.com/color/48/null/add-shopping-cart--v1.png"/>
          Cantidad de items: 3
        </div>
      </nav>
    )
}

export default CartWidget;