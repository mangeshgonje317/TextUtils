// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';




function App() {
  const [mode ,setMode]= useState('light');
  const[alert,setAlert]= useState('hello');
  const showAlert= (message,type)=>{
   setAlert({
    msg:message,
    type:type
  })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)

  }
const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='black';
    document.body.style.color ='white';
    showAlert("Dark mode Enabled", "success");
    document.title= 'TextUtils-DarkMode';

  }else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    document.body.style.color ='black';
    showAlert("light mode Enabled", "success");
    document.title= 'TextUtils-Mode';
  }
}

  return (
   <>
   
    <Navbar title="TestUtils" AboutText="About" mode = {mode} toggleMode= {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" showAlert={showAlert} className= "my-3" mode= {mode} />
        
    </div>
    {/* <About/> */}
  </>
  );
}

export default App;
