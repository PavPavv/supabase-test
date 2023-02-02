import React, { useState } from 'react';

import styles from './styles.module.css';

const Test = (): JSX.Element => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('Select a sex');
  const [color, setColor] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent): Promise<any> => {
    e.preventDefault();

    if (!name || !sex || color) {
      setFormError('All fields are required!');
    }
  };

  return (
    <div className='container p-1'>
      <h2>Add new shark family member</h2>
      <section className='content'>
        {formError && <p className='error'>{formError}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Name</label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Sex</label>
            <select id='sex' onChange={(e) => setSex(e.target.value)}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Color</label>
            <input
              id='color'
              type='text'
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <button type='submit'>Create!</button>
        </form>
      </section>
    </div>
  );
};

export default Test;
