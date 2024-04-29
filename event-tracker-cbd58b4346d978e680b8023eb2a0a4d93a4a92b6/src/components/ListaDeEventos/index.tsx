import React from 'react';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';
import useGetEvents from '../../state/hooks/useGetEventos';
import { useRecoilValue } from 'recoil';
import { FiltroDeEventos } from '../../state/atom';
import { IFiltro } from '../../interfaces/IFIltros';

const ListaDeEventos: React.FC = () => {

  const eventos = useGetEvents()
  const filtro = useRecoilValue<IFiltro>(FiltroDeEventos)

  const eventosFiltrado = eventos.filter(evento =>{
    if(!filtro.data){
      return true
    }

    const Mesmodia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
    return Mesmodia
  })
  
  return (<section>
    <Filtro />
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}

export default ListaDeEventos