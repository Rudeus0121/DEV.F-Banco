//Base de datos de las usuarios
/* const cuenta = [
  { nombre: "Felipe", saldo: 150 },
  { nombre: "Maria", saldo: 250 },
  { nombre: "Jorge", saldo: 87 }
]; */

// activar para guardar el local storage si no solo desactivarlo
// localStorage.setItem("dinero1",150)
// localStorage.setItem("dinero2",250)
// localStorage.setItem("dinero3",77)

//Con su permiso profe voy usar, alert solo en los if para cuando se equivoque y ponga un monto de mas o de menos

//Para las reglas de if
let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
let guardado3 = JSON.parse(localStorage.getItem("dinero3"));

//Valores para los botones
let valor_1 = 500;
let valor_2 = 400;
let valor_3 = 300;
let valor_4 = 200;
let valor_5 = 100;
let valor_6 = 50;

//Botones de menos para dinero1

function menos_dinero1_1() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 - valor_1)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_1 + valor_1)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_1 - valor_1)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero1_2() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 - valor_2)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_2 + valor_2)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_2 - valor_2)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero1_3() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 - valor_3)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_3 + valor_3)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_3 - valor_3)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero1_4() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 - valor_4)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_4 + valor_4)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_4 - valor_4)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero1_5() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 - valor_5)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_5 + valor_5)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_5 - valor_5)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero1_6() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 - valor_6)
  );

  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_6 + valor_6)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_6 - valor_6)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}

//Botones de menos para dinero2

function menos_dinero2_7() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 - valor_1)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_1 + valor_1)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_1 - valor_1)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero2_8() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 - valor_2)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_2 + valor_2)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_2 - valor_2)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero2_9() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 - valor_3)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_3 + valor_3)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_3 - valor_3)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero2_10() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 - valor_4)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_4 + valor_4)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_4 - valor_4)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero2_11() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 - valor_5)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_5 + valor_5)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_5 - valor_5)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero2_12() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 - valor_6)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_6 + valor_6)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_6 - valor_6)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}

//Botones de menos para dinero3

function menos_dinero3_13() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 - valor_1)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_1 + valor_1)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_1 - valor_1)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero3_14() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 - valor_2)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_2 + valor_2)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_2 - valor_2)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero3_15() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 - valor_3)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_3 + valor_3)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_3 - valor_3)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero3_16() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 - valor_4)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_4 + valor_4)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_4 - valor_4)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero3_17() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 - valor_5)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_5 + valor_5)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_5 - valor_5)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_dinero3_18() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 - valor_6)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_6 + valor_6)
    );
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_6 - valor_6)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}

//Botones de mas para dinero1

function mas_dinero1_1() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 + valor_1)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_1 + valor_1)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_1 - valor_1)
    );
  }
}
function mas_dinero1_2() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 + valor_2)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_2 + valor_2)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_2 - valor_2)
    );
  }
}
function mas_dinero1_3() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 + valor_3)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_3 + valor_3)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_3 - valor_3)
    );
  }
}
function mas_dinero1_4() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 + valor_4)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_4 + valor_4)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_4 - valor_4)
    );
  }
}
function mas_dinero1_5() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 + valor_5)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_5 + valor_5)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_5 - valor_5)
    );
  }
}
function mas_dinero1_6() {
  let guardado1 = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardado1 + valor_6)
  );
  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 - valor_6 + valor_6)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardado1 + valor_6 - valor_6)
    );
  }
}

//Botones de mas para dinero2

function mas_dinero2_7() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 + valor_1)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_1 + valor_1)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_1 - valor_1)
    );
  }
}
function mas_dinero2_8() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 + valor_2)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_2 + valor_2)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_2 - valor_2)
    );
  }
}
function mas_dinero2_9() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 + valor_3)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_3 + valor_3)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_3 - valor_3)
    );
  }
}
function mas_dinero2_10() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 + valor_4)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_4 + valor_4)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_4 - valor_4)
    );
  }
}
function mas_dinero2_11() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 + valor_5)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_5 + valor_5)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_5 - valor_5)
    );
  }
}
function mas_dinero2_12() {
  let guardado2 = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardado2 + valor_6)
  );
  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 - valor_6 + valor_6)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardado2 + valor_6 - valor_6)
    );
  }
}

