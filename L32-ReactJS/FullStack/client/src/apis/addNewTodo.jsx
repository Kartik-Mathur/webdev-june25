import axios from "../utils/axios";

export async function addNewTodo(task, description) {
  try {
    let { data } = await axios.post("/todo", {
      task,
      description,
    });
    return data.todos;
  } catch (error) {
    alert(error.message);
  }
}
