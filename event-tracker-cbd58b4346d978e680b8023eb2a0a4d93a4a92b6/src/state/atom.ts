import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltro } from "../interfaces/IFIltros";
import { eventosAsync } from "./hooks/seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
})


export const FiltroDeEventos = atom<IFiltro>({
  key: 'filtroDeEventos',
  default: {}
})