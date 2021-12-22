
import React from 'react';
import { Route, Routes } from 'react-router'; 
import './App.css';
import {Home, Footer, Header,  PlaceDetai, Tours, Blog, AboutKyrgyzstan, Gallery, AboutUs, ContactUs, Form, PageNotFound} from './components';



function App() {

  return (
    <div className="App">
     <Header/>

   <Routes>
   
     <Route   path= "/home"  element ={ <Home /> }/>
     <Route  exact path ="/tour/:topPlacesId"  element={<PlaceDetai/>}/>  
     <Route  exact path ="/tours"  element={<Tours/>}/> 
     <Route  exact path ="/blog"  element={<Blog/>}/> 
     <Route  exact path ="/aboutKyrgyzstan"  element={<AboutKyrgyzstan/>}/> 
     <Route  exact path ="/gallery"  element={<Gallery/>}/> 
     <Route  exact path ="/aboutUs"  element={<AboutUs/>}/> 
     <Route  exact path ="/contactUs"  element={<ContactUs/>}/> 
     <Route  exact path ="/form"  element={<Form/>}/> 
     <Route element={<PageNotFound />}/>

     <Route>404 not Found!</Route>
     
   </Routes>   
   <Footer/>  
    
 </div>
  )
}

export default App;








