import AddContactButton from '../../components/AddContactButton';
import ContactList from '../../containers/ContactList';
import LateralBar from '../../containers/LateralBar';

const Home = () => {
  return (
    <>
      <LateralBar showFilters />
      <ContactList />
      <AddContactButton />
    </>
  );
};

export default Home;
