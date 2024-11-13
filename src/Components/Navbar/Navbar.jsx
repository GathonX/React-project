
import './Navbar.css'

export default function Navbar () {

  const user = 10

  return (
    <>
      <nav className='nav-bar-top'>
        <ul className='box'>
            <li><a href="">Navbar1</a></li>
            <li><a href="">Navbar2</a></li>
            <li><a href="">Navbar5</a></li>
            <li><a href="">Navbar2</a></li>
            <li><a href="">Navbar3</a></li>
            { user > 18 ?  <li><a href=""> home4 </a></li> : <li><a href="">home </a></li> }
           
        </ul>
      </nav>
    </>
  )
}


