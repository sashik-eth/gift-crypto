'use client';

import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useWindowSize } from 'react-use';
import dynamic from 'next/dynamic';
import { EmailVerification } from '@/components/send-gift/EmailVerification';
import { RedeemForm } from './RedeemForm';
import { RedeemSuccess } from './RedeemSuccess';

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function Redeem() {
  const { ready, authenticated, logout, user } = usePrivy();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [redeemData, setRedeemData] = useState<{ amount: string; message: string } | null>(null);

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

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {redeemData ? "Gift Redeemed Successfully!" : "Redeem Your Gift"}
          </h1>
          {user?.email?.address && (
            <p className="text-sm text-gray-600 mt-1">
              Logged in as <span className="font-medium">{user.email.address}</span>
            </p>
          )}
        </div>
        <button
          onClick={() => logout()}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Logout
        </button>
      </div>
      
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={500}
          recycle={false}
          gravity={0.3}
          colors={['#059669', '#10B981', '#34D399']} // Green color palette for success
        />
      )}
      
      {!redeemData ? (
        <RedeemForm onSuccess={handleSuccess} />
      ) : (
        <RedeemSuccess redeemData={redeemData} onReset={() => setRedeemData(null)} />
      )}
    </div>
  );
}