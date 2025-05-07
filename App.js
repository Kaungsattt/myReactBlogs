import AppNavigator from './src/navigation/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/store';



const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading= {null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>

        
    )
}
export default App;
