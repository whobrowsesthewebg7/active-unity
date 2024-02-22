import { useContext } from "react";
import { ActiveUnityProviderContext } from "../providers/ActiveUnityProvider";

const useActiveUnity = () => {
  return useContext(ActiveUnityProviderContext);
};

export default useActiveUnity;
