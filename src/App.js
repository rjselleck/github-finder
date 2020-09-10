import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import Search from './components/users/Search.js';
import Alert from './components/layout/Alert.js';
import axios from 'axios'
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  //shows all users
  async componentDidMount() {
    // this.setState({ loading: true });

    // const res = await axios.get('https://api.github.com/users');

    // this.setState({
    //   users: res.data,
    //   loading: false
    // });
  };

  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };


  render() {

    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users
            loading={loading}
            users={users}
          />
        </div>
      </div>
    );
  }
}

export default App;
