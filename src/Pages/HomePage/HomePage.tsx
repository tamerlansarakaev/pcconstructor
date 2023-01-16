import Select from '../../components/UI/Selector/Select';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Select title="Материнская плата" options={[]} errorOptionsMessage='Данные не загрузились' />
    </div>
  );
};

export default HomePage;
