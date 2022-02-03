import Item from "./Item";

const ItemGrid = ({items=[]}) => {
    return(
        <div className="content-grid-div">
            {items.map(item => <Item key={item.image} data={item}/>)}
        </div>
    )
}

export default ItemGrid;