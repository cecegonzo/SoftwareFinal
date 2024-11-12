import {BrowserRouter, Routes, Route} from'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Map from './pages/Map';
import Services from './pages/Services';
import ReactMapGL from "react-map-gl" //Heather is attempting map
import { useState } from 'react';

export default function App () {
    const [viewport, setViewport] = useState({ /*adding hol*/
        latitude: 14, 
        longitude: 14,
        width: "100vw",
        height: "100vw",
        zoom: 10
    }); /*adding hol*/

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

            <ReactMapGL {...viewport}> markers here </ReactMapGL> 
        </div> /*adding hol*/
        );
       
    

}

//DO NOT CHANGE UNLESS IT'S NOT WORKING