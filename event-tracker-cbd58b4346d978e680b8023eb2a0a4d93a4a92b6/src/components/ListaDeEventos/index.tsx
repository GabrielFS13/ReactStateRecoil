import React from 'react';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';
import useGetEvents from '../../state/hooks/useGetEventos';

const ListaDeEventos: React.FC<{ 
  aoAlterarStatus: (id: number) => void, 
  aoFiltroAplicado: (data: Date | null) => void }> = ({ aoAlterarStatus, aoFiltroAplicado }) => {

  const eventos = useGetEvents()
  
  return (<section>
    <Filtro aoFiltroAplicado={aoFiltroAplicado} />
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}

export default ListaDeEventos