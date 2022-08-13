
import "./App.css";
import Users from './components/users/Users'



const App = () => {
 return(
  <div>
    <h1>Users List</h1>
<Users/>
  </div>
  
 )
}

export default App;

/*
 const aniosNoActuales = form.filter((el) => el.anio != anioActual)
    console.log(aniosNoActuales)
    console.log(fortalezasActual)
    setForm([]);
    console.log(form)

    setForm([
      ...aniosNoActuales,
      {
        anio: [anioActual],
        fortalezas: [...fortalezasActual],
        oportunidades: [...oportunidadesActual],
        debilidades: [...debilidadesActual],
        amenazas: [...amenazasActual],
      }
    ]);

    alert(`El año ${anioActual} se ha guardado`);
    console.log(form)
    takeFodaToContext()

  }
  */
