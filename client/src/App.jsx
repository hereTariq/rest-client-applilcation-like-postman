import Form from './components/Form';
import RequestTabs from './components/RequestTabs';
import ContextProvider from './context/context';

function App() {
    return (
        <>
            <ContextProvider>
                <Form />
                <RequestTabs />
            </ContextProvider>
        </>
    );
}

export default App;
