import { findVestingPlanAccount } from "@/utils/account.util"
import { useQuery } from "@tanstack/react-query"
import { useProgramAnonymous } from "../useProgram"
import { PublicKey } from "@solana/web3.js"
const useVestingPlan = (pool: string) => {
    const { program } = useProgramAnonymous()
    return useQuery(['vestingPlan', pool], () => {
        const [vestingAccount] = findVestingPlanAccount(new PublicKey(pool), program.programId);
        const data = program.account.vestingPlan.fetch(vestingAccount)
        return data
    })
}

export default useVestingPlan