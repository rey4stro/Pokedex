import { useEffect } from "react";
import styles from "./css/PokemonAtributos.module.css";
import { PokemonStats } from "./PokemonStats";

export function PokemonAtributos({ pokemon }) {
  let stats;


  if (pokemon !== "") {
    stats = pokemon.stats;
  } else {
    stats = [
      {
        base_stat: 250,
        effort: 1,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 250,
        effort: 0,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 250,
        effort: 0,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 250,
        effort: 0,
        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 250,
        effort: 0,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 250,
        effort: 0,
        stat: {
          name: "speed",
        },
      },
    ];
  }

  useEffect(() => {});
  return (
    <div className={styles.contenedor}>
        <PokemonStats name={stats[0].stat.name} valor={stats[0].base_stat} />
        <PokemonStats name={stats[1].stat.name} valor={stats[1].base_stat} />
        <PokemonStats name={stats[2].stat.name} valor={stats[2].base_stat} />
        <PokemonStats name={stats[3].stat.name} valor={stats[3].base_stat} />
        <PokemonStats name={stats[4].stat.name} valor={stats[4].base_stat} />
        <PokemonStats name={stats[5].stat.name} valor={stats[5].base_stat} />

    </div>

  );
}