//Botones de mas para dinero3

function mas_dinero3_13() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 + valor_1)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_1 + valor_1)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_1 - valor_1)
    );
  }
}
function mas_dinero3_14() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 + valor_2)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_2 + valor_2)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_2 - valor_2)
    );
  }
}
function mas_dinero3_15() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 + valor_3)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_3 + valor_3)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_3 - valor_3)
    );
  }
}
function mas_dinero3_16() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 + valor_4)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_4 + valor_4)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_4 - valor_4)
    );
  }
}
function mas_dinero3_17() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 + valor_5)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_5 + valor_5)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_5 - valor_5)
    );
  }
}
function mas_dinero3_18() {
  let guardado3 = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardado3 + valor_6)
  );
  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 - valor_6 + valor_6)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardado3 + valor_6 - valor_6)
    );
  }
}

//calculadoras para sumar o restar dinero

let sumas = document.getElementById("suma");
let resto = document.getElementById("restos");
let numero_1 = document.getElementById("numero-sumado");
let numero_2 = document.getElementById("numero-restado");
let root_1 = document.getElementById("root_1");
let root_2 = document.getElementById("root_2");

function mas_0() {
  sumas.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  let convertidor1 = parseInt(numero_1.value);
  let guardados = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardados + convertidor1)
  );

  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardados - convertidor1 + convertidor1)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardados + convertidor1 - convertidor1)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function mas_1() {
  sumas.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  let convertidor1 = parseInt(numero_1.value);
  let guardados = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardados + convertidor1)
  );

  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardados - convertidor1 + convertidor1)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardados + convertidor1 - convertidor1)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function mas_2() {
  sumas.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  let convertidor1 = parseInt(numero_1.value);
  let guardados = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardados + convertidor1)
  );

  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardados - convertidor1 + convertidor1)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardados + convertidor1 - convertidor1)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}

