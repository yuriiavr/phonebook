import css from './HomePage.module.css';

export default function HomePage() {
    return (
      <>
        <section>
          <h1 className={css.heading}>Welcome to your Phonebook</h1>
          <div className={css.cont}>
            <div className={css.posible_cont}>
              <h2 className={css.title}>What can you do with our app?</h2>
              <ul className={css.posible_list}>
                <li>Save contacts</li>
                <li>Delate contacts</li>
                <li>Search contacts by name</li>
              </ul>
            </div>
          </div>
          
        </section>
      </>
    );
  }