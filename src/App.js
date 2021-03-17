import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import Container from './components/Container';
import AppBar from './components/AppBar';
// import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
// // import appearFormStyles from './transitionsStyles/appearFormStyles.module.css';
// import fadeStyles from './transitionsStyles/fade.module.css';
// import searchFadeStyles from './transitionsStyles/searchFadeStyles.module.css';
// import s from './App.module.css';
// import Title from './components/Title';
// import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';
// import LoaderSpinner from './components/Loader';
// import {contactsOperations, contactsSelectors, changeFilter } from './redux/contacts';

// class App extends Component {

//   static propTypes = {
//     contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//     ),
//     visibleContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//     ),
//     fetchContacts: PropTypes.func,
//     clearFilter: PropTypes.func,
//     isLoadingContacts: PropTypes.bool,
//     error: PropTypes.bool,
//   }

//   componentDidMount() {
//     this.props.fetchContacts();
//   }

// render() {
//   return (
//     <Container>
//       <div className={s.Wrapper}>
//         {this.props.error ? <h1 style={{color:'red'}}>Error: {this.props.error.message}</h1> : null}
//       <Title title="Phonebook" level={1} />
//       {/* <CSSTransition in={true} appear={true} timeout={500} classNames={appearFormStyles} unmountOnExit> */}
//       <ContactForm />
//       {/* </CSSTransition> */}
//       <Title title="Contacts" level={2} />
//       <CSSTransition in={this.props.contacts.length > 1 } classNames={searchFadeStyles} timeout={250} unmountOnExit onExit={() => this.props.clearFilter()}>
//         <Filter />
//         </CSSTransition>
//         {this.props.isLoadingContacts && <LoaderSpinner/>}
//       <CSSTransition in={this.props.visibleContacts.length !== 0 || this.props.contacts.length > 1} classNames={fadeStyles} timeout={250} unmountOnExit>
//         <ContactList />
//       </CSSTransition>
//     </div>
//   </Container>)
// }
// };

// const mapStateToProps = state => ({
//   // console.log(state)
//   contacts: contactsSelectors.getContacts(state),
//   filter: contactsSelectors.getFilter(state),
//   isLoadingContacts: contactsSelectors.getLoading(state),
//   error: contactsSelectors.getError(state),
//   visibleContacts: contactsSelectors.getVisibleContacts(state),
// }
// );

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
//   clearFilter: () => dispatch(changeFilter('')),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App)

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    );
  }
}

export default App;
