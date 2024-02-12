import { VscAccount } from "react-icons/vsc";
import { HiInboxArrowDown } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi";
import "./nav.css"
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";


const Nav = () => {

   const navigate = useNavigate()
   
    const goToHome = () => {
        navigate('/')
    }

    return ( 
        <>
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <button className="nav-item nav-link active" onClick={goToHome}>Home </button>
      <a className="nav-item nav-link" href="#"><HiOutlineBookmark /></a>
      <a className="nav-item nav-link" href="#"><HiInboxArrowDown /></a>
      <a className="nav-item nav-link disabled" href="#"><VscAccount /></a>
    </div>
  </div>
</nav>
        </>
     );
}
 
export default Nav;