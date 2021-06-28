import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import ScrollToTop from './component/ScrollToTop.jsx';

import './styles/bootstrap.min.css';
import Content from './component/MainContent.jsx';
import { BrowserRouter } from 'react-router-dom';


function App() {

  	return (
    	<div className="App">
			<BrowserRouter basename="/portfolio">
				<Header />
				<ScrollToTop />
				<Content />
				<Footer />
			</BrowserRouter>
    	</div>
  	);
}

export default App;
