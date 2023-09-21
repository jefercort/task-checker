function TodoList({children}){
    return (
            // Esto se utiliza para llamar lo que tiene dentro de TodoList que son los TodoItem
        <ul>
            {children}
        </ul>
    );
}
export {TodoList};