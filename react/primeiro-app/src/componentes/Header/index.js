import React from 'react';/*
Sempre que formos criar um novo componente, ou seja, 
um elemento que vamos colocar na tela, precisamos importar o componente React da dependência react.
Dessa forma o React vai entender que esse código é um componente que será renderizado na tela. 
Isso é uma mecânica padrão da construção de componentes com React
*/ 
/*Na linha 3 criamos uma função JavaScript com o nome do próprio componente - 
novamente, um comportamento padrão na codificação de componentes React.*/

import './style.css';

function Header() {
  return (
    <header>Trabalhando com componentes</header>
  );
}

export default Header;