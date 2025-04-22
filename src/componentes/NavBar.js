import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom'
const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/">Home</NavLink>         
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>         
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>         
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>         
          </li>
          <li>
            <NavLink to="/register">Cadastrar</NavLink>         
          </li>
        </ul>
      </nav>
    );
   };

   export default NavBar