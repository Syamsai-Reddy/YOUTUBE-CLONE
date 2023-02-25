import "./App.css";
import { Provider } from "react-redux";
import Body from './components/Body';
import Head from './components/Head';
import store from "./utils/store"
function App() {
  return (
    <Provider store={store}>
      <div >
      <Head/>
      <Body/>
      {/**
        * Head
        * Body
        *  Sidebar
        *   MenuItems
        *  MainContainer
        *   ButtonList
        *   Video Container
        *     VideoCard 
        */} 
    </div>
    </Provider>
    
  );
}

export default App;
