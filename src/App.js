import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';

import './styles/bootstrap.min.css';
import Content from './component/MainContent.jsx';
import { BrowserRouter } from 'react-router-dom';


function App() {

  	return (
    	<div className="App">
			<BrowserRouter basename="/portfolio">
				<Header />
				<Content />
				<Footer />
			</BrowserRouter>
    	</div>
  	);
}

export default App;
