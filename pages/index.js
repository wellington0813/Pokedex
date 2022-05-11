import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../src/components/header'
import Link from 'next/link'

export async function getServerSideProps(){
  const getPokemon = (numero) =>{
    return fetch (`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(response => response.json()) 
    .then(data => data)
  }

  let arraypokemons = []
  for (let i = 1; i <= 20; i ++){
    let data = await getPokemon(i)
    arraypokemons.push(data)
  }

  let ListaPokemons = arraypokemons.map(pokemon =>{

    return({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types
    })
  })

  return{
    props: {
      ListaPokemons
    }
  }
 
}

export default function Home({ListaPokemons}) {
  console.log('ListaPokemons', ListaPokemons)
  return (
    <>
      <ul className={styles.col}>
        {ListaPokemons.map((pokemon, index) =>{
            return(
              <li>
                <Link href=''>
                  <a>
                    <div className={styles.card}>
                      <div className={styles.nometipos}>
                        <h3>{pokemon.name}</h3>
                        <div className={styles.tipos}>
                        {pokemon.types.map((tipos, index) => {
                            return (
                              <div key={index} className={styles.tipo}>
                                {tipos.type.name}
                              </div>
                            )
                          })}
                        </div>
                        <Image src={pokemon.image} height='100' width={100} className={styles.image}/>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    {/* <div className={styles.container}>
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.main}>
        
      </main>

      
    </div> */}
    </>
  )
}

