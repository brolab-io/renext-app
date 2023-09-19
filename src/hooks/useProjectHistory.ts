import { useInfiniteQuery } from "@tanstack/react-query"
import { FAKE_PROJECT_HISTORY } from "./fakeData";
const LIMIT = 10;
const useProjectHistory = (id: string) => {
    return useInfiniteQuery(
        ["projectHistory", id],
        async ({ pageParam }) => {
            const limit = pageParam?.limit || LIMIT;
            const offset = pageParam?.offset || 0;
            const temp = FAKE_PROJECT_HISTORY.slice(offset, offset + limit)
            return {
                items: temp,
                total: temp.length,
                offset,
                limit,
            };
        },
        {
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
            }


        }
    )
}
export default useProjectHistory