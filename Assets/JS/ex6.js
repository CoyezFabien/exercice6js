function resultat() 
// toujours mettre les parenthèse collés avec le nom de la function
{
var pointure = document.getElementById('size').value;
var naissance = document.getElementById('year').value;
var formule = (pointure * 2 + 5) * 50 - naissance + 1769;
// la on mit entre parenthèse notre ensemble de calcul (la on devait multiplier la pointure *2 rajouter +5 au resultat) on devait multiplier ce tout par 50 soustraire la date de naissance et rajouter 1769.

alert(formule);
}
