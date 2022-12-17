import React from "react";
import { useRecoilValue } from "recoil";
import { filterAtom } from "../../recoil/filter";

function useFilter(){

    const filter = useRecoilValue(filterAtom)
    
}

export default useFilter