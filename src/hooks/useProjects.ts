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
                id: "1",
                thumb: '/assets/ninga-image.png',
                title: "Galaxy War",
                price: "0.59 RENEC",
                saleEnd: "08",
                currency: 'renec',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.33 RENEC",
                    },
                    {
                        title: "Max allocation",
                        text: "900.00 RENEC",
                    },
                    {
                        title: "Targeted raise",
                        text: "200,000 RENEC",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "2",
                thumb: '/assets/ninga-image.png',
                title: "Super Sidero",
                price: "0.13 REUSD",
                saleEnd: "03",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.89 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "300.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "899,900 REUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "3",
                thumb: '/assets/ninga-image.png',
                title: "Meta World",
                price: "0.33 RENEC",
                saleEnd: "05",
                currency: 'renec',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "2.25 RENEC",
                    },
                    {
                        title: "Max allocation",
                        text: "1000.00 RENEC",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,00,000 RENEC",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "4",
                thumb: '/assets/ninga-image.png',
                title: "Fisrt Survivor",
                price: "0.89 REUSD",
                saleEnd: "12",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.59 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "399.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,0000 REUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "5",
                thumb: '/assets/ninga-image.png',
                title: "Cryowar Two",
                price: "0.45 RENEC",
                saleEnd: "14",
                currency: 'renec',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.66 RENEC",
                    },
                    {
                        title: "Max allocation",
                        text: "800.00 RENEC",
                    },
                    {
                        title: "Targeted raise",
                        text: "999,0000 RENEC",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "6",
                thumb: '/assets/ninga-image.png',
                title: "Gaia Everworld",
                price: "0.13 REUSD",
                saleEnd: "15",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.25 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "500.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "869,0000 REUSD",
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
                id: "7",
                thumb: '/assets/ninga-image.png',
                title: "Meta World",
                price: "0.33 RENEC",
                saleEnd: "05",
                currency: 'renec',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "2.25 RENEC",
                    },
                    {
                        title: "Max allocation",
                        text: "1000.00 RENEC",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,00,000 RENEC",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "8",
                thumb: '/assets/ninga-image.png',
                title: "Fisrt Survivor",
                price: "0.89 REUSD",
                saleEnd: "12",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.59 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "399.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,0000 REUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "9",
                thumb: '/assets/ninga-image.png',
                title: "Cryowar Two",
                price: "0.45 RENEC",
                saleEnd: "14",
                currency: 'renec',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.66 RENEC",
                    },
                    {
                        title: "Max allocation",
                        text: "800.00 RENEC",
                    },
                    {
                        title: "Targeted raise",
                        text: "999,0000 RENEC",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "10",
                thumb: '/assets/ninga-image.png',
                title: "Gaia Everworld",
                price: "0.13 REUSD",
                saleEnd: "15",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.25 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "500.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "869,0000 REUSD",
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
                id: "11",
                thumb: '/assets/ninga-image.png',
                title: "Super Sidero",
                price: "0.13 REUSD",
                saleEnd: "03",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.89 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "300.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "899,900 REUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "12",
                thumb: '/assets/ninga-image.png',
                title: "Meta World",
                price: "0.33 RENEC",
                saleEnd: "05",
                currency: 'renec',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "2.25 RENEC",
                    },
                    {
                        title: "Max allocation",
                        text: "1000.00 RENEC",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,00,000 RENEC",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "13",
                thumb: '/assets/ninga-image.png',
                title: "Fisrt Survivor",
                price: "0.89 REUSD",
                saleEnd: "12",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.59 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "399.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "50,0000 REUSD",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "14",
                thumb: '/assets/ninga-image.png',
                title: "Cryowar Two",
                price: "0.45 RENEC",
                saleEnd: "14",
                currency: 'renec',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.66 RENEC",
                    },
                    {
                        title: "Max allocation",
                        text: "800.00 RENEC",
                    },
                    {
                        title: "Targeted raise",
                        text: "999,0000 RENEC",
                    },
                    {
                        title: "Access type",
                        text: "Public",
                    },
                ],
                socialLinks
            },
            {
                id: "15",
                thumb: '/assets/ninga-image.png',
                title: "Gaia Everworld",
                price: "0.13 REUSD",
                saleEnd: "15",
                currency: 'reusd',
                projectDetails: [
                    {
                        title: "Min allocation",
                        text: "0.25 REUSD",
                    },
                    {
                        title: "Max allocation",
                        text: "500.00 REUSD",
                    },
                    {
                        title: "Targeted raise",
                        text: "869,0000 REUSD",
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