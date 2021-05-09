import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

export default async function initWeb3(): Promise<ethers.providers.Web3Provider> {
  const prov = await detectEthereumProvider();
  if (prov) {
    return new ethers.providers.Web3Provider(
      prov as ethers.providers.ExternalProvider
    );
  } else {
    return Promise.reject(Error("Install MetaMask."));
  }
}
