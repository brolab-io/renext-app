import { Pagination } from "@/types/pagination.type";
import { TProject } from "@/types/project.type";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

const LIMIT = 10;

const useLiveProjects = () => {
  return useQuery(["live-projects"], async () => {
    return axios
      .get<Pagination<TProject>>("/api/launchpads", {
        params: {
          offset: 0,
          limit: LIMIT,
          status: "on-going",
        },
      })
      .then((res) => res.data.items);
  });
};

export default useLiveProjects;
