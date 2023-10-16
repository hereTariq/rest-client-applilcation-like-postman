import Form from './components/Form';
import RequestTabs from './components/RequestTabs';
import ResponseTabs from './components/ResponseTabs';
import ContextProvider from './context/context';

function App() {
    return (
        <>
            <ContextProvider>
                <div className="h-screen overflow-hidden">
                    <Form className="flex-grow" />
                    <RequestTabs className="h-1/4 overflow-auto" />
                    <ResponseTabs className="h-3/4 overflow-auto" />
                </div>
            </ContextProvider>
        </>
    );
}

export default App;
