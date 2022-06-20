import React from "react";
import '../App.css';
import Banner from '../Banner.png';
import Product from "../components/Product";

function Recommended(){
    return(
    <div className="home">
        <img className="home__image" alt="home" src={Banner}/>
        <div>
            <h1>Discover Our Selection of Second Hand Children's Books!</h1>
        </div>
        <div className="home__row">
            <Product
              id="1"
              title="harry potter and the philosopher's stone"
              price={5.95}
              rating={5}
              image="https://pictures.abebooks.com/isbn/9780747532699-es.jpg"
            />
              {/* <Product
              id="2"
              title="harry potter and the chamber of secrets"
              price={6.95}
              rating={4}
              image="https://i.ebayimg.com/images/g/-QkAAOSw1DlgjpGq/s-l500.jpg"
            /> */}
              {/* <Product
              id="3"
              title="harry potter and prisoner of azkaban"
              price={4.95}
              rating={5}
              image="https://pictures.abebooks.com/isbn/9780747542155-es.jpg"
            />
            </div>
            <div className="home__row">
              <Product
              id="4"
              title="matilda"
              price={2.95}
              rating={5}
              image="https://kbimages1-a.akamaihd.net/3c028f3e-c91b-4b60-8e3a-0fe7b56365b8/1200/1200/False/matilda-2.jpg"
            />
              <Product
              id="5"
              title="charlie and the chocolate factory"
              price={1.95}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/91e3-T2IrdL.jpg"
            />
              <Product
              id="6"
              title="james and the giant peach"
              price={3.95}
              rating={5}
              image="https://kbimages1-a.akamaihd.net/2666df72-0af0-4a04-915d-58809409fca8/1200/1200/False/james-and-the-giant-peach-1.jpg"
            /> */}

        </div>
    </div>
    )
}



export default Recommended;