import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";
import CustomPage from "./components/CustomPage";

const App = () => {
  return (
    <main>
      <h1>Make your day with love</h1>
      <Navbar />
      <AddToDo />
      <Todos />
      <CustomPage />
    </main>
  );
};

export default App;
