import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Breitling from './page/Breitling';
import Patek from './page/Patek';
import Rolex from './page/Rolex';
import Products from './component/Products';
import Profile from './page/Profile';

function App() {
  const watch= [
    {
      id:1,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/46-h4zyi0v49djpdmghplbzenjf-Main_2x.png",
      text:"Men's Watches"
    },
    {
      id:2,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/79-6hi0dfznusvrzw9tw76ij8ia-Main_2x.png",
      text:"Pre-Owned Watches"
    },
     {
      id:3,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/1020-t5yu0r2mn43rjgyxfkdbn24s-Main_2x.png",
      text:"Pocket Watches"
    },
     {
      id:4,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/46-h4zyi0v49djpdmghplbzenjf-Main_2x.png",
      text:"Rolex Submariner Date"
    },
     {
      id:5,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/149-vw13qvu4fsurm7gv5s2lxguf-Main_2x.png",
      text:"Automatic Watches"
    },
     {
      id:6,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/2723-pj9kmxb5696rhdxb3f0he86m-Main_2x.png",
      text:"Gold Watches"
    },
    {
      id:7,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/149-vw13qvu4fsurm7gv5s2lxguf-Main_2x.png",
      text:"Skeleton Watches"
    },
    {
      id:8,
      image:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/323-2b1rln6wlrux06gqv352j0ws-Main_2x.png",
      text:"Moon Phase Watches"
    }

  ]
  const alarm =[
    {
      id:1,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/45-w36w6el32cnbsnxr0smetc2y-Main_2x.png",
      text:"Rolex",
      p:"Datejust"
    },
     {
      id:2,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/1-w70x429knb132x17edf24c63-Main_2x.png",
     text:"Rolex",
      p:"Submariner"
    },
     {
      id:3,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/2-y181jdh67kx2lripaucfting-Main_2x.png",
      text:"Rolex",
      p:"Daytona"
    },

     {
      id:4,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/74-984eorvfjxmx240c0i4zlfhx-Main_2x.png",
      text:"Omega",
      p:"Speedmaster"
    },
     {
      id:5,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/116-ie7ukr10yfqk1jhqf18dl7ky-Main_2x.png",
      text:"Audemars Piguet",
      p:"Royal Oak"
    },
     {
      id:6,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/47-v5b06z1h6pcvqe8xu0e9h2pg-Main_2x.png",
      text:"Rolex",
      p:"Day-Date"
    },

   {
      id:7,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/4-s3n4vjwfzcimyvyeizqpl6cv-Main_2x.png",
      text:"Rolex",
      p:"GTM-Master ||"
    },
     {
      id:8,
      img:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/106-8soyprb5zryt8moy5l06rmpu-Main_2x.png",
      text:"Patek philippe",
      p:"Nautilus"
    },
   
  ]

  return (
   <div>
    <Router>
      <Header/>
      <Routes>
      <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Home/>
      <Routes>
        <Route path='/rolex'  element={<Rolex/>} />
        <Route path='/patek'  element={<Patek/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route/>
      </Routes>
    <Products watch={watch} alarm={alarm}/>
    </Router>
   </div>
  )
}

export default App
