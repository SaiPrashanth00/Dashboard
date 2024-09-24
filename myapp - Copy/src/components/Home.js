import React , { useState }from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './Home.css';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';


import Button from '@mui/material/Button';

import { createContext } from 'react';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
 
  const [age, setAge] = React.useState('');
    const [selectedOption, setSelectedOption] = useState('option1'); // Initial selected option
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    return (
      <div>
       
      <div className='allcards'>
      <div className='card-row1'>    
        <div className="card">
      <div className="card-content">
        <h4 className="card-title">Total Users</h4>
        <h2 className='users'>277</h2>
        <p className="card-description">
          LastMonth
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h4 className="card-title">Total Users</h4>
        <h2 className='users'>277</h2>
        <p className="card-description">
          LastMonth
        </p>
      </div>
    </div>
    </div>
    <div className='card-row2'>
    <div className="card">
      <div className="card-content">
        <h4 className="card-title">Total Users</h4>
        <h2 className='users'>277</h2>
        <p className="card-description">
          LastMonth
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h4 className="card-title">Total Users</h4>
        <h2 className='users'>277</h2>
        <p className="card-description">
          LastMonth
        </p>
      </div>
    </div>
    </div>
</div>
<div className='product'>
<div className='belowcard shadow border-0 p-3 mt-4'>
  <h3 className='hd'>Best Selling Products</h3>
  <div className='row cardFilters mt-3'>
    <div className='col'>
      <h4>Show By</h4>
      <select id="myDropdown" value={selectedOption} onChange={handleOptionChange}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    </div>
    <div className='col'>
      <h4>Categary By</h4>
      <select id="myDropdown" value={selectedOption} onChange={handleOptionChange}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    </div>
    <div className='table-responsive mt-3'>
      <table className='table table-bordered'>
      <thead className='thead-dark'>
        <tr>
          <th>UID</th>
          <th>product</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Rating</th>
          <th>Order</th>
          <th>Sales</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#1</td>
          <td><div className='productskirt'>
            <img className ='skirt' src='https://4.imimg.com/data4/OW/HN/MY-23722908/kskt191py-500x500.jpg'></img>
            <h6>Tops and skirt set for sale</h6>
          </div>
          </td>
          <td>womans</td>
          <td>richman</td>
          <td>
            <span className='old'><del>21$</del></span>
            <span className='new'>21$</span>
            </td>
          <td>30</td>
          <td>4.9</td>
          <td>380</td>
          <td>$38K</td>
          <td>
            <div className='actions d-flex align-items-center'>
              <Button color="secondary"><FaEye/></Button>
              <Button color="success"><FaPencilAlt/></Button>
              <Button color="error"><MdDelete/></Button>

            </div>
          </td>
        </tr>
        <tr>
          <td>#1</td>
          <td><div className='productskirt'>
            <img className ='skirt' src='https://4.imimg.com/data4/OW/HN/MY-23722908/kskt191py-500x500.jpg'></img>
            <h6>Tops and skirt set for sale</h6>
          </div>
          </td>
          <td>womans</td>
          <td>richman</td>
          <td>
            <span className='old'><del>21$</del></span>
            <span className='new'>21$</span>
            </td>
          <td>30</td>
          <td>4.9</td>
          <td>380</td>
          <td>$38K</td>
          <td>
            <div className='actions d-flex align-items-center'>
              <Button color="secondary"><FaEye/></Button>
              <Button color="success"><FaPencilAlt/></Button>
              <Button color="error"><MdDelete/></Button>

            </div>
          </td>
        </tr>
        <tr>
          <td>#1</td>
          <td><div className='productskirt'>
            <img className ='skirt' src='https://4.imimg.com/data4/OW/HN/MY-23722908/kskt191py-500x500.jpg'></img>
            <h6>Tops and skirt set for sale</h6>
          </div>
          </td>
          <td>womans</td>
          <td>richman</td>
          <td>
            <span className='old'><del>21$</del></span>
            <span className='new'>21$</span>
            </td>
          <td>30</td>
          <td>4.9</td>
          <td>380</td>
          <td>$38K</td>
          <td>
            <div className='actions d-flex align-items-center'>
              <Button color="secondary"><FaEye/></Button>
              <Button color="success"><FaPencilAlt/></Button>
              <Button color="error"><MdDelete/></Button>

            </div>
          </td>
        </tr>
        <tr>
          <td>#1</td>
          <td><div className='productskirt'>
            <img className ='skirt' src='https://4.imimg.com/data4/OW/HN/MY-23722908/kskt191py-500x500.jpg'></img>
            <h6>Tops and skirt set for sale</h6>
          </div>
          </td>
          <td>womans</td>
          <td>richman</td>
          <td>
            <span className='old'><del>21$</del></span>
            <span className='new'>21$</span>
            </td>
          <td>30</td>
          <td>4.9</td>
          <td>380</td>
          <td>$38K</td>
          <td>
            <div className='actions d-flex align-items-center'>
              <Button color="secondary"><FaEye/></Button>
              <Button color="success"><FaPencilAlt/></Button>
              <Button color="error"><MdDelete/></Button>

            </div>
          </td>
        </tr>
        <tr>
          <td>#1</td>
          <td><div className='productskirt'>
            <img className ='skirt' src='https://4.imimg.com/data4/OW/HN/MY-23722908/kskt191py-500x500.jpg'></img>
            <h6>Tops and skirt set for sale</h6>
          </div>
          </td>
          <td>womans</td>
          <td>richman</td>
          <td>
            <span className='old'><del>21$</del></span>
            <span className='new'>21$</span>
            </td>
          <td>30</td>
          <td>4.9</td>
          <td>380</td>
          <td>$38K</td>
          <td>
            <div className='actions d-flex align-items-center'>
              <Button color="secondary"><FaEye/></Button>
              <Button color="success"><FaPencilAlt/></Button>
              <Button color="error"><MdDelete/></Button>

            </div>
          </td>
        </tr>
        <tr>
          <td>#1</td>
          <td><div className='productskirt'>
            <img className ='skirt' src='https://4.imimg.com/data4/OW/HN/MY-23722908/kskt191py-500x500.jpg'></img>
            <h6>Tops and skirt set for sale</h6>
          </div>
          </td>
          <td>womans</td>
          <td>richman</td>
          <td>
            <span className='old'><del>21$</del></span>
            <span className='new'>21$</span>
            </td>
          <td>30</td>
          <td>4.9</td>
          <td>380</td>
          <td>$38K</td>
          <td>
            <div className='actions d-flex align-items-center'>
              <Button color="secondary"><FaEye/></Button>
              <Button color="success"><FaPencilAlt/></Button>
              <Button color="error"><MdDelete/></Button>

            </div>
          </td>
        </tr>
      </tbody>
      </table>
      <div className='d-flex tableFooter'>
      <Pagination count={10} color="primary" className='pagination' />
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
    );
};

export default Home;