import { useInfiniteQuery } from "@tanstack/react-query"
const socialLinks = [
    {
        icon: '/assets/telegram.svg',
        url: "#",
    },
    {
        icon: '/assets/discord.svg',
        url: "#",
    },
    {
        icon: '/assets/linkedin.svg',
        url: "#",
    },
    {
        icon: '/assets/medium.svg',
        url: "#",
    },
    {
        icon: '/assets/twitter.svg',
        url: "#",
    },
]
const FAKE_PROJECTS = [
    //  tab item
    {
        projectStatus: "On Going",
        projects: [
            // porject
            {
                thumb: '/assets/ninga-image.png',
                title: "Galaxy War",
                price: "0.59 BUSD",
                saleEnd: "08",
                coinIcon: '/assets/renec.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.33 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "900.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "200,000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Super Sidero",
                price: "0.13 BUSD",
                saleEnd: "03",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.89 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "300.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "899,900 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Meta World",
                price: "0.33 BUSD",
                saleEnd: "05",
                coinIcon: '/assets/renec.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "2.25 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "1000.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,00,000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Fisrt Survivor",
                price: "0.89 BUSD",
                saleEnd: "12",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.59 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "399.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Cryowar Two",
                price: "0.45 BUSD",
                saleEnd: "14",
                coinIcon: '/assets/renec.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.66 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "800.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "999,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Gaia Everworld",
                price: "0.13 BUSD",
                saleEnd: "15",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.25 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "500.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "869,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
        ],
    },
    //  tab item
    {
        projectStatus: "Upcomming",
        projects: [
            // project
            {
                thumb: '/assets/ninga-image.png',
                title: "Meta World",
                price: "0.33 BUSD",
                saleEnd: "05",
                coinIcon: '/assets/renec.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "2.25 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "1000.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,00,000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Fisrt Survivor",
                price: "0.89 BUSD",
                saleEnd: "12",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.59 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "399.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Cryowar Two",
                price: "0.45 BUSD",
                saleEnd: "14",
                coinIcon: '/assets/renec.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.66 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "800.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "999,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Gaia Everworld",
                price: "0.13 BUSD",
                saleEnd: "15",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.25 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "500.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "869,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
        ],
    },
    //  tab item
    {
        projectStatus: "Ended",
        projects: [
            // project
            {
                thumb: '/assets/ninga-image.png',
                title: "Super Sidero",
                price: "0.13 BUSD",
                saleEnd: "03",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.89 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "300.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "899,900 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Meta World",
                price: "0.33 BUSD",
                saleEnd: "05",
                coinIcon: '/assets/renec.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "2.25 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "1000.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,00,000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Fisrt Survivor",
                price: "0.89 BUSD",
                saleEnd: "12",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.59 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "399.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Cryowar Two",
                price: "0.45 BUSD",
                saleEnd: "14",
                coinIcon: '/assets/renec.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.66 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "800.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "999,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                thumb: '/assets/ninga-image.png',
                title: "Gaia Everworld",
                price: "0.13 BUSD",
                saleEnd: "15",
                coinIcon: '/assets/reusd.png',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.25 BUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "500.00 BUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "869,0000 BUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
        ],
    },
]

const LIMIT = 10;

const useProject = (type: string = "On Going") => {
    return useInfiniteQuery(
        ['projects', type],
        async ({ pageParam = 0 }) => {
            const limit = pageParam?.limit || LIMIT;
            const offset = pageParam?.offset || 0;

            const temp = FAKE_PROJECTS.filter((project) => project.projectStatus === type)[0].projects.slice(offset, offset + limit)
            return {
                items: temp,
                total: temp.length,
                offset,
                limit,
            };

        }, {
        getNextPageParam: (lastPage) => {
            if (
                lastPage.items.length < LIMIT ||
                lastPage.items.length + lastPage.offset >= lastPage.total
            ) {
                return undefined;
            }
            return {
                offset: lastPage.offset + LIMIT,
                limit: LIMIT,
            };
        },
        keepPreviousData: true,
    }

    )
}

export default useProject