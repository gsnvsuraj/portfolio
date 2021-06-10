import Header from './component/Header.jsx';
import Intro from './component/Intro.jsx';
import Footer from './component/Footer.jsx';

import Routes from './component/Routes.jsx';
import {useRoutes} from 'hookrouter';

import './styles/bootstrap.min.css';

function App() {
	
	const routeResult = useRoutes(Routes);

  	return (
    	<div className="App">
      		<Header />
      		
			  	{routeResult || <Intro />}
			
			<Footer />
    	</div>
  	);
}

export default App;
