import {BrowserRouter, Routes, Route} from'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Map from './pages/Map';
import Services from './pages/Services';


export default function App () {
    

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Home />} />
                    <Route path='/Home' element= {<Home />} />
                    <Route path='/Contact' element= {<Contact />} />
                    <Route path='/Map' element= {<Map />} />
                   
                    <Route path='/Services' element= {<Services />} />
                </Routes>
            </BrowserRouter>


        </div> /*adding hol*/
        );
       
    

}

//DO NOT CHANGE UNLESS IT'S NOT WORKING