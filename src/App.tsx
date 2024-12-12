import AddToDo from "./components/addtodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"
import "./App.css"
import { Header } from '@swarmakit/react/src/stories/Header'
import { Page } from '@swarmakit/react/src/stories/Page'


const App = () => {
  return (
   <main>
      <Header user={{name:"Gaurav"}}/>
      <h1>Make your day with love </h1>
      <Navbar />
      <AddToDo />
      <Todos />
      <Page />
   </main>
  )
}

export default App