import AddTodoContext from './addTodoContext';
import {useState} from "react";

const AddTodoState = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const updateIsAdded = () => {
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 100);
    }

    return (
        <AddTodoContext.Provider value={{
            isAdded,
            updateIsAdded
        }}>
            {props.children}
        </AddTodoContext.Provider>
    )
}

export default AddTodoState;