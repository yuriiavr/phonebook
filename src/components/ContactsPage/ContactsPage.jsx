import Container from '../Container';
import ContactList from '../ContactList';
import SearchForm from '../SearchForm';
import ContactForm from '../ContactForm';
import css from '../ContactsPage/ContactsPage.module.css';

export default function ContactPage() {
  return (
    <div>
      <Container>
        <h1 className={css.contact_heading}>Phone Book</h1>
        <div className={css.Table}>
          <div>
            <h2 className={css.ListName}>Adding contacts</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className={css.ListName}>Contacts list</h2>
            <SearchForm />
            <ContactList />
          </div>
        </div>
      </Container>
    </div>
  );
}