import './App.css';
import { AdminLayout } from './compenents/compenent.admin.layout';
import { ProductAddForm } from './compenents/compenent.product.add';
import { ProductsList } from './compenents/compenent.product.list';
import { LoginPage } from './compenents/compenent.LoginPage'
import { HomePage } from './compenents/compenent.home'
import { Contact } from './compenents/compenent.contact'
import { Routes, Route } from 'react-router-dom';
import { ProductEdit } from './compenents/compenent.product.edit';

function App(){
       return (
              <Routes>
              <Route path='/' element={<AdminLayout/>}>
                     <Route path='products' element={<ProductsList/>}/>
                     <Route path='products/new' element={<ProductAddForm/>}/>
                     <Route path='products/edit/:id' element={<ProductEdit/>}/>
                     <Route path='login' element={<LoginPage />} />
                     <Route path='home' element={<HomePage />} />
                     <Route path='contact' element={<Contact />} />
              </Route>
              </Routes>       
       );
}
export default App;
