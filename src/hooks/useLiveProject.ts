import { FAKE_PROJECTS } from "./fakeData";


export default function useLiveProject() {
    return {
        data: FAKE_PROJECTS.filter((project) => project.projectStatus === "On Going")

        // data: [
        //     {
        //         projectIcon: '/assets/ninga-image.png',
        //         title: "The Wasted Lands",
        //         price: "0.13 BUSD",
        //         totalRise: "38,999.70 BUSD ( 43% )",
        //         allocation: "500 BUSD Max",
        //         targetedRise: "100,000 BUSD",
        //         saleEnd: 1432560,
        //         coinIcon: '/assets/renec.png',
        //         progress: "43%",
        //     },
        //     {
        //         projectIcon: '/assets/ninga-image.png',
        //         title: "Gaia Everworld",
        //         price: "0.45 BUSD",
        //         totalRise: "20,999.70 BUSD ( 43% )",
        //         allocation: "500 BUSD Max",
        //         targetedRise: "500,000 BUSD",
        //         saleEnd: 1132560,
        //         coinIcon: '/assets/reusd.png',
        //         progress: "63%",
        //     },
        //     {
        //         projectIcon: '/assets/ninga-image.png',
        //         title: "Super Sidero",
        //         price: "5.03 BUSD",
        //         totalRise: "42,999.70 BUSD ( 43% )",
        //         allocation: "500 BUSD Max",
        //         targetedRise: "120,000 BUSD",
        //         saleEnd: 113560,
        //         coinIcon: '/assets/renec.png',
        //         progress: "83%",
        //     },
        //     {
        //         projectIcon: '/assets/ninga-image.png',
        //         title: "Thetan Arena",
        //         price: "1.30 BUSD",
        //         totalRise: "22,987.70 BUSD ( 43% )",
        //         allocation: "500 BUSD Max",
        //         targetedRise: "230,000 BUSD",
        //         saleEnd: 1013560,
        //         coinIcon: '/assets/reusd.png',
        //         progress: "36%",
        //     },
        // ]

    }
}