export interface Community {
    name: string,
    description: string,
    links: Links,
    tags: string[],
    image: string
}

export interface Links{
    website: string, 
    social: string
}

export interface SocialMedia {
    socialMediaPlatform: string,
    url: string
}