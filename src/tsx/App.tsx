import { Provider } from 'react-redux'
import '../css/App.css'
import { MainEditPage } from './edition/components/MainEditPage'
import { store } from './edition/redux/store'
import { MarketPage } from './market/components/MarketPage'




function App() {
  return (
    <>
      <div className='task'>
        <Provider store={store}>
          <MainEditPage />
        </Provider>
      </div>
      <div className="task">
        <MarketPage />
      </div>
    </>
  )
}

export default App
