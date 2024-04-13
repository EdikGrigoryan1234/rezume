import About from './About';
import All from './All';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Inform from './Inform';
import Layout from './Layout'
import { Routes,Route } from 'react-router-dom'; 
function App() {
  return (
			<>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route path='/' element={<Inform/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/contact' element={<Contact/>}/>
				<Route path='/all' element={<All/>}/>
				</Route>
			</Routes>
			</>
  );
}

export default App;
