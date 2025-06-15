'use client';

import { useState } from 'react';
import { useFundWallet, usePrivy } from '@privy-io/react-auth';
import { parseEther, encodeFunctionData, Address, formatEther } from 'viem';
import { LOCK_GIFT_ABI, LOCKER_CONTRACT_ADDRESS } from '@/utils/abi';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { apiClient } from '@/repositories';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

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
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="lg:w-1/2 p-6 sm:p-8 relative flex items-center justify-center overflow-hidden min-h-[300px]">
            <div className="absolute inset-0 z-0">
              <img src="/gift-bg.png" alt="Gift" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-indigo-700/70" />
            </div>
            <div className="text-white text-center max-w-md relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Send a Crypto Gift</h2>
              <p className="text-indigo-100 text-sm sm:text-base">Create a time-locked gift that will be automatically delivered to your loved ones.</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 sm:p-4 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors text-sm sm:text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="recipient@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (ETH)</label>
                <input
                  type="number"
                  required
                  step="0.000000000000000001"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors text-sm sm:text-base"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Unlock Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors text-sm sm:text-base"
                  value={formData.unlockDate}
                  onChange={(e) => setFormData({ ...formData, unlockDate: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Congratulations message (optional)</label>
                <textarea
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors text-sm sm:text-base"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Add a congratulations message..."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors font-medium text-sm sm:text-base"
              >
                {isLoading ? 'Creating Gift...' : 'Create Gift'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-6 sm:mt-8 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>
        <button
          className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium transition-colors text-sm sm:text-base"
          onClick={() => router.push('/redeem')}
        >
          Redeem instead
        </button>
      </div>
    </div>
  );
} 