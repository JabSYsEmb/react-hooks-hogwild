import { useState } from "react";
import ItemDetail from "./ItemDetail";

//   {
//     name: "Babe",
//     specialty: "Being incredibly cute",
//     greased: false,
//     weight: 2.0,
//     "highest medal achieved": "bronze",
//     image:
//       "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
//   },

const Item = ({data}) => {
    const {name, image,...remainingData} = data;
    const [isDisplayed, setDetailDisplayed] = useState(false);
    return(
        <div className="content" onClick={() => setDetailDisplayed(prev => !prev)}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <ItemDetail 
                detailToDisplay={remainingData} 
                isDisplayed={isDisplayed} 
                hideDetail={(hide) => setDetailDisplayed(hide)} 
            />
        </div>
    )
}

export default Item;