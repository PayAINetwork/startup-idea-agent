import { Address } from "viem";
import { paymentMiddleware, Network, Resource } from "x402-next";

const facilitatorUrl = process.env.NEXT_PUBLIC_FACILITATOR_URL as Resource;
const payTo = process.env.RESOURCE_WALLET_ADDRESS as Address;
const network = "solana-devnet";

export const middleware = paymentMiddleware(
  payTo,
  {
    "/idea-of-the-day": {
      price: "$1",
      network,
      config: {
        description: "A business idea of the day.",
      },
    },
  },
  {
    url: facilitatorUrl,
  },
  {
    appName: "Startup Idea Agent",
    appLogo: "/x402-icon-blue.png",
  },
);

// Configure which paths the middleware should run on
export const config = {
  matcher: ["/idea-of-the-day/:path*"],
};
