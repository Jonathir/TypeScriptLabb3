import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
          <ul>
            <li>
              <Link to="/">Lägg till person</Link>
            </li>
            <li>
              <Link to="/add-journal-entry">Lägg till journalanteckning</Link>
            </li>
            <li>
              <Link to="/person-overview">Översikt personer</Link>
            </li>
          </ul>
        </div>
    )
}
export default NavBar;