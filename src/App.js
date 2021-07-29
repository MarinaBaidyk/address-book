import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ContactList from './pages/ContactList';
import FieldList from './pages/FieldList';
import ContactCreate from './pages/ContactCreate';
import ContactEdit from './pages/ContactEdit';

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
        <Route path="/fields/add">
          Форма добавления поля
        </Route>
        <Route path="/fields/edit/:fieldsId">
          Форма редактирования поля
        </Route>

        <Route path="/" exact>
          <Redirect to="/contacts" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
