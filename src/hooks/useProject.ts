import { useQuery } from "@tanstack/react-query";
import { FAKE_PROJECTS } from "./fakeData";

const useProject = (id: string) => {
  return useQuery(["project", id], () => {
    return FAKE_PROJECTS.find((project) => project.id === id);
  });
};

export default useProject;
