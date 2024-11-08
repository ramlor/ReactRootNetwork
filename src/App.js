import 
const [count, setCount] = useState(1);
return (
  <>
    <BrowserRouter>
    <NavBar>
    <Routes>
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/songs" element = {<Songs/>}/>  
      <Route exact path="/songs/Name" element = {<Songs/>}/> 
      <Route exact path="/error" element = {<Error/>}/>
      <Route exact path="/page-not-found" element = {<NotFound/>}/>    
      <Route exact path="*" element = {<Navigate to='/page-not-found'>}/>
      </Routes>
      </BrowserRouter>
    
  </>
  
);



export default App ;
