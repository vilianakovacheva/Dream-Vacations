import { useEffect, useReducer } from "react";
import likesApi from "../api/likes-api";

export function useAddLike() {
    const addHandler = (vacationId) => likesApi.addLike(vacationId);

    return addHandler;
}

function likesReducer(state, action) {
    switch(action.type) {
        case "GET_ALL":
            return action.payload.slice();
            case "LIKE":
                return [...state, action.payload];
                
                default:
                    return state;
    }
}

export function useGetAllLikes(vacationId) {
    const [likes, dispatch] = useReducer(likesReducer, []);

    useEffect(() => {
        (async () => {
            const result = await likesApi.getAll(vacationId);

            dispatch({ type: "GET_ALL", payload: result });
        })();
    }, [vacationId]);

    return [likes, dispatch];
}