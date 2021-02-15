import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import { beerService } from '../../lib/beer-service';

const Breweries = () => {
  // const [breweriesData, setBreweriesData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // console.log(breweriesData);
  // console.log(isLoading);

  useEffect(() => {
    // let ignore = false;

    const getBreweries = async () => await beerService.getBreweries()
    .then(data => {
      console.log(data)
    })
    // .then(data => {if (!ignore) {
      // setBreweriesData(data);
      // setIsLoading(false);
    // }})
    .catch(error => console.error('Error ingen data'));
    getBreweries();

    // return () => {ignore = true}
  }, []);

  return (
    <div>
      <p>Breweries</p>
      {/* <Link to={`/breweries/:${brewery.id}`} /> */}
    </div>
  )
}

export default Breweries;