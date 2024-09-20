import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./App.module.css";

// Iconos
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { GiPokecog } from "react-icons/gi";
import { PokemonImagen } from "./components/PokemonImagen";
import { NombrePokemon } from "./components/NombrePokemon";
import { PesoPokemon } from "./components/PesoPokemon";
import { AltoPokemon } from "./components/AltoPokemon";
import { PokemonTipos } from "./components/PokemonTipos";
import { PokemonAtributos } from "./components/PokemonAtributos";

let pokeId = 1;

function App() {
  useEffect(() => {
    pokeapi(1);
  }, []);

  const pokeapi = async (p) => {
    try {
      const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`);
      console.log(poke.status);
      if (poke.status === 200) {
        const pokes = await poke.json();
        setpokemon(pokes);
        pokeId = pokes.id;
      } else {
        setpokemon("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [searchpoke, setsearchpoke] = useState("");
  const [pokemon, setpokemon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    pokeapi(searchpoke);
  }

  function next(event) {
    event.preventDefault();
    if (pokeId < 1500) {
      pokeId += 1;
    }
    pokeapi(pokeId);
  }
  function back(event) {
    event.preventDefault();
    if (pokeId > 1) {
      pokeId -= 1;
      pokeapi(pokeId);
    }
  }

  return (
    <div className="app">
      <div className={styles.contenedor}>
        <div className={styles.barraSuperior}>
          <form action="" onSubmit={back} className={styles.formBotones}>
            <button type="submit" className={styles.botonBack}>
              <AiOutlineCaretLeft></AiOutlineCaretLeft>
            </button>
          </form>

          <form onSubmit={handleSubmit} className={styles.formBusqueda}>
            <input
              type="text"
              className={styles.buscador}
              onChange={(e) => setsearchpoke(e.target.value.toLowerCase())}
              value={searchpoke}
            ></input>
            <button type="submit">
              <GiPokecog />
            </button>
          </form>

          <form action="" onSubmit={next} className={styles.formBotones}>
            <button type="submit" className={styles.botonNext}>
              <AiOutlineCaretRight></AiOutlineCaretRight>
            </button>
          </form>
        </div>
        <div className={styles["contenedorPokemon"]}>
          <PokemonImagen pokemon={pokemon} />
          <NombrePokemon pokemon={pokemon} />
          <div className={styles.pesoYalto}>
            <PesoPokemon pokemon={pokemon} />
            <AltoPokemon pokemon={pokemon} />
          </div>
          <PokemonTipos pokemon={pokemon} />
          <PokemonAtributos pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}

export default App;
