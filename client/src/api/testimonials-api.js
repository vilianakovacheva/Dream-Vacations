import requester from "./requester";

//const BASE_URL = 'http://localhost:3030/data/testimonials';
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/data/testimonials`;

export const createTestimonial = (text) => requester.post(BASE_URL, text);

export const getAllTestimonials = async () => {
    const result = await requester.get(BASE_URL);

    const testimonials = Object.values(result);

    return testimonials;
}