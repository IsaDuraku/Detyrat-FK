function ModifyDom() {
  var createTitle = document.createElement("h1");
  var nodeText = document.createTextNode("Ky eshte nje titukk");
  createTitle.appendChild(nodeText);
  document.getElementsByTagName("body")[0].appendChild(createTitle);

  var titulli = document.getElementsByTagName("h1")[0];

  titulli.classList.add("titulli");
}

function myFunction() {
  document.getElementById("forma").innerHTML = "forma";
}
/*O prof sjam ka muj me gjet ngoogle qeto me bo, po mi qet do funksione tjera, ose ose sjam ka di sakt me lyp*/
