import { useRecoilValue } from "recoil"
import { listaDeEventosState } from "../atom"

const useGetEvents = () => {
    return useRecoilValue(listaDeEventosState)
}

export default useGetEvents