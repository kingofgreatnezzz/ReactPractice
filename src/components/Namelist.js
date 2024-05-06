import React from "react";
import Person from "./Person";

function Namelist() {
  //   const names = ["ada", "mary", "jane", "okere", "ben"];
  const persons = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      skills: "JavaScript",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      skills: "React",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 28,
      skills: "Python",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 22,
      skills: "Java",
    },
    {
      id: 5,
      name: "Alex Wilson",
      age: 35,
      skills: "SQL Server",
    },
  ];

  console.log(persons);

  //   const nameList = names.map((name) => <h1>{name}</h1>);
  //   return (
  //     <div>
  //     {
  //         names.map(name => <h2>{name}</h2>)
  //     }
  //     </div>
  //   )

  const personsList = persons.map((person) => <Person person={person} />);

  
  //   return <>{nameList}</>
  return <>{personsList}</>;
}

export default Namelist;
