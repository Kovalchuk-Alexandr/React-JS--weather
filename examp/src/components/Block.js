function Block(props) {
    console.log(props.items.length)
    if (props.items.length === 0)
        return (<h3>There are no elements</h3>)
    else
        return (
            // Перебираем массив
            <ul>
                {props.items.map(el => (
                    // когда создаем перебор массива, для главного эл-та нужно прописывавть 'key'
                    <li key={el.id}>{el.id} - {el.title}<br />{el.desc}</li>
                ))}
            </ul>
        )
}

export default Block;