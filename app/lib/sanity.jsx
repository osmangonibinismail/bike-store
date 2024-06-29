import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '0fi6q7j8',
    dataset: 'production',
    apiVersion: '2024-06-28',
    useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}