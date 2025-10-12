import axios from "../utils/axios";

export async function getTodos() {
  try {
    let { data } = await axios.get("/todos");
    return data.todos;
  } catch (error) {
    alert(error.message);
  }
}
