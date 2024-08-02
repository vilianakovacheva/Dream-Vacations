import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/vacations';

export const getAll =  async () => {
    const result = await requester.get(BASE_URL);

    const vacations = Object.values(result);

    return vacations;
}

export const getOne = (vacationId) => requester.get(`${BASE_URL}/${vacationId}`);

export const create = (vacationData) => requester.post(`${BASE_URL}`, vacationData);

export const remove = (vacationId) => requester.del(`${BASE_URL}/${vacationId}`);