'use client';

import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useWindowSize } from 'react-use';
import dynamic from 'next/dynamic';
import { EmailVerification } from '@/components/send-gift/EmailVerification';
import { RedeemForm } from './RedeemForm';
import { RedeemSuccess } from './RedeemSuccess';
import { useRouter } from 'next/navigation';

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function Redeem() {
  const { ready, authenticated, logout, user } = usePrivy();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [redeemData, setRedeemData] = useState<{ amount: string; message: string } | null>(null);
  const router = useRouter();

  const handleSuccess = (data: { amount: string; message: string }) => {
    setRedeemData(data);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  if (!ready) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!authenticated) {
    return <EmailVerification title="Redeem Your Gift" onVerified={() => {}} />;
  }

  // Show only the success card, centered and big, when redeemData is set
  if (redeemData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
        {showConfetti && (
          <ReactConfetti
            width={width}
            height={height}
            numberOfPieces={500}
            recycle={false}
            gravity={0.3}
            colors={['#059669', '#10B981', '#34D399']}
          />
        )}
        <div className="w-full max-w-lg mx-auto">
          <RedeemSuccess redeemData={redeemData} onReset={() => setRedeemData(null)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-4 py-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Redeem a Crypto Gift</h1>
            </div>
            {user?.email?.address && (
              <p className="text-sm text-gray-600 mt-1">
                Logged in as <span className="font-medium">{user.email.address}</span>
              </p>
            )}
          </div>
          <button
            onClick={() => logout()}
            className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl w-full flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="lg:w-1/2 p-6 sm:p-8 relative flex items-center justify-center overflow-hidden min-h-[400px]">
            <div className="absolute inset-0 z-0">
              <img src="/gift-bg.png" alt="Gift" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-indigo-700/70" />
            </div>
            <div className="text-white text-center max-w-md relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Redeem Your Gift</h2>
              <p className="text-indigo-100 text-sm sm:text-base">
                Enter your wallet address and unlock your special crypto gift and message.
              </p>
            </div>
          </div>
          {/* Right side - Form */}
          <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center min-h-[400px]">
            <div className="w-full max-w-md mx-auto">
              <RedeemForm onSuccess={handleSuccess} />
            </div>
          </div>
        </div>
        {/* Or block and create gift button */}
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-50 text-gray-500">or</span>
            </div>
          </div>
          <button
            className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium transition-colors text-sm sm:text-base"
            onClick={() => router.push('/')}
          >
            Create a Gift
          </button>
        </div>
      </div>
    </div>
  );
}