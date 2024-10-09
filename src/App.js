import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "reactjs",
  },
  {
    id: 2,
    name: "javascript",
  },
  {
    id: 3,
    name: "java",
  },
  {
    id: 4,
    name: "python",
  },
];

function App() {

  const [checked, setChecked] = useState()
 

  const handleSubmit = () => {
    console.log({id: checked});
    
  }
  return (
    <div style={{padding: 32}}>
      {courses.map(course => (
        <div key = {course.id}>
          <input
            type='radio'
            checked = {checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;

