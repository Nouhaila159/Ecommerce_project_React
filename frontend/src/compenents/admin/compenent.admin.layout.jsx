import { NavLink, Outlet, useNavigate } from "react-router-dom";

export function AdminLayout(){
       const navigate=useNavigate();   
       async function logout(){
              await localStorage.removeItem("jwtToken");
              console.log("logout....")
              navigate("/admin/login");
       }
       return(
              <>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                     <div className="container-fluid">
                            <ul className="navbar-nav">
                                   <li>
                                          <NavLink className={"nav-link"} to="/admin/home">Home</NavLink>                                   
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to="/admin/products"> produits </NavLink>
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to="/admin/categories"> Categories </NavLink>
                                   </li> 
                                   <li>
                                          <NavLink className={"nav-link"} to="/admin/contact"> Contacts </NavLink>
                                   </li>
                                   <li>
                                          {(localStorage.getItem("jwtToken"))?
                                          <NavLink onClick={(e) => logout(e)} className={"nav-link"}> Se déconnecter </NavLink>:
                                          <NavLink className={"nav-link"} to="/admin/login"> Connexion </NavLink>}
                                   </li>       


                            </ul>

                     </div>


              </nav>
              <div>
              <Outlet/>
              </div>
              
              </>
       )
}

