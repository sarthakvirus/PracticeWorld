import Header from "./Header";

function App(){
  return (
    <div>
      <h2>Hello pandat Sarthak Ji</h2>
      <Header />
      <Apple />
      <Fruits />
    </div>
  )
}


function Apple(){
  return(
    <div>
      <p>Inside the app.jsx i am in</p>
    </div>
  )
}

function Fruits(){
  return(
    <div>
      <p>I am the fruit</p>
    </div>
  )
}

export default App;