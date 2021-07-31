import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ContactList from './pages/ContactList';
import FieldList from './pages/FieldList';
import ContactCreate from './pages/ContactCreate';
import ContactEdit from './pages/ContactEdit';
import FieldCreate from './pages/FieldCreate';
import FieldEdit from './pages/FieldEdit';

function App() {
  return (
    <>
      <h2 className="header">PhoneBook</h2>
      <nav>
        <ul className="list">
          <li>
            <Link to="/contacts">Список контактов</Link>
          </li>
          <li>
            <Link to="/fields">Список полей</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/contacts" exact component={ContactList} />
        <Route path="/contacts/add" exact component={ContactCreate} />
        <Route path="/contacts/edit/:contactIndex" exact component={ContactEdit} />
    
        <Route path="/fields" exact component={FieldList} />
        <Route path="/fields/add" exact component={FieldCreate}/>

        <Route path="/fields/edit/:id" exact component={FieldEdit} />

        <Route path="/" exact>
          <Redirect to="/contacts" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
