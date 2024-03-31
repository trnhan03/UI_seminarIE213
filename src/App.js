import {useState} from 'react'
import './App.css';
const testdata={
  username:'nhóm 12',
  email:'team12@gmail.com',
  password:'123456'
}
function App() {
  const [issignin,setissignin]=useState(true);
  const [title,settitle]=useState('Sign in')
  const [email,setemail]=useState('')
  const [username,setusername]=useState('')
  const [password,setpasword]=useState('')
  const [logged,setlogged]=useState(false)
  const handleswitchtosignin=()=>{
    if(!issignin) {
      const input=document.getElementById('email')
      setemail('')
      setpasword('')
      setusername('')
      input.remove()
      settitle('Sign in')
      document.getElementsByClassName('line')[0].style='top: 60px;left: 75px;'
      setissignin(!issignin)
    }
  }
  const handleswitchtosignup=()=>{
    if(issignin) {
      setpasword('')
      setusername('')
      const newinput=document.createElement("input")
      newinput.id='email'
      
      newinput.placeholder='Email'
      newinput.addEventListener('change',(x)=>{
        setemail(x.target.value)
      })
      document.getElementsByClassName('login-form')[0].insertBefore(newinput,document.getElementById('password'))
      settitle('Sign up') 
      document.getElementsByClassName('line')[0].style='top: 60px;left: 270px;'
      setissignin(!issignin)
    }
  }
  const handlebutton=()=>{
    setlogged(true)
  }
  //xử lý cho trang home
  
  return (!logged?
    <div className="App">
      <div class='login-form'>
        <div class='navigator'>
          <button class='selection' onClick={handleswitchtosignin}>Sign in</button>
          <button class='selection' onClick={handleswitchtosignup}>Sign up</button>
        </div>
        <div class='line'></div>
        <div class='title'>{title}</div>
        <input id='username' placeholder="User name" onChange={(x)=>setusername(x.target.value)} value={username}></input>
        <input id='password' placeholder="Password" onChange={(x)=>setpasword(x.target.value)} value={password}></input>
        <button class='button' onClick={handlebutton}><span class="text">{title}</span></button>
      </div>
    </div>:
    <div class='home'>
      <div class="text">
        <p>WELCOME</p>
        <div class='in4'>
          <div>User name: {testdata.username}</div>
          <div>Email: {testdata.email}</div>
          <div>Password: {testdata.password}</div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
