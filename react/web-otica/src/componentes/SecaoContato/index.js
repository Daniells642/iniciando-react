import React from 'react';
/*import './estilo.css';*/

export default function SecaoContato() {
  return (
    <section>
       <div id="contato">
            <h2>Fale conosco</h2>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
            </p>
            <div>
                <div>
                    <h3>Contato</h3>
                    <img src='../assets/local.png' alt=""/><p>Nova Iguaçu, RJ</p>
                    <img src='../assets/telefone.png' alt=""/><p>(21) 9999-9999</p>
                    <img src='../assets/email.png' alt=""/><p>contato@oticavida.com</p>
                    
                   
                </div>
                    
                <div>
                    <h3>Nossas Redes sociais</h3>
                    <img src='../assets/fb.png' alt=""/><p>/OticaVida</p>
                    <img src='../assets/ig.png' alt=""/><p>@oticavidarj</p>
                    <img src='../assets/tt.png' alt=""/><p>@oticavidarj</p>
                    
                </div> 

            </div>
        </div>
    </section>
  );
}