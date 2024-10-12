import "./style.scss"
import Icon from "../../public/photos/vector.svg"
import Card from "../Card/page"

export default function Menu({ data }){
    return(
        <section className="menu-container">
            <div className="header">
                <Icon className="icon"/>
                <h1 className="title">Our Collection</h1>
                <p className="description">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div className="navegation-container">
                    <span style={{backgroundColor: "#6E757D"}}>All Products</span>
                    <span>Available Now</span>
                </div>
            </div>

            <div className="cards-container">
                {data.map((info, i) => (
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
                ))}
                
            </div>
            
        </section>
    )
}