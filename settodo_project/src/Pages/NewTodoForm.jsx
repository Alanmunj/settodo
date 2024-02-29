import { useState } from "react"


export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")
    const [mustTodo, setMustTodo] = useState(false);

    function handleSubmit(e) {    //function called with user submit the form
        e.preventDefault();
        console.log("Before onSubmit:", { newItem, mustTodo });
        if (newItem === "") {
            console.log("New item is empty. Exiting handleSubmit.");
            return;
        }
        onSubmit(newItem, mustTodo);
        console.log("After onSubmit:", { newItem, mustTodo });
        setNewItem("");
        if (mustTodo) {
            setMustTodo(false);
        }
        console.log("Current todos:", todos);
        console.log("Current todosB:", todosB);
    }
    return (
        <form onSubmit = {handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New item</label>
                <input 
                    value = {newItem}
                    onChange={e => setNewItem(e.target.value)}
                    //  triggered whenever the user types in input 
                    type = "text" 
                    id = "item" 
                />
            </div>
            <div>
                <label htmlFor="item">
                    <input 
                    type="checkbox" 
                    checked={mustTodo}
                    onChange={(e) => setMustTodo(e.target.checked)}
                    />
                    Must to do
                </label>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}