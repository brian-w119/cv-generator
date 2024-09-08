import Navbar from './navbar'
import Home from './Home'
import './practise.css'


const TestApp = () => {
 return (
        <div className="App">
            <Navbar />
            <div className="Content">
            <Home />
            </div>
        </div>
    );
};

export default TestApp;