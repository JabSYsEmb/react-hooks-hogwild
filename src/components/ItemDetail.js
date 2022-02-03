
//   {
//     name: "Babe",
//     specialty: "Being incredibly cute",
//     greased: false,
//     weight: 2.0,
//     "highest medal achieved": "bronze",
//     image:
//       "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
//   },

const ItemDetail = ({detailToDisplay,isDisplayed,hideDetail}) => {
    return(
        <div className={`item-detail ${isDisplayed}`} onClick={(e) => e.stopPropagation()}>
            {
                Object.entries(detailToDisplay).map(detail => detail && <p key={detail}><strong>{detail[0]}</strong>{`:  ${detail[1]}`}</p>)
            }            
            <button onClick={() => hideDetail(false)}>close</button>
        </div>
    )
}

export default ItemDetail;