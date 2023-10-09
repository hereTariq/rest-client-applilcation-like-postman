import Form from './components/Form';
import RequestTabs from './components/RequestTabs';
import ResponseTabs from './components/ResponseTabs';
import ContextProvider from './context/context';

function App() {
    return (
        <>
            <ContextProvider>
                <Form />
                <main className="lg:flex gap-8">
                    <div className="lg:w-[50%] min-w-[50%]">
                        <RequestTabs />
                    </div>
                    <div className="lg:w-[50%] min-w-[50%]">
                        <ResponseTabs />
                    </div>
                </main>
            </ContextProvider>
        </>
    );
}

export default App;
