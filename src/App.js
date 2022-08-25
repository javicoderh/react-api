
import Card from './card';
import './App.css';
import { useEffect, useState} from "react";

  function App() {

    const [courses, updateCourses] = useState ([])

    const API_URL = " https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories"

  function getCoursesApi () {
    return new Promise ((resolve, reject) => {
      fetch (API_URL)
      .then ((response) => response.json ())
      .then ((data) => {
        resolve(data.communityCategories)
      })
    })
  }

  async function getCourses () {
    const courses = await getCoursesApi ();
    console.log(courses);
    updateCourses (courses);
  }

  useEffect (() => {
    console.log("acceder a una api")
    getCourses();
  },[]); 

  return (
  <div className="App">
    <header class="App-header">
      {
        courses.map ((course) => {
          return <Card 
          name={course.name}
          icon={course.icon}
          background={course.background}
          totalQuizzes={course.totalQuizzes}
          users={course.users}
          key={course.id}
          />
        })
      }
    </header>
  </div>  
  );
    }
export default App 
  
