/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TestNonUniqueLib,
  TestNonUniqueLibInterface,
} from "../TestNonUniqueLib";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "printNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061013f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063652d3c4814610030575b600080fd5b61005c6004803603602081101561004657600080fd5b8101908080359060200190929190505050610072565b6040518082815260200191505060405180910390f35b60008073__$093617208da6c0a6ce8b246e275858dc06$__6305b8c7c2846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156100c457600080fd5b505af41580156100d8573d6000803e3d6000fd5b505050506040513d60208110156100ee57600080fd5b810190808051906020019092919050505090508091505091905056fea265627a7a7231582032cedcd884583c2546591ead4ea6feaff844f8fd769b7a982745377376d489af64736f6c634300050f0032";

type TestNonUniqueLibConstructorParams =
  | [linkLibraryAddresses: TestNonUniqueLibLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestNonUniqueLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class TestNonUniqueLib__factory extends ContractFactory {
  constructor(...args: TestNonUniqueLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        TestNonUniqueLib__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: TestNonUniqueLibLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$093617208da6c0a6ce8b246e275858dc06\\$__", "g"),
      linkLibraryAddresses["contracts/TestNonUniqueLib.sol:NonUniqueLibrary"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestNonUniqueLib> {
    return super.deploy(overrides || {}) as Promise<TestNonUniqueLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestNonUniqueLib {
    return super.attach(address) as TestNonUniqueLib;
  }
  override connect(signer: Signer): TestNonUniqueLib__factory {
    return super.connect(signer) as TestNonUniqueLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestNonUniqueLibInterface {
    return new utils.Interface(_abi) as TestNonUniqueLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestNonUniqueLib {
    return new Contract(address, _abi, signerOrProvider) as TestNonUniqueLib;
  }
}

export interface TestNonUniqueLibLibraryAddresses {
  ["contracts/TestNonUniqueLib.sol:NonUniqueLibrary"]: string;
}