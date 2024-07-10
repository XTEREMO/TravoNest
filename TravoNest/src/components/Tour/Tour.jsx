/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';
import list from '../../../server/data';
import Cards from './Cards';
import Navbar from '../Navbar/Navbar';
import isUser from '../../../access_module/user_access';
import Cookies from 'js-cookie';

const Tour = () => {
  const [price, setPrice] = useState(300000);
  const [filter, setFilter] = useState({ price: 300000, attributes: [], mode: [] });
  const isUserAuthenticated = useRef(!!Cookies.get('auth_token'));

  useEffect(() => {
    const temp = Cookies.get('auth_token');
    isUserAuthenticated.current = !!temp;
  }, []);

  const updateFilter = (e) => {
    e.preventDefault();
    const newPrice = e.target[1].value;

    const newAttributes = [];
    for (let i = 3; i <= 11; i++) {
      if (e.target[i].checked) {
        newAttributes.push(e.target[i].id);
      }
    }

    const newMode = [];
    for (let i = 12; i <= 13; i++) {
      if (e.target[i].checked) {
        newMode.push(e.target[i].id);
      }
    }

    setFilter({ price: newPrice, attributes: newAttributes, mode: newMode });
  };

  return isUserAuthenticated.current ? (
    <>
      <div className='tour-container'>
        <div className='left-navbar'>
          <form className='l-n-c' onSubmit={updateFilter}>
            <div className='apply-filters'>
              <h6>Filters</h6>
              <button type="submit">Apply</button>
            </div>
            <div className='all-filters'>
              <label id="price">Price: {price}</label>
              <input
                type="range"
                id="points"
                name="points"
                min="1000"
                max="300000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <fieldset>
                <h1 className='filter-separation'></h1>

                <input type="checkbox" id="Adventure" />
                <label htmlFor="Adventure">Adventure</label>
                <br />


                <input type="checkbox" id="Beach" />
                <label htmlFor="Beach">Beach</label>
                <br />


                <input type="checkbox" id="City" />
                <label htmlFor="City">City</label>
                <br />

                <input type="checkbox" id="Cuple" />
                <label htmlFor="Cuple">Cuple</label>
                <br />

                <input type="checkbox" id="Historic" />
                <label htmlFor="Historic">Historic</label>
                <br />

                <input type="checkbox" id="Mountain" />
                <label htmlFor="Mountain">Mountain</label>
                <br />

                <input type="checkbox" id="Nature" />
                <label htmlFor="Nature">Nature</label>
                <br />

                <input type="checkbox" id="Offbeat" />
                <label htmlFor="Offbeat">Off-Beat</label>
                <br />


                <input type="checkbox" id="Relaxation" />
                <label htmlFor="Relaxation">Relaxation</label>
                <br />

                

                <h1 className='filter-separation'></h1>
                <input type="checkbox" id="indoor" />
                <label htmlFor="indoor">Domestic</label>
                <br />

                <input type="checkbox" id="outdoor" />
                <label htmlFor="outdoor">International</label>
                <br />

                
              </fieldset>
            </div>
          </form>
        </div>
        <div className='right-page'>
          <Cards filter={filter} />
        </div>
      </div>
    </>
  ) : (
    <p>Please log in to view tours.</p>
  );
};

export default Tour;
