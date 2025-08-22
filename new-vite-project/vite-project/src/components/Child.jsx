import './Child.css'
import { List } from './List.jsx';
import React from 'react';
import Expression from './Expression.jsx';


const Child = () => {
  return (
      <React.Fragment>
        <div className='basecolor'>
          <h1 className="title">React study</h1>
          <div className='component'>
            <h3>Hello React</h3>
            <List />
          </div>
          <Expression />
        </div>
      </React.Fragment>

    );
  };

export default Child;
