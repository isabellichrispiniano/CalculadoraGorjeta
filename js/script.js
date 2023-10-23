teste = () => {
    let conta = document.querySelector(".number").value
    const qualidade = document.querySelector("#qual").value
}

switch (conta){
    case "ex": conta = qualidade*0,1
    break;
}
 
document.querySelector(".result").innerHTML = `${qualidade}`