import './App.css';
import { AdminLayout } from './compenents/admin/compenent.admin.layout';
import { ProductAddForm } from './compenents/admin/compenent.product.add';
import { ProductsList } from './compenents/admin/compenent.product.list';
import { LoginPage } from './compenents/admin/compenent.LoginPage'
import { HomePage } from './compenents/admin/compenent.home'
import { Contact } from './compenents/admin/compenent.contact'
import { Routes, Route } from 'react-router-dom';
import { ProductEdit } from './compenents/admin/compenent.product.edit';
import { CategoriesList } from './compenents/admin/compenent.category.list';
import { CategoryAddForm } from './compenents/admin/compenent.category.add';
import { CategoryEdit } from './compenents/admin/compenent.category.edit';
import { Home } from './compenents/client/compenent.home';
import { ClientLayout } from './compenents/client/compenent.client.layout';

function App() {
       return (
         <Routes>
           <Route path='/admin' element={<AdminLayout/>}>
             <Route path='home' element={<HomePage />} />
             <Route path='products' element={<ProductsList/>}/>
             <Route path='products/new' element={<ProductAddForm/>}/>
             <Route path='products/edit/:id' element={<ProductEdit/>}/>
             <Route path='categories' element={<CategoriesList/>}/>
             <Route path='categories/new' element={<CategoryAddForm/>}/>
             <Route path='categories/edit/:id' element={<CategoryEdit/>}/>
             <Route path='login' element={<LoginPage />} />
             <Route path='contact' element={<Contact />} />
           </Route>
           <Route path='/' element={<ClientLayout/>}>
             <Route path='' element={<Home/>} />
             </Route>
         </Routes>
       );
     }
     
export default App;
     
