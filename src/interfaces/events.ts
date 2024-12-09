export interface Event {
    title: string,
    description: string,
    links: string[],
    date: string,
    place: string,
    modality: string,
    hostedBy: string,
    image: string,
    attendees: number
}

export interface SocialMedia {
    socialMedia: string,
    url: string
}