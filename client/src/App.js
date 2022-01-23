// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Homepage from "./components/homepage/homepage";
import { AppProvider } from "./context/AppContext";

function App() {
    const [user, setUser] = useState({});
    return (
        <AppProvider>
            <div className="App">
                <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            user && user._id ? (
                                <Homepage value={user} setLoginUser={setUser} />
                            ) : (
                                <Login setLoginUser={setUser} />
                            )
                        }
                    />
                    <Route path="/login" exact element={<Login setLoginUser={setUser} />} />
                    <Route path="/register" exact element={<Register />} />
                </Routes>
            </BrowserRouter>
                {/* <Homepage /> */}
            </div>
        </AppProvider>
    );
}

export default App;
