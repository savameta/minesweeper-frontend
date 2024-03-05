/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MinesweeperInterface extends utils.Interface {
  contractName: "Minesweeper";
  functions: {
    "buyTurn(uint8)": FunctionFragment;
    "fee()": FunctionFragment;
    "getAward()": FunctionFragment;
    "getBalance()": FunctionFragment;
    "getBeneficiary()": FunctionFragment;
    "isOpen(uint256)": FunctionFragment;
    "openCell(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "priceOfTurn()": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestRandomWords()": FunctionFragment;
    "s_requestId()": FunctionFragment;
    "setAwards(uint256[100])": FunctionFragment;
    "setBeneficiary(address)": FunctionFragment;
    "setPriceOfTurn(uint256)": FunctionFragment;
    "start()": FunctionFragment;
    "stopGame()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "turns(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyTurn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "getAward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBeneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isOpen",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openCell",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOfTurn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_requestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAwards",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setBeneficiary",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceOfTurn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "stopGame", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "turns", values: [string]): string;

  decodeFunctionResult(functionFragment: "buyTurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openCell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOfTurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_requestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAwards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOfTurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "turns", data: BytesLike): Result;

  events: {
    "BuyTurn(address,uint8)": EventFragment;
    "OpenCell(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyTurn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenCell"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type BuyTurnEvent = TypedEvent<
  [string, number],
  { buyer: string; numberOfTurns: number }
>;

export type BuyTurnEventFilter = TypedEventFilter<BuyTurnEvent>;

export type OpenCellEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { player: string; key: BigNumber; cell: BigNumber }
>;

export type OpenCellEventFilter = TypedEventFilter<OpenCellEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface Minesweeper extends BaseContract {
  contractName: "Minesweeper";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MinesweeperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyTurn(
      numberOfTurns: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAward(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBeneficiary(overrides?: CallOverrides): Promise<[string]>;

    isOpen(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    openCell(
      key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    priceOfTurn(overrides?: CallOverrides): Promise<[BigNumber]>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    s_requestId(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAwards(
      _awards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBeneficiary(
      _beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceOfTurn(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopGame(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    turns(arg0: string, overrides?: CallOverrides): Promise<[number]>;
  };

  buyTurn(
    numberOfTurns: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  getAward(overrides?: CallOverrides): Promise<BigNumber[]>;

  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getBeneficiary(overrides?: CallOverrides): Promise<string>;

  isOpen(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  openCell(
    key: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  priceOfTurn(overrides?: CallOverrides): Promise<BigNumber>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestRandomWords(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

  setAwards(
    _awards: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBeneficiary(
    _beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceOfTurn(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  start(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopGame(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  turns(arg0: string, overrides?: CallOverrides): Promise<number>;

  callStatic: {
    buyTurn(
      numberOfTurns: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getAward(overrides?: CallOverrides): Promise<BigNumber[]>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getBeneficiary(overrides?: CallOverrides): Promise<string>;

    isOpen(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    openCell(key: BigNumberish, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    priceOfTurn(overrides?: CallOverrides): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestRandomWords(overrides?: CallOverrides): Promise<void>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

    setAwards(
      _awards: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceOfTurn(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    start(overrides?: CallOverrides): Promise<void>;

    stopGame(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    turns(arg0: string, overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "BuyTurn(address,uint8)"(
      buyer?: string | null,
      numberOfTurns?: null
    ): BuyTurnEventFilter;
    BuyTurn(buyer?: string | null, numberOfTurns?: null): BuyTurnEventFilter;

    "OpenCell(address,uint256,uint256)"(
      player?: string | null,
      key?: null,
      cell?: null
    ): OpenCellEventFilter;
    OpenCell(
      player?: string | null,
      key?: null,
      cell?: null
    ): OpenCellEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    buyTurn(
      numberOfTurns: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getAward(overrides?: CallOverrides): Promise<BigNumber>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getBeneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    isOpen(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    openCell(
      key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    priceOfTurn(overrides?: CallOverrides): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

    setAwards(
      _awards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBeneficiary(
      _beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceOfTurn(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopGame(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    turns(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTurn(
      numberOfTurns: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBeneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOpen(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openCell(
      key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOfTurn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    s_requestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAwards(
      _awards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBeneficiary(
      _beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceOfTurn(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopGame(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    turns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
