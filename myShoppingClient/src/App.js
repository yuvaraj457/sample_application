import { BrowserRouter } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Provider } from 'react-redux';

import {store} from './store'
import './assets/style/style.css';
import { AppRouter } from './routes/route';



function App() {
    return (
        <div>
            <Provider store={store}>
                 <BrowserRouter>  
                    <AppRouter />
                </BrowserRouter>
            </Provider>
        </div>

    );
}

export default App;
