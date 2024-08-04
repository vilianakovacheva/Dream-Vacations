import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/likes';

const addLike = (vacationId) => requester.post(BASE_URL, {vacationId});

const getAll = (vacationId) => {
    const params = new URLSearchParams({
        where: `vacationId="${vacationId}"`,
        load: `author=_ownerId:users`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
}

export default {
    addLike,
    getAll
}