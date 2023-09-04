import { useInfiniteQuery } from "@tanstack/react-query"
import { FAKE_PROJECTS } from "./fakeData";


const LIMIT = 10;

const useProjects = (type: string = "On Going") => {
    return useInfiniteQuery(
        ['projects', type],
        async ({ pageParam = 0 }) => {
            const limit = pageParam?.limit || LIMIT;
            const offset = pageParam?.offset || 0;

            const temp = FAKE_PROJECTS.filter((project) => project.projectStatus === type).slice(offset, offset + limit)
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

export default useProjects