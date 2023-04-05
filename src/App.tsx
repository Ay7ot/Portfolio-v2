import { AppProvider } from "./AppContext"
import MainPage from "./Components/MainPage"


function App() {

    
    return (
    <AppProvider>
      <div className="transition-all delay-150 ease-linear">
        <MainPage />
      </div>
    </AppProvider>
    )
}

export default App