function menos_0() {
  resto.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  let convertidor2 = parseInt(numero_2.value);
  let guardados = JSON.parse(localStorage.getItem("dinero1"));
  let guardado = localStorage.setItem(
    "dinero1",
    JSON.stringify(guardados - convertidor2)
  );

  if (JSON.parse(localStorage.getItem("dinero1")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardados - convertidor2 + convertidor2)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero1")) < 10) {
    let guardado = localStorage.setItem(
      "dinero1",
      JSON.stringify(guardados + convertidor2 - convertidor2)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_1() {
  resto.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  let convertidor2 = parseInt(numero_2.value);
  let guardados = JSON.parse(localStorage.getItem("dinero2"));
  let guardado = localStorage.setItem(
    "dinero2",
    JSON.stringify(guardados - convertidor2)
  );

  if (JSON.parse(localStorage.getItem("dinero2")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardados - convertidor2 + convertidor2)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero2")) < 10) {
    let guardado = localStorage.setItem(
      "dinero2",
      JSON.stringify(guardados + convertidor2 - convertidor2)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}
function menos_2() {
  resto.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  let convertidor2 = parseInt(numero_2.value);
  let guardados = JSON.parse(localStorage.getItem("dinero3"));
  let guardado = localStorage.setItem(
    "dinero3",
    JSON.stringify(guardados - convertidor2)
  );

  if (JSON.parse(localStorage.getItem("dinero3")) >= 990) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardados - convertidor2 + convertidor2)
    );
    alert("se acaba de sobrepar el limite de la targueta, agrege menos dinero");
  }
  if (JSON.parse(localStorage.getItem("dinero3")) < 10) {
    let guardado = localStorage.setItem(
      "dinero3",
      JSON.stringify(guardados + convertidor2 - convertidor2)
    );
    alert("se acaba de disminur el limite de la targueta, agrege mas dinero");
  }
}

//Entrada de los usuarios a sus cuentas

let rut = null;
let contraseña = null;
let root_ingreso1 = null;
let root_ingreso2 = null;

function datos() {
  rut = document.getElementById("rut").value;
  contraseña = document.getElementById("contraseña").value;
  root_ingreso1 = document.getElementById("root_ingreso1");
  root_ingreso2 = document.getElementById("root_ingreso2");

  if (rut === "24761755-2" && contraseña === "3333") {
    window.location = "/Banco DEV.F/felipe.html";
  } else if (rut === "24893832-1" && contraseña === "6666") {
    window.location = "/Banco DEV.F/maria.html";
  } else if (rut === "23564914-0" && contraseña === "1234") {
    window.location = "/Banco DEV.F/jorge.html";
  } else if (
    rut !== "24761755-2" &&
    rut !== "24893832-1" &&
    rut !== "21564914-0"
  ) {
    root_ingreso1.innerHTML = `<p class="root-0" > Este ${rut} rut no existe, ingrese otro porfavor </p>`;
  } else if (
    contraseña != "3333" &&
    contraseña != "6666" &&
    contraseña != "1234"
  ) {
    root_ingreso2.innerHTML = `<p class="root-0" > Esta ${contraseña} contraseña no esta asociada al rut, intentelo de nuevo porfavor </p>`;
  }
}

//Boton de salida a la pagina de cuentas

function salir() {
  window.location = "/Banco DEV.F/index.html";
}

//Boton de retroceso entremedio de la cuentas
function salir_1() {
  window.location = "/Banco DEV.F/felipe.html";
}
function salir_2() {
  window.location = "/Banco DEV.F/maria.html";
}
function salir_3() {
  window.location = "/Banco DEV.F/jorge.html";
}
function salir_4() {
  window.location = "/Banco DEV.F/felipe.html";
}
function salir_5() {
  window.location = "/Banco DEV.F/maria.html";
}
function salir_6() {
  window.location = "/Banco DEV.F/jorge.html";
}
function salir_7() {
  window.location = "/Banco DEV.F/felipe.html";
}
function salir_8() {
  window.location = "/Banco DEV.F/maria.html";
}
function salir_9() {
  window.location = "/Banco DEV.F/jorge.html";
}
function salir_10() {
  window.location = "/Banco DEV.F/felipe.html";
}
function salir_11() {
  window.location = "/Banco DEV.F/maria.html";
}
function salir_12() {
  window.location = "/Banco DEV.F/jorge.html";
}

//Entrada de los botones a ver su monto nuevo

function ver_datos1() {
  window.location = "/Banco DEV.F/datos1.html";
}
function ver_datos2() {
  window.location = "/Banco DEV.F/datos2.html";
}
function ver_datos3() {
  window.location = "/Banco DEV.F/datos3.html";
}

//Llamado de los id de los roots

let root_datos1 = document.getElementById("root-datos1");
let root_datos2 = document.getElementById("root-datos2");
let root_datos3 = document.getElementById("root-datos3");

//Para saber la ubicacionen la que estas

if (window.location.href == `http://127.0.0.1:5501/Banco%20DEV.F/datos1.html`) {
  root_datos1.innerHTML = `<p class="datos-del-usuario">El total de tu dinero es: ${guardado1}$</p>`;
} else if (
  window.location.href == `http://127.0.0.1:5501/Banco%20DEV.F/datos2.html`
) {
  root_datos2.innerHTML = `<p class="datos-del-usuario">El total de tu dinero es: ${guardado2}$</p>`;
} else if (
  window.location.href == `http://127.0.0.1:5501/Banco%20DEV.F/datos3.html`
) {
  root_datos3.innerHTML = `<p class="datos-del-usuario">El total de tu dinero es: ${guardado3}$</p>`;
}
