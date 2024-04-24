import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../../state/atom';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento  }) => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  const attEvento = useAtualizarEvento()
  const statusUpdate = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !evento.completo

    attEvento(eventoAlterado)
    
  }
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={statusUpdate}></i>)
}

export default EventoCheckbox