import React, {useState} from 'react';
import api from '../../services/api.js';

export default function Login({history}) {    
    {/* O react trabalho com estados, então fica observando em tempo real a mudança de estado de um obejto */ }
    const [email, setEmail] = useState('');

    {/*Captura o ID do usuário e armazena no localstorage*/}
    async function handleSubimit(event) {
        event.preventDefault();

        const response = await api.post('/session', { email });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }
    return (

    <>
        <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

        <form onSubmit={handleSubimit}> {/* chama a função ao submeter o formulário */}
            <label htmlFor="email">E-MAIL *</label>
            <input
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"

                value={email}
                onChange={event => setEmail(event.target.value)}

            />
            <button className="btn" type="submit">Entrar</button>
        </form>
    </>
      );
}