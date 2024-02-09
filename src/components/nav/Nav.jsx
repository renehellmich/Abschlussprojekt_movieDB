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
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <button class="nav-item nav-link active" onClick={goToHome}>Home </button>
      <a class="nav-item nav-link" href="#"><HiOutlineBookmark /></a>
      <a class="nav-item nav-link" href="#"><HiInboxArrowDown /></a>
      <a class="nav-item nav-link disabled" href="#"><VscAccount /></a>
    </div>
  </div>
</nav>
        </>
     );
}
 
export default Nav;