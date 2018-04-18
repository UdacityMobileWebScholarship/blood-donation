import React, { PropTypes } from 'react';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <div>
      <div>
        <Helmet
          title="Blood Donation"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        />
        <Header />
        <div className={styles.container}>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
