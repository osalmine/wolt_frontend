import React from 'react';
import './App.css';
import inputJson from '../../discovery_page.json';
import RestaurantSection from '../RestaurantSection/RestaurantSection';
import Header from '../Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
		<Header sectionsProp={inputJson} />
		{inputJson && inputJson.sections.map((restaurantsSection, i) => <RestaurantSection key={i} section={restaurantsSection} />)}
    </div>
  );
};

export default App;
