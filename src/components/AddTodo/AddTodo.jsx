import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
//import { addTodo } from "../../Actions/todoActions";
function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Add Your Next Todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo({ todoText: inputText });
          setInputText("");
        }}
      >
        Add{" "}
      </button>
    </div>
  );
}

export default AddTodo;
