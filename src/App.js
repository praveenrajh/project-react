import "./App.css"

export default function App() {

  const data = [
    {
      title: "Naruto",
      poster: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      comments: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
      rating: "8.4"
    },
    {
      title: "Naruto: Shippuden",
      poster: "https://bingeddata.s3.amazonaws.com/uploads/2020/11/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg",
      comments: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
      rating: "8.7"
    },
    {
      title: "Boruto: Naruto Next Generations",
      poster: "https://m.media-amazon.com/images/M/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_FMjpg_UX1000_.jpg",
      comments: "Son of Naruto Uzumaki, Boruto, follows his father's footsteps along with his friends to become great ninja. Throughout all their adventures, Boruto is determined to make his mark in the ninja world and live outside of his father's shadow.",
      rating: "6.9"
    },
    {
      title: "Death Note",
      poster: "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_FMjpg_UX1000_.jpg",
      comments: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
      rating: "9.0"
    },
    {
      title: "Castlevania",
      poster: "https://thefeaturepresentation.com/wp-content/uploads/2020/03/Ssposter2.jpg",
      comments: "A vampire hunter fights to save a besieged city from an army of otherworldly creatures controlled by Dracula.",
      rating: "8.3"
    },
    {
      title: "One Piece",
      poster: "https://www.themoviedb.org/t/p/w500/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
      comments: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named One Piece",
      rating: "8.8"
    },
    {
      title: "Pokemon",
      poster: "https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
      comments: "Ash Ketchum, his yellow pet Pikachu, and his human friends explore a world of powerful creatures.",
      rating: "7.5"
    },
    {
      title: "Dragon Ball Z",
      poster: "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg",
      comments: "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
      rating: "8.8"
    }
  ]
  return (
    <div className="App">
      <div className="top">
      A N I M E    
      </div>
      <div className="content">
      {
        data.map((data) => (
          <Box title={data.title} poster={data.poster} comments={data.comments} rating={data.rating} />
        ))}
      </div>  
    </div>
  );
}

function Box({ title, poster, comments, rating}) {
  return (
    <div className="data-container">
      <img className="poster-pic" src={poster} alt={title} />
      <h4 className="rate">🌟 {rating} </h4>
      <h2 className="title"> {title} </h2>
      <p className="cmnts"> {comments} </p>
    </div>
  );
}