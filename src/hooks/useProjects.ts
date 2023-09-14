import { Pagination } from "@/types/pagination.type";
import { TProject } from "@/types/project.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const LIMIT = 9;

const useProjects = (type: string = "On Going", owner?: string, currency?: string) => {
  const status = {
    "On Going": "on-going",
    Ended: "ended",
  }[type];
  return useInfiniteQuery(
    ["projects", status, owner, currency],
    async ({ pageParam }) => {
      const limit = pageParam?.limit || LIMIT;
      const offset = pageParam?.offset || 0;

      // const temp = FAKE_PROJECTS.filter((project) => project.projectStatus === type).slice(offset, offset + limit)
      // return {
      //     items: temp,
      //     total: temp.length,
      //     offset,
      //     limit,
      // };
      return axios
        .get<Pagination<TProject>>("/api/launchpads", {
          params: {
            offset,
            limit,
            owner,
            status,
            currency,
          },
        })
        .then((res) => res.data);
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
      },
      keepPreviousData: true,
    }
  );
};

export default useProjects;
