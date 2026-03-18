
import { AppBootstrap } from '@blog/store'

import './App.css'
import { AppRouter } from './router/AppRouter'




function App() {
  //const [count, setCount] = useState(0)

return (
  <div>
    <AppBootstrap/>
    <AppRouter/>
    </div>
  )
}

export default App