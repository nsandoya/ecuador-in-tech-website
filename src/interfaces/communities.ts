export interface Community {
    name: string,
    description: string,
    links: Links,
    tags: string[],
    image: string
}

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

export interface Links{
    website: string, 
    social: string
}