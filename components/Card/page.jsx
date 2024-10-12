"use client"
import "./style.scss"
import Star from "../../public/photos/Star.svg"
import StarFill from "../../public/photos/Star_fill.svg"

export default function Card({ available, image, name, popular, price, rating, votes, key }){
    return(
        <div className="product-container" key={key}>
            <div className="image" style={{backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"}}
            >

            </div>
            <div className="content-info">
                <h1 className="name">{name}</h1>
                <h2 className="price">{price}</h2>
            </div>
            
            <div className="content-opinion">
                {rating <= 0 ?
                <>
                    <Star className="icon"/>
                    <h4 className="votes">No ratings</h4>
                </>
                :
                <>
                    <StarFill className="icon"/>
                    <h3 className="rating">{rating}</h3>
                    <h4 className="votes">{`(${votes} votes)`}</h4>
                </>
                }
                
                
            </div>
            
        </div>
    )
}