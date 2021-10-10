import { useFormik } from 'formik';
import './App.css';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import {db} from './firebase_config.js';
import { collection, addDoc, getDocs  } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
const submitFunction = async (values)=>{
  try {
    const docRef = await addDoc(collection(db, "Todos"), values);
    alert("Todo item is added please reload the page to see todo list");
  } catch (e) { 
    alert("Error adding document: ", e);
  }
}
const validationSchema = yup.object({
  todoItem:yup
  .string('this field is for String only')
  .required('this field is required')
})
function App() {
  
  const [Todo, setTodo] = useState([]);
  useEffect(() => {
    getTodos()
    return () => {
      console.log("cleanup")
    }
  }, [])

  async function getTodos(){
    const querySnapshot = await getDocs(collection(db, "Todos"));
    let todo = [];
    querySnapshot.forEach((doc)=>{
      console.log(doc.data().todoItem);
      todo.push(doc.data());
    })
    setTodo(todo);
    console.log(Todo);
  }
   
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues :{
      todoItem : ''
    },

    onSubmit: submitFunction
  });
  return (
    <div className="App">
      <h1> Todo Application </h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField 
        variant="standard" 
        label="Add Todo" 
        type="text" 
        name="todoItem"
        value={formik.values.todoItem}
        onChange={formik.handleChange}
        error={formik.touched.todoItem && Boolean(formik.errors.todoItem)}
        helperText={formik.touched.todoItem && formik.errors.todoItem}/>
        {/* <Button variant="contained" color="success" type="submit">Add</Button> */}
      </form>

      <div>
        {
          Todo.map((eachTodo, i)=>{
            return(
              <ul key={i}>
                <li> {eachTodo.todoItem} </li>
                <hr/>
              </ul>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
