import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Sistro from './pages/Sistro';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perfil from "./pages/User";
import Instruments from "./pages/Instruments";
import ListLessons from "./pages/ListLessons";
import Lesson from "./pages/Lesson";
import ListSheetMusic from "./pages/ListSheetMusic";
import SheetMusic from "./pages/SheetMusic";
import CreateFormInstrument from "./pages/form/CreateFormInstrument";
import CreateFormLesson from "./pages/form/CreateFormLesson";
import CreateFormSheetMusic from "./pages/form/CreateFormSheetMusic";
import EditFormInstrument from "./pages/form/EditFormInstrument";
import EditFormLesson from "./pages/form/EditFormLesson";
import EditFormSheetMusic from "./pages/form/EditFormSheetMusic";
import DeleteFormInstrument from "./pages/form/DeleteFormInstrument";
import DeleteFormLesson from "./pages/form/DeleteFormLesson";
import DeleteFormSheetMusic from "./pages/form/DeleteFormSheetMusic";
import UserRol from "./components/UserRol";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Sistro/>}></Route>
        <Route path="/iniciar-sesion" element={<Login/>}></Route>
        <Route path="/crear-cuenta" element={<Register/>}></Route>
        <Route path="/inicio" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path="/perfil" element={<ProtectedRoute><Perfil/></ProtectedRoute>}></Route>
        <Route path="/instrumentos" element={<ProtectedRoute><Instruments/></ProtectedRoute>}></Route>
        <Route path="/instrumentos/:id" element={<ProtectedRoute><ListLessons/></ProtectedRoute>}></Route>
        <Route path="/clase/:id" element={<ProtectedRoute><Lesson/></ProtectedRoute>}></Route>
        <Route path="/lista-partituras" element={<ProtectedRoute><ListSheetMusic/></ProtectedRoute>}></Route>
        <Route path="/partitura/:id" element={<ProtectedRoute><SheetMusic/></ProtectedRoute>}></Route>
        <Route path="/agregar-instrumento" element={<UserRol userRol='1'><CreateFormInstrument/></UserRol>}></Route>
        <Route path="/agregar-clase" element={<UserRol userRol='1'><CreateFormLesson/></UserRol>}></Route>
        <Route path="/agregar-partitura" element={<UserRol userRol='1'><CreateFormSheetMusic/></UserRol>}></Route>
        <Route path="/editar-instrumento" element={<UserRol userRol='1'><EditFormInstrument/></UserRol>}></Route>
        <Route path="/editar-clase" element={<UserRol userRol='1'><EditFormLesson/></UserRol>}></Route>
        <Route path="/editar-partitura" element={<UserRol userRol='1'><EditFormSheetMusic/></UserRol>}></Route>
        <Route path="/eliminar-instrumento" element={<UserRol userRol='1'><DeleteFormInstrument/></UserRol>}></Route>
        <Route path="/eliminar-clase" element={<UserRol userRol='1'><DeleteFormLesson/></UserRol>}></Route>
        <Route path="/eliminar-partitura" element={<UserRol userRol='1'><DeleteFormSheetMusic/></UserRol>}></Route>
      </Routes>
    </Router>
  )
}

export default App
