export type ProjectType = {
    thumb: string;
    title: string;
    price: string;
    saleEnd: string;
    coinIcon: string;
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