import {BrowserRouter, Routes, Route} from'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function App () {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Home />} />
                    <Route path='/Home' element= {<Home />} />
                    <Route path='/Contact' element= {<Contact />} />

                </Routes>
            </BrowserRouter>
        </div>
    )

}