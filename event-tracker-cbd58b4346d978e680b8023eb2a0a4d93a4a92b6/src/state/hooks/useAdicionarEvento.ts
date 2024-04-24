import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento"
import { obterID } from "../../util"

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return (evento: IEvento) => {
        const hoje = new Date()
        if(evento.inicio < hoje){
            throw new Error("Data menor que a atual não é válida para realizar o cadastro de um evento")
        }
        evento.id = obterID()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento