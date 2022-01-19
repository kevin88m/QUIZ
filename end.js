const username = document.getElementById('username');
const saveScoreBtn= document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
// je prend l'id de mon score H1.;
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
//recent score et mettre les scores les plus élevés.;id=H1 finalscore


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//le json . parse permet de retourner un array et le ||[] pemret de retourner un array vide.
const MAX_HIGH_SCORES = 5;
//je fais une variable pour les 5 meilleurs scores.;





//j'effectue le json pour convertir en array,car le localStorage entre que les chaînes de caractères,Json Parse.;
username.addEventListener('keyup',()=>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
    //je fais un évenement qui enregistre un nom avant de sauvegarder .,je recupère l'id savescorebtn si j'ai un nom alors j'active le bouton enregistrer;
})
saveHighScore = (e)=>{
console.log('clicked the sauvegarde button!');
e.preventDefault();

const score ={
    score: mostRecentScore,
    name: username.value
    //j'enregistre le nom et le score de l'utilisateur.;
};
highScores.push(score);
//permet d'afficher la liste entière de mes scores.ajout élément nom utilisateur;

highScores.sort ((a,b) =>  b.score - a.score)
//fonction prototyp array qui retourne le tableau,dont le score est le plus grand;

highScores.splice(5);
//le nouveau tableau comprendra que 5 valeurs.;
//je mets à jour le local storage des mes meilleurs scores.;

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location("index.html");
};