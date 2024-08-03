import { useEffect, useState } from 'react';
import * as vacationsAPI from '../api/vacations-api';

export function useGetAllVacations() {
    const [vacations, setVacations] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await vacationsAPI.getAll();

            setVacations(result);
        })();
    }, []);

    return [vacations, setVacations];
}

export function useGetOneVacation(vacationId) {
    const [vacation, setVacation] = useState({
        imageUrl: '',
        price: '',
        destination: '',
        accommodation: '',
        stars: '',
        period: '',
        description: '',
        entertainment: ''
    });

    useEffect(() => {
        (async () => {
            const result = await vacationsAPI.getOne(vacationId);

            setVacation(result);
        })();
    }, [vacationId]);

    return [vacation, setVacation];
}

export function useCreateVacation() {
    const vacationCreateHandler = (vacationData) => vacationsAPI.create(vacationData);

    return vacationCreateHandler;
}