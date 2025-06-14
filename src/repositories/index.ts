import { LinkedAccountsResponseType } from '@/types/privy';
import { LOCK_GIFT_ABI, LOCKER_CONTRACT_ADDRESS } from '@/utils/abi';
import { ofetch } from 'ofetch';
import { Address, encodeFunctionData } from 'viem';

interface PrivyResponse {
    id: string;
    linked_accounts: Array<LinkedAccountsResponseType>;
    qrCode?: string;
    link?: string;
}

export async function callRPC(method: string, params: any[]) {
  const response = await ofetch('/api/rpc', {
    method: 'POST',
    body: {
      method,
      params,
      id: 1,
      jsonrpc: '2.0'
    },
  });

  return response;
}

export const apiClient = {
    createUserWallet: async (email: string): Promise<Address | null> => {
        const response = await ofetch<PrivyResponse>('/api/privy', {
            method: 'POST',
            body: {
                wallets: [
                    {
                        chain_type: "ethereum",
                        create_smart_wallet: true,
                    }
                ],
                linked_accounts: [
                    {
                        address: email,
                        type: "email"
                    }
                ]
            }
        });

        const ethWallet = response.linked_accounts.find(
            account => account.type === 'smart_wallet'
        );

        return ethWallet?.address as Address || null;
    },

    getBalance: async (address: Address): Promise<string> => {
        const response = await callRPC('eth_getBalance', [address, 'latest']);
        return response.result;
    },

    getGifts: async (address: Address) => {
        const response = await callRPC('eth_call', [{
            to: LOCKER_CONTRACT_ADDRESS,
            data: encodeFunctionData({
                abi: LOCK_GIFT_ABI,
                functionName: 'getGifts',
                args: [address],
            }),
        }, 'latest']);

        return response.result;
    }
}
