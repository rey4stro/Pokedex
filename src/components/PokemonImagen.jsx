import styles from "./css/PokemonImagen.module.css";

export function PokemonImagen({ pokemon }) {

  let tam = "";
  let tipo = "";
  let id = "";
  let pokeImg = "";
  let pokeRutaImg = "";

  if (pokemon !== "") {
    tipo = pokemon.types[0].type.name;
    tam = "" + pokemon.id;
    id = pokemon.id;
    if (tam.length === 1) {
      pokeImg = "00" + id;
    } else if (tam.length === 2) {
      pokeImg = "0" + id;
    } else {
      pokeImg = "" + id;
    }
  
    pokeRutaImg =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
      pokeImg +
      ".png";
  }else{
    tipo = "missingno";
    pokeRutaImg ="https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png"
  }



  return (
    <div className={styles[tipo]}>
      <img src={pokeRutaImg} alt="" className={styles["imagen"]} />
    </div>
  );
}
