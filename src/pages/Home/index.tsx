import ContactList from '../../containers/ContactList';
import LateralBar from '../../containers/LateralBar';

const Home = () => {
  return (
    <>
      <LateralBar showFilters />
      <ContactList />
    </>
  );
};

export default Home;
