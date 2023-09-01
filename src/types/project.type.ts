export type ProjectType = {
    id: string;
    thumb: string;
    title: string;
    price: string;
    saleEnd: string;
    currency: string;
    projectDetails: ProjectDetailType[];
    socialLinks: SocialLinkType[];
}

export type ProjectDetailType = {
    title: string;
    text: string;
}

export type SocialLinkType = {
    icon: string;
    url: string;
}