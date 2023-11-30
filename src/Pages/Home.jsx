import React, { useEffect } from 'react';
import { useData } from '../Context/DataContext';
import Card from '../Components/Card';
import '../Css/Home.css'
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
  const { data, setData } = useData();
  const { themeState } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [setData]);

  return (
    <div className={`home-container ${themeState.isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Navbar></Navbar>
      <h1>Lista de Dentistas</h1>
      <div className="cards-container">
        {data.map((dentista) => (
          <Card key={dentista.id} {...dentista} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;