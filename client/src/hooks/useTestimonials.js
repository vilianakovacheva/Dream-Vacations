import { useEffect, useState } from 'react';
import * as testimonialsAPI from '../api/testimonials-api';

export function useGetAllTestimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await testimonialsAPI.getAllTestimonials();

            setTestimonials(result);
        })();
    }, []);

    return [testimonials, setTestimonials];
}

export function useCreateTestimonial(text) {
    const testimonialCreateHandler = (text) => testimonialsAPI.createTestimonial(text);

    return testimonialCreateHandler;
}