import "./App.scss";
import React, { Fragment, useEffect } from "react";
import Landing from "./containers/Landing";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./containers/auth/Register";
import Login from "./containers/auth/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Alert } from "./components/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import Dashboard from "./containers/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./containers/profile-forms/CreateProfile";
import EditProfile from "./containers/profile-forms/EditProfile";
import AddExperience from "./containers/profile-forms/AddExperience";
import AddEducation from "./containers/profile-forms/AddEducation";
import Profiles from "./containers/profiles/Profiles";
import Profile from "./containers/profile/Profile";
import Posts from "./containers/posts/Posts";
import Post from "./containers/post/Post";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/create-profile"
                element={
                  <PrivateRoute>
                    <CreateProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit-profile"
                element={
                  <PrivateRoute>
                    <EditProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-experience"
                element={
                  <PrivateRoute>
                    <AddExperience />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-education"
                element={
                  <PrivateRoute>
                    <AddEducation />
                  </PrivateRoute>
                }
              />
              <Route
                path="/posts"
                element={
                  <PrivateRoute>
                    <Posts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/posts/:id"
                element={
                  <PrivateRoute>
                    <Post />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
