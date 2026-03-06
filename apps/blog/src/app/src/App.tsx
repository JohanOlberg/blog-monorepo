
import {AppBootstrap} from './bootstrap/AppBootstrap'
import './App.css'
import { PostListPage } from '../../features/post/view/PostListPage'


function App() {
  //const [count, setCount] = useState(0)

return (
  <div>
    <AppBootstrap/>
<PostListPage></PostListPage>
    </div>
  )
}

export default App