import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
/*
const nom='Nouhaila';
let a=7;
let b=8;
const vals = [12,2,6,5,8,15];
//********************************************************ExO1******************************************************** */
/*
const etudiants = [
  {"id":1,"nom":"Danouni","prenom":"Nouhaila","age":21},
  {"id":2,"nom":"Benani","prenom":"Hassan","age":24},
  {"id":3,"nom":"Mansour","prenom":"Salma","age":18}
]

function EtudiantList(){

  return (
    <table>
      <thead>
        <th>Id</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Age</th>
      </thead>
     
      {etudiants.map(
        etudiant=> <tr key={etudiant.id}>
                  <td>{etudiant.id}</td>
                  <td>{etudiant.nom}</td>
                  <td>{etudiant.prenom}</td>
                  <td>{etudiant.age}</td></tr>)}
      
    </table>
    )
}
*/
function Conteur(){
  const [conteur,setConteur] = useState(0)
  //Effet de Bord
  useEffect(()=>{
    setConteur(conteur+1);
  },[])
  
  return ( <>
      <h1>Conteur {conteur}</h1>
      <button onClick={()=>setConteur(conteur+1)}>Increment +</button>
      <button onClick={()=>setConteur(conteur-1)}>Decrement -</button>
      </>);

}


//Varbiable d'etat (state): mettre à jour dynamiquement le composant(regeneré)=> reexecution du return.

//composant: données, affichage et traitement
function Formulaire(){
  const[etudiants,setEtudiant]=useState([
    {"id":1,"nom":"Danouni","prenom":"Nouhaila","age":21},
    {"id":2,"nom":"Benani","prenom":"Hassan","age":24},
    {"id":3,"nom":"Mansour","prenom":"Salma","age":18}
  ])
  const [nom,setNom] = useState("")
  const [prenom,setPrenom] = useState("")
  const [age,setAge] = useState(0)

  

  function handlForm(event){
    event.preventDefault();
    let p = {"id":etudiants.length + 1,"nom":nom,"prenom": prenom,"age":age};

    let etudiantsCopy=etudiants.concat([p]);
    setEtudiant(etudiantsCopy);

  }
  function deleteEtudiant(index){
    const etudiantsCopy=etudiants.concat([])
    etudiantsCopy.splice(index,1);
    setEtudiant(etudiantsCopy);
  }

  return (
<>
<h1>Liste des étudiants</h1>
    <table>
      <thead>
        <th>Id</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Age</th>
        <th>Action</th>

      </thead>
     <tbody>
     {etudiants.map((etudiant,index)=>
                 <tr key={index}>
                  <td>{etudiant.id}</td>
                  <td>{etudiant.nom}</td>
                  <td>{etudiant.prenom}</td>
                  <td>{etudiant.age}</td>
                  <td><button onClick={()=>deleteEtudiant(index)}>Supprimer</button></td>
                  </tr>
                  )}
       </tbody>
    </table>
    <h1>Ajouter un étudiant</h1>
  <div>
  <form onSubmit={(e)=>handlForm(e)}>
    <label htmlFor='nom'>Nom de l'étudiant</label>
    <input type='text' id='nom' placeholder='saisir un nom'  onChange={(event)=>setNom(event.target.value)}></input>
    <label htmlFor='prenom'>Prénom de l'étudiant</label>
    <input type='text' id='prenom' placeholder='saisir un prenom'  onChange={(event)=>setPrenom(event.target.value)} ></input>
    <label htmlFor='age'>Age de l'étudiant</label>
    <input type='number' id='age' placeholder='saisir un age' onChange={(event)=>setAge(event.target.value)}></input>
    <input type='submit' value='Ajouter à la liste'></input>
    <input type='reset' value='Réinitialiser'></input>
    </form>
    </div>
    </>);
}
function Home(){
  //<EtudiantList/>
  return <>

  <Formulaire/>
  <Conteur/>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home/>);

//********************************************Cours********************************************************** */
/*
function Home(props){
  return <>
  <h1>Bonjour {props.person.nom} {props.person.prenom}, {props.person.age} ans</h1>
  </>
}
const p={"nom":"Danouni","prenom":"Nouhaila","age":21}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home person={p}/>);
*/

//const myElem=React.createElement("h1",{},"Bonjour tout le monde");

/*const myElem=<>

                <h1>Bonjour tout le monde</h1>
                <h1>Bonjour {nom}</h1>
                <h1>Max entre {a} et {b} = {(a>b)?a:b}</h1>
                <ul>
                  {vals.map(elem=><li>{elem}</li>)}
                </ul>
                <div>
                <table>
                  <thead>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Age</th>
                  </thead>
                 
                  {etudiants.map(
                    etudiant=> <tr key={etudiant.id}>
                              <td>{etudiant.id}</td>
                              <td>{etudiant.nom}</td>
                              <td>{etudiant.prenom}</td>
                              <td>{etudiant.age}</td></tr>)}
                  
                </table>
                </div>
                <ul>
                  {e.map((elem,index)=><li key={index+1}>{elem}</li>)}
                </ul>
             </>;//avec JSX
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(myElem);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
