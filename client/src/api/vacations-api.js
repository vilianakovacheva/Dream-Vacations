import requester from "./requester";

//const BASE_URL = 'http://localhost:3030/data/vacations';
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/data/vacations`;

export const getAll =  async () => {
    const result = await requester.get(BASE_URL);

    const vacations = Object.values(result);

    return vacations;
}

export const getOne = (vacationId) => requester.get(`${BASE_URL}/${vacationId}`);

export const create = (vacationData) => requester.post(`${BASE_URL}`, vacationData);

export const remove = (vacationId) => requester.del(`${BASE_URL}/${vacationId}`);

export const update = (vacationId, vacationData) => requester.put(`${BASE_URL}/${vacationId}`, vacationData);

export const getVacationsByUserId = async (userId) => {
    const query = new URLSearchParams({ where: `_ownerId="${userId}"` });

    const result = await requester.get(`${BASE_URL}?${query}`);

    return result;
}