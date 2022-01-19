const highScoreslist = document.getElementById("highScoreslist");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//je choisi ma list des 5meilleurs scores ou tableau vide.;

highScoresList.innerHTML = highScores
.map(score=>{
    return`<li class="high-score">${score.name} / ${score.score}</li>`;
})
.join("")
;
//cela me permet de joindre le score de l'utilisateur et son score en une ligne.;
//Map me renvoi l'objet et la valeur.;