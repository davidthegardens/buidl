import React, { useEffect } from 'react';
import { ethers } from 'ethers';


const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // Replace with the actual USDC contract address
const spenderAddress = '0x123'; // The address you want to approve to spend USDC
const userAddress = 'USER_WALLET_ADDRESS'; // Replace with the user's address // Represents an "unlimited" allowance
const sendAmount = 50*10**6; // 50 USDC, assuming USDC has 6 decimals

const CheckAndSendUSDC: React.FC = () => {
  useEffect(() => {
    const checkAndSendUSDC = async () => {
      // Initialize ethers with a provider
      const unlimitedAmount = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const usdcContract = new ethers.Contract(usdcAddress, ['function allowance(address owner, address spender) view returns (uint256)', 'function approve(address spender, uint256 amount) returns (bool)', 'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)'], signer);

      try {
        // Check allowance
        const allowance = await usdcContract.allowance(userAddress, spenderAddress);
        if (allowance.lt(sendAmount)) {
          // If allowance is less than 50 USDC, request approval to spend unlimited USDC
          const approvalTx = await usdcContract.approve(spenderAddress, unlimitedAmount);
          await approvalTx.wait();
          console.log('Approval transaction successful');
        }

        // After approval, or if already approved for enough, send 50 USDC
        const transferTx = await usdcContract.transferFrom(userAddress, spenderAddress, sendAmount);
        await transferTx.wait();
        console.log('Transfer transaction successful');
      } catch (error) {
        console.error('Error in USDC transaction:', error);
      }
    };

    checkAndSendUSDC();
  }, []);

  return (
    <div>
      <p>Check and send USDC component</p>
    </div>
  );
};

export default CheckAndSendUSDC;