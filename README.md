# Crypto Gift App

A Next.js application for creating and redeeming time-locked crypto gifts using Privy for authentication and viem for blockchain interactions.

## Features

- Create time-locked crypto gifts (ETH)
- Redeem gifts with customizable target addresses
- Email-based authentication with Privy

## Prerequisites

- Node.js 18+
- npm or yarn
- Privy account and app ID

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd crypto-gift
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_PRIVY_APP_ID=your-privy-app-id
PRIVY_APP_SECRET=your-privy-app-secret
TENDERLY_RPC_URL=your-tenderly-rpc-url
TENDERLY_API_KEY=your-tenderly-api-key
```


4. Start the development server:
```bash
pnpm dev
```

## Usage

### Creating a Gift

1. Visit the app and connect your wallet using Privy
2. Create a gift by filling out the form:
   - Recipient's email
   - Amount of ETH
   - Unlock date
   - Optional message
3. Share the generated link with the recipient

### Redeeming a Gift

1. Visit the redemption link
2. Log in with your email
3. View available gifts
4. For each gift:
   - Enter the target address where you want to receive the tokens
   - Click "Redeem Gift" if the unlock time has passed
5. Celebrate with confetti animation upon successful redemption!

## Technical Details

- Built with Next.js 14 and React
- Uses Privy for authentication and wallet management
- Implements viem for blockchain interactions
- Secure RPC calls through backend API routes
- Responsive design with Tailwind CSS
