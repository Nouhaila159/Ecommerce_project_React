import { NavLink, Outlet } from "react-router-dom";

export function ClientLayout(){
       return(
              <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <div className="container-fluid">
                            <ul className="navbar-nav">
                                   <li>
                                   <NavLink className="nav-link" to="" exact>Home</NavLink>                                   
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to=""> produits </NavLink>
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to=""> Categories </NavLink>
                                   </li> 
                                   <li>
                                          <NavLink className={"nav-link"} to=""> Contacts </NavLink>
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to=""> Connexion </NavLink>
                                   </li>       


                            </ul>

                     </div>
              </nav>
             
              <Outlet/>
          
              
              </>
       )
}

