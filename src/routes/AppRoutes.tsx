import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "../components/Navbar"
import { ContractList } from "../pages/Contract"
import { Login } from "../pages/Login"
import { ProjectList } from "../pages/Project"


export function AppRoutes(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />} >
                <Route index element={<ProjectList />} />
                <Route path="contract" element={<ContractList />} />
                </Route>
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}