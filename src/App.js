
//import './App.css';
//import navBar from './componente/navBar/navBar'

//function App() {
// return (
  //  <div className="App">
    //  <navBar><navBar/>
      
    //</div>
  //);
//}

//export default App;
//import { useState } from 'react';
import MyInput from './componente/MyInput/MyInput';

function App(){
  const sumar = () =>{
    setCount (count + 1);
  }


  const restar = () =>{
    setCount (count - 1);
  }

  const [count, setCount] = useState(1);

  return (
   <>
      <NavBar><NavBar/>
      <MyButton text= {"Sumar"} callback = {sumar}>variant ={"primary"}<MyButton/>
      <MyButton text= {"Restar"} callback = {restar}>variant ={"secondary"}<MyButton/>
      <MyInput count= {count}> </MyInput>
    </>
  );  
}

export default App ;
