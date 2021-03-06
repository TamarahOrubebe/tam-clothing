import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-page.component';
import CheckOut from './pages/checkout/checkout.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';










class App extends React.Component {

  componentDidMount() {
  
    const { checkUserSession } = this.props;
    checkUserSession();
      
  }
  

  componentWillUnmount() {

    this.unSubscribeFromAuth();

  }

render() {
 return (
    <div >
     <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOut} />
        <Route exact path='/signin' render={() => this.props.currentUser?  (<Redirect to="/"/>) : (<SignInAndSignUp />)} />
      </Switch>
    </div>
  );
}
 
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  


});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
