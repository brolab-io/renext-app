import { useQuery } from "@tanstack/react-query";
import { FAKE_PROJECTS } from "./fakeData";
import { useProgramAnonymous } from "./useProgram";

const useProject = (id: string) => {
  const { program } = useProgramAnonymous();
  return useQuery(["project", id], () => {
    const project = program.account.launchPool.fetch(id);
    return project;
  });
};

export default useProject;
