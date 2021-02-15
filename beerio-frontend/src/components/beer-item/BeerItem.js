import React, {useState, useEffect} from 'react';
import './BeerItem.css';
import { beerService } from '../../lib/beer-service';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';
import { Redirect, useHistory } from 'react-router-dom';
import Heart from '../../components/heart/Heart';

const BeerItem = ({id}) => {
  const [beerData, setBeerData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {labels, name, style, abv, isOrganic} = beerData;
  const newStyle = style && style.category.name;
  const newIcon = labels && labels.icon;
  const newIsOrganic = isOrganic === 'Y' ? "Yes" : "No";
  const history = useHistory();

  useEffect(() => {
    let ignore = false;

    const getBeer = () => beerService.getBeer(id)
    .then(data => {
      if (!ignore) {
        setBeerData(data);
        setIsLoading(false);  
      }
    })
    .catch(error => {
      console.error(error.response);
      if (error.response.status === 404 || error.response.status === 500) {
        setRedirect(true);
        setIsLoading(false);
      }
    });
    getBeer();

    return () => {ignore = true}
  }, [id]);

  const goBack = () => {
    history.goBack();
  }

  return (  
    isLoading ? <LoadingScreen /> : 
      redirect ? <Redirect to='/notfound'/> :
        <div className="section">
          <div className="beer-container">
            <div className="back-heart">
              <div 
                className="go-back" 
                onClick={goBack}>
                <span role="img" aria-label="left-angle-bracket">〈</span>
              </div>
              <Heart
                id={id}
                name={name}
                isOrganic={newIsOrganic}
                icon={newIcon}
                style={newStyle}
              />
            </div>

            {labels && <div className="label-img">
              <div>
                <img className="big-label-img" src={labels.large} alt="No pic" />
              </div>
            </div>}

            <h1>{name}</h1>
            {style && 
              <>
                <h5>{style.name}</h5>
                <h6>{newStyle}</h6>
                <p>{style.year}</p>
                <p>{style.description}</p>
              </>
            }
            <div className="beer-info">
              <div><strong>Abv: </strong>{abv}%</div>
              <div><strong>Ibu: </strong>{style && style.ibuMax}</div>
              <div><strong>Organic Beer:</strong> {newIsOrganic}</div>
            </div>
          </div>
        </div>
  );
}

export default BeerItem;