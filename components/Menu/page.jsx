import "./style.scss"
import Icon from "../../public/photos/vector.svg"
import Card from "../Card/page"
import { useState } from "react"

export default function Menu({ data }){
    const [change, setChange] = useState(["","#6E757D"]);
    const [firstReverse, setFirstReverse] = useState(true);
    const [secondReverse,setSecondReverse] = useState(false);

    function handleClick(){
        if(firstReverse == false){
            setChange(change.reverse());
            setFirstReverse(true);
            setSecondReverse(false);
        }
        
    }

    function secondHandleClick(){
        if(secondReverse == false){
            setChange(change.reverse());
            setSecondReverse(true);
            setFirstReverse(false);
        }
    }

    return(
        <section className="menu-container">
            <div className="header">
                <Icon className="icon"/>
                <h1 className="title">Our Collection</h1>
                <p className="description">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div className="navegation-container">
                    <span style={{backgroundColor: change[1]}} onClick={handleClick}>All Products</span>
                    <span style={{backgroundColor: change[0]}} onClick={secondHandleClick}>Available Now</span>
                </div>
            </div>

            <div className="cards-container">
                {data.map((info, i) => (
                    <>
                    {(firstReverse || info.available) &&(
                        <Card
                        key= {i}
                        available= {info.available}
                        image= {info.image}
                        name= {info.name}
                        popular= {info.popular}
                        price= {info.price}
                        rating= {info.rating}
                        votes={info.votes}
                        />
                    )}
                    
                    </>
                ))}
                
            </div>
            
        </section>
    )
}