import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "./seletores"

const useGetEvents = () => {
    return useRecoilValue(eventosFiltradosState)
}

export default useGetEvents