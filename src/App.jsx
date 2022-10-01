import './App.css'
import { Home } from './pages'
import { LayoutComponent } from './styled-components'

function App() {
  return (
    <>
      <LayoutComponent>
        <Home name={'react'} />
      </LayoutComponent>
    </>
  )
}

export default App
