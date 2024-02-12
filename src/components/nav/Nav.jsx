import { VscAccount } from "react-icons/vsc";
import { HiInboxArrowDown } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi";
import "./nav.css"
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi2";



const Nav = () => {

   const navigate = useNavigate()
   
    const goToHome = () => {
        navigate('/home')
        window.location.reload();
    }
    const goToStorage = () => {
      navigate('/storage')
    }

  return (
    <>

      <nav className="navbar navbar-expand navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className="nav-item nav-link active" onClick={goToHome}><HiHome /></button>
            <a className="nav-item nav-link" href="#" onClick={goToStorage}><HiOutlineBookmark /></a>
            <a className="nav-item nav-link" href="#"><HiInboxArrowDown /></a>
            <a className="nav-item nav-link disabled" href="#"><VscAccount /></a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;