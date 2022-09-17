import React from 'react';
import SecaoCapa from '../SecaoCapa';

import SecaoProdutos from '../SecaoProdutos';
import SecaoSobre from '../SecaoSobre';

export default function Conteudo() {
  return (
    <main>
       <div>
          <SecaoCapa/>
          <SecaoProdutos/>
          <SecaoSobre/>
          
       </div>
    </main>
  );
}
