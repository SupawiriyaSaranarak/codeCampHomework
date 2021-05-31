function ProductItem(props) {
    return <div>
        <h4>title: {props.title}</h4>
        <h4>description: {props.description}</h4>
        <h4>price: {props.price}</h4>
    </div>
}
export default ProductItem;