import AddTodoContext from './addTodoContext';
import {useState} from "react";

const AddTodoState = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const updateIsAdded = () => {
        setIsAdded(prevState => !prevState);
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