import "./ItemListContainer.css"

function ItemListContainer({title, author, price}) {
    return (
        <>
            <td>{title}</td>
            <td>{author}</td>
            <td>{price}</td>
        </>
    );
}

export default ItemListContainer;


