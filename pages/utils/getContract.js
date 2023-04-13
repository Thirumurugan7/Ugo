// import ContractAbi from "../artifacts/contracts/School.sol/School.json";
import ContractAbi from "../../artifacts/contracts/School.sol/School.json";
import { ethers } from "ethers";

const getContract = () => {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0x3CB76abed3A0DF92E13947e4b942b9D2daC2Fb46",
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
};

export default getContract;
