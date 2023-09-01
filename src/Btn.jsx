import './styles/components/btn.sass'
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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


function Btn() {
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
            <div className="btn-circle">
              <button className="circle risada" onClick={() => playAudio(risada)}></button>
              <h2 className="legenda">risada</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(gado)}></button>
              <h2 className="legenda">gado</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(bane)}></button>
              <h2 className="legenda">então bane</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(puta)}></button>
              <h2 className="legenda">ouve puta</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(conjutivite)}></button>
              <h2 className="legenda">conjutivite</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(orfao)}></button>
              <h2 className="legenda">orfão</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(mengochegando)}></button>
              <h2 className="legenda">mengo</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(amem)}></button>
              <h2 className="legenda">amém</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(anula)}></button>
              <h2 className="legenda">anula eles</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(dedoxota)}></button>
              <h2 className="legenda">dedo aonde?</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(vinimalandreza)}></button>
              <h2 className="legenda">malandreza</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(oizinho)}></button>
              <h2 className="legenda">oizinho</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(speedo)}></button>
              <h2 className="legenda">speedo</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(girino)}></button>
              <h2 className="legenda">girino</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(gordinhopapinho)}></button>
              <h2 className="legenda">papinho</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(spa)}></button>
              <h2 className="legenda">spa</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(mergulhado)}></button>
              <h2 className="legenda">mergulhou</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(vaza)}></button>
              <h2 className="legenda">vaza!</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(bolafora)}></button>
              <h2 className="legenda">bola fora</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(sono)}></button>
              <h2 className="legenda">sonin</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(romario)}></button>
              <h2 className="legenda">romario</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(favelado)}></button>
              <h2 className="legenda">favelado</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(fecha)}></button>
              <h2 className="legenda">fecha a lata</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(sole)}></button>
              <h2 className="legenda">sole</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(nuncamais)}></button>
              <h2 className="legenda">never more</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(lambe)}></button>
              <h2 className="legenda">lambe</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(euacho)}></button>
              <h2 className="legenda">eu acho!</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(podeser)}></button>
              <h2 className="legenda">pode ser?</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(gadomiseravel)}></button>
              <h2 className="legenda">miserável</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(papotorto)}></button>
              <h2 className="legenda">papo torto</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(ouvecalaboca)}></button>
              <h2 className="legenda">ouve e...</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(fernando)}></button>
              <h2 className="legenda">fernando</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(nokia)}></button>
              <h2 className="legenda">nokia</h2>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000">
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(tapapeito)}></button>
              <h2 className="legenda">tapa</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(cheiracabelo)}></button>
              <h2 className="legenda">cheira ai</h2>
            </div>
            <div className="btn-circle">
              <button className="circle" onClick={() => playAudio(peixeespada)}></button>
              <h2 className="legenda">sword fish</h2>
            </div>
          </div>
        </div>
      )
}      
  
  export default Btn