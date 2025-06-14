import * as react from 'react';
import react__default, { MouseEvent } from 'react';
import { m as WalletClientType, d as UserRecoveryMethod, n as PrivyFarcasterSignerInitResponse, o as MfaSubmitArgs, E as EthereumRpcRequestType, p as SolanaRpcRequestType, q as EthereumRpcResponseType, r as SolanaRpcResponseType, s as PrivyClientConfig, u as EIP1193Provider, v as EntropyIdVerifier$1, H as HDWalletWithMetadata, w as RequestArguments, x as WalletTimeoutError, y as WalletConnector, B as BaseConnectedEthereumWallet, z as ConnectedWalletMetadata, A as ConnectorType, D as WalletListEntry, G as AppConfig, I as BaseConnectedWallet, l as SolanaWalletConnector, U as User, J as ConnectWalletModalOptions, K as LoginModalOptions, g as CreateWalletOptions, W as Wallet, N as SetWalletRecoveryOptions, i as SignMessageModalUIOptions, Q as SignTypedDataParams, M as MfaMethod, T as UnsignedTransactionRequest, h as SendTransactionModalUIOptions, V as FundWalletConfig, X as ConnectedWallet, O as OAuthTokens, Y as CrossAppProviderDetails, Z as OAuthProviderType, _ as MoonpaySignRequest, $ as MoonpaySignResponse, a0 as SmartWalletConfig, a as LoginMethod, a1 as SiweWalletMetadata, a2 as TelegramAuthResult, a3 as TelegramWebAppData, a4 as OAuthUserInfo, a5 as SiwsMessageType, a6 as OAuthFlowState, a7 as LoginWithCode, a8 as OtpFlowState, a9 as PasskeyFlowState, aa as SiweFlowState, ab as UnsignedTransactionRequestWithChainId, ac as BaseConnectedWalletType, C as ConnectedSolanaWallet, ad as SessionSignerInput, ae as TelegramAuthFlowState } from './types-CCLHKw4p.js';
export { ax as Apple, aI as AppleOAuthWithMetadata, aQ as ContractUIOptions, aA as CrossAppAccount, aL as CrossAppAccountWithMetadata, au as Discord, aE as DiscordOAuthWithMetadata, aN as Email, ap as EmailWithMetadata, aU as Farcaster, aJ as FarcasterWithMetadata, av as Github, aF as GithubOAuthWithMetadata, as as Google, aC as GoogleOAuthWithMetadata, aB as LinkedAccountType, b as LinkedAccountWithMetadata, aw as LinkedIn, aH as LinkedInOAuthWithMetadata, aW as LoginMethodOrderOption, ag as MessageTypes, ai as MoonpayConfig, aj as MoonpayCurrencyCode, aS as MoonpayFundingConfig, ak as MoonpayPaymentMethod, aR as NativeFundingConfig, ao as NonEmptyArray, aV as Passkey, aM as PasskeyWithMetadata, aO as Phone, aq as PhoneWithMetadata, aT as PriceDisplayOptions, P as PrivyErrorCode, al as Quantity, ah as SmartWallet, f as SolanaCluster, k as SolanaFundingConfig, S as SolanaTransactionReceipt, e as SupportedSolanaTransaction, az as Telegram, aK as TelegramWithMetadata, ay as Tiktok, aG as TiktokOAuthWithMetadata, am as TransactionLog, an as TransactionReceipt, aP as TransactionUIOptions, at as Twitter, aD as TwitterOAuthWithMetadata, af as TypedMessage, ar as WalletWithMetadata } from './types-CCLHKw4p.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { TurnstileProps } from '@marsidev/react-turnstile';
import { AppKit } from '@reown/appkit';
import EventEmitter from 'eventemitter3';
import { Store, EIP6963ProviderDetail } from 'mipd';
import Privy, { Chain, RpcConfig } from '@privy-io/js-sdk-core';
export { DEFAULT_SUPPORTED_CHAINS as SUPPORTED_CHAINS, addPrivyRpcToChain, addRpcUrlOverrideToChain } from '@privy-io/js-sdk-core';
import { PasskeyAuthenticateInputType, CustomMetadataType, SmartWalletType, PrivyCoinbaseOnRampInitInput, PrivyCoinbaseOnRampInitResponse, PrivyCoinbaseOnRampStatusResponse, PrivyTransactionScanningInputType, PrivyTransactionScanningResponseType } from '@privy-io/public-api';
import * as viem from 'viem';
import { Address, HttpTransport } from 'viem';
import * as _simplewebauthn_types from '@simplewebauthn/types';
import { PublicKeyCredentialRequestOptionsJSON } from '@simplewebauthn/types';
import { Cluster } from '@solana/web3.js';
import { FetchOptions } from 'ofetch';
import { P as PrivyEvents } from './useSolanaWallets-CbaQnTe_.js';
export { C as CallbackError, U as UseSolanaWalletsInterface, u as useSolanaWallets } from './useSolanaWallets-CbaQnTe_.js';
import '@coinbase/wallet-sdk';
import '@solana/wallet-adapter-base';
import '@solana/wallet-standard-features';
import '@wallet-standard/base';
import '@wallet-standard/features';
import '@metamask/eth-sig-util';

type MobileWalletConfig = {
    client: WalletClientType;
    name: string;
    isInstalled: boolean;
    installLink: string;
    chainTypes: Array<'ethereum' | 'solana'>;
    getMobileRedirect: (args: {
        useUniversalLink: boolean;
        isSolana: boolean;
        connectOnly: boolean;
    }) => string | undefined;
};

type BaseProxyRequest = {
    accessToken: string;
} & Partial<MfaSubmitArgs>;
type EntropyIdVerifier = 'ethereum-address-verifier' | 'solana-address-verifier';
type BaseWalletsRequestData = BaseProxyRequest & {
    chainType: 'ethereum' | 'solana' | 'bitcoin-taproot' | 'bitcoin-segwit';
};
type CreateSignerRequestDataType = BaseProxyRequest & {
    /** Optional: the user-specified recovery password, replaces recoveryPin */
    recoveryPassword?: string;
    /** Optional: the recovery method to be used for the created wallet */
    recoveryMethod?: UserRecoveryMethod;
    /** Optional: in the case of cloud recovery, the access token to be used to communicated with the cloud provider (eg Google) */
    recoveryAccessToken?: string;
    /** Optional: override the recoverySecret, only for use when we need to store recovery secrets in cloud storage outside of the iframe (eg native) */
    recoverySecretOverride?: string;
    /** Optional: override the iCloudRecordName, only for use when we need to store recovery secrets in cloud storage outside of the iframe (eg native) */
    iCloudRecordNameOverride?: string;
};
type CreateSignerResponseDataType = {
    publicKey: string;
};
type WalletsCreateRequestDataType = BaseWalletsRequestData & {
    /** Optional: the user-specified recovery password, replaces recoveryPin */
    recoveryPassword?: string;
    /** Optional: the recovery method to be used for the created wallet */
    recoveryMethod?: UserRecoveryMethod;
    /** Optional: in the case of cloud recovery, the access token to be used to communicated with the cloud provider (eg Google) */
    recoveryAccessToken?: string;
    /** Optional: override the recoverySecret, only for use when we need to store recovery secrets in cloud storage outside of the iframe (eg native) */
    recoverySecretOverride?: string;
    /** Optional: override the iCloudRecordName, only for use when we need to store recovery secrets in cloud storage outside of the iframe (eg native) */
    iCloudRecordNameOverride?: string;
};
type WalletsCreateResponseDataType = {
    address: string;
};
type UserSignerSignRequestDataType = BaseProxyRequest & {
    /** The message to be signed */
    message: string;
    /** For cross-app requests, the app ID of the requester app */
    requesterAppId?: string | null;
};
type UserSignerSignResponseDataType = {
    /** The signature */
    signature: string;
};
type WalletsAddRequestDataType = BaseWalletsRequestData & {
    /**
     * Key with which to look up the existing entropy
     */
    entropyId: string;
    /**
     * Source of the `entropyId` property. This field determines how the entropyId will
     * be used. Possible values include:
     * - ethereum-address-verifier: the entropyId is the address of the Ethereum wallet derived
     * at index 0 for this entropy
     * - solana-address-verifier: the entropyId is a the address of the Solana wallet derived
     * at index 0 for this entropy
     *
     * When this field is a wallet address, we can verify reconstitution was successful by
     * deriving the specified wallet and comparing the address to the `entropyId`
     */
    entropyIdVerifier: EntropyIdVerifier;
    /**
     * The HD node index at which to create a wallet. Must be >= 1 AND equal to the next
     * index in the sequence, since the primary wallet is created at index 0.
     */
    hdWalletIndex: number;
};
type WalletsAddResponseDataType = {
    address: string;
};
type WalletsSetRecoveryBaseRequestDataType = BaseWalletsRequestData & {
    /**
     * Key with which to look up the existing entropy
     */
    entropyId: string;
    /**
     * Source of the `entropyId` property. This field determines how the entropyId will
     * be used. Possible values include:
     * - ethereum-address-verifier: the entropyId is the address of the Ethereum wallet derived
     * at index 0 for this entropy
     * - solana-address-verifier: the entropyId is a the address of the Solana wallet derived
     * at index 0 for this entropy
     *
     * When this field is a wallet address, we can verify reconstitution was successful by
     * deriving the specified wallet and comparing the address to the `entropyId`
     */
    entropyIdVerifier: EntropyIdVerifier;
    existingRecoveryMethod?: UserRecoveryMethod;
};
type WalletsSetRecoveryPasswordDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'user-passcode';
    recoveryPassword: string;
};
type WalletsSetRecoveryGoogleDriveDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'google-drive';
    recoveryAccessToken: string;
};
type WalletsSetRecoveryICloudDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'icloud';
    recoveryAccessToken: string;
};
type WalletsSetRecoveryICloudNativeDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'icloud-native';
    recoverySecretOverride: string;
    iCloudRecordNameOverride: string;
};
type WalletsSetRecoveryRequestDataType = Omit<WalletsSetRecoveryPasswordDataType, 'chainType'> | Omit<WalletsSetRecoveryGoogleDriveDataType, 'chainType'> | Omit<WalletsSetRecoveryICloudDataType, 'chainType'> | Omit<WalletsSetRecoveryICloudNativeDataType, 'chainType'>;
type WalletsSetRecoveryResponseDataType = {
    entropyId: string;
    /**
     * Source of the `entropyId` property. This field determines how the entropyId will
     * be used. Possible values include:
     * - ethereum-address-verifier: the entropyId is the address of the Ethereum wallet derived
     * at index 0 for this entropy
     * - solana-address-verifier: the entropyId is a the address of the Solana wallet derived
     * at index 0 for this entropy
     *
     * When this field is a wallet address, we can verify reconstitution was successful by
     * deriving the specified wallet and comparing the address to the `entropyId`
     */
    entropyIdVerifier: EntropyIdVerifier;
    recoveryMethod: WalletsSetRecoveryRequestDataType['recoveryMethod'];
};
type WalletsConnectRequestDataType = BaseProxyRequest & {
    /**
     * Key with which to look up the existing entropy
     */
    entropyId: string;
    /**
     * Source of the key with which to look up the existing entropy
     */
    entropyIdVerifier: EntropyIdVerifier;
};
type WalletsConnectResponseDataType = {
    entropyId: string;
};
type WalletsRecoverRequestDataType = BaseProxyRequest & {
    /**
     * Key with which to look up the existing entropy
     */
    entropyId: string;
    /**
     * Source of the `entropyId` property. This field determines how the entropyId will
     * be used. Possible values include:
     * - ethereum-address-verifier: the entropyId is the address of the Ethereum wallet derived
     * at index 0 for this entropy
     * - solana-address-verifier: the entropyId is a the address of the Solana wallet derived
     * at index 0 for this entropy
     *
     * When this field is a wallet address, we can verify reconstitution was successful by
     * deriving the specified wallet and comparing the address to the `entropyId`
     */
    entropyIdVerifier: EntropyIdVerifier;
    /** Optional: the user-specified recovery password, replaces recoveryPin */
    recoveryPassword?: string;
    /** Optional: the recovery encryption key */
    recoveryKey?: string;
    /** Optional: in the case of cloud recovery, the access token to be used to communicated with the cloud provider (eg Google) */
    recoveryAccessToken?: string;
    /** Optional: override the recoverySecret, only for use when we need to retrieve recovery secrets in cloud storage outside of the iframe (eg native) */
    recoverySecretOverride?: string;
};
type WalletsRecoverResponseDataType = {
    entropyId: string;
};
type WalletsRpcEthereumRequestDataType = {
    chainType: 'ethereum';
    request: EthereumRpcRequestType;
};
type WalletsRpcSolanaRequestDataType = {
    chainType: 'solana';
    request: SolanaRpcRequestType;
};
type WalletsRpcBitcoinRequestDataType = {
    chainType: 'bitcoin-taproot' | 'bitcoin-segwit';
    request: unknown;
};
type WalletsRpcRequestDataType = BaseWalletsRequestData & {
    /**
     * Key with which to look up the existing entropy
     */
    entropyId: string;
    /**
     * Source of the `entropyId` property. This field determines how the entropyId will
     * be used. Possible values include:
     * - ethereum-address-verifier: the entropyId is the address of the Ethereum wallet derived
     * at index 0 for this entropy
     * - solana-address-verifier: the entropyId is a the address of the Solana wallet derived
     * at index 0 for this entropy
     *
     * When this field is a wallet address, we can verify reconstitution was successful by
     * deriving the specified wallet and comparing the address to the `entropyId`
     */
    entropyIdVerifier: EntropyIdVerifier;
    /**
     * The HD node index of the wallet to use for this request.
     */
    hdWalletIndex: number;
    /** For cross-app requests, the app ID of the requester app */
    requesterAppId?: string | null;
} & (WalletsRpcEthereumRequestDataType | WalletsRpcSolanaRequestDataType | WalletsRpcBitcoinRequestDataType);
type WalletsRpcEthereumResponseDataType = {
    chainType: 'ethereum';
    response: EthereumRpcResponseType;
};
type WalletsRpcSolanaResponseDataType = {
    chainType: 'solana';
    response: SolanaRpcResponseType;
};
type WalletsRpcBitcoinResponseDataType = {
    chainType: 'bitcoin-taproot' | 'bitcoin-segwit';
    response: unknown;
};
type WalletsRpcResponseDataType = {
    address: string;
} & (WalletsRpcEthereumResponseDataType | WalletsRpcSolanaResponseDataType | WalletsRpcBitcoinResponseDataType);
type BaseWalletCreateRequestDataType = {
    accessToken: string;
};
type BaseWalletCreateWithUserControlledRecoveryDataType = {
    recoveryPassword?: string;
    recoveryMethod?: UserRecoveryMethod;
    recoveryAccessToken?: string;
    /**
     * Will be deprecated in a future release, use `recoveryPassword` instead
     * @deprecated
     */
    recoveryPin?: string;
};
type EthereumWalletCreateRequestDataType = BaseWalletCreateRequestDataType & BaseWalletCreateWithUserControlledRecoveryDataType & {
    /**
     * If a user has an existing Solana embedded wallet when creating the Ethereum wallet, that address
     * MUST be passed in this field. Our iframe will use this address to derive the Ethereum embedded wallet from the
     * same entropy as the Solana wallet.
     *
     * If no address is passed here, our iframe assumes that the user has no existing Solana wallet and will create
     * a new set of entropy for Ethereum.
     */
    solanaAddress?: string;
};
type WalletCreateResponseDataType = {
    address: string;
};
type SolanaWalletCreateRequestDataType = BaseWalletCreateRequestDataType & BaseWalletCreateWithUserControlledRecoveryDataType & {
    /**
     * If a user has an existing Ethereum embedded wallet when creating the Solana embedded wallet, that address
     * MUST be passed in this field. Our iframe will use this address to derive the Solana embedded wallet from the
     * same entropy as the Ethereum wallet.
     *
     * If no address is passed here, our iframe assumes that the user has no existing Ethereum wallet and will create
     * a new set of entropy for Solana.
     */
    ethereumAddress?: string;
};
type SolanaWalletCreateResponseDataType = {
    publicKey: string;
};
type WalletsImportRequestDataType = BaseWalletsRequestData & {
    privateKey: string;
    chainType: 'ethereum' | 'solana';
};
type WalletsImportResponseDataType = {
    address: string;
};
type MfaVerifyRequestDataType = {
    accessToken: string;
};
type MfaVerifyResponseDataType = Record<string, never>;
type MfaInitEnrollmentRequestDataType = {
    accessToken: string;
    method: 'sms';
    phoneNumber: string;
} | {
    accessToken: string;
    method: 'totp';
};
type MfaInitEnrollmentResponseDataType = {
    method: string;
    secret?: string;
    authUrl?: string;
};
type MfaSubmitEnrollmentRequestDataType = {
    accessToken: string;
    method: 'sms';
    code: string;
    phoneNumber: string;
} | {
    accessToken: string;
    method: 'totp';
    code: string;
} | {
    accessToken: string;
    method: 'passkey';
    credentialIds: string[];
    removeForLogin?: boolean;
};
type MfaSubmitEnrollmentResponseDataType = Record<string, never>;
type MfaUnenrollRequestDataType = {
    accessToken: string;
    method: 'sms' | 'totp';
};
type MfaUnenrollResponseDataType = Record<string, never>;
type MfaClearRequestDataType = {
    userId: string;
};
type MfaClearResponseDataType = Record<string, never>;
type AuthUnlinkPasskeyRequestDataType = {
    accessToken: string;
    credentialId: string;
    removeAsMfa?: boolean;
};
type AuthUnlinkPasskeyResponseDataType = Record<string, never>;
type FarcasterSignerInitRequestDataType = {
    address: string;
    hdWalletIndex: number | null;
    accessToken: string;
    mfaCode: string | PasskeyAuthenticateInputType['authenticator_response'] | null;
    mfaMethod: string | null;
    relyingParty: string;
};
type FarcasterSignerInitResponseDataType = PrivyFarcasterSignerInitResponse;
type FarcasterSignRequestDataType = {
    address: string;
    hdWalletIndex: number | null;
    accessToken: string;
    mfaCode: string | PasskeyAuthenticateInputType['authenticator_response'] | null;
    mfaMethod: string | null;
    relyingParty: string;
    payload: {
        hash: string;
    };
    fid: bigint;
};
type FarcasterSignResponseDataType = {
    hash: string;
    signature: string;
};
type RootWalletForDelegation = {
    /** Address of the root wallet for the entropy being delegated. */
    address: string;
    /** Chain type of the root wallet for the entropy being delegated. */
    chainType: 'ethereum' | 'solana';
    /** Whether or not the root wallet for the entropy being delegated is imported. */
    imported: boolean;
};
type DelegatedWallet = {
    /** Address for a wallet to delegate. */
    address: string;
    /** Chain type for a wallet to delegate. */
    chainType: 'ethereum' | 'solana';
    /** HD index for the wallet to delegate. */
    walletIndex: number;
};
type DelegatedActionsConsentRequestDataType = {
    /** Access token for the user */
    accessToken: string;
    /**  Root wallet to delegate, which is the wallet at HD index 0 for the entropy. */
    rootWallet: RootWalletForDelegation;
    /**  Wallets to delegate, whose entropy is the same as `rootWallet`'s. */
    delegatedWallets: DelegatedWallet[];
};
type DelegatedActionsConsentResponseDataType = {
    success: boolean;
};
declare const PrivyIframeErrorTypes: readonly ["error", "invalid_request_arguments", "wallet_not_on_device", "invalid_recovery_pin", "insufficient_funds", "missing_or_invalid_mfa", "mfa_verification_max_attempts_reached", "mfa_timeout", "twilio_verification_failed"];
type PrivyIframeErrorTypesType = (typeof PrivyIframeErrorTypes)[number];
interface EmbeddedWalletProxy {
    createSigner: (data: CreateSignerRequestDataType) => Promise<CreateSignerResponseDataType>;
    signWithUserSigner: (data: UserSignerSignRequestDataType) => Promise<UserSignerSignResponseDataType>;
    createWallet: (data: WalletsCreateRequestDataType) => Promise<WalletsCreateResponseDataType>;
    addWallet: (data: WalletsAddRequestDataType) => Promise<WalletsAddResponseDataType>;
    importWallet: (data: WalletsImportRequestDataType) => Promise<WalletsImportResponseDataType>;
    setRecovery: (data: WalletsSetRecoveryRequestDataType) => Promise<WalletsSetRecoveryResponseDataType>;
    connect: (data: WalletsConnectRequestDataType) => Promise<WalletsConnectResponseDataType>;
    recover: (data: WalletsRecoverRequestDataType) => Promise<WalletsRecoverResponseDataType>;
    rpc(data: WalletsRpcRequestDataType & {
        chainType: 'ethereum';
    }): Promise<WalletsRpcResponseDataType & {
        chainType: 'ethereum';
    }>;
    rpc(data: WalletsRpcRequestDataType & {
        chainType: 'solana';
    }): Promise<WalletsRpcResponseDataType & {
        chainType: 'solana';
    }>;
    rpc(data: WalletsRpcRequestDataType & {
        chainType: 'bitcoin-taproot';
    }): Promise<WalletsRpcResponseDataType & {
        chainType: 'bitcoin-taproot';
    }>;
    rpc(data: WalletsRpcRequestDataType & {
        chainType: 'bitcoin-segwit';
    }): Promise<WalletsRpcResponseDataType & {
        chainType: 'bitcoin-segwit';
    }>;
    /** @deprecated */
    create: (data: EthereumWalletCreateRequestDataType) => Promise<WalletCreateResponseDataType>;
    /** @deprecated */
    createSolana: (data: SolanaWalletCreateRequestDataType) => Promise<SolanaWalletCreateResponseDataType>;
    createDelegatedAction: (data: DelegatedActionsConsentRequestDataType) => Promise<DelegatedActionsConsentResponseDataType>;
    verifyMfa: (data: MfaVerifyRequestDataType) => Promise<MfaVerifyResponseDataType>;
    initEnrollMfa: (data: MfaInitEnrollmentRequestDataType) => Promise<MfaInitEnrollmentResponseDataType>;
    submitEnrollMfa: (data: MfaSubmitEnrollmentRequestDataType) => Promise<MfaSubmitEnrollmentResponseDataType>;
    unenrollMfa: (data: MfaUnenrollRequestDataType) => Promise<MfaUnenrollResponseDataType>;
    clearMfa: (data: MfaClearRequestDataType) => Promise<MfaClearResponseDataType>;
    unlinkPasskeyAccount(data: AuthUnlinkPasskeyRequestDataType): Promise<AuthUnlinkPasskeyResponseDataType>;
    initFarcasterSigner: (data: FarcasterSignerInitRequestDataType) => Promise<FarcasterSignerInitResponseDataType>;
    signFarcasterMessage: (data: FarcasterSignRequestDataType) => Promise<FarcasterSignResponseDataType>;
}

declare function getCustomerAccessToken(): Promise<string | null>;
/**
 * Properties to initialize the {@link PrivyProvider}.
 */
interface PrivyProviderProps {
    /** Your Privy App ID, which can be retrieved from the Privy dashboard. */
    appId: string;
    /** Your Privy App Client ID, which can be retrieved from the Privy dashboard. */
    clientId?: string;
    /**
     * Client configuration options.
     * Values here will override their server-configuration counterparts.
     */
    config?: PrivyClientConfig;
    /**
     * @ignore
     * @class
     */
    children: react__default.ReactNode;
}
/**
 * Passes the Privy authentication context to your React components.
 *
 * This should wrap any components that will to use the Privy SDK via the {@link usePrivy} hook. As an example:
 *
 * ```typescript
 * // At your application root (e.g. `_app.tsx` in NextJS):
 * import {PrivyProvider} from '@privy-io/react-auth';
 *
 * <PrivyProvider appId="APP_ID_FROM_DASHBOARD" onSuccess={() => console.log('Success!')}>
 *   <Component {...pageProps} />
 * </PrivyProvider>
 * ```
 *
 */
declare const PrivyProvider: ({ config, ...props }: PrivyProviderProps) => JSX.Element;

type CaptchaProps = Partial<Pick<TurnstileProps, 'onUnsupported' | 'onError' | 'onSuccess' | 'onExpire' | 'onSubmit'>> & {
    delayedExecution?: boolean;
};
/**
 * Used to render an invisible captcha alongside important forms
 *
 * Notes:
 * - **Only for internal use, or use with headless SDK** _(the Privy modal handles captchas internally with this component)_
 * - Only one `<Captcha />` should be rendered at a time, since it injects/removes a global script
 * - the state of the captcha workflow can be accessed using `useCaptcha`
 * - wrapper around [marsidev/react-turnstile](https://github.com/marsidev/react-turnstile), _accepts same [props](https://docs.page/marsidev/react-turnstile/props)_
 */
declare const Captcha: ({ delayedExecution, ...props }: CaptchaProps) => react_jsx_runtime.JSX.Element | null;

/**
 * Build a viem public client for a given chainId if it is one of our
 * supported chains.
 */
declare const getPublicClient: (chainId: number, chains: Chain[], rpcConfig: RpcConfig, options: {
    appId: string;
}) => {
    account: {
        address: `0x${string}`;
        type: "json-rpc";
    };
    batch?: viem.ClientConfig["batch"] | undefined;
    cacheTime: number;
    ccipRead?: viem.ClientConfig["ccipRead"] | undefined;
    chain: Chain;
    key: string;
    name: string;
    pollingInterval: number;
    request: viem.EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: viem.Hash];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_blobBaseFee";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_call";
        Parameters: readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier, stateOverrideSet: viem.RpcStateOverride] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier, stateOverrideSet: viem.RpcStateOverride, blockOverrides: viem.RpcBlockOverrides];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_createAccessList";
        Parameters: [transaction: viem.ExactPartial<viem.RpcTransactionRequest>] | [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: {
            accessList: viem.AccessList;
            gasUsed: viem.Quantity;
        };
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: Address;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: viem.RpcTransactionRequest] | [transaction: viem.RpcTransactionRequest, block: viem.RpcBlockNumber | viem.BlockTag] | [transaction: viem.RpcTransactionRequest, block: viem.RpcBlockNumber | viem.BlockTag, stateOverride: viem.RpcStateOverride];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: viem.Quantity, newestBlock: viem.RpcBlockNumber | viem.BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: viem.RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: viem.Hash, includeTransactionObjects: boolean];
        ReturnType: viem.RpcBlock | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, includeTransactionObjects: boolean];
        ReturnType: viem.RpcBlock | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getCode";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: viem.Quantity];
        ReturnType: viem.RpcLog[] | viem.Hex[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: viem.Quantity];
        ReturnType: viem.RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: Address | Address[] | undefined;
            topics?: viem.LogTopic[] | undefined;
        } & ({
            fromBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            toBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: viem.Hash | undefined;
        })];
        ReturnType: viem.RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: Address, storageKeys: viem.Hash[], block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: Address, index: viem.Quantity, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: viem.Hash, index: viem.Quantity];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, index: viem.Quantity];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: viem.Hash, index: viem.Quantity];
        ReturnType: viem.RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, index: viem.Quantity];
        ReturnType: viem.RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            toBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            address?: Address | Address[] | undefined;
            topics?: viem.LogTopic[] | undefined;
        }];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: viem.Hex];
        ReturnType: viem.Hash;
    }, {
        Method: "eth_simulateV1";
        Parameters: [{
            blockStateCalls: readonly {
                blockOverrides?: viem.RpcBlockOverrides | undefined;
                calls?: readonly viem.ExactPartial<viem.RpcTransactionRequest>[] | undefined;
                stateOverrides?: viem.RpcStateOverride | undefined;
            }[];
            returnFullTransactions?: boolean | undefined;
            traceTransfers?: boolean | undefined;
            validation?: boolean | undefined;
        }, viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: readonly (viem.RpcBlock & {
            calls: readonly {
                error?: {
                    data?: viem.Hex | undefined;
                    code: number;
                    message: string;
                } | undefined;
                logs?: readonly viem.RpcLog[] | undefined;
                gasUsed: viem.Hex;
                returnData: viem.Hex;
                status: viem.Hex;
            }[];
        })[];
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: viem.Quantity];
        ReturnType: boolean;
    }, ...{
        Method: string;
        Parameters?: unknown | undefined;
        ReturnType: unknown;
    }[]]>;
    transport: viem.TransportConfig<"http", viem.EIP1193RequestFn> & {
        fetchOptions?: viem.HttpTransportConfig["fetchOptions"] | undefined;
        url?: string | undefined;
    };
    type: string;
    uid: string;
    call: (parameters: viem.CallParameters<Chain>) => Promise<viem.CallReturnType>;
    createAccessList: (parameters: viem.CreateAccessListParameters<Chain>) => Promise<viem.CreateAccessListReturnType>;
    createBlockFilter: () => Promise<viem.CreateBlockFilterReturnType>;
    createContractEventFilter: <const abi extends viem.Abi | readonly unknown[], eventName extends viem.ContractEventName<abi> | undefined, args extends viem.MaybeExtractEventArgsFromAbi<abi, eventName> | undefined, strict extends boolean | undefined = undefined, fromBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined, toBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined>(args: viem.CreateContractEventFilterParameters<abi, eventName, args, strict, fromBlock, toBlock>) => Promise<viem.CreateContractEventFilterReturnType<abi, eventName, args, strict, fromBlock, toBlock>>;
    createEventFilter: <const abiEvent extends viem.AbiEvent | undefined = undefined, const abiEvents extends readonly viem.AbiEvent[] | readonly unknown[] | undefined = abiEvent extends viem.AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined, toBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined, _EventName extends string | undefined = viem.MaybeAbiEventName<abiEvent>, _Args extends viem.MaybeExtractEventArgsFromAbi<abiEvents, _EventName> | undefined = undefined>(args?: viem.CreateEventFilterParameters<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args> | undefined) => Promise<viem.CreateEventFilterReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args>>;
    createPendingTransactionFilter: () => Promise<viem.CreatePendingTransactionFilterReturnType>;
    estimateContractGas: <chain extends viem.Chain | undefined, const abi extends viem.Abi | readonly unknown[], functionName extends viem.ContractFunctionName<abi, "nonpayable" | "payable">, args extends viem.ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>>(args: viem.EstimateContractGasParameters<abi, functionName, args, chain>) => Promise<viem.EstimateContractGasReturnType>;
    estimateGas: (args: viem.EstimateGasParameters<Chain>) => Promise<viem.EstimateGasReturnType>;
    getBalance: (args: viem.GetBalanceParameters) => Promise<viem.GetBalanceReturnType>;
    getBlobBaseFee: () => Promise<viem.GetBlobBaseFeeReturnType>;
    getBlock: <includeTransactions extends boolean = false, blockTag extends viem.BlockTag = "latest">(args?: viem.GetBlockParameters<includeTransactions, blockTag> | undefined) => Promise<viem.GetBlockReturnType<Chain, includeTransactions, blockTag>>;
    getBlockNumber: (args?: viem.GetBlockNumberParameters | undefined) => Promise<viem.GetBlockNumberReturnType>;
    getBlockTransactionCount: (args?: viem.GetBlockTransactionCountParameters | undefined) => Promise<viem.GetBlockTransactionCountReturnType>;
    getBytecode: (args: viem.GetBytecodeParameters) => Promise<viem.GetBytecodeReturnType>;
    getChainId: () => Promise<viem.GetChainIdReturnType>;
    getCode: (args: viem.GetBytecodeParameters) => Promise<viem.GetBytecodeReturnType>;
    getContractEvents: <const abi extends viem.Abi | readonly unknown[], eventName extends viem.ContractEventName<abi> | undefined = undefined, strict extends boolean | undefined = undefined, fromBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined, toBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined>(args: viem.GetContractEventsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<viem.GetContractEventsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
    getEip712Domain: (args: viem.GetEip712DomainParameters) => Promise<viem.GetEip712DomainReturnType>;
    getEnsAddress: (args: viem.GetEnsAddressParameters) => Promise<viem.GetEnsAddressReturnType>;
    getEnsAvatar: (args: viem.GetEnsAvatarParameters) => Promise<viem.GetEnsAvatarReturnType>;
    getEnsName: (args: viem.GetEnsNameParameters) => Promise<viem.GetEnsNameReturnType>;
    getEnsResolver: (args: viem.GetEnsResolverParameters) => Promise<viem.GetEnsResolverReturnType>;
    getEnsText: (args: viem.GetEnsTextParameters) => Promise<viem.GetEnsTextReturnType>;
    getFeeHistory: (args: viem.GetFeeHistoryParameters) => Promise<viem.GetFeeHistoryReturnType>;
    estimateFeesPerGas: <chainOverride extends viem.Chain | undefined = undefined, type extends viem.FeeValuesType = "eip1559">(args?: viem.EstimateFeesPerGasParameters<Chain, chainOverride, type> | undefined) => Promise<viem.EstimateFeesPerGasReturnType<type>>;
    getFilterChanges: <filterType extends viem.FilterType, const abi extends viem.Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined, toBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined>(args: viem.GetFilterChangesParameters<filterType, abi, eventName, strict, fromBlock, toBlock>) => Promise<viem.GetFilterChangesReturnType<filterType, abi, eventName, strict, fromBlock, toBlock>>;
    getFilterLogs: <const abi extends viem.Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined, toBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined>(args: viem.GetFilterLogsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<viem.GetFilterLogsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
    getGasPrice: () => Promise<viem.GetGasPriceReturnType>;
    getLogs: <const abiEvent extends viem.AbiEvent | undefined = undefined, const abiEvents extends readonly viem.AbiEvent[] | readonly unknown[] | undefined = abiEvent extends viem.AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined, toBlock extends viem.BlockNumber | viem.BlockTag | undefined = undefined>(args?: viem.GetLogsParameters<abiEvent, abiEvents, strict, fromBlock, toBlock> | undefined) => Promise<viem.GetLogsReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock>>;
    getProof: (args: viem.GetProofParameters) => Promise<viem.GetProofReturnType>;
    estimateMaxPriorityFeePerGas: <chainOverride extends viem.Chain | undefined = undefined>(args?: {
        chain?: chainOverride | null | undefined;
    } | undefined) => Promise<viem.EstimateMaxPriorityFeePerGasReturnType>;
    getStorageAt: (args: viem.GetStorageAtParameters) => Promise<viem.GetStorageAtReturnType>;
    getTransaction: <blockTag extends viem.BlockTag = "latest">(args: viem.GetTransactionParameters<blockTag>) => Promise<viem.GetTransactionReturnType<Chain, blockTag>>;
    getTransactionConfirmations: (args: viem.GetTransactionConfirmationsParameters<Chain>) => Promise<viem.GetTransactionConfirmationsReturnType>;
    getTransactionCount: (args: viem.GetTransactionCountParameters) => Promise<viem.GetTransactionCountReturnType>;
    getTransactionReceipt: (args: viem.GetTransactionReceiptParameters) => Promise<viem.GetTransactionReceiptReturnType<Chain>>;
    multicall: <const contracts extends readonly unknown[], allowFailure extends boolean = true>(args: viem.MulticallParameters<contracts, allowFailure>) => Promise<viem.MulticallReturnType<contracts, allowFailure>>;
    prepareTransactionRequest: <const request extends viem.PrepareTransactionRequestRequest<Chain, chainOverride>, chainOverride extends viem.Chain | undefined = undefined, accountOverride extends viem.Account | Address | undefined = undefined>(args: viem.PrepareTransactionRequestParameters<Chain, viem.Account | undefined, chainOverride, accountOverride, request>) => Promise<viem.PrepareTransactionRequestReturnType<Chain, viem.Account | undefined, chainOverride, accountOverride, request>>;
    readContract: <const abi extends viem.Abi | readonly unknown[], functionName extends viem.ContractFunctionName<abi, "pure" | "view">, const args extends viem.ContractFunctionArgs<abi, "pure" | "view", functionName>>(args: viem.ReadContractParameters<abi, functionName, args>) => Promise<viem.ReadContractReturnType<abi, functionName, args>>;
    sendRawTransaction: (args: viem.SendRawTransactionParameters) => Promise<viem.SendRawTransactionReturnType>;
    simulate: <const calls extends readonly unknown[]>(args: viem.SimulateBlocksParameters<calls>) => Promise<viem.SimulateBlocksReturnType<calls>>;
    simulateBlocks: <const calls extends readonly unknown[]>(args: viem.SimulateBlocksParameters<calls>) => Promise<viem.SimulateBlocksReturnType<calls>>;
    simulateCalls: <const calls extends readonly unknown[]>(args: viem.SimulateCallsParameters<calls>) => Promise<viem.SimulateCallsReturnType<calls>>;
    simulateContract: <const abi extends viem.Abi | readonly unknown[], functionName extends viem.ContractFunctionName<abi, "nonpayable" | "payable">, const args_1 extends viem.ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>, chainOverride extends viem.Chain | undefined, accountOverride extends viem.Account | Address | undefined = undefined>(args: viem.SimulateContractParameters<abi, functionName, args_1, Chain, chainOverride, accountOverride>) => Promise<viem.SimulateContractReturnType<abi, functionName, args_1, Chain, viem.Account | undefined, chainOverride, accountOverride>>;
    verifyMessage: (args: viem.VerifyMessageActionParameters) => Promise<viem.VerifyMessageActionReturnType>;
    verifySiweMessage: (args: {
        blockNumber?: bigint | undefined;
        blockTag?: viem.BlockTag | undefined;
        address?: Address | undefined;
        domain?: string | undefined;
        nonce?: string | undefined;
        scheme?: string | undefined;
        time?: Date | undefined;
        message: string;
        signature: viem.Hex;
    }) => Promise<boolean>;
    verifyTypedData: (args: viem.VerifyTypedDataActionParameters) => Promise<viem.VerifyTypedDataActionReturnType>;
    uninstallFilter: (args: viem.UninstallFilterParameters) => Promise<viem.UninstallFilterReturnType>;
    waitForTransactionReceipt: (args: viem.WaitForTransactionReceiptParameters<Chain>) => Promise<viem.WaitForTransactionReceiptReturnType<Chain>>;
    watchBlockNumber: (args: viem.WatchBlockNumberParameters) => viem.WatchBlockNumberReturnType;
    watchBlocks: <includeTransactions extends boolean = false, blockTag extends viem.BlockTag = "latest">(args: viem.WatchBlocksParameters<HttpTransport, Chain, includeTransactions, blockTag>) => viem.WatchBlocksReturnType;
    watchContractEvent: <const abi extends viem.Abi | readonly unknown[], eventName extends viem.ContractEventName<abi>, strict extends boolean | undefined = undefined>(args: viem.WatchContractEventParameters<abi, eventName, strict, HttpTransport>) => viem.WatchContractEventReturnType;
    watchEvent: <const abiEvent extends viem.AbiEvent | undefined = undefined, const abiEvents extends readonly viem.AbiEvent[] | readonly unknown[] | undefined = abiEvent extends viem.AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined>(args: viem.WatchEventParameters<abiEvent, abiEvents, strict, HttpTransport>) => viem.WatchEventReturnType;
    watchPendingTransactions: (args: viem.WatchPendingTransactionsParameters<HttpTransport>) => viem.WatchPendingTransactionsReturnType;
    extend: <const client extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } & viem.ExactPartial<Pick<viem.PublicActions<HttpTransport, Chain, {
        address: `0x${string}`;
        type: "json-rpc";
    }>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<viem.WalletActions<Chain, {
        address: `0x${string}`;
        type: "json-rpc";
    }>, "sendTransaction" | "writeContract">>>(fn: (client: viem.Client<HttpTransport, Chain, {
        address: `0x${string}`;
        type: "json-rpc";
    }, [{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: viem.Hash];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_blobBaseFee";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_call";
        Parameters: readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier, stateOverrideSet: viem.RpcStateOverride] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier, stateOverrideSet: viem.RpcStateOverride, blockOverrides: viem.RpcBlockOverrides];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_createAccessList";
        Parameters: [transaction: viem.ExactPartial<viem.RpcTransactionRequest>] | [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: {
            accessList: viem.AccessList;
            gasUsed: viem.Quantity;
        };
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: Address;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: viem.RpcTransactionRequest] | [transaction: viem.RpcTransactionRequest, block: viem.RpcBlockNumber | viem.BlockTag] | [transaction: viem.RpcTransactionRequest, block: viem.RpcBlockNumber | viem.BlockTag, stateOverride: viem.RpcStateOverride];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: viem.Quantity, newestBlock: viem.RpcBlockNumber | viem.BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: viem.RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: viem.Hash, includeTransactionObjects: boolean];
        ReturnType: viem.RpcBlock | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, includeTransactionObjects: boolean];
        ReturnType: viem.RpcBlock | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getCode";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: viem.Quantity];
        ReturnType: viem.RpcLog[] | viem.Hex[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: viem.Quantity];
        ReturnType: viem.RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: Address | Address[] | undefined;
            topics?: viem.LogTopic[] | undefined;
        } & ({
            fromBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            toBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: viem.Hash | undefined;
        })];
        ReturnType: viem.RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: Address, storageKeys: viem.Hash[], block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: Address, index: viem.Quantity, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: viem.Hash, index: viem.Quantity];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, index: viem.Quantity];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: viem.Hash, index: viem.Quantity];
        ReturnType: viem.RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, index: viem.Quantity];
        ReturnType: viem.RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            toBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            address?: Address | Address[] | undefined;
            topics?: viem.LogTopic[] | undefined;
        }];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: viem.Hex];
        ReturnType: viem.Hash;
    }, {
        Method: "eth_simulateV1";
        Parameters: [{
            blockStateCalls: readonly {
                blockOverrides?: viem.RpcBlockOverrides | undefined;
                calls?: readonly viem.ExactPartial<viem.RpcTransactionRequest>[] | undefined;
                stateOverrides?: viem.RpcStateOverride | undefined;
            }[];
            returnFullTransactions?: boolean | undefined;
            traceTransfers?: boolean | undefined;
            validation?: boolean | undefined;
        }, viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: readonly (viem.RpcBlock & {
            calls: readonly {
                error?: {
                    data?: viem.Hex | undefined;
                    code: number;
                    message: string;
                } | undefined;
                logs?: readonly viem.RpcLog[] | undefined;
                gasUsed: viem.Hex;
                returnData: viem.Hex;
                status: viem.Hex;
            }[];
        })[];
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: viem.Quantity];
        ReturnType: boolean;
    }, ...{
        Method: string;
        Parameters?: unknown | undefined;
        ReturnType: unknown;
    }[]], viem.PublicActions<HttpTransport, Chain>>) => client) => viem.Client<HttpTransport, Chain, {
        address: `0x${string}`;
        type: "json-rpc";
    }, [{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: viem.Hash];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_blobBaseFee";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_call";
        Parameters: readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier, stateOverrideSet: viem.RpcStateOverride] | readonly [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier, stateOverrideSet: viem.RpcStateOverride, blockOverrides: viem.RpcBlockOverrides];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_createAccessList";
        Parameters: [transaction: viem.ExactPartial<viem.RpcTransactionRequest>] | [transaction: viem.ExactPartial<viem.RpcTransactionRequest>, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: {
            accessList: viem.AccessList;
            gasUsed: viem.Quantity;
        };
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: Address;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: viem.RpcTransactionRequest] | [transaction: viem.RpcTransactionRequest, block: viem.RpcBlockNumber | viem.BlockTag] | [transaction: viem.RpcTransactionRequest, block: viem.RpcBlockNumber | viem.BlockTag, stateOverride: viem.RpcStateOverride];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: viem.Quantity, newestBlock: viem.RpcBlockNumber | viem.BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: viem.RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: viem.Hash, includeTransactionObjects: boolean];
        ReturnType: viem.RpcBlock | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, includeTransactionObjects: boolean];
        ReturnType: viem.RpcBlock | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getCode";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: viem.Quantity];
        ReturnType: viem.RpcLog[] | viem.Hex[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: viem.Quantity];
        ReturnType: viem.RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: Address | Address[] | undefined;
            topics?: viem.LogTopic[] | undefined;
        } & ({
            fromBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            toBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: viem.Hash | undefined;
        })];
        ReturnType: viem.RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: Address, storageKeys: viem.Hash[], block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: Address, index: viem.Quantity, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Hex;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: viem.Hash, index: viem.Quantity];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, index: viem.Quantity];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.RpcTransaction | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: Address, block: viem.RpcBlockNumber | viem.BlockTag | viem.RpcBlockIdentifier];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: viem.Hash, index: viem.Quantity];
        ReturnType: viem.RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag, index: viem.Quantity];
        ReturnType: viem.RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: viem.Hash];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            toBlock?: viem.RpcBlockNumber | viem.BlockTag | undefined;
            address?: Address | Address[] | undefined;
            topics?: viem.LogTopic[] | undefined;
        }];
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: viem.Quantity;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: viem.Hex];
        ReturnType: viem.Hash;
    }, {
        Method: "eth_simulateV1";
        Parameters: [{
            blockStateCalls: readonly {
                blockOverrides?: viem.RpcBlockOverrides | undefined;
                calls?: readonly viem.ExactPartial<viem.RpcTransactionRequest>[] | undefined;
                stateOverrides?: viem.RpcStateOverride | undefined;
            }[];
            returnFullTransactions?: boolean | undefined;
            traceTransfers?: boolean | undefined;
            validation?: boolean | undefined;
        }, viem.RpcBlockNumber | viem.BlockTag];
        ReturnType: readonly (viem.RpcBlock & {
            calls: readonly {
                error?: {
                    data?: viem.Hex | undefined;
                    code: number;
                    message: string;
                } | undefined;
                logs?: readonly viem.RpcLog[] | undefined;
                gasUsed: viem.Hex;
                returnData: viem.Hex;
                status: viem.Hex;
            }[];
        })[];
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: viem.Quantity];
        ReturnType: boolean;
    }, ...{
        Method: string;
        Parameters?: unknown | undefined;
        ReturnType: unknown;
    }[]], viem.Prettify<client> & (viem.PublicActions<HttpTransport, Chain> extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } ? viem.PublicActions<HttpTransport, Chain> : unknown)>;
};
type PublicClient = ReturnType<typeof getPublicClient>;

declare class Embedded1193Provider extends EventEmitter implements EIP1193Provider {
    walletProxy: EmbeddedWalletProxy;
    /** Address of the embedded wallet that this provider corresponds to. */
    address: string;
    publicClient: PublicClient;
    chainId: number;
    rpcConfig: RpcConfig;
    chains: Chain[];
    rpcTimeoutDuration: number;
    appId: string;
    /** Address of the user's embedded wallet at HD index 0. This is required to make RPC requests to the iframe. */
    entropyId: string;
    /**
     * Source of the `entropyId` property. This field determines how the entropyId will
     * be used. Possible values include:
     * - ethereum-address-verifier: the entropyId is the address of the Ethereum wallet derived
     * at index 0 for this entropy
     * - solana-address-verifier: the entropyId is a the address of the Solana wallet derived
     * at index 0 for this entropy
     *
     * When this field is a wallet address, we can verify reconstitution was successful by
     * deriving the specified wallet and comparing the address to the `entropyId`
     */
    entropyIdVerifier: EntropyIdVerifier$1;
    /**
     * HD index of the embedded wallet that this provider corresponds to, if this is an HD wallet. This is required to make RPC
     * requests to the iframe. If this is an imported wallet, the `walletIndex` is defined as 0 (and is handled as such by the iframe).
     */
    walletIndex: number;
    /** The wallet account object for the wallet that this provider corresponds to. */
    walletAccount?: HDWalletWithMetadata;
    /** The Privy client instance from the core library. */
    privyClient?: Privy;
    constructor({ walletProxy, address, entropyId, entropyIdVerifier, rpcConfig, chains, appId, chainId, walletIndex, privyClient, walletAccount, }: {
        walletProxy: EmbeddedWalletProxy;
        address: string;
        entropyId: string;
        entropyIdVerifier: EntropyIdVerifier$1;
        rpcConfig: RpcConfig;
        chains: Chain[];
        appId: string;
        chainId: number;
        walletIndex: number;
        privyClient?: Privy;
        walletAccount?: HDWalletWithMetadata;
    });
    handleSendTransaction(args: RequestArguments): Promise<string>;
    private handleSignTransaction;
    private handleSwitchEthereumChain;
    private handlePersonalSign;
    private handleSignedTypedData;
    private handleEstimateGas;
    request(args: RequestArguments): Promise<unknown>;
    private handleWalletApiRequest;
}

declare global {
    interface Window {
        ethereum?: any;
    }
}
/**
 * @hidden
 *
 * The PrivyProxyProvider adds a middleware layer on top of the underlying wallet provider.
 * */
declare class PrivyProxyProvider implements EIP1193Provider {
    rpcTimeoutDuration: number;
    walletProvider?: EIP1193Provider;
    private _subscriptions;
    constructor(walletProvider?: EIP1193Provider, rpcTimeoutDuration?: number);
    on(eventName: string, listener: (...args: any[]) => void): any;
    request(request: {
        method: string;
        params?: any[] | undefined;
    }): Promise<any>;
    removeListener: (eventName: string | symbol, listener: (...args: any[]) => void) => any;
    walletTimeout: (error?: WalletTimeoutError, timeoutMs?: number) => Promise<string[]>;
    setWalletProvider: (provider: EIP1193Provider) => void;
}

declare abstract class EthereumWalletConnector extends WalletConnector {
    wallets: BaseConnectedEthereumWallet[];
    chains: Chain[];
    defaultChain: Chain;
    rpcConfig: RpcConfig;
    rpcTimeoutDuration: number;
    chainType: "ethereum";
    abstract proxyProvider: PrivyProxyProvider | Embedded1193Provider;
    constructor(walletClientType: WalletClientType, chains: Chain[], defaultChain: Chain, rpcConfig: RpcConfig);
    /**
     * Builds a connected wallet object to be exposed to the developer. This object
     * contains the address, chainId, and a few helper methods.
     *
     * Provider methods share the PrivyProxyProvider instance. This means that multiple
     * wallets may share the same provider if one wallet was disconnected and another
     * wallet was connected.
     *
     * A wallet is considered connected if it is present in the wallets array and is
     * in a connected state.
     */
    buildConnectedWallet(address: string, chainId: string, meta: ConnectedWalletMetadata, imported: boolean): BaseConnectedEthereumWallet;
    /**
     * Sync all accounts available via the provider if the wallet is connected.
     *
     * @param prefetchedAccounts - pass in an accounts array from eth_accounts if already fetched to avoid a repeated call
     */
    syncAccounts(prefetchedAccounts?: string[]): Promise<void>;
    /**
     * Get the most recently connected wallet.
     */
    getConnectedWallet(): Promise<BaseConnectedEthereumWallet | null>;
    /**
     * As a proxy for "connected", we call eth_accounts and consider the client
     * connected if at least one account is returned.
     */
    isConnected(): Promise<boolean>;
    /**
     * Perform personal_sign with the user's wallet.
     *
     * @param {string} message The message to sign.
     * @returns {string} The resulting signature.
     */
    sign(message: string): Promise<string>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: string) => void;
    protected onDisconnect: () => void;
    protected onConnect: () => Promise<void>;
    subscribeListeners(): void;
    unsubscribeListeners(): void;
}

declare class EmbeddedWalletConnector extends EthereumWalletConnector {
    connectorType: ConnectorType;
    walletIndex: number;
    proxyProvider: Embedded1193Provider;
    constructor({ provider, chains, defaultChain, rpcConfig, imported, walletIndex, }: {
        provider: Embedded1193Provider;
        chains: Chain[];
        defaultChain: Chain;
        rpcConfig: RpcConfig;
        imported: boolean;
        walletIndex: number;
    });
    initialize(): Promise<void>;
    connect(options: {
        chainId?: number;
    }): Promise<BaseConnectedEthereumWallet | null>;
    get walletBranding(): {
        name: string;
        icon: ({ ...props }: React.SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;
        id: string;
    };
    disconnect(): void;
    promptConnection(): Promise<void>;
}

interface ConnectorManagerEvents {
    walletsUpdated(): void;
    connectorInitialized(): void;
}
declare class ConnectorManager extends EventEmitter<ConnectorManagerEvents> {
    walletConnectors: WalletConnector[];
    initialized: boolean;
    private storedConnections;
    private activeWallet?;
    private privyAppId;
    private walletConnectCloudProjectId;
    private rpcConfig;
    private chains;
    private defaultChain;
    private store;
    private walletList;
    private shouldEnforceDefaultChainOnConnect;
    private privyAppName;
    private walletChainType;
    private externalWalletConfig;
    private appKit?;
    constructor(privyAppId: string, walletConnectCloudProjectId: string, rpcConfig: RpcConfig, chains: Chain[], defaultChain: Chain, store: Store, walletList: WalletListEntry[], shouldEnforceDefaultChainOnConnect: boolean, externalWalletConfig: AppConfig['externalWallets'], privyAppName: string, walletChainType?: 'ethereum-and-solana' | 'ethereum-only' | 'solana-only', appKit?: AppKit);
    /**
     * The core wallets array that is exposed to developers. It builds
     * the wallets away with the following logic:
     *
     * 1. Flatten all wallets from all connectors
     * 2. Sorted by connectedAt
     * 3. Active wallet is moved to front of array (if it exists)
     */
    get wallets(): BaseConnectedWallet[];
    /**
     * Helper function to find a wallet connector by connector type and wallet client type.
     */
    findWalletConnector(connectorType: ConnectorType, walletClientType: string): EthereumWalletConnector | null;
    /**
     * Helper function to find a solana wallet connector by connector type and wallet client type.
     */
    findSolanaWalletConnector(walletClientType: string): SolanaWalletConnector | null;
    /**
     * Helper function to find all embedded HD wallet connectors with `connectorType: 'embedded'`.
     * Does not include embedded imported wallet connectors, which have `connectorType: 'embedded_imported'`.
     */
    findEmbeddedWalletConnectors(): EmbeddedWalletConnector[];
    /**
     * Creates a new wallet connector for the given connector type and wallet client type.
     * If a connector already exists, it will be returned instead.
     */
    createEthereumWalletConnector({ connectorType, walletClientType, providers, walletConfig, }: {
        connectorType: ConnectorType;
        walletClientType: string;
        providers?: {
            eip6963InjectedProvider?: EIP6963ProviderDetail;
            legacyInjectedProvider?: any;
        };
        walletConfig?: MobileWalletConfig;
    }): Promise<EthereumWalletConnector | null>;
    /**
     * @deprecated **Deprecated**: This feature will be removed and should be replaced by
     * interfacing with wallets directly (wallets[0].getEthereumProvider()).
     *
     * Build an Ethereum provider for the most recently connected wallet.
     */
    getEthereumProvider: () => EIP1193Provider;
    /**
     * @deprecated **Deprecated**: This feature will be removed and should be replaced by
     * interfacing with `wallets` directly.
     *
     * Performing personal_sign with the most recently connected wallet.
     * If there is not a wallet connected, return null. Only supports signing with Ethereum
     * wallets.
     */
    activeWalletSign(message: string): Promise<string | null>;
    /**
     * @deprecated **Deprecated**: This feature will be removed and should be replaced by
     * interfacing with `wallets` directly.
     */
    setActiveWallet(address: string): void;
}

/**
 * Allows you to manage the user's current authentication state and access their linked accounts.
 * You can access the fields and methods documented here via the {@link usePrivy} hook.
 */
interface PrivyInterface {
    /**
     * Check whether the `PrivyProvider` is ready to be used. You should wait for this to
     * be true before using values such as `authenticated` and `user`.
     */
    ready: boolean;
    /**
     * True if the user is authenticated, false otherwise.
     *
     * You should always check that `ready` is true before using this value. Otherwise,
     * the value may outdated while the Privy client fetches fresh tokens.
     *
     */
    authenticated: boolean;
    /**
     * The user object, or null if the user is not authenticated.
     */
    user: User | null;
    /**
     * Opens the Privy modal and prompts the user to connect a wallet.
     * @param options.suggestedAddress {string} (optional) wallet address that you wish to prompt the user to explicitly connect, if included
     */
    connectWallet: (options?: ConnectWalletModalOptions | MouseEvent<any, any>) => void;
    /**
     * Opens the Privy login modal and prompts the user to login.
     * @param options.loginMethods {LoginMethod[]} custom login methods to display in the login modal. This will overwrite the value provider to the client config.
     * @param options.prefill {PrefillLoginOptions} prefill the login modal with the provided email or phone number.
     */
    login: (options?: LoginModalOptions | MouseEvent<any, any>) => void;
    /**
     * Opens the Privy login modal and prompts the user to login or connect a wallet.
     */
    connectOrCreateWallet: () => void;
    /**
     * For users who are authenticated, opens the Privy modal and prompts the user to link an email.
     * This will open the Privy Modal which will guide the user through this action.
     */
    linkEmail: () => void;
    /**
     * For users who are authenticated, opens the Privy modal and prompts the user to link a phone number.
     * This will open the Privy Modal which will guide the user through this action.
     */
    linkPhone: () => void;
    /**
     * For users who are authenticated, opens the Privy modal and prompts the user to link a wallet.
     * This will open the Privy Modal which will guide the user through this action.
     * @param options.suggestedAddress {string} (optional) wallet address that you wish to prompt the user to explicitly connect, if included
     * @param options.walletChainType {'ethereum-and-solana' | 'ethereum-only' | 'solana-only'} (optional) wallet chain type to filter the wallet options
     */
    linkWallet: (options?: ConnectWalletModalOptions | MouseEvent<any, any>) => void;
    /**
     * For users who are authenticated, opens the Privy modal and prompts the user to link a Farcaster account.
     * This will open the Privy Modal which will guide the user through this action.
     */
    linkFarcaster: () => void;
    /**
     * For users who are authenticated, prompts the user to link a Google OAuth account.
     * This will directly initiate the OAuth flow for Google.
     */
    linkGoogle: () => void;
    /**
     * For users who are authenticated, prompts the user to link a Twitter OAuth account
     * This will directly initiate the OAuth flow for Twitter.
     */
    linkTwitter: () => void;
    /**
     * For users who are authenticated, prompts the user to link Discord OAuth account
     * This will directly initiate the OAuth flow for Discord.
     */
    linkDiscord: () => void;
    /**
     * For users who are authenticated, prompts the user to link Github OAuth account
     * This will directly initiate the OAuth flow for Github.
     */
    linkGithub: () => void;
    /**
     * For users who are authenticated, prompts the user to link Spotify OAuth account
     * This will directly initiate the OAuth flow for Spotify.
     */
    linkSpotify: () => void;
    /**
     * For users who are authenticated, prompts the user to link Instagram OAuth account
     * This will directly initiate the OAuth flow for Instagram.
     */
    linkInstagram: () => void;
    /**
     * For users who are authenticated, prompts the user to link Tiktok OAuth account
     * This will directly initiate the OAuth flow for Tiktok.
     */
    linkTiktok: () => void;
    /**
     * For users who are authenticated, prompts the user to link LinkedIn OAuth account
     * This will directly initiate the OAuth flow for LinkedIn.
     */
    linkLinkedIn: () => void;
    /**
     * For users who are authenticated, prompts the user to link Apple OAuth account
     * This will directly initiate the OAuth flow for Apple.
     */
    linkApple: () => void;
    /**
     * For users who are authenticated, prompts the user to link a Passkey account
     * This will open the Privy Modal which will guide the user through this action.
     */
    linkPasskey: () => void;
    /**
     * For users who are authenticated, prompts the user to link a Telegram account
     * This will directly initiate the auth flow for Telegram.
     * @param options.launchParams.initDataRaw {string} (optional) Raw data retrieved from an authenticated Telegram session. Used to link a Telegram account seamlessly.
  
     */
    linkTelegram: (options?: {
        launchParams: {
            initDataRaw?: string;
        };
    }) => void;
    /**
     * For users who are authenticated and have already linked an email address, prompts the user to update their email address.
     * This will open the Privy Modal which will guide the user through this action.
     *
     */
    updateEmail: () => void;
    /**
     * For users who are authenticated and have already linked a phone number, prompts the user to update their phone number.
     * This will open the Privy Modal which will guide the user through this action.
     */
    updatePhone: () => void;
    /**
     * Log the current user out and clears their authentication state. `authenticated` will become false, `user` will become null, and the Privy Auth tokens will be deleted from the browser's local storage.
     *
     * You may await this call to take an action once logout is complete (e.g. redirecting to a specific page).
     */
    logout: () => Promise<void>;
    /**
     * Get the Privy access token ([JWT](https://jwt.io/)) for an authenticated user. Returns null for an unauthenticated user.
     *
     * You may use this token to authorize requests sent from your frontend, and can validate it in your backend against your app's Privy verification key.
     *
     * This will automatically attempt to refresh the session if the token is expired or about to expire.
     *
     * @returns Promise for the user's access token as a string if they are authenticated, null if they are unauthenticated.
     */
    getAccessToken: () => Promise<string | null>;
    /**
     * Unlink an email account from a user, by passing the email address. Note that you can only unlink an email account if the user has at least one other account.
     *
     * @param address {string} email address to be unlinked
     * @returns Promise for the {@link User} object after the provided email has been unlinked
     */
    unlinkEmail: (address: string) => Promise<User>;
    /**
     * Unlink a phone account from a user, by passing the phone number. Note that you can only unlink a phone account if the user has at least one other account.
     *
     * @param phoneNumber {string} phone number to be unlinked
     * @returns Promise for the {@link User} object after the provided phone number has been unlinked
     */
    unlinkPhone: (phoneNumber: string) => Promise<User>;
    /**
     * Unlink a wallet account from a user, by passing the public address. Note that you can only unlink a wallet account if the user has at least one other account.
     * If the unlinked wallet was the active one, and more wallets are linked to the user, then we attempt to make the most recently linked wallet active.
     *
     * @param address {string} wallet address to be unlinked
     * @returns Promise for the {@link User} object after the provided wallet has been unlinked
     */
    unlinkWallet: (address: string) => Promise<User>;
    /**
     * Unlink a Google social account from a user, by passing the google subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} google account's subject ID
     * @returns Promise for the {@link User} object after the provided Google account has been unlinked
     */
    unlinkGoogle: (subject: string) => Promise<User>;
    /**
     * Unlink a Twitter social account from a user, by passing the twitter subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} twitter account's subject ID
     * @returns Promise for the {@link User} object after the provided Twitter account has been unlinked
     */
    unlinkTwitter: (subject: string) => Promise<User>;
    /**
     * Unlink a Discord social account from a user, by passing the discord subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} discord account's subject ID
     * @returns Promise for the {@link User} object after the provided Discord account has been unlinked
     */
    unlinkDiscord: (subject: string) => Promise<User>;
    /**
     * Unlink a Github social account from a user, by passing the github subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} github account's subject ID
     * @returns Promise for the {@link User} object after the provided Github account has been unlinked
     */
    unlinkGithub: (subject: string) => Promise<User>;
    /**
     * Unlink a Spotify social account from a user, by passing the spotify subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} spotify account's subject ID
     * @returns Promise for the {@link User} object after the provided Spotify account has been unlinked
     */
    unlinkSpotify: (subject: string) => Promise<User>;
    /**
     * Unlink a Instagram social account from a user, by passing the instagram subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} instagram account's subject ID
     * @returns Promise for the {@link User} object after the provided Instagram account has been unlinked
     */
    unlinkInstagram: (subject: string) => Promise<User>;
    /**
     * Unlink a Tiktok social account from a user, by passing the tiktok subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} tiktok account's subject ID
     * @returns Promise for the {@link User} object after the provided Tiktok account has been unlinked
     */
    unlinkTiktok: (subject: string) => Promise<User>;
    /**
     * Unlink a LinkedIn social account from a user, by passing the linkedin subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} linkedin account's subject ID
     * @returns Promise for the {@link User} object after the provided LinkedIn account has been unlinked
     */
    unlinkLinkedIn: (subject: string) => Promise<User>;
    /**
     * Unlink a Apple social account from a user, by passing the apple subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param subject {string} apple account's subject ID
     * @returns Promise for the {@link User} object after the provided Apple account has been unlinked
     */
    unlinkApple: (subject: string) => Promise<User>;
    /**
     * Unlink a cross-app account from a user, by passing the apple subject ID. Note that you can only unlink this account if the user has at least one other account.
     *
     * @param subject {string} apple account's subject ID
     * @returns Promise for the {@link User} object after the provided cross-app account has been unlinked
     */
    unlinkCrossAppAccount: ({ subject }: {
        subject: string;
    }) => Promise<User>;
    /**
     * Unlink a Farcaster account from a user, by passing the FID. Note that you can only unlink a phone account if the user has at least one other account.
     *
     * @param fid {number} Farcaster ID
     * @returns Promise for the {@link User} object after the provided Farcaster account has been unlinked
     */
    unlinkFarcaster: (fid: number) => Promise<User>;
    /**
     * Unlink a Telegram account from a user, by passing the Telegram subject ID. Note that you can only unlink a social account if the user has at least one other account.
     *
     * @param telegramUserId {string} Telegram user ID of the linked account
     * @returns Promise for the {@link User} object after the provided Telegram account has been unlinked
     */
    unlinkTelegram: (telegramUserId: string) => Promise<User>;
    /**
     * Unlink a Passkey account from a user, by passing the credential ID. Note that you can only unlink a passkey account if the user has at least one other account.
     *
     * @param credentialId {string} Passkey Credential ID
     * @returns Promise for the {@link User} object after the provided passkey account has been unlinked
     */
    unlinkPasskey: (credentialId: string) => Promise<User>;
    /**
     * Creates an embedded wallet for the current user.
     *
     * This method will error if the user already has an embedded wallet or if they
     * exit in the middle of the flow.
     *
     * If the `config.embeddedWallets.requireUserOwnedRecoveryOnCreate` property is set to true,
     * this will prompt the user to complete a recovery flow to secure the recovery
     * share of their embedded wallet.
     *
     * Otherwise (the default), Privy will secure the recovery share, and the embedded wallet
     * will be created without showing any UIs to the user.
     *
     * @returns Promise for the {@link Wallet} object for the newly created embedded wallet
     */
    createWallet: (options?: CreateWalletOptions | MouseEvent<any, any>) => Promise<Wallet>;
    /**
     * @deprecated. Use `setWalletRecovery` instead.
     *
     * Set (or reset) a password on a wallet.
     *
     * This method will error if the user does not have an embedded wallet or if the user exits in the middle of the flow.
     *
     * @returns Promise for the {@link Wallet} object for the updated embedded wallet
     */
    setWalletPassword: () => Promise<Wallet>;
    /**
     * Prompt the user to enable wallet recovery. Current recovery options include password, Google Drive, and iCloud.
     *
     * This method will error if the user does not have an embedded wallet, if the user's
     * embedded wallet already has a cloud-based recovery set, or if the user exits in the middle of the flow.
     *
     * @returns Promise for the {@link Wallet} object for the updated embedded wallet
     */
    setWalletRecovery: (o?: SetWalletRecoveryOptions) => Promise<Wallet>;
    /**
     * Prompts a user to sign a message using their embedded wallet using EIP-191's `personal_sign`
     * method (0x45).
     *
     * This method will error if the user is not authenticated or does not have an embedded wallet.
     *
     * If the `config.embeddedWallets.showWalletUIs` property is set to false, the signature will
     * be computed without prompting the user. Otherwise (the default), Privy will show the user a modal
     * to prompt them for a signature. This can be customized via the {@link SignMessageModalUIOptions}.
     *
     * @param input.message {string} message to be signed
     * @param options.uiOptions {@link SignMessageModalUIOptions} (optional) UI options to customize the signature prompt modal
     * @param options.address {optional} address for the embedded wallet signing the message. You should ONLY set this parameter if using imported
     * embedded wallets or multiple HD embedded wallets for the same user. Defaults to the user's embedded wallet at HD index 0.
     * @returns Promise for the signature as a string
     */
    signMessage: (input: {
        message: string;
    }, options?: {
        uiOptions?: SignMessageModalUIOptions;
        address?: string;
    }) => Promise<{
        signature: string;
    }>;
    /**
     * Prompts a user to sign a message using their embedded wallet using EIP-712's `eth_signTypedData_v4`.
     *
     * This method will error if the user is not authenticated or does not have an embedded wallet.
     *
     * @param input {SignTypedDataParams} typed data payload to be signed
     * @param options.uiOptions {@link SignMessageModalUIOptions} (optional) UI options to customize the signature prompt modal
     * @param options.address {optional} address for the embedded wallet signing the message. You should ONLY set this parameter if using imported
     * embedded wallets or multiple HD embedded wallets for the same user. Defaults to the user's embedded wallet at HD index 0.
     * @returns Promise for the signature as a string
     */
    signTypedData: (input: SignTypedDataParams, options?: {
        uiOptions?: SignMessageModalUIOptions;
        address?: string;
    }) => Promise<{
        signature: string;
    }>;
    /**
     * Function to control the visibility of the enrollment modal.
     *
     * @param show {boolean} controls the visibility of the enrollment modal.
     * @returns Promise for opening the enrollment modal.
     */
    enrollInMfa: (show?: boolean) => void;
    /**
     * Initiate the enrollment flow for MFA for the current user.
     *
     * @param mfaMethod {@link MfaMethod} The MFA method to enroll for the current user.
     * @param meta {@link {phoneNumber: string}} The meta data needed to complete the MFA flow.
     * @returns Promise for enrolling the current user with the chosen MFA method.
     */
    initEnrollmentWithSms: (meta: {
        phoneNumber: string;
    }) => Promise<void>;
    /**
     * Initiate the enrollment flow for TOTP MFA for the current user.
     *
     * @returns {@link {secret: string; authUrl: string}} The TOTP Auth Url is used to encode
     * into a QR Code for the user to scane.
     */
    initEnrollmentWithTotp: () => Promise<{
        secret: string;
        authUrl: string;
    }>;
    /**
     * Initiate the enrollment flow for Passkey MFA for the current user.
     *
     * @returns {@link void} The TOTP Auth Url is used to encode
     * into a QR Code for the user to scane.
     */
    initEnrollmentWithPasskey: () => Promise<void>;
    /**
     * Submit the MFA code to complete SMS enrollment process.
     *
     * @param meta {@link {phoneNumber: string; mfaCode: string}} The MFA code and phone number to submit.
     * @returns Promise for the MFA code submission.
     */
    submitEnrollmentWithSms: (meta: {
        phoneNumber: string;
        mfaCode: string;
    }) => Promise<void>;
    /**
     * Submit the MFA code to complete TOTP enrollment process.
     *
     * @param meta {@link {mfaCode: string}} The MFA code.
     * @returns Promise for the MFA code submission.
     */
    submitEnrollmentWithTotp: (meta: {
        mfaCode: string;
    }) => Promise<void>;
    /**
     * Submit the passkey to complete the enrollment process.
     *
     * @param meta {@link {credentialIds: string[]}} The passkey credentialIds to enroll in MFA.
     * @param options.removeForLogin (optional) If false, unenrolled passkeys will be kept linked to the user.
     * @returns Promise for the MFA code submission.
     */
    submitEnrollmentWithPasskey: (input: {
        credentialIds: string[];
    }, options?: {
        removeForLogin?: boolean;
    }) => Promise<void>;
    /**
     * Triggers the MFA verification flow if the user has an MFA method enrolled.
     *
     * @returns Promise for triggering the MFA verification flow.
     */
    promptMfa: () => Promise<void>;
    /**
     * Initiate the MFA flow for the current user.
     *
     * @param mfaMethod {@link MfaMethod} The available MFA method to trigger for the current user.
     * @returns Promise for sending the MFA code to the user's device.
     */
    init: (mfaMethod: MfaMethod) => Promise<void | PublicKeyCredentialRequestOptionsJSON>;
    /**
     * Submit the MFA code for the current user. This will attempt to complete the MFA flow.
     *
     * This will reject if:
     *   - The verification attempt failed
     *   - The max number of verification attempts has been reached
     *   - The MFA attempt timed out
     *
     * These errors can be caught and handled accordingly using the error helpers `errorIndicatesMfaVerificationFailed`,
     * `errorIndicatesMaxMfaRetries`, `errorIndicatesMfaTimeout` exported from 'react-auth'.
     *
     * @param method {@link MfaMethod} The MFA method to be used.
     * @param mfaCode {string} The MFA code to submit.
     * @returns Promise for the MFA code submission.
     */
    submit: (mfaMethod: MfaMethod, mfaCode: string | PublicKeyCredentialRequestOptionsJSON) => Promise<void>;
    /**
     * Cancel the MFA flow for the current user. If there is no pending MFA verification,
     * this function is a no-op.
     *
     * Call this method instead of `submit` when a user has been prompted for
     * MFA but decides to exit the flow.
     *
     * @returns void.
     */
    cancel: () => void;
    /**
     * Remove the MFA method for the current user.
     *
     * @param method {@link MfaMethod} The MFA method to remove for the current user.
     * @param options.removeForLogin (optional) If false, unenrolled passkeys will be kept linked to the user.
     * @returns Promise for removing the MFA method for the current user.
     */
    unenroll: (method: MfaMethod, options?: {
        removeForLogin?: boolean;
    }) => Promise<void>;
    /**
     * Prompts a user to send a transaction using their embedded wallet.
     *
     * This method will error if the user is not authenticated or does not have an ethereum embedded wallet.
     *
     * If no `chainId` is specified as part of the {@link UnsignedTransactionRequest}, Privy will default
     * to the embedded wallet's current chain ID.
     *
     * If the `config.embeddedWallets.showWalletUIs` property is set to false, the wallet will
     * attempt to send the transaction without prompting the user. Otherwise (the default), Privy
     * will show the user a modal to have them confirm the transaction. This can be customized via
     * the {@link SendTransactionModalUIOptions}.
     *
     * @param input {@link UnsignedTransactionRequest} transaction to be sent
     * @param options.uiOptions {@link SendTransactionModalUIOptions} (optional) UI options to customize the transaction request modal
     * @param options.fundWalletConfig {@link FundWalletConfig} (optional) Funding configuration to specify chain and funding amount (if enabled), in the case of insufficient funds
     * @param options.address {optional} address for the embedded wallet signing the message. You should ONLY set this parameter if using imported
     * embedded wallets or multiple HD embedded wallets for the same user. Defaults to the user's embedded wallet at HD index 0.
     * @returns Promise for the transaction's hash as a hexadecimal string
     */
    sendTransaction: (input: UnsignedTransactionRequest, options?: {
        uiOptions?: SendTransactionModalUIOptions;
        fundWalletConfig?: FundWalletConfig;
        address?: string;
    }) => Promise<{
        hash: `0x${string}`;
    }>;
    /**
     * Prompts a user to sign a transaction using their embedded wallet.
     *
     * This method will error if the user is not authenticated or does not have an ethereum embedded wallet.
     *
     * If no `chainId` is specified as part of the {@link UnsignedTransactionRequest}, Privy will default
     * to the embedded wallet's current chain ID.
     *
     * If the `config.embeddedWallets.showWalletUIs` property is set to false, the wallet will
     * attempt to sign the transaction without prompting the user. Otherwise (the default), Privy
     * will show the user a modal to have them confirm the transaction. This can be customized via
     * the {@link SendTransactionModalUIOptions}.
     *
     * @param input {@link UnsignedTransactionRequest} transaction to be signed
     * @param options.uiOptions {@link SendTransactionModalUIOptions} (optional) UI options to customize the transaction request modal
     * @param options.address {optional} address for the embedded wallet signing the message. You should ONLY set this parameter if using imported
     * embedded wallets or multiple HD embedded wallets for the same user. Defaults to the user's embedded wallet at HD index 0.
     * @returns Promise for the signature as a hexadecimal string
     */
    signTransaction: (input: UnsignedTransactionRequest, options?: {
        uiOptions?: SendTransactionModalUIOptions;
        address?: string;
    }) => Promise<{
        signature: `0x${string}`;
    }>;
    /**
     * Shows the user a Privy modal, from which they can copy their Ethereum embedded wallet's private
     * key or seed phrase for easy export to another wallet client (e.g. MetaMask). The private key is loaded
     * on an iframe running on a separate domain from your app, meaning your app cannot access it.
     *
     * This method will error if the user is not authenticated or does not have an embedded wallet.
     * @param options {@link {address: string}} (optional) Ethereum wallet address to export the private key for
     * @returns Promise that resolves once the user exits the modal
     */
    exportWallet: (options?: {
        address: string;
    } | MouseEvent<any, any>) => Promise<void>;
    /**
     * Check whether the Privy Modal is visible.
     */
    isModalOpen: boolean;
    /**
     * The available mfa methods of this App
     */
    mfaMethods: MfaMethod[];
}

/**
 * Allows you to manage the user's currently connected wallets.
 * You can access the fields and methods documented here via the {@link useWallets} hook.
 */
interface UseWalletsInterface {
    /**
     * The user's connected wallets.
     */
    wallets: ConnectedWallet[];
    /**
     * Whether the wallets are ready to be used.
     */
    ready: boolean;
}
declare function useWallets(): UseWalletsInterface;

/**
 * [React Hook](https://reactjs.org/docs/hooks-intro.html) that allows you to manage the user's current authentication state and access their linked accounts.
 *
 * You should use this hook to access the Privy SDK from within your React components and custom hooks.
 */
declare const usePrivy: () => PrivyInterface;

type RecoverParams = {
    recoveryMethod: 'recovery-encryption-key';
    recoveryKey: string;
};
interface UseRecoverEmbeddedWalletInterface {
    /**
     * An async method to recover the embedded wallets.
     *
     * @param params The parameters with which to recover the embedded wallets.
     * @returns A promise that resolves when the embedded wallets have been recovered.
     */
    recover: (params: RecoverParams) => Promise<void>;
}
/**
 * Hook to recover the user's embedded wallets headlessly.
 *
 * @returns An object with a `recover` method that allows you to recover the embedded wallets.
 */
declare const useRecoverEmbeddedWallet: () => UseRecoverEmbeddedWalletInterface;

/**
 * Use this hook to execute the MFA flow with Privy.
 *
 * @returns promptMfa - prompts the user to complete MFA verification
 * @returns init - starts the MFA verification flow
 * @returns submit - completes the MFA verification flow
 * @returns cancel - cancels the MFA verification flow
 * @returns mfaMethods - list of all available mfa methods
 *
 * @example
 * // MFA flow
 *
 * const MFAModal = ({ mfaMethods, isOpen, setIsOpen }: Props) => {
 *   const {init, submit, cancel} = useMfa();
 *   const [selectedMethod, setSelectedMethod] = useState(null)
 *   const [mfaCode, setMfaCode] = useState('')
 *
 *   const handleClose = () => {
 *     cancel();
 *     setIsOpen(false);
 *   };
 *
 *   return (
 *     <Modal isOpen={isOpen} onClose={handleClose}>
 *       // Capture the user's MFA code
 *       {selectedMethod && (
 *         <button
 *           onClick={async () => {
 *             await submit(selectedMethod, mfsCode)
 *             setSelectedMethod(null)
 *             setIsOpen(false)
 *           }}
 *         />
 *       )}
 *       {mfaMethods.map(method => (
 *         <button
 *           onClick={async () => {
 *             await init(method);
 *             setSelectedMethod(method)
 *           }}
 *         >
 *           Choose {method} for MFA
 *         </button>
 *       ))}
 *     </Modal>
 *   )
 * };
 *
 * @example
 * // Error handling
 *
 * import {
 *   errorIndicatesMfaVerificationFailed,
 *   errorIndicatesMfaTimeout,
 *   errorIndicatesMfaMaxAttempts
 * } from '@privy-io/react-auth';
 * const {submit} = useMfa();
 * const [errorState, setErrorState] = useState<string | null>(null);
 *
 * <button
 *   onClick={async () => {
 *     try {
 *       submit('sms', '<user-mfa-code>');
 *     }
 *     catch (e) {
 *       if (errorIndicatesMfaVerificationFailed(e)) {
 *         setErrorState('Verification failed, resubmit.')
 *       }
 *       else if (errorIndicatesMfaMaxAttempts(e)) {
 *         setErrorState('Max attempts reached, re-initialize MFA.')
 *       }
 *       else if (errorIndicatesMfaTimeout(e)) {
 *         setErrorState('Timeout reached, re-initialize MFA.')
 *       }
 *   }}
 * >
 *   {errorState ?? 'Verify SMS MFA Code'}
 * </button>
 *
 */
declare function useMfa(): {
    promptMfa: () => Promise<void>;
    init: (mfaMethod: MfaMethod) => Promise<void | _simplewebauthn_types.PublicKeyCredentialRequestOptionsJSON>;
    submit: (mfaMethod: MfaMethod, mfaCode: string | _simplewebauthn_types.PublicKeyCredentialRequestOptionsJSON) => Promise<void>;
    cancel: () => void;
    mfaMethods: ("sms" | "totp" | "passkey")[];
};

/**
 * Use this hook to enroll a user in MFA
 *
 * @returns initEnrollmentWithSms - starts the MFA enrollment flow for SMS
 * @returns initEnrollmentWithTotp - starts the MFA enrollment flow for TOTP
 * @returns submitEnrollmentWithSms - completes the MFA enrollment flow for SMS
 * @returns submitEnrollmentWithTotp - completes the MFA enrollment flow for TOTP
 * @returns unenrollWithSms - unenrolls the SMS MFA method
 * @returns unenrollWithTotp - unenrolls the TOTP MFA method
 * @returns showMfaEnrollmentModal - opens the MFA enrollment modal
 * @returns closeMfaEnrollmentModal - closes the MFA enrollment modal
 *
 * @example
 * const {unenrollWithSms} = useMfaEnrollment();
 *
 * <button
 *  onClick={() => {
 *    unenrollWithSms();
 *  }}
 * >
 * Unenroll in SMS MFA
 * </button>
 *
 * @example
 * const {unenrollWithTotp} = useMfaEnrollment();
 *
 * <button
 *  onClick={() => {
 *    unenrollWithTotp();
 *  }}
 * >
 *  Unenroll in TOTP MFA
 * </button>
 */
declare function useMfaEnrollment(): {
    initEnrollmentWithSms: (meta: {
        phoneNumber: string;
    }) => Promise<void>;
    initEnrollmentWithTotp: () => Promise<{
        secret: string;
        authUrl: string;
    }>;
    initEnrollmentWithPasskey: () => Promise<void>;
    submitEnrollmentWithSms: (meta: {
        phoneNumber: string;
        mfaCode: string;
    }) => Promise<void>;
    submitEnrollmentWithTotp: (meta: {
        mfaCode: string;
    }) => Promise<void>;
    submitEnrollmentWithPasskey: (input: {
        credentialIds: string[];
    }, options?: {
        removeForLogin?: boolean;
    }) => Promise<void>;
    unenrollWithSms: () => Promise<void>;
    unenrollWithTotp: () => Promise<void>;
    unenrollWithPasskey: (options?: {
        removeForLogin?: boolean;
    }) => Promise<void>;
    showMfaEnrollmentModal: () => void;
    closeMfaEnrollmentModal: () => void;
};

declare class PrivyIframeError extends Error {
    type: PrivyIframeErrorTypesType;
    constructor(type: PrivyIframeErrorTypesType, message: string);
}
declare function errorIndicatesMfaTimeout(error: unknown): error is PrivyIframeError;
declare function errorIndicatesMfaVerificationFailed(error: unknown): error is PrivyIframeError;
declare function errorIndicatesMaxMfaRetries(error: unknown): error is PrivyIframeError;

declare const VERSION = "__VERSION__";

interface ResponseEmailAccount {
    type: 'email';
    address: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponsePhoneAccount {
    type: 'phone';
    phoneNumber: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface BaseResponseWalletAccount {
    id: string | null;
    type: 'wallet';
    address: string;
    imported: boolean;
    delegated: boolean;
    chain_type: 'ethereum' | 'solana';
    wallet_index: number | null;
    wallet_client_type?: string;
    connector_type?: string;
    recovery_method?: 'privy' | 'user-passcode';
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseEthereumAccount extends BaseResponseWalletAccount {
    chain_type: 'ethereum';
}
interface ResponseSolanaAccount extends BaseResponseWalletAccount {
    chain_type: 'solana';
}
interface ResponseSmartWalletAccount {
    type: 'smart_wallet';
    address: string;
    smart_wallet_type: SmartWalletType;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseFarcasterAccount {
    type: 'farcaster';
    fid: number;
    owner_address: string;
    username: string | null;
    display_name: string | null;
    bio: string | null;
    profile_picture_url: string | null;
    homepage_url: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    signer_public_key: string | null;
}
interface ResponseOAuthGoogle {
    type: 'google_oauth';
    subject: string;
    email: string;
    name: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthTwitter {
    type: 'twitter_oauth';
    subject: string;
    username: string | null;
    name: string | null;
    profile_picture_url: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthDiscord {
    type: 'discord_oauth';
    subject: string;
    username: string | null;
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthGithub {
    type: 'github_oauth';
    subject: string;
    username: string | null;
    name: string | null;
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthSpotify {
    type: 'spotify_oauth';
    subject: string;
    email: string | null;
    name: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthInstagram {
    type: 'instagram_oauth';
    subject: string;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthTiktok {
    type: 'tiktok_oauth';
    subject: string;
    username: string | null;
    name: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthLinkedIn {
    type: 'linkedin_oauth';
    subject: string;
    name: string | null;
    email: string | null;
    vanity_name: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseOAuthApple {
    type: 'apple_oauth';
    subject: string;
    email: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseCustomJwtAccount {
    type: 'custom_auth';
    custom_user_id: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponsePasskeyAccount {
    type: 'passkey';
    credential_id: string;
    enrolled_in_mfa: boolean;
    authenticator_name?: string;
    created_with_device?: string;
    created_with_os?: string;
    created_with_browser?: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseTelegramAccount {
    type: 'telegram';
    telegram_user_id: string;
    first_name: string | null;
    last_name: string | null;
    username: string | null;
    photo_url: string | null;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
interface ResponseCrossAppAccount {
    type: 'cross_app';
    subject: string;
    embedded_wallets: {
        address: string;
    }[];
    smart_wallets: {
        address: string;
    }[];
    provider_app_id: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}
export interface LinkedAccountsResponseType {
  type: string;
  chain_type?: string;
  address: string;
}

export interface PrivyResponse {
  id: string;
  linked_accounts: LinkedAccountsResponseType[];
  qrCode?: string;
  link?: string;
}

interface GetCurrentUserResponse {
    id: string;
    is_guest: boolean;
    created_at: number;
    linked_accounts: LinkedAccountsResponseType[];
    mfa_methods: LinkedMfaMethodsResponseType;
    has_accepted_terms: boolean;
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number;
        refresh_token?: string;
        refresh_token_expires_in_seconds?: number;
        scopes?: string[];
    };
    custom_metadata?: CustomMetadataType;
}

interface DefaultsType {
    baseURL: string;
    timeout: number;
}
/**
 * A raw http handler for making requests to the Privy API. It requires a Session
 * object, which is used for fetching and including any tokens that are required
 * for requests.
 *
 * Should not be used for external requests, as we attach a good deal of metadata to requests.
 */
declare class Http {
    fallbackApiUrl: string;
    private appId;
    private appClientId?;
    private client;
    private defaults;
    private sdkVersion;
    private baseFetch;
    private clientAnalyticsId;
    constructor({ appId, appClientId, client, defaults, }: {
        appId: string;
        appClientId?: string;
        client: PrivyClient;
        defaults: DefaultsType;
    });
    get<T = any>(path: string, config?: FetchOptions<'json'>): Promise<T>;
    post<T = any, D = any>(path: string, data?: D, config?: FetchOptions<'json'>): Promise<T>;
    delete<T = any>(path: string, config?: FetchOptions<'json'>): Promise<T>;
}

/**
 * Valid /session and <>/authenticate calls will respond with a token
 * as well as a valid user object for streamlining.
 */
interface ValidSessionResponse {
    user: GetCurrentUserResponse;
    token: string;
    privy_access_token: string | null;
    refresh_token: string | null;
    identity_token?: string;
    is_new_user?: boolean;
    session_update_action?: 'set' | 'ignore' | 'clear';
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number;
        refresh_token?: string;
        refresh_token_expires_in_seconds?: number;
        scopes?: string[];
    };
}

type AuthMeta = {
    [key: string]: any;
};
/**
 * An auth flow is an encapsulation of the business logic required for a given
 * authentication process. It requires at least one definitive `authenticate`
 * method that does the final token handshaking with the API, but may also
 * include any number of methods/API calls necessary to set up the state (e.g.
 * sending an email before being able to do a passwordless code login)
 */
interface AuthFlow {
    api?: Http;
    /**
     * Any meta information necessary for the auth flow, that may also need to be
     * shared out to things like frontend components for displaying state of the
     * auth flow
     */
    meta: AuthMeta;
    /**
     * Handles the API authentication call(s) to log users in.
     * Any preconditions must be addressed prior to calling
     */
    authenticate(): Promise<ValidSessionResponse>;
    /**
     * Handles the API link call(s) to link new user accounts.
     * Requires user to already be logged in when called.
     * Any preconditions must be addressed prior to calling
     */
    link(): Promise<GetCurrentUserResponse>;
}

/**
 * The Privy client performs operations against the Privy API.
 *
 * ```typescript
 * import {PrivyClient} from '@privy-io/react-auth';
 * ```
 *
 * This should not be directly used by developers at the moment,
 * so we doc-ignore it.
 * @ignore
 *
 */
declare class PrivyClient {
    #private;
    private appId;
    private appClientId?;
    private session;
    private timeout;
    api: Http;
    clientAnalyticsId: string | null;
    useServerCookies: boolean;
    apiUrl: string;
    fallbackApiUrl: string;
    authFlow?: AuthFlow;
    connectors?: ConnectorManager;
    onStoreCustomerAccessToken?: ((token: string | null) => void) | undefined;
    onDeleteCustomerAccessToken?: (() => void) | undefined;
    /**
     * Creates a new Privy client.
     * @param apiUrl - The URL of the Privy API
     * @param appId - The app id from your dashboard
     * @param appClientId - The app client id from your dashboard
     * @param timeout - Time in milliseconds after which to timeout requests to the API
     */
    constructor({ apiUrl, appId, appClientId, timeout, }: {
        apiUrl?: string;
        appId: string;
        appClientId?: string;
        timeout?: number;
    });
    /**
     * ConnectorManager initialization is deferred because the input parameter may be overridden by the server
     * config. We can set this once and only once. If it is set twice, event listeners will be created
     * on the first ConnectorManager and are not re-created.
     */
    initializeConnectorManager({ walletConnectCloudProjectId, rpcConfig, chains, defaultChain, store, walletList, shouldEnforceDefaultChainOnConnect, externalWalletConfig, appName, walletChainType, appKit, }: {
        walletConnectCloudProjectId: string;
        rpcConfig: RpcConfig;
        chains: Chain[];
        defaultChain: Chain;
        store: Store;
        walletList: WalletListEntry[];
        shouldEnforceDefaultChainOnConnect: boolean;
        externalWalletConfig: AppConfig['externalWallets'];
        appName: string;
        walletChainType: 'ethereum-and-solana' | 'ethereum-only' | 'solana-only';
        appKit?: AppKit;
    }): void;
    generateApi(): Http;
    /**
     * In the case of cookie-based auth, re-initialize the http client with the custom api url.
     * @param customApiUrl the custom api url to use for cookie-based authFlow
     */
    updateApiUrl(customApiUrl?: string | null): void;
    authenticate(): Promise<{
        user: User | null;
        isNewUser?: boolean;
        oAuthTokens?: OAuthTokens;
    }>;
    link(): Promise<{
        user: User | null;
        oAuthTokens: OAuthTokens | undefined;
    }>;
    storeProviderAccessToken(appId: string, providerAccessToken: string | null): void;
    getProviderAccessToken(appId: string): string | null;
    logout(): Promise<void>;
    clearProviderAcccessTokens(user: User): void;
    startAuthFlow<T extends AuthFlow>(authFlow: T): T;
    initMfaSmsVerification(): Promise<void>;
    initMfaPasskeyVerification(): Promise<{
        rpId: string | undefined;
        challenge: string;
        allowCredentials: {
            id: string;
            type: "public-key";
            transports: AuthenticatorTransport[];
        }[];
        timeout: number | undefined;
        extensions: {
            appid: string | undefined;
            credProps: boolean | undefined;
            hmacCreateSecret: boolean | undefined;
        };
        userVerification: UserVerificationRequirement;
    }>;
    _cachedProviderAppDetails: Record<string, CrossAppProviderDetails>;
    getCrossAppProviderDetails(appId: string): Promise<CrossAppProviderDetails | undefined>;
    acceptTerms(): Promise<User>;
    unlinkEmail(address: string): Promise<User>;
    unlinkPhone(phoneNumber: string): Promise<User>;
    unlinkEthereumWallet(address: string): Promise<User>;
    unlinkSolanaWallet(address: string): Promise<User>;
    unlinkOAuth(provider: OAuthProviderType | `privy:${string}`, subject: string): Promise<User>;
    unlinkFarcaster(fid: number): Promise<User>;
    unlinkTelegram(telegramUserId: string): Promise<User>;
    revokeDelegatedWallet(): Promise<void>;
    createAnalyticsEvent({ eventName, payload, timestamp, options, }: {
        eventName: string;
        payload?: {
            [key: string]: any;
        };
        timestamp?: Date;
        options?: {
            keepAlive?: boolean;
        };
    }): Promise<void>;
    signMoonpayOnRampUrl(signRequestData: MoonpaySignRequest): Promise<MoonpaySignResponse>;
    initCoinbaseOnRamp(input: PrivyCoinbaseOnRampInitInput): Promise<PrivyCoinbaseOnRampInitResponse>;
    getCoinbaseOnRampStatus({ partnerUserId, }: {
        partnerUserId: string;
    }): Promise<PrivyCoinbaseOnRampStatusResponse>;
    /** DATA METHODS */
    /**
     * Fetches the currently authenticated user from the API or
     * returns null if the user is not authenticated.
     *
     * This will refresh the user's access token and rotate
     * the refresh token if needed.
     *
     * @returns Promise<User | null>
     */
    getAuthenticatedUser(): Promise<User | null>;
    /**
     * #PATBeforeCAT
     * Returns the appropriate access token for use in authentication with the Privy API.
     *
     * Should not be exposed or passed to the developer.
     *
     * @param options See {@link _getToken}
     */
    getAccessToken(options?: {
        disableAutoRefresh?: boolean;
    }): Promise<string | null>;
    /**
     * Grab the customer access token for the currently logged in user.
     *
     * @param options See {@link _getToken}
     */
    getCustomerAccessToken(options?: {
        disableAutoRefresh?: boolean;
    }): Promise<string | null>;
    /**
     * Grab the Privy access token for the currently logged in user.
     *
     * @param options See {@link _getToken}
     */
    private getPrivyAccessToken;
    /**
     * Grab the requested access token for the currently logged in user. Verifies that the
     * token has a valid signature, was issued by 'privy.io', and corresponds to the
     * current app ID. If no valid token is found, this method will force a logout and return null.
     *
     * If the token is expired or expiring soon, this will attempt to
     * first refresh the access token to ensure that the token is active. You can
     * disable this behavior using `disableAutoRefresh`, although it is not
     * recommended.
     *
     * @param tokenType
     * @param disableAutoRefresh not recommended - optionally disable automatic
     * token refresh when the token is expired or expiring soon
     */
    private _getToken;
    getSmartWalletsConfig(): Promise<SmartWalletConfig>;
    getUsdTokenPrice(chain: Chain): Promise<number | undefined>;
    getUsdPriceForSol(): Promise<number | undefined>;
    getSplTokenMetadata({ mintAddress, cluster }: {
        mintAddress: string;
        cluster: Cluster;
    }): Promise<{
        name: string;
        symbol: string;
        decimals: number;
    } | undefined>;
    requestFarcasterSignerStatus(publicKey: string): Promise<PrivyFarcasterSignerInitResponse>;
    /**
     * Headless method to authenticate a smart wallet via the Sign-In with Ethereum spec.
     *
     * @returns The user object.
     */
    linkSmartWallet({ message, signature, smartWalletType, }: {
        message: string;
        signature: string;
        smartWalletType: SmartWalletType;
    }): Promise<User>;
    /**
     * Headless method to link a new wallet via the Sign-In with Ethereum spec.
     *
     * @returns The user object.
     */
    linkWithSiwe({ message, signature, chainId, walletClientType, connectorType, }: {
        message: string;
        signature: string;
        chainId: string;
        walletClientType?: string;
        connectorType?: string;
    }): Promise<User>;
    /**
     *
     */
    sendAccountTransferRequest({ nonce, account, accountType, externalWalletMetadata, telegramAuthResult, telegramWebAppData, farcasterEmbeddedAddress, oAuthUserInfo, }: {
        nonce: string;
        account: string;
        accountType: LoginMethod;
        externalWalletMetadata?: SiweWalletMetadata;
        telegramAuthResult?: TelegramAuthResult;
        telegramWebAppData?: TelegramWebAppData;
        farcasterEmbeddedAddress?: string;
        oAuthUserInfo?: OAuthUserInfo;
    }): Promise<User>;
    /**
     * Headless method to link a new wallet via the Sign-In with Solana spec.
     *
     * @returns The user object.
     */
    linkWithSiws({ message, signature, walletClientType, connectorType, messageType, }: {
        message: string;
        signature: string;
        walletClientType?: string;
        connectorType?: string;
        messageType: SiwsMessageType;
    }): Promise<User>;
    updateUserAndIdToken(): Promise<User>;
    scanTransaction(request: PrivyTransactionScanningInputType): Promise<PrivyTransactionScanningResponseType>;
}

/**
 * Use this hook to log the user in, and to attach callbacks
 * for successful `login`s, already-`authenticated` users, and
 * `login` errors.
 *
 * @param callbacks.onComplete {@link PrivyEvents} callback to execute for already- or newly-`authenticated` users
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `login`.
 * @returns login - opens the Privy modal and prompts the user to login
 */
declare function useLogin(callbacks?: PrivyEvents['login']): {
    /**
     * Opens the Privy login modal and prompts the user to login.
     */
    login: (options?: LoginModalOptions | react.MouseEvent<any, any>) => void;
};

type LoginWithFarcasterV2Input = {
    /** The Farcaster user ID. */
    fid: number;
    /** The SIWF message. */
    message: string;
    /** The signature of the SIWF message. */
    signature: string;
};
interface UseLoginWithFarcasterV2Interface {
    /**
     * Initializes the Farcaster V2 login flow.
     *
     * @returns A promise that resolves to a nonce and expires at used to generate the SIWF message.
     */
    init: () => Promise<{
        nonce: string;
        expiresAt: string;
    }>;
    /**
     * Authenticates a user's Farcaster V2 account.
     *
     * @param input - The input object containing the Farcaster V2 message and signature.
     * @returns A promise that resolves to the authenticated Privy user.
     */
    login: (input: LoginWithFarcasterV2Input) => Promise<{
        user: User;
    }>;
}
/**
 * Use this hook to login with Farcaster via SIWF.
 *
 * @returns An object with the `init` and `login` methods that allows you to login with Farcaster via SIWF.
 */
declare const useLoginWithFarcasterV2: () => UseLoginWithFarcasterV2Interface;

/**
 * Use this hook to get the identity token. Allows you to pass the identity token in your requests.
 *
 * @returns identityToken - {string | null} - The identity token of the user.
 */
declare function useIdentityToken(): {
    identityToken: string | null;
};

/**
 * Use this hook to log the user out, and to attach a callback after a successful logout.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute when a user successfully logs out.
 * @returns logout - logs the user out and clears their authentication state.
 */
declare function useLogout(callbacks?: PrivyEvents['logout']): {
    /**
     * Log the current user out and clears their authentication state. `authenticated` will become false, `user` will become null, and the Privy Auth tokens will be deleted from the browser's local storage.
     */
    logout: () => Promise<void>;
};

type UseLoginWithOAuth = {
    /**
     * Redirect to a login page for the given OAuth provider without using Privy's UI
     *
     * @returns a Promise that resolves when the redirect _(using `window.assign`)_ is complete, or rejects if there was an error.
     *
     * @example
     * const {initOAuth} = useLoginWithOAuth()
     *
     * <Button onPress={() => initOAuth({ provider: 'google' })} /> *
     */
    initOAuth: ({ provider, disableSignup, }: {
        provider: OAuthProviderType;
        disableSignup?: boolean;
    }) => Promise<void>;
    /**
     * Indicates a headless OAuth flow is in progress
     */
    loading: boolean;
    /**
     * The current state of the login with OAuth flow.
     */
    state: OAuthFlowState;
};
/**
 * @experimental
 *
 * Use this hook to log the user in with an OAuth provider, without using any Privy UIs.
 */
declare const useLoginWithOAuth: (callbacks?: PrivyEvents["login"]) => UseLoginWithOAuth;

type SendCodeToEmail = {
    email: string;
    disableSignup?: boolean;
};
type UseLoginWithEmail = {
    /**
     * Sends a one-time-passcode (OTP) to the user's email address.
     *
     * @param opts {@link SendCodeToEmail} options for sending the OTP
     * @param opts.email {string} the user's email address
     * @param opts.disableSignup {boolean} whether to disable signup for the user
     *
     * @returns a Promise that resolves if the OTP was successfully sent to the email,
     * or rejects if there was an error.
     */
    sendCode: ({ email, disableSignup }: SendCodeToEmail) => Promise<void>;
    /**
     * Log a user in with a one-time-passcode (OTP) that has been sent to their
     * email address via {@link sendCode}
     *
     * For a single OTP, you may call this method up to a maximum of 5 times, to handle
     * errors where the user incorrectly enters the OTP in your UIs.
     *
     * After 5 attempts of {@link loginWithCode}, the existing OTP is no longer valid, and you
     * must request a new one for the user via {@link sendCode}
     *
     * @param opts {@link LoginWithCode} options for logging the user in with an OTP
     * @param opts.code {string} the OTP provided by the user
     *
     * @returns a Promise that resolves if the inputted OTP was valid, or rejects if there was an error.
     */
    loginWithCode: ({ code }: LoginWithCode) => Promise<void>;
    /**
     * The current state of the login with Email flow.
     */
    state: OtpFlowState;
};
/**
 * @experimental
 *
 * Use this hook to log the user in with email, without using any Privy UIs.
 *
 * @returns sendCode - {@link sendCode} sends a one-time-code to the user's email address.
 * @returns loginWithCode - {@link loginWithCode} - logs a user in with a one-time-code, maximum 5 attempts.
 * @returns state - {@link OtpFlowState} - the current state of the login with Email flow.
 */
declare const useLoginWithEmail: (callbacks?: PrivyEvents["login"]) => UseLoginWithEmail;

type UseSignupWithPasskey = {
    /**
     * Signs a user up with a passkey without using any Privy UIs.
     *
     * @returns a Promise that resolves if the passkey is valid, or rejects if there was an error.
     */
    signupWithPasskey: () => Promise<void>;
    /**
     * State of the passkey flow.
     */
    state: PasskeyFlowState;
};
/**
 * @experimental
 *
 * Use this hook to sign the user up using passkey, without using any Privy UIs.
 *
 * @returns signupWithPasskey - {@link signupWithPasskey} - signs a user up with a passkey
 */
declare const useSignupWithPasskey: (callbacks?: PrivyEvents["login"]) => UseSignupWithPasskey;

type UseLoginWithPasskey = {
    /**
     * Logs in a user with a passkey without using any Privy UIs.
     *
     * @returns a Promise that resolves if the passkey is valid, or rejects if there was an error.
     */
    loginWithPasskey: (opts?: {
        credentialIds?: string[];
    }) => Promise<void>;
    /**
     * State of the passkey flow.
     */
    state: PasskeyFlowState;
};
/**
 * @experimental
 *
 * Use this hook to log the user in with passkey, without using any Privy UIs.
 *
 * @returns loginWithPasskey - {@link loginWithPasskey} - logs a user in with a passkey
 */
declare const useLoginWithPasskey: (callbacks?: PrivyEvents["login"]) => UseLoginWithPasskey;

type UseLinkWithPasskey = {
    /**
     * Links passkey to the user without using any Privy UIs.
     *
     * @returns a Promise that resolves if the passkey is valid, or rejects if there was an error.
     */
    linkWithPasskey: () => Promise<void>;
    /**
     * State of the passkey flow.
     */
    state: PasskeyFlowState;
};
/**
 * @experimental
 *
 * Use this hook to link a passkey to the user, without using any Privy UIs.
 *
 * @returns linkWithPasskey - {@link linkWithPasskey} - links a passkey to a user
 * @returns state - {@link PasskeyFlowState} - the current state of the passkey link operation
 *
 */
declare const useLinkWithPasskey: (callbacks?: PrivyEvents["linkAccount"]) => UseLinkWithPasskey;

type SendCodeToSms = {
    phoneNumber: string;
    disableSignup?: boolean;
};
type UseLoginWithSms = {
    /**
     * Sends a one-time-passcode (OTP) to the user's phone number.
     *
     * @param opts {@link SendCodeToSms} options for sending the OTP
     * @param opts.phoneNumber {string} the user's phone number
     * @param opts.disableSignup {boolean} whether to disable signup for the user
     *
     * The phone number will ignore all non numerical values in the string except for the optional '+' first character for country code specification.
     * By default, the implicit phone number country code is +1/US. So any phone number inputted is default read as a US phone number.
     * Explicitly prepending a (+)1 to the phone number will do nothing, and the phone number will still be read and parsed as a US phone number.
     * If you are trying to send sms to a non (+1) phone number, you must append a +${countryCode} to the beginning of the input value.
     *
     * @returns a Promise that resolves if the OTP was successfully sent to the email,
     * or rejects if there was an error.
     */
    sendCode: ({ phoneNumber, disableSignup }: SendCodeToSms) => Promise<void>;
    /**
     * Log a user in with a one-time-passcode (OTP) that has been sent to their
     * phone number via {@link sendCode}
     *
     * For a single OTP, you may call this method up to a maximum of 5 times, to handle
     * errors where the user incorrectly enters the OTP in your UIs.
     *
     * After 5 attempts of {@link loginWithCode}, the existing OTP is no longer valid, and you
     * must request a new one for the user via {@link sendCode}
     *
     * @param opts {@link LoginWithCode} options for logging the user in with an OTP
     * @param opts.code {string} the OTP provided by the user
     *
     * @returns a Promise that resolves if the inputted OTP was valid, or rejects if there was an error.
     */
    loginWithCode: ({ code }: LoginWithCode) => Promise<void>;
    /**
     * The current state of the login with SMS flow.
     */
    state: OtpFlowState;
};
/**
 * @experimental
 *
 * Use this hook to log the user in with sms, without using any Privy UIs.
 *
 * @returns sendCode - {@link sendCode} sends a one-time-code to the user's phone number.
 * @returns loginWithCode - {@link loginWithCode} - logs a user in with a one-time-code, maximum 5 attempts.
 * @returns state - {@link OtpFlowState} - the current state of the login with Email flow.
 */
declare const useLoginWithSms: (callbacks?: PrivyEvents["login"]) => UseLoginWithSms;

declare const useConnectOrCreateWallet: (callbacks?: PrivyEvents["connectOrCreateWallet"]) => {
    connectOrCreateWallet: () => void;
};

type UseLinkWithSiwe = {
    /**
     * Given an external wallet address and chain ID, creates a EIP-4361 message for signing.
     * To be used for a SIWE implementation without Privy UIs
     *
     * @param opts options for generating a SIWE message for
     * @param opts.address  {string} EIP-55 mixed-case checksum-encoded address performing the signing.
     * @param opts.chainId {string} EIP-155 Chain ID to which the session is bound
     * @returns {string} EIP-4361 message for signing.
     */
    generateSiweMessage: ({ address, chainId }: {
        address: string;
        chainId: string;
    }) => Promise<string>;
    /**
     * Link a new wallet to the authenticated user via the Sign-In with Ethereum spec.
     *
     * @param opts options for verifying a signature for a SIWE message
     * @param opts.signature {string}  The EIP-191 signature corresponding to the message that the user had been given.
     * @param opts.message  {string} EIP-4361 message for signing. Returned from the generateSiweMessage call
     * @param opts.chainId {string} EIP-155 Chain ID to which the session is bound
     * @param opts.walletClientType {string}  (optional) the wallet client of the external wallet (ie. 'metamask', 'coinbase_wallet'). Defaults to null if not specified.
     * @param opts.connectorType {string}  (optional) the method used to connect the wallet to the application (ie. 'injected', 'wallet_connect_v2'). Defaults to null if not specified.
     * @returns The user response object.
     */
    linkWithSiwe: ({ signature, message, chainId, walletClientType, connectorType, }: {
        signature: string;
        message: string;
        chainId: string;
        walletClientType?: string;
        connectorType?: string;
    }) => Promise<void>;
    /**
     * The current state of the SIWE link operation
     */
    state: SiweFlowState;
};
/**
 * @experimental
 *
 * Use this hook to link an ethereum wallet to a user, without using any Privy UIs.
 *
 * @returns generateSiweMessage - {@link generateSiweMessage} generates a SIWE message for a given EIP-55 wallet address and eip-155 chain ID.
 * @returns linkWithSiwe - {@link linkWithSiwe} - Links a wallet to a user via the signature created for the SIWE message.
 */
declare const useLinkWithSiwe: (callbacks?: PrivyEvents["linkAccount"]) => UseLinkWithSiwe;

type UseLoginWithSiwe = {
    /**
     * Given an external wallet address and chain ID, creates a EIP-4361 message for signing.
     * To be used for a SIWE implementation without Privy UIs
     *
     * @param opts options for generating a SIWE message for
     * @param opts.address  {string} EIP-55 mixed-case checksum-encoded address performing the signing.
     * @param opts.chainId {string} EIP-155 Chain ID to which the session is bound
     * @returns {string} EIP-4361 message for signing.
     */
    generateSiweMessage: ({ address, chainId, disableSignup, }: {
        address: string;
        chainId: `eip155:${number}`;
        disableSignup?: boolean;
    }) => Promise<string>;
    /**
     * Given an external wallet address, generates a nonce for signing.
     * This method is for lower level SIWE implementations - you must format
     * the nonce into an EIP-4361 compatible message for signing.
     *
     * Address is a required field for all chains except Worldchain.
     *
     * @param opts options for generating a SIWE nonce
     * @param opts.address {string} Required for all chains execpt Worldchain. EIP-55 mixed-case checksum-encoded address performing the signing.
     * @param opts.disableSignup {boolean} whether to disable signup for the user
     * @returns {string} nonce for signing.
     */
    generateSiweNonce: (options?: {
        address?: string;
        disableSignup?: boolean;
    }) => Promise<string>;
    /**
     * Log a user in with a SIWE message and signature.
     *
     * @param opts options for verifying a signature for a SIWE message
     * @param opts.signature {string}  The EIP-191 signature corresponding to the message that the user had been given.
     * @param opts.message  {string} EIP-4361 message for signing. Returned from the generateSiweMessage call
     * @returns The user response object.
     */
    loginWithSiwe: ({ signature, message, disableSignup, }: {
        signature: string;
        message: string;
        disableSignup?: boolean;
    }) => Promise<User>;
    /**
     * The current state of the SIWE link operation
     */
    state: SiweFlowState;
};
declare const useLoginWithSiwe: (callbacks?: PrivyEvents["login"]) => UseLoginWithSiwe;

/**
 * Use this hook to sign a transaction using the embedded wallet.
 *
 * @returns signTransaction - prompts the user sign a transaction using their embedded wallet
 */
declare function useSignTransaction(): {
    /**
     * Prompts a user to sign a transaction using their embedded wallet.
     */
    signTransaction: (input: UnsignedTransactionRequest, options?: {
        uiOptions?: SendTransactionModalUIOptions;
        address?: string;
    }) => Promise<{
        signature: `0x${string}`;
    }>;
};

/**
 * Use this hook to register your app's logic for prompting users to complete MFA.
 * When a user is required to complete MFA in order to use their embedded wallet,
 * Privy will invoke the logic you register here to have the user complete MFA.
 * This hook should be mounted somewhere towards the root of your application tree
 * so that it can handle MFA required events from the entire application.
 *
 * @param callbacks {@link PrivyEvents} callbacks to register your logic for
 * prompting users to complete MFA.
 * @param callbacks.onMfaRequired {@link PrivyEvents} Privy will invoke this callback
 * whenever the user is required to complete MFA. Pass in a function that will prompt
 * your user to complete MFA with Privy (using `useMfa`) and only returns once
 * MFA has been completed.
 * @param callbacks.onError {@link PrivyEvents} Privy will invoke this callback whenever
 * there is an error in the MFA flow. Use this callback to define logic around how
 * you'd like to handle these errors (e.g. showing a UI to the user).
 *
 * @example
 * const [mfaMethods, setMfaMethods] = useState([])
 * const [isMfaDialogOpen, setIsMfaDialogOpen] = useState(false)
 *
 * // Prompt user to select from their enabled MFA methods
 * useRegisterMfaListener({
 *   onMfaRequired: async (methods) => {
 *     setMfaMethods(methods)
 *     setIsMfaDialogOpen(true);
 *   },
 * });
 *
 * // Within MFA modal allow the user to select an MFA method
 * <MFAModal
 *   mfaMethods={mfaMethods}
 *   isOpen={isMfaDialogOpen}
 *   setIsOpen={setIsMfaDialogOpen}
 * />
 *
 * See `useMfa` for how to execute the MFA flow within Privy in your App.
 */
declare function useRegisterMfaListener(callbacks: PrivyEvents['configureMfa']): void;

/**
 * Use this hook to link a new account to an authenticated user, and to attach
 * callbacks for success and errors.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute after a successful account linkage
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `link`.
 *
 * @returns linkEmail - opens the Privy modal and prompts the user to link an email address
 * @returns linkPhone - opens the Privy modal and prompts the user to link a phone number
 * @returns linkWallet - opens the Privy modal and prompts the user to link an external wallet
 * @returns linkGoogle - immediately redirects to Google login page and prompts the user to link their account
 * @returns linkApple - immediately redirects to Apple login page and prompts the user to link their account
 * @returns linkTwitter - immediately redirects to Twitter login page and prompts the user to link their account
 * @returns linkDiscord - immediately redirects to Discord login page and prompts the user to link their account
 * @returns linkGithub - immediately redirects to Github login page and prompts the user to link their account
 * @returns linkLinkedIn - immediately redirects to LinkedIn login page and prompts the user to link their account
 * @returns linkTikTok - immediately redirects to TikTok login page and prompts the user to link their account
 * @returns linkSpotify - immediately redirects to Spotify login page and prompts the user to link their account
 * @returns linkInstagram - immediately redirects to Instagram login page and prompts the user to link their account
 * @returns linkTelegram - immediately redirects to Telegram login page and prompts the user to link their account
 * @returns linkFarcaster - displays a QR code to sign in with Farcaster and prompts user to link their account
 *
 */
declare function useLinkAccount(callbacks?: PrivyEvents['linkAccount']): {
    linkEmail: () => void;
    linkPhone: () => void;
    linkWallet: (options?: ConnectWalletModalOptions | react.MouseEvent<any, any>) => void;
    linkGoogle: () => void;
    linkApple: () => void;
    linkTwitter: () => void;
    linkDiscord: () => void;
    linkGithub: () => void;
    linkLinkedIn: () => void;
    linkTiktok: () => void;
    linkSpotify: () => void;
    linkInstagram: () => void;
    linkFarcaster: () => void;
    linkTelegram: (options?: {
        launchParams: {
            initDataRaw?: string;
        };
    }) => void;
    linkPasskey: () => void;
};

/**
 * Use this hook to update a users account and to attach callbacks
 * for successful `updateAccount`, and`updateAccount` errors.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute for after successful account update
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `updatePhone` or `updateEmail`.
 * @returns updateEmail - opens the Privy modal and prompts the user to update email
 * @returns updatePhone - opens the Privy modal and prompts the user to update phone number
 */
declare function useUpdateAccount(callbacks?: PrivyEvents['update']): {
    /**
     * Opens the Privy modal and prompts the user to update their accont.
     */
    updateEmail: () => void;
    updatePhone: () => void;
};

/**
 * Use this hook to connect the user's external wallet, and to attach
 * callbacks after a user successfully connects their wallet, or if there
 * is an error during the connection attempt.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute when a user successfully connects their wallet
 * @param callbacks.onError {@link PrivyEvents} callback to execute when a user attempts to connect their wallet, but there is an error
 * @returns connectWallet - opens the Privy modal and prompts the user to connect an external wallet
 */
declare function useConnectWallet(callbacks?: PrivyEvents['connectWallet']): {
    /**
     * Opens the Privy modal and prompts the user to connect a wallet.
     */
    connectWallet: (options?: ConnectWalletModalOptions | react.MouseEvent<any, any>) => void;
};

/**
 * Use this hook to create a privy wallet for a user, and to attach a callback after successful wallet creation.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute when a user successfully creates a privy wallet
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `cresteWallet`.
 * @returns createWallet - creates a privy wallet for the user.
 */
declare function useCreateWallet(callbacks?: PrivyEvents['createWallet']): {
    /**
     * Creates an embedded wallet for the current user.
     *
     * This method will error if the user already has an embedded wallet
     *
     * If the `config.embeddedWallets.requireUserOwnedRecoveryOnCreate` property is set to true,
     * this will prompt the user to complete a recovery flow to secure
     * the recovery share of their embedded wallet.
     *
     * Otherwise (the default), Privy will secure the recovery share, and the embedded wallet
     * will be created without showing any UIs to the user.
     *
     * @returns Promise for the {@link Wallet} object for the newly created embedded wallet
     */
    createWallet: (options?: CreateWalletOptions | react.MouseEvent<any, any>) => Promise<Wallet>;
};

/**
 * Method to fund a user's wallet via Privy's funding feature by inputting a valid wallet address.
 * You can access the fields and methods documented here via the {@link useFundWallet} hook.
 */
interface UseFundWalletInterface {
    /**
     * Prompt the user to go through the funding flow and for a specified wallet.
     *
     * This will open the modal with a prompt for the user to select a funding method (if multiple are enabled).
     *
     * Once the user continues to the funding flow, Privy will display the funding status screen, and wait
     * for the transaction to complete.
     *
     * Note: Even after a successful funding, funds can take a few minutes to arrive in the user's wallet.
     *
     * Privy currently supports funding via external wallets and Moonpay.
     *
     * @param address typed data payload to be signed
     * @param fundWalletConfig {@link FundWalletConfig} Funding configuration to specify chain and funding amount (if enabled)
     */
    fundWallet: (address: string, fundWalletConfig?: FundWalletConfig) => Promise<void>;
}
/**
 * Hook to fund a wallet via Privy's fiat on-ramp integration given the wallet address.
 *
 * @param callbacks.onUserExited {@link PrivyEvents} Callback that will execute when a funding flow is exited. This fires when a user closes a funding flow modal, for any reason.
 * @returns fundWallet - function to on-ramp funds to any given wallet
 */
declare const useFundWallet: (callbacks?: PrivyEvents["fundWallet"]) => UseFundWalletInterface;

/**
 * Hook to headlessly connect a Coinbase Smart Wallet to a user.
 */
interface UseConnectCoinbaseSmartWalletInterface {
    /**
     * Method to headlessly connect a Coinbase Smart Wallet to a user.
     * @experimental
     */
    connectCoinbaseSmartWallet: () => void;
}
declare const useConnectCoinbaseSmartWallet: () => UseConnectCoinbaseSmartWalletInterface;

interface UseImportWalletInterface {
    /**
     * Imports a private key to be used as an embedded wallet for the user
     * This method will error if the user already has an imported wallet or if they
     * exit in the middle of the flow.
     *
     * @param o input object
     * @param o.privateKey The hex private key of the ethereum wallet to import
     *
     * @returns The imported wallet
     */
    importWallet: (input: {
        privateKey: string;
    }) => Promise<Wallet>;
}
/**
 * Use this hook to import an external ethereum wallet into an embedded wallet via its private key
 *
 * @returns The `importWallet` method
 */
declare const useImportWallet: () => UseImportWalletInterface;

/**
 * Hook to access to link and interact with cross-app accounts from a provider app.
 * You can access the fields and methods documented here via the {@link useCrossAppAccounts} hook.
 */
interface UseCrossAppAccountsInterface {
    /**
     * For users who are not authenticated, prompts the user to log into their account from another Privy app.
     * Once a user has logged into their account, you can request signatures and transactions from their embedded wallet
     * in the linked app.
     *
     * @param options.appId {string} the target Privy app ID from which the user should log into another Privy account
     *
     * @returns a Promise that resolves if the user successfully authenticates, or rejects if there was an error
     */
    loginWithCrossAppAccount: ({ appId }: {
        appId: string;
    }) => Promise<User>;
    /**
     * For users who are authenticated, prompts the user to link their account from another Privy app to their account
     * within your app. Once a user has linked their account, you can request signatures and transactions from their embedded wallet
     * in the linked app.
     *
     * This will redirect the user to a page on the target Privy app ID where they can login and authorize access to your app.
     * @param options.appId {string} the target Privy app ID from which the user should link another Privy account
     */
    linkCrossAppAccount: ({ appId }: {
        appId: string;
    }) => Promise<User>;
    /**
     * Unlink a cross-app account from a user, by passing the apple subject ID.
     * Note that you can only unlink this account if the user has at least one other account.
     *
     * @param options.subject {string} the OAuth subject of the account to be unlinked.
     */
    unlinkCrossAppAccount: ({ subject }: {
        subject: string;
    }) => Promise<User>;
    /**
     * For users who have linked an account from another privy app, prompts the user to sign a message
     * with their embedded wallet from the linked privy app.
     *
     * This will redirect the user to a page on the target Privy app where they can sign the message.
     *
     *
     * @param message {string} the message to sign
     * @param options.address {string} the address of the embedded wallet from the linked privy app
     * @param options.chainId {number} (optional) the chain ID, required for smart wallet signatures
     */
    signMessage: (message: string, o: {
        address: string;
        chainId?: number;
    }) => Promise<string>;
    /**
     * For users who have linked an account from another privy app, prompts the user to sign typed data
     * with their embedded wallet from the linked privy app.
     *
     * This will redirect the user to a page on the target Privy app where they can sign the message.
     *
     *
     * @param data {SignTypedDataParameters} the typed data to sign
     * @param options.address {string} the address of the embedded wallet from the linked privy app
     * @param options.chainId {number} (optional) the chain ID, required for smart wallet signatures
     */
    signTypedData: (data: SignTypedDataParams, o: {
        address: string;
        chainId?: number;
    }) => Promise<string>;
    /**
     * For users who have linked an account from another privy app, prompts the user to send a
     * transaction with their embedded wallet from the linked privy app.
     *
     * This will redirect the user to a page on the target Privy app where they can sign the message.
     *
     *
     * @param tx {UnsignedTransactionRequestWithChainId} the transaction to send
     * @param options.address {string} the address of the embedded wallet from the linked privy app
     */
    sendTransaction: (tx: UnsignedTransactionRequestWithChainId, o: {
        address: string;
    }) => Promise<string>;
}
/**
 * Hook to use cross-app accounts
 *
 * @returns o.linkCrossAppAccount - method to link a user's account from a provider app
 * @returns o.signMessage - method sign a message with a user's embedded wallet from a provider app
 */
declare const useCrossAppAccounts: () => UseCrossAppAccountsInterface;

/**
 * Use this hook to send a transaction using the embedded wallet and to attach callbacks for success and errors.
 * Transactions sent from the embedded wallet using transaction functions from non-Privy libraries
 * will not trigger the callbacks.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute for a successful transaction sent
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `sendTransaction`
 * @returns sendTransaction - prompts the user send a transaction using their embedded wallet
 */
declare function useSendTransaction(callbacks?: PrivyEvents['sendTransaction']): {
    /**
     * Prompts a user to send a transaction using their embedded wallet.
     */
    sendTransaction: (input: UnsignedTransactionRequest, options?: {
        uiOptions?: SendTransactionModalUIOptions;
        fundWalletConfig?: FundWalletConfig;
        address?: string;
    }) => Promise<{
        hash: `0x${string}`;
    }>;
};

/**
 * Use this hook to set a password on the embedded wallet, and to attach callbacks
 * for successful `password set`s, and `password set` errors.
 * Note that the callbacks will only fire for explicit `setWalletPassword` calls from the Privy SDK.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute for a successful password setting
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `setWalletPassword` -- ie.
 * the user doesn't have an embedded wallet, the user already has a set password on the wallet, or the password flow is prematurely exited.
 * @returns setWalletPassword - opens the Privy modal and prompts the user to set a password on the embedded wallet
 */
declare function useSetWalletPassword(callbacks?: PrivyEvents['setWalletPassword']): {
    /**
     * Opens the Privy set password modal and prompts the user to set wallet password.
     */
    setWalletPassword: () => Promise<Wallet>;
};

/**
 * Use this hook to create a guest account
 *
 * @returns createGuestAccount - {@link createGuestAccount} creates a guest account
 */
declare function useGuestAccounts(): {
    createGuestAccount: () => Promise<User>;
};

/**
 * Use this hook to set user-controlled recovery on the embedded wallet, and to attach callbacks
 * for successful `recovery set`s, and `recovery set` errors.
 * Note that the callbacks will only fire for explicit `setWalletRecovery` calls from the Privy SDK.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute for a successful recovery setting
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `setWalletRecovery` -- ie.
 * the user doesn't have an embedded wallet, the user already has a cloud-based recovery on the wallet, or the password flow is prematurely exited.
 * @returns setWalletRecovery - opens the Privy modal and prompts the user to set a password on the embedded wallet
 */
declare function useSetWalletRecovery(callbacks?: PrivyEvents['setWalletRecovery']): {
    /**
     * Opens the Privy set recovery modal and prompts the user to set wallet password.
     */
    setWalletRecovery: (o?: SetWalletRecoveryOptions) => Promise<Wallet>;
};

/**
 * Use this hook to sign a message using the embedded wallet, and to attach callbacks for success and errors.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute for a successful message signature
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `signMessage`
 * @returns signMessage - prompts the user to sign a message with their embedded wallet
 */
declare function useSignMessage(callbacks?: PrivyEvents['signMessage']): {
    /**
     * Prompts a user to sign a message using their embedded wallet.
     */
    signMessage: (input: {
        message: string;
    }, options?: {
        uiOptions?: SignMessageModalUIOptions;
        address?: string;
    }) => Promise<{
        signature: string;
    }>;
};

/**
 * @experimental Interfaces are subject to change in the future.
 *
 * Signs an EIP-7702 authorization with the user's wallet. This is
 * strongly not recommended for production use until the Pectra hard fork
 */
declare const useSignAuthorization: () => {
    signAuthorization: (input: {
        contractAddress: `0x${string}`;
        chainId?: number;
        nonce?: number;
        executor?: "self" | `0x${string}`;
    }, options?: {
        address?: string;
    }) => Promise<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        address: viem.Address;
        chainId: number;
        nonce: number;
    } | {
        r: `0x${string}`;
        s: `0x${string}`;
        yParity: number;
        v?: bigint | undefined;
        address: viem.Address;
        chainId: number;
        nonce: number;
    } | {
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        address: viem.Address;
        chainId: number;
        nonce: number;
    } | {
        r: `0x${string}`;
        s: `0x${string}`;
        yParity: number;
        v?: bigint | undefined;
        address: viem.Address;
        chainId: number;
        nonce: number;
    } | {
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        address: viem.Address;
        chainId: number;
        nonce: number;
    } | {
        r: `0x${string}`;
        s: `0x${string}`;
        yParity: number;
        v?: bigint | undefined;
        address: viem.Address;
        chainId: number;
        nonce: number;
    }>;
};

/**
 * Use this hook to sign typed data using the embedded wallet, and to attach callbacks for success and errors.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute for a successful signature
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `signTypedData`
 * @returns signTypedData - prompts the user to sign typed data with their embedded wallet
 */
declare function useSignTypedData(callbacks?: PrivyEvents['signTypedData']): {
    /**
     * Prompts a user to sign typed data using their embedded wallet.
     */
    signTypedData: (input: SignTypedDataParams, options?: {
        uiOptions?: SignMessageModalUIOptions;
        address?: string;
    }) => Promise<{
        signature: string;
    }>;
};

/**
 * Use this hook to check whether or not the Privy modal is currently visible.
 *
 * @returns isOpen - whether or not the Privy modal is visible
 */
declare const useModalStatus: () => {
    isOpen: boolean;
};

/**
 * Use this hook to tap into access token grant and revoke events.
 *
 * @param callbacks.onAccessTokenGranted {@link PrivyEvents} callback to automatically execute when a user is granted an access token. This will be called when a user logs in, or when a user's access token is refreshed.
 * @param callbacks.onAccessTokenRemoved {@link PrivyEvents} callback to automatically execute when a user's access token is revoked.
 * @returns getAccessToken - returns the user's current access token
 */
declare function useToken(callbacks?: PrivyEvents['accessToken']): {
    getAccessToken: () => Promise<string | null>;
};

declare const useActiveWallet: () => {
    connect: (opts?: {
        reset?: boolean;
    }) => Promise<{
        wallet?: BaseConnectedWalletType;
        network?: string;
    }>;
    setActiveWallet: (wallet: BaseConnectedWalletType) => void;
    wallet: ConnectedWallet | ConnectedSolanaWallet | undefined;
    network: string | undefined;
};

type UseOAuthTokens = {
    /**
     * For users who are authenticated, prompts the user to reauthorize an OAuth account of the specified type.
     * This will directly initiate the OAuth flow for an already linked OAuth account.
     */
    reauthorize: ({ provider }: {
        provider: OAuthProviderType;
    }) => Promise<void>;
};
/**
 * Use this hook to retrieve the user's OAuth tokens after any subsequent OAuth Authorization flow.
 * Ensure that this callback is mounted whenever your user undergoes a successful OAuth authorization flow to access the OAuth and Refresh tokens.
 *
 * @param callbacks.onOAuthTokenGrant {@link PrivyEvents} callback to automatically execute when a user is granted an OAuth token during an OAuth flow.
 *
 * @returns reauthorize.reauthorize {@link UseOAuthTokens} triggers the OAuth authorization fow for an existing account
 */
declare function useOAuthTokens(callbacks?: PrivyEvents['oAuthAuthorization']): UseOAuthTokens;

/**
 * The state of the JWT auth flow.
 */
type JwtAuthFlowState = {
    status: 'initial';
} | {
    status: 'loading';
} | {
    status: 'not-enabled';
} | {
    status: 'done';
} | {
    status: 'error';
    error: Error | null;
};
/** @deprecated type will be replaced with its equivalent, {@link JwtAuthFlowState} */
type CustomAuthFlowState = JwtAuthFlowState;

type UseCustomAuth = {
    /**
     * Object that indicates the status of Privy's custom auth flow.
     *
     * Possible values include: {
     * status: 'initial' | 'loading' | 'not-enabled' | 'done';
     * }
     * or {
     * status: 'error';
     * error: Error | null;
     * }
     *
     */
    status: CustomAuthFlowState;
};
/**
 * Use this hook to check the Privy auth flow status for whenever third-party/custom auth is enabled.
 *
 * @returns status - auth flow/ JWT exchange status of the Privy user, if custom auth is enabled
 * @deprecated Use `useSyncJwtBasedAuthState` instead.
 */
declare const useCustomAuth: (callbacks?: PrivyEvents["customAuth"]) => UseCustomAuth;

type OnJwtAuthStateChange = () => void;
type UnsubscribeFromJwtAuth = () => void;
type SubscribeToJwtAuth = (onJwtAuthStateChange: OnJwtAuthStateChange) => UnsubscribeFromJwtAuth;
type OnAuthenticatedEvent = {
    user: User;
    isNewUser: boolean;
};
interface UseSyncJwtBasedAuthStateInput {
    /**
     * A function that returns a JWT token from the external system.
     * If the user is not authenticated, this function should return `undefined`.
     *
     * This function **should not throw** and doing so will result in the user being
     * logged out.
     */
    getExternalJwt: () => Promise<string | undefined>;
    /**
     * This callback is used by Privy for subscribing to changes in the state of
     * the external authentication system.
     * It should return a function that can be called to unsubscribe so as to
     * avoid stale listeners.
     *
     * The passed callback should be wrapped in a `useCallback` to avoid
     * re-subscribing too often.
     *
     * Consider using `useSubscribeToJwtAuthWithFlag` if the external system
     * offers an `isAuthenticated` flag instead of direct listeners.
     *
     * @example
     * subscribe: useCallback((onAuthStateChange) => {
     *   SomeAuthManager.addEventListener('session', onAuthStateChange);
     *   return () => {
     *     SomeAuthManager.removeEventListener('session', onAuthStateChange);
     *   };
     * }, [])
     */
    subscribe: SubscribeToJwtAuth;
    /**
     * Whether the external JWT authentication system is enabled.
     * This can be used to disable the sync process when the external system is
     * not enabled or otherwise not available.
     */
    enabled?: boolean;
    /**
     * A callback that is called when the user is authenticated in Privy after
     * syncing with the external system.
     */
    onAuthenticated?: (event: OnAuthenticatedEvent) => void;
    /**
     * A callback that is called when the user is unauthenticated in Privy after
     * syncing with the external system.
     */
    onUnauthenticated?: () => void;
    /**
     * A callback that is called when an error occurs during the sync process.
     */
    onError?: (error: Error) => void;
}
interface UseSyncJwtBasedAuthStateInterface {
    /**
     * The current state of the JWT authentication flow.
     */
    state: JwtAuthFlowState;
}
/**
 * Hook to sync the state of a JWT-based external authentication system with Privy.
 *
 * When "JWT-based authentication" is enabled, this hook will be used to sync the state of the
 * external system back to Privy.
 *
 * Make sure to call this hook in a component that is mounted throughout the lifetime of the application,
 * whether the user is authenticated or not.
 *
 * @returns An object containing the current state of the JWT authentication flow.
 */
declare function useSyncJwtBasedAuthState({ subscribe, getExternalJwt, enabled, onAuthenticated, onUnauthenticated, onError, }: UseSyncJwtBasedAuthStateInput): UseSyncJwtBasedAuthStateInterface;

interface UseSubscribeToJwtAuthWithFlagInput extends Omit<UseSyncJwtBasedAuthStateInput, 'subscribe'> {
    /**
     * A flag indicating whether the user is authenticated in the external
     * JWT-based authentication system.
     *
     * Changes to this value in any direction will trigger a re-synchronization of
     * the Privy JWT authentication state.
     */
    isAuthenticated?: boolean;
    /**
     * A flag indicating whether the external JWT-based authentication system is
     * loading or otherwise refreshing its state.
     *
     * Changes to this value in any direction will trigger a re-synchronization of
     * the Privy JWT authentication state.
     */
    isLoading?: boolean;
}
/**
 * This is a utility hook for subscribing to an external JWT-based
 * authentication system that offers a "flag" or hook based API, with values like `isAuthenticated`,
 * instead of direct listeners on auth state changes
 *
 * @returns An object containing the current state of the JWT authentication flow.
 *
 * @see {@link useSyncJwtBasedAuthState} for more information on syncing JWT authentication state.
 *
 * @example
 * const {isAuthenticated, getAccessToken} = useSomeAuthSystem();
 *
 * const {subscribe} = useSubscribeToJwtAuthWithFlag({
 *   isAuthenticated,
 *   getExternalJwt: getAccessToken,
 * });
 */
declare function useSubscribeToJwtAuthWithFlag({ isAuthenticated, isLoading, ...useSyncJwtBasedAuthStateInput }: UseSubscribeToJwtAuthWithFlagInput): UseSyncJwtBasedAuthStateInterface;

/**
 * Use this hook to link a new custom JWT account to an authenticated user, and to attach
 * callbacks for success and errors.
 *
 */
type UseLinkJwtAccount = {
    /**
     * Link a new custom JWT account to the authenticated user.
     *
     * @param jwt - The custom JWT to link to the user.
     * @returns The user and the linked account.
     */
    linkWithCustomJwt: (jwt: string) => Promise<{
        user: User;
    }>;
    /**
     * The current state of the JWT account linkage flow.
     */
    state: JwtAuthFlowState;
};
/**
 * Use this hook to link a new custom JWT account to an authenticated user, and to attach
 * callbacks for success and errors.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute after a successful account linkage
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `link`.
 *
 */
declare function useLinkJwtAccount(callbacks?: PrivyEvents['linkAccount']): UseLinkJwtAccount;

/**
 * Use this hook to write to Farcaster.
 *
 */
declare function useFarcasterSigner(): {
    getFarcasterSignerPublicKey: () => Promise<Uint8Array>;
    signFarcasterMessage: (messageHash: Uint8Array) => Promise<Uint8Array>;
    requestFarcasterSignerFromWarpcast: () => Promise<void>;
};

/**
 * Hook to delegate permissions to execute certain transactions to the wallet API.
 *
 */
interface UseDelegatedActionsInterface {
    /**
     * Prompts the user to delegate access to their wallet to allow an app to transact on behalf of a user
     * within a set of pre-defined permissions. Users can always decline or revoke delegation.
     *
     * @param address {string} address of the wallet to delegate
     * @param chainType {'solana' | 'ethereum'} chain type for the wallet to delegate
     * @returns
     */
    delegateWallet: ({ address, chainType, }: {
        address: string;
        chainType: 'solana' | 'ethereum';
    }) => Promise<void>;
    /**
     *
     *
     * Revokes the wallet API's ability to transact with a user's delegated wallets. This will revoke
     * ALL wallets that have been delegated by the user, in case the user has delegated multiple embedded
     * wallets.
     *
     *
     * @returns Promise that resolves if the revocation was successful, and errors otherwise
     */
    revokeWallets: () => Promise<void>;
}
declare const useDelegatedActions: () => UseDelegatedActionsInterface;

/**
 * Hook to add session signers to a user wallet.
 *
 */
interface UseSessionSignersInterface {
    /**
     * Headlessly grants access of the user wallet to a specified key quorum.
     *
     * @param address address of the wallet to delegate
     * @param signers array of signers to add as session keys to the wallet
     * @returns Promise that resolves if adding signers was successful, and errors otherwise
     */
    addSessionSigners: ({ address, signers, }: {
        address: string;
        signers: SessionSignerInput;
    }) => Promise<{
        user: User;
    }>;
    /**
     * Removes all session keys from a user wallet.
     *
     * @param address address of the wallet to revoke access for
     * @returns Promise that resolves if the revocation was successful, and errors otherwise
     */
    removeSessionSigners: ({ address }: {
        address: string;
    }) => Promise<{
        user: User;
    }>;
}
declare const useSessionSigners: () => UseSessionSignersInterface;

/**
 * Use this hook to programmatically update the user in response to any backend change
 *
 * @returns user - user object from Privy
 * refreshUser - method used to update the user object and identity token in the client
 */
declare const useUser: () => {
    user: User | null;
    refreshUser: () => Promise<User>;
};

type UseLoginWithTelegram = {
    /**
     * Trigger Telegram authenticate pop-up and authenticate the user without using Privy's UI.
     *
     * @returns a Promise that resolves when the user is authenticated, or rejects if there was an error.
     *
     * @example
     * const {login} = useLoginWithTelegram()
     *
     * <Button onPress={() => login()} /> *
     */
    login: (options?: {
        disableSignup?: boolean;
    }) => Promise<void>;
    /**
     * The current state of the login with OAuth flow.
     */
    state: TelegramAuthFlowState;
};
/**
 * @experimental
 *
 * Use this hook to log the user in with Telegram, without using any Privy UIs.
 */
declare const useLoginWithTelegram: (callbacks?: PrivyEvents["login"]) => UseLoginWithTelegram;

/**
 *
 * Hook to headlessly permissions to execute certain transactions to the wallet API.
 *
 */
interface UseHeadlessDelegatedActionsInterface {
    /**
     *
     * Prompts the user to headlessly delegate access to their wallet to allow an app to transact on behalf of a user
     * within a set of pre-defined permissions. Users can always decline or revoke delegation.
     *
     * @param address {string} address of the wallet to delegate
     * @param chainType {'solana' | 'ethereum'} chain type for the wallet to delegate
     * @returns
     */
    delegateWallet: ({ address, chainType, }: {
        address: string;
        chainType: 'solana' | 'ethereum';
    }) => Promise<void>;
    /**
     *
     * Headlessly revokes the wallet API's ability to transact with a user's delegated wallets. This will revoke
     * ALL wallets that have been delegated by the user, in case the user has delegated multiple embedded
     * wallets.
     *
     *
     * @returns Promise that resolves if the revocation was successful, and errors otherwise.
     */
    revokeWallets: () => Promise<void>;
}
declare const useHeadlessDelegatedActions: () => UseHeadlessDelegatedActionsInterface;

/**
 * Get the embedded wallet for the user if they have one.
 *
 * @param wallets {@link ConnectedWallet} the array of wallets fetched via {@link useWallets}
 * @returns the embedded wallet if it exists, otherwise null
 */
declare function getEmbeddedConnectedWallet(wallets: ConnectedWallet[]): ConnectedWallet | null;

declare const LoginModal: ({ open }: {
    open: boolean;
}) => react_jsx_runtime.JSX.Element;

export { BaseConnectedWalletType, Captcha, ConnectWalletModalOptions, ConnectedSolanaWallet, ConnectedWallet, ConnectorManager, type CustomAuthFlowState, EIP1193Provider, EthereumWalletConnector, FundWalletConfig, type JwtAuthFlowState, LoginModal, LoginModalOptions, LoginWithCode, MfaMethod, OAuthFlowState, OAuthProviderType, OAuthTokens, OtpFlowState, PasskeyFlowState, PrivyClient, PrivyClientConfig, PrivyEvents, type PrivyInterface, PrivyProvider, type PrivyProviderProps, type SendCodeToEmail, type SendCodeToSms, SendTransactionModalUIOptions, SignMessageModalUIOptions, SignTypedDataParams, SiweFlowState, TelegramAuthFlowState, UnsignedTransactionRequest, type UseConnectCoinbaseSmartWalletInterface, type UseCustomAuth, type UseDelegatedActionsInterface, type UseFundWalletInterface, type UseImportWalletInterface, type UseLinkJwtAccount, type UseLinkWithPasskey, type UseLoginWithEmail, type UseLoginWithPasskey, type UseLoginWithSms, type UseLoginWithTelegram, type UseOAuthTokens, type UseRecoverEmbeddedWalletInterface, type UseSessionSignersInterface, type UseSignupWithPasskey, type UseSubscribeToJwtAuthWithFlagInput, type UseSyncJwtBasedAuthStateInput, type UseSyncJwtBasedAuthStateInterface, type UseWalletsInterface, User, VERSION, Wallet, WalletConnector, WalletListEntry, errorIndicatesMaxMfaRetries, errorIndicatesMfaTimeout, errorIndicatesMfaVerificationFailed, getCustomerAccessToken as getAccessToken, getEmbeddedConnectedWallet, useActiveWallet, useConnectCoinbaseSmartWallet, useConnectOrCreateWallet, useConnectWallet, useCreateWallet, useCrossAppAccounts, useCustomAuth, useDelegatedActions, useFarcasterSigner, useFundWallet, useGuestAccounts, useHeadlessDelegatedActions, useIdentityToken, useImportWallet, useLinkAccount, useLinkJwtAccount, useLinkWithPasskey, useLinkWithSiwe, useLogin, useLoginWithEmail, useLoginWithFarcasterV2, useLoginWithOAuth, useLoginWithPasskey, useLoginWithSiwe, useLoginWithSms, useLoginWithTelegram, useLogout, useMfa, useMfaEnrollment, useModalStatus, useOAuthTokens, usePrivy, useRecoverEmbeddedWallet, useRegisterMfaListener, useSendTransaction, useSessionSigners, useSetWalletPassword, useSetWalletRecovery, useSignAuthorization, useSignMessage, useSignTransaction, useSignTypedData, useSignupWithPasskey, useSubscribeToJwtAuthWithFlag, useSyncJwtBasedAuthState, useToken, useUpdateAccount, useUser, useWallets };
