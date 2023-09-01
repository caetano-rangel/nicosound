import './styles/components/button.sass'
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bahiaImg from './img/bahia.png'
import banhoImg from './img/banho.png'
import barbaImg from './img/barba.png'
import bebidaImg from './img/bebida.png'
import beijoImg from './img/beijo.png'
import bravoImg from './img/bravo.png'
import canecaImg from './img/caneca.png'
import caretaImg from './img/careta.png'
import carroImg from './img/carro.png'
import casadoImg from './img/casado.png'
import cezarImg from './img/cezar.png'
import cocoImg from './img/coco.png'
import criaImg from './img/cria.png'
import feriasImg from './img/ferias.png'
import forteImg from './img/forte.png'
import judeuImg from './img/judeu.png'
import mascaraImg from './img/mascara.png'
import mulherImg from './img/mulher.png'
import neonImg from './img/neon.png'
import nicoImg from './img/nico.png'
import noelImg from './img/noel.png'
import oldImg from './img/old.png'
import padreImg from './img/padre.png'
import perfilImg from './img/perfil.png'
import pirataImg from './img/pirata.png'
import piscinaImg from './img/piscina.png'
import poloImg from './img/polo.png'
import poseImg from './img/pose.png'
import rindoImg from './img/rindo.png'
import roboImg from './img/robo.png'
import sonecasImg from './img/sonecas.png'
import sonoImg from './img/sono.png'
import ternoImg from './img/terno.png'
import toalhaImg from './img/toalha.png'
import tremImg from './img/trem.png'
import dedoImg from './img/dedo.png'

import amem from './audio/amem.mp3'
import anula from './audio/anula.mp3'
import bane from './audio/bane.mp3'
import bolafora from './audio/bola-fora.mp3'
import cheiracabelo from './audio/cheira-cabelo.mp3'
import conjutivite from './audio/conjutivite.mp3'
import dedoxota from './audio/dedo-xota.mp3'
import favelado from './audio/favelado.mp3'
import fernando from './audio/fernando.mp3'
import gadomiseravel from './audio/gado-miseravel.mp3'
import gado from './audio/gado.mp3'
import girino from './audio/girino.mp3'
import gordinhopapinho from './audio/gordinho-papinho.mp3'
import lambe from './audio/lambe.mp3'
import mengochegando from './audio/mengo-chegando.mp3'
import mergulhado from './audio/mergulhado.mp3'
import nokia from './audio/nokia.mp3'
import nuncamais from './audio/nunca-mais.mp3'
import oizinho from './audio/oizinho.mp3'
import orfao from './audio/orfao.mp3'
import ouvecalaboca from './audio/ouve-calaboca.mp3'
import papotorto from './audio/papo-torto.mp3'
import peixeespada from './audio/peixe-espada.mp3'
import podeser from './audio/pode-ser.mp3'
import puta from './audio/puta.mp3'
import risada from './audio/risada.mp3'
import romario from './audio/romario.mp3'
import sole from './audio/sole.mp3'
import sono from './audio/sono.mp3'
import spa from './audio/spa.mp3'
import speedo from './audio/speedo.mp3'
import tapapeito from './audio/tapa-peito.mp3'
import vaza from './audio/vaza.mp3'
import vinimalandreza from './audio/vini-malandreza.mp3'
import euacho from './audio/eu-acho.mp3'
import fecha from './audio/fecha-lata.mp3'


function SoundButton({ audioName, label, playAudio }) {
    return (
      <div className={`btn-circle ${audioName}`}>
        <button
          className="circle"
          onClick={() => playAudio(audioMap[audioName])}
        ></button>
        <h2 className="legenda">{label}</h2>
      </div>
    );
}

function Line() {
    AOS.init();
    const [audio, setAudio] = useState(null);
  
    const playAudio = (audioSource) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
  
      const newAudio = new Audio(audioSource);
      newAudio.play();
      setAudio(newAudio);
    };
  
    return (
      <div id="btn">
        <div className="box" data-aos="fade-up" data-aos-duration="2000">
          <SoundButton
            audioName="risada"
            label="risada"
            playAudio={playAudio}
          />
          <SoundButton
            audioName="gado"
            label="gado"
            playAudio={playAudio}
          />
          {/* Adicione outros botões aqui */}
        </div>
        {/* Adicione outras caixas de botões aqui */}
      </div>
    );
  }
  
  export default Line;