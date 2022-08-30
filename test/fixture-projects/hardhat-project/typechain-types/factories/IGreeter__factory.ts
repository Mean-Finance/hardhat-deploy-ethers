/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGreeter, IGreeterInterface } from "../IGreeter";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class IGreeter__factory {
  static readonly abi = _abi;
  static createInterface(): IGreeterInterface {
    return new utils.Interface(_abi) as IGreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGreeter {
    return new Contract(address, _abi, signerOrProvider) as IGreeter;
  }
}