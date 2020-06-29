import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './LandingPage.css';
//import '../bootstrap.css';

class LandingPage extends Component {
    render() {
      return (
        <div className="LangingPage">
          <h1>Landing Page</h1>
          <Router>
                    <>
                    <HeaderComponent/>
                        <Switch>
                          {/*if path = _ direct to component = _ */}
                            <Route path="/" exact component={Login}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/welcome" component={LandingPageWelcome}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
          {/*<Login/>
          <LandingPageWelcome/>*/}
   
        </div>
      );
    }
  }

  class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">Link</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                     
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">Footer</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

  class LandingPageWelcome extends Component {
    render() {
      return (
        <>
            <h1>Welcome!</h1>
            <div class="container">
            Welcome {this.props.match.params.name}
            </div>
        </>
    )        
    }
  }

  function ErrorComponent() {
    return <div>An Error Occurred.</div>
}


  class Login extends Component {
// init state constructor
  constructor (props){
    super(props);
    this.state = {
      username : 'username',
      password : 'password',
      hasLoginFailed: false,
      showSuccessMessage: false,
    }
    //binds value to methods updated value
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
   
  }

    handleChange(event){
      console.log(this.state)
        this.setState({
            [event.target.name]:event.target.value
        })

    }


    loginClicked() {
      if (this.state.username==='username' && this.state.password ==='password'){
        this.props.history.push(`/welcome/${this.state.username}`)
 
        this.setState({showSuccessMessage:true})
        this.setState({hasLoginFailed:false})

      }
          
      else {
        console.log('Failed')
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})

      }

    }

    render() {
      return (
        <div className="login">
          {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
          {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
          {this.state.showSuccessMessage && <div>Login Sucessful</div>}
          {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
          Username: <input type = "text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Password: <input type = "password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button onClick={this.loginClicked}>Login</button>
   
        </div>
      );
    }
  }

  export default LandingPage;