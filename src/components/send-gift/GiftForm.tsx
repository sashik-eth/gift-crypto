'use client';

import { useState } from 'react';
import { useFundWallet, usePrivy } from '@privy-io/react-auth';
import { parseEther, encodeFunctionData, Address, formatEther } from 'viem';
import { LOCK_GIFT_ABI, LOCKER_CONTRACT_ADDRESS } from '@/utils/abi';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { apiClient } from '@/repositories';

interface GiftFormProps {
  onSuccess: (data: { email: string; amount: string; unlockDate: string; }) => void;
}

export function GiftForm({ onSuccess }: GiftFormProps) {
  const { client } = useSmartWallets();
  const { user } = usePrivy();
  const { fundWallet } = useFundWallet({
    onUserExited: async (params) => {
      onFundWallet(params.balance);
    },
  });
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    unlockDate: '',
    token: 'ETH',
    message: '',
  });
  const [recipientWallet, setRecipientWallet] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFundWallet = async (balance?: bigint) => {
    try {
      if (!client || !user?.smartWallet) {
        throw new Error('No client found');
      }

      const amountInWei = parseEther(formData.amount);
        
      if (balance && balance < amountInWei) {
        const amountLeft = amountInWei - balance;
        await fundWallet(user?.smartWallet?.address, {
          amount: formatEther(amountLeft),
        });

        throw new Error('Insufficient balance');
      }

      setTimeout(() => sendTransaction(recipientWallet as Address), 1000)

    } catch (err) {
      console.error('Failed to send transaction:', err);
      setError(err instanceof Error ? err.message : 'Failed to create gift');
    } finally {
      setIsLoading(false);
    }
  }

  const sendTransaction = async (wallet: Address) => {
    if (!client) {
      return;
    }

    const amountInWei = parseEther(formData.amount);
    const unlockTime = Math.floor(new Date(formData.unlockDate).getTime() / 1000);

    const transactionHash = await client.sendTransaction({
      to: LOCKER_CONTRACT_ADDRESS,
      data: encodeFunctionData({
        abi: LOCK_GIFT_ABI,
        functionName: 'lockGift',
        args: [wallet, BigInt(unlockTime), formData.message],
      }),
      value: amountInWei,
    });

    console.log(`Sent transaction: `, transactionHash)

    onSuccess({
      email: formData.email,
      amount: formData.amount,
      unlockDate: formData.unlockDate,
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const ethWallet = await apiClient.createUserWallet(formData.email);

      if (!ethWallet) {
        throw new Error('No Ethereum wallet created');
      }

      try {
        if (!client || !user?.smartWallet) {
          throw new Error('No smart wallet found');
        }

        const result = await apiClient.getBalance(user.smartWallet.address as Address);

        const balance = parseInt(result, 16);
        const amountInWei = parseEther(formData.amount);

        if (balance < amountInWei) {
          setRecipientWallet(ethWallet);

          await fundWallet(user.smartWallet.address, {
            amount: formData.amount,
          });
        } else {
          sendTransaction(ethWallet);
        }
      } catch (fundingError) {
        console.error('Failed to send transaction:', fundingError);
        throw new Error('Failed to send the transaction. Please try again.');
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create gift');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Unlock Date</label>
        <input
          type="date"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.unlockDate}
          onChange={(e) => setFormData({ ...formData, unlockDate: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {isLoading ? 'Creating Gift...' : 'Create Gift'}
      </button>
    </form>
  );
} 