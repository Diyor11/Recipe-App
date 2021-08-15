import React, { useEffect, useState } from 'react';
import './App.css';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap'
import Repices from './components/Repices';
import Loader from './components/Loader/Loader';

function App() {

  const Api_key = '16b16ec140a050c66d47bd7b6c10bfc9';
  const Api_id = '9d2b7a8c';

  const [loading, setLoading] = useState(true);
  const [repice, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipe = async () =>{
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${Api_id}&app_key=${Api_key}`);
    console.log(response.data.hits);
    setRecipe(response.data.hits);
    setLoading(false);
  }

  useEffect(() =>{
    getRecipe()
  }, [query])

  const defaultText = (e) =>{
      e.preventDefault();
      setQuery(search)
  }
  const searchUp = (e) =>{
    setSearch(e.target.value)
    console.log(search);
  }

  return (
    <div className='App'>
      <form onSubmit={defaultText}>
        <input type='text' onChange={searchUp}/>
        <button>submit</button>
      </form>
      {
        loading ? <Loader />:
      <Container>
        <Row>
          {repice.map((food, index) => {
            return (
              <Col md='6' className='mb-5 re-col' key={index}>
                  <Repices 
                    title={food.recipe.label} 
                    img={food.recipe.image}
                    ingredients={food.recipe.ingredients}
                    />
              </Col>
            )
          })}
        </Row>
      </Container>
      }
    </div>
  );
}

export default App;
