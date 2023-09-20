function TodoList(props){
    return (
            // Esto se utiliza para llamar lo que tiene dentro de TodoList que son los TodoItem
        <ul>
            {props.children}
        </ul>
    );
}
export {TodoList};