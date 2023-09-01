export const getMenuData = () => {
    return [
        {
            id: "1W6WV",
            title: "Home",
            url: "/",
        },
        {
            id: "2ZYYU",
            title: "Projects",
            url: "#",
            subMenus: [
                {
                    id: "0300T",
                    title: "Explore",
                    url: "/explore",
                },
                {
                    id: "4XZ00",
                    title: "Featured Projects",
                    url: "/featured-projects",
                },
            ],
        },
        {
            id: "ZZUVV",
            title: "About",
            url: "#",
            subMenus: [
                {
                    id: "PMQ60",
                    title: "Roadmap Details",
                    url: "/roadmap-details",
                },
                {
                    id: "39X8V",
                    title: "Team Details",
                    url: "/team-details",
                },
                {
                    id: "LTM20",
                    title: "Contact",
                    url: "/contact",
                },
            ],
        },
    ];
}