import React, { useState, useEffect } from 'react';

import supabase from '../../config/supabaseClient';

import styles from './styles.module.css';

const Main = (): JSX.Element => {
  const [fetchError, setFetchError] = useState('');
  const [sharks, setSharks] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchSharks = async () => {
      const { data, error } = await supabase
        // table name
        .from('sharks')
        // select anf get all the table records
        .select();

      if (error) {
        console.log('supa error', error);
        setFetchError('Sharks fetch error');
      }
      if (data) {
        console.log('data', data);
        setSharks(data);
        setFetchError('');
      }
    };
    fetchSharks();
  }, []);

  return (
    <div className='container p-1'>
      <section>
        <h2>Main</h2>
      </section>
      <section className='content'>
        {fetchError && <p className='error'>Fetch error</p>}
        {sharks && (
          <div className={styles.sharks}>
            {sharks.map((shark) => (
              <div
                key={shark.id}
                className={styles.shark}
                style={{ borderColor: `${shark.color}` }}
              >
                <div>
                  <p>{shark.name}</p>
                  <p>{shark.sex}</p>
                  <p>{shark.color}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Main;
