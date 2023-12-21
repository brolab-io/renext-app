import { useQuery } from "@tanstack/react-query";
import { useProgramAnonymous } from "../useProgram";
import { PublicKey } from "@solana/web3.js";
import { useDemonAdapter } from "../useDemonAdapter";
import useLaunchPool from "./useLaunchPool";
const usePoolVault = (pool: string) => {
  const { program } = useProgramAnonymous();
  const {
    connectionContext: { connection },
  } = useDemonAdapter();
  const { data: launchPool } = useLaunchPool(pool);
  return useQuery(
    ["launchpool-vault", pool],
    async () => {
      const vault = await connection.getAccountInfo(new PublicKey(pool));
      return launchPool;
    },
    {
      enabled: !!program,
    }
  );
};

export default usePoolVault;
