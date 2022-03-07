import "./App.css";
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="Contador" color="#99A799">
                <Contador numeroInicial={100} />
            </Card>
            <Card titulo="Componente Controlado" color="#B983FF">
                <Input />
            </Card>
            <Card titulo="Comunicacao Indireta" color="#907FA4">
                <IndiretaPai />
            </Card>
            <Card titulo="Comunicacao Direta" color="#3A6351">
                <DiretaPai />
            </Card>
            <Card titulo="Renderizacao Condicional" color="#D45D79">
                <ParOuImpar  numero={4}/>
                <UsuarioInfo usuario={{nome: "Arthur"}}/>
                <UsuarioInfo usuario={{}}/>
            </Card>
            <Card titulo="Desafio Repeticao" color="#9145B6">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="Repeticao" color="#F999B7">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Componente Com Filhos" color="#FF7272">
                <Familia sobrenome="Maciel">
                    <FamiliaMembro nome="Arthur"/>
                    <FamiliaMembro nome="Jefferson" />
                    <FamiliaMembro nome="Daniel" />
                </Familia>
            </Card>
            <Card titulo="Desafio Aleatorio" color="#8B9A46">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="Fragmento" color="#A267AC">
                <Fragmento />
            </Card>
            <Card titulo="Com Parametro" color="#FFAB76">
                <ComParametro
                    titulo="Situacao do aluno"
                    aluno="Arthur Maciel"
                    nota={9.4} />
            </Card>
            <Card titulo="Primeiro Componente" color="#4FBDBA">
                <Primeiro />
            </Card>
        </div>
    </div>
//function simplificada.