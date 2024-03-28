import { Link } from "react-router-dom"
const Navbar = () => {
  return (
   
      
    <div className='nav flex place-content-between h-28 w-100 '>
        <div className="left flex place-content-evenly items-center sm:w-1/4 w-1/6">
        <Link to="/"> {/* Add the 'to' prop with the desired link destination */}
          <img src="public/images/logo2.png" alt="" className='sm:rounded-full sm:w-35 sm:h-25 h-28'/>
        </Link>
        </div>
        <div className="middle flex place-content-evenly items-center sm:w-1/2 shadow-mdw-5/12 ">
          <div className="searchBar flex h-10 w-full bg-gray-200  place-content-around items-center">
            <input className="outline-none bg-gray-200 ms-4 h-full w-4/5 " type="text" placeholder='Search Items'/>
            <a href=""><i className="ri-search-line sm:text-2xl p-2 text-l"></i></a>
          </div>
            

        </div>
        <div className="right flex  place-content-evenly items-center w-1/6">
            <a href=""><i className="ri-heart-line w-1/3 sm:text-3xl text-xl font-thin"></i></a>
            {/* <a href=""><i className="ri-shopping-basket-line text-3xl font-thin"></i></a> */}
            <a href="/cart"><i className="ri-shopping-cart-line sm:text-3xl text-xl font-thin"></i></a>
        </div>

      


    </div>
  )
}

export default Navbar