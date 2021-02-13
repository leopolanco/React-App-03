import GetStock from './components/GetStock'
import SetRangeDate from './components/SetRangeDate'


const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='h1'>Stocks</h1>

        <GetStock />

        <SetRangeDate />
      </header>
    </div>
  )
}

export default App
