'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { SmartWalletsProvider } from '@privy-io/react-auth/smart-wallets';
import { optimism } from "viem/chains";

export function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) {
    throw new Error('NEXT_PUBLIC_PRIVY_APP_ID is not defined');
  }

  return (
    <PrivyProvider
      appId={appId}
      config={{
        defaultChain: optimism,
        supportedChains: [optimism],
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#6366f1',
        },
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets',
          },
        },
      }}
    >
      <SmartWalletsProvider>
        {children}
      </SmartWalletsProvider>
    </PrivyProvider>
  );
} 