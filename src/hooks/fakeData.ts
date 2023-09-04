export const socialLinks = [
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

export const FAKE_PROJECT_INFO = [
    {
        title: "Galaxy War",
        tokenInfo: [
            {
                title: "Token Distribution",
                text: "Date UTC",
            },
            {
                title: "Min. Allocation",
                text: "0.01 BUSD",
            },
            {
                title: "Max. Allocation",
                text: "1531.13 BUSD",
            },
            {
                title: "Token Price",
                text: "1 BUSD = 555.55 SIDUS",
            },
            {
                title: "Access type",
                text: "Public",
            },
        ],
    },
    {
        title: "Token Info",
        tokenInfo: [
            {
                title: "Token Name",
                text: "The Wasted Lands",
            },
            {
                title: "Token Symbol",
                text: "AAA",
            },
            {
                title: "Decimals",
                text: "18",
            },
            {
                title: "Address",
                text: "0x22d40020282f9c8",
            },
            {
                title: "Total Supply",
                text: "3,333,334.00 DDO",
            },
        ],
    },
]

const FAKE_PROJECT_CONTENT = `
    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec euismod, nisl sed aliquam ultricies, nunc leo
    ultricies nunc, vitae luctus odio nisl eu velit. Donec
    euismod, nisl sed aliquam ultricies, nunc leo ultricies
    </p>
    <p>nunc leo ultricies nunc, vitae luctus odio nisl eu
    nunc, vitae luctus odio nisl eu velit. Donec euismod,
    nisl sed aliquam ultricies, nunc leo ultricies nunc,
    vitae luctus odio nisl eu velit. Donec euismod, nisl sed
    aliquam ultricies, nunc leo ultricies nunc, vitae luctus
    odio nisl eu velit. Donec euismod, nisl sed aliquam
    ultricies, nunc leo ultricies nunc, vitae luctus odio
    nisl eu velit. Donec euismod, nisl sed aliquam ultricies,
    </p>
`

export const FAKE_PROJECTS = [
    {
        id: "1",
        projectStatus: "On Going",
        thumb: '/assets/ninga-image.png',
        title: "Galaxy War",
        price: 0.59,
        saleEnd: 1700026528,
        currency: 'renec',
        symbol: 'AAA',
        remaining: 400,
        participants: 200,
        allocation: 500,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "2",
        projectStatus: "On Going",
        thumb: '/assets/ninga-image.png',
        title: "Super Sidero",
        price: 0.13,
        saleEnd: 1695274528,
        currency: 'reusd',
        symbol: 'BBB',
        remaining: 200,
        participants: 200,
        allocation: 1000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "3",
        projectStatus: "On Going",
        thumb: '/assets/ninga-image.png',
        title: "Meta World",
        price: 0.33,
        saleEnd: 1695360928,
        currency: 'renec',
        symbol: 'CCC',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "4",
        projectStatus: "On Going",
        thumb: '/assets/ninga-image.png',
        title: "Fisrt Survivor",
        price: 0.89,
        saleEnd: 1697952928,
        currency: 'reusd',
        symbol: 'DDD',
        remaining: 80_000_000,
        participants: 200,
        allocation: 100_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "5",
        projectStatus: "On Going",
        thumb: '/assets/ninga-image.png',
        title: "Cryowar Two",
        price: 0.45,
        saleEnd: 1698039328,
        currency: 'renec',
        symbol: 'EEE',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "6",
        projectStatus: "On Going",
        thumb: '/assets/ninga-image.png',
        title: "Gaia Everworld",
        price: 0.13,
        saleEnd: 1697348128,
        currency: 'reusd',
        symbol: 'FFF',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },

    {
        id: "7",
        projectStatus: "Upcomming",
        thumb: '/assets/ninga-image.png',
        title: "Meta World",
        price: 0.33,
        saleEnd: 1696484128,
        currency: 'renec',
        symbol: 'GGG',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "8",
        projectStatus: "Upcomming",
        thumb: '/assets/ninga-image.png',
        title: "Fisrt Survivor",
        price: 0.89,
        saleEnd: 1699767328,
        currency: 'reusd',
        symbol: 'HHH',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "9",
        projectStatus: "Upcomming",
        thumb: '/assets/ninga-image.png',
        title: "Cryowar Two",
        price: 0.45,
        saleEnd: 1699940128,
        currency: 'renec',
        symbol: 'III',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "10",
        projectStatus: "Upcomming",
        thumb: '/assets/ninga-image.png',
        title: "Gaia Everworld",
        price: 0.13,
        saleEnd: 1700026528,
        currency: 'reusd',
        symbol: 'JJJ',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },

    {
        id: "11",
        projectStatus: "Ended",
        thumb: '/assets/ninga-image.png',
        title: "Super Sidero",
        price: 0.13,
        saleEnd: 1692336928,
        currency: 'reusd',
        symbol: 'KKK',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "12",
        projectStatus: "Ended",
        thumb: '/assets/ninga-image.png',
        title: "Meta World",
        price: 0.33,
        saleEnd: 1691818528,
        currency: 'renec',
        symbol: 'LLL',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "13",
        projectStatus: "Ended",
        thumb: '/assets/ninga-image.png',
        title: "Fisrt Survivor",
        price: 0.89,
        saleEnd: 1691904928,
        currency: 'reusd',
        symbol: 'MMM',
        remaining: 800_000,
        participants: 200,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "14",
        projectStatus: "Ended",
        thumb: '/assets/ninga-image.png',
        title: "Cryowar Two",
        price: 0.45,
        saleEnd: 1691991328,
        currency: 'renec',
        symbol: 'NNN',
        remaining: 800_000,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },
    {
        id: "15",
        projectStatus: "Ended",
        thumb: '/assets/ninga-image.png',
        title: "Gaia Everworld",
        price: 0.13,
        saleEnd: 1692077728,
        currency: 'reusd',
        symbol: 'OOO',
        remaining: 800_000,
        allocation: 1_000_000,
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
        socialLinks,
        info: FAKE_PROJECT_INFO,
        summary: FAKE_PROJECT_CONTENT,
    },

]