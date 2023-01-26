import React, {useEffect, useState} from "react";
import { Route, Routes} from 'react-router-dom';
import ItemDetails from "./ItemDetails"
import Home from "./Home"
import NavBar from "./NavBar"
import ItemPage from "./ItemPage"
import NewItemForm from "./NewItemForm"
import Login from "./Login";
import Signup from "./Signup";


function App() {
  const [page, setPage] = useState("/")
  const[items, setItems]= useState([])
  const[itemId, setItemId] = useState(null)
  const [currentUser, setCurrentUser] = useState(null);
  const [createAccount, setCreateAccount] = useState(true);




  const toggleCreateAccount = () => {
    setCreateAccount(!createAccount);
  };

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);
  // console.log(itemId)
  useEffect(()=>{
    fetch("http://127.0.0.1:3000/items")
    .then (r => r.json())
    .then ((data)=>{
      // console.log(data)
    setItems(data)})
    },[])


  // function getCurrentPage(){
  //   switch(page){
  //     case "/":
  //       return <Home />
  //       case "/ItemDetails":
  //         return <ItemDetails />
  //         default:
  //           return <h1> 404 not found</h1>
  //   }
  // }
  return (
    <div>
      <NavBar onChangePage={setPage} currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <Routes>
      <Route
          path="/login"
          element={
            createAccount ? (
              <Login
                toggleCreateAccount={toggleCreateAccount}
                onLogin={setCurrentUser}
              />
            ) : (
              <Signup
                toggleCreateAccount={toggleCreateAccount}
                onSignup={setCurrentUser}
              />
            )
          }
        />
        <Route path="/" element={<Home/>}>

        {/* </Route>
        <Route path="/itemDetails/" element={<ItemDetails />} > */}

        </Route>
        <Route path="/itemPage" element={<ItemPage setItems={setItems} setItemId={setItemId} items={items}/>} >
        </Route>
        <Route path="/newItemForm" element={<NewItemForm/>} >
        </Route>
        <Route path="/items/:id" element={<ItemDetails items={items} itemId={itemId}  />} >
        </Route>
        {/* <Route path="*">
                    <h1>404 not found</h1>
                </Route> */}
      </Routes>

    </div>
  )


}

export default App;
