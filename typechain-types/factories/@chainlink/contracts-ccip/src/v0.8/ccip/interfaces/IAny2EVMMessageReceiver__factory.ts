/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAny2EVMMessageReceiver,
  IAny2EVMMessageReceiverInterface,
} from "../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IAny2EVMMessageReceiver";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "messageId",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sourceChainSelector",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "sender",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "destTokenAmounts",
            type: "tuple[]",
          },
        ],
        internalType: "struct Client.Any2EVMMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "ccipReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IAny2EVMMessageReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IAny2EVMMessageReceiverInterface {
    return new Interface(_abi) as IAny2EVMMessageReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAny2EVMMessageReceiver {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IAny2EVMMessageReceiver;
  }
}