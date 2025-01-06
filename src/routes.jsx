import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

function AppRoutes(){
    return(
        <BrowserRouter basename="/projeto-gerenciador-de-tarefas">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes