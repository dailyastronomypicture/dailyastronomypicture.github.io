import { useEffect, useState } from 'react'
import './App.css'
import { api } from './services/AppService';
import Header from './components/Banner';
import Footer from './components/Footer';

function App() {
  const [noticia, setNoticia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api();
        setNoticia(data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header/>
      {noticia && (
        <div>
          <h1>{noticia.title}</h1>
          <img src={noticia.url} alt="noticia.title" />
          <p>{noticia.explanation}</p>
          <p> <a target='blank' href={noticia.hdurl}>Link</a> to HD image</p>
          <p>by  {noticia.copyright} -  {noticia.date}</p>
        </div>
      )}
      <Footer/>
    </>
  )
}

export default App
