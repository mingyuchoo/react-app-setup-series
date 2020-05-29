import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * USE_FETCH
 */
export const useFetch = (): Array<never> => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /** METHOD 1 */
    // function getData(): void {
    //   fetch(url)
    //     .then(response => response.json())
    //     .then(data => setData(data));
    // }

    /** METHOD 2 */
    // async function getData(): Promise<void> {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   setData(data);
    // }

    /** METHOD 3 */
    // const url = 'http://localhost:3001/links/';
    // const getData = async (): Promise<void> => {
    //   const response = await axios.get(url);
    //   setData(response.data);
    // };

    /** METHOD 4 */
    const url = 'http://localhost:3001/links/';
    const getData = (): void => {
      axios.get(url).then(response => {
        setData(response.data);
      });
    };

    getData();
  }, []);

  return data;
};
