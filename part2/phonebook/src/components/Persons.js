import Person from "./Person";

const Persons = ({ persons, filter }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((pers) => {
          let res = "";
          if (pers.name.includes(filter)) {
            res = <Person key={pers.name} person={pers} />;
          }
          return res;
        })}
      </ul>
    </div>
  );
};

export default Persons;
