import React, { useState } from 'react';
import { ethers } from 'ethers';

const MetaMaskConnect = () => {
  const [userAccount, setUserAccount] = useState(null);

  const connectToMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      // @ts-ignore
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        // @ts-ignore
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUserAccount(accounts[0]);
      } else {
        alert('MetaMask is not installed. Please install it to use this feature.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred connecting to MetaMask.');
    }
  };

  return (
    <div>
      {userAccount ? (
        <p>Connected as: {userAccount}</p>
      ) : (
        <button onClick={connectToMetaMask}>Connect to MetaMask</button>
      )}
    </div>
  );
};

// // This is a simplified ABI that includes only the `approve` function of the ERC-20 token standard
// const erc20Abi = [
//   "function approve(address spender, uint256 amount) external returns (bool)",
// ];

// // The function to prompt MetaMask to approve a specific address to spend USDC
// // @ts-ignore
// async function approveUsdcSpend(userAddress, spenderAddress, amount) {
//   // Check if MetaMask is installed
//   // @ts-ignore
//   if (typeof window.ethereum !== 'undefined') {
//     // Create a new instance of the ethers.js library's provider using MetaMask
//     // @ts-ignore
//     const provider = new ethers.providers.Web3Provider("https://reth.shield3.com/rpc");
//     // Prompt the user to connect their wallet
//     await provider.send("eth_requestAccounts", []);
//     const signer = provider.getSigner();

//     // USDC contract address (This is the address for the Ethereum mainnet; make sure to use the correct address for your network)
//     const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
//     // Create a new contract instance
//     const usdcContract = new ethers.Contract(usdcAddress, erc20Abi, signer);

//     // Convert the amount to the correct unit (USDC has 6 decimal places)
//     const amountInWei = ethers.utils.parseUnits(amount.toString(), 6);

//     try {
//       // Call the approve function
//       const tx = await usdcContract.approve(spenderAddress, amountInWei);
//       // Wait for the transaction to be mined
//       await tx.wait();
//       console.log(`Approval successful. Transaction hash: ${tx.hash}`);
//     } catch (error) {
//       console.error('Error approving USDC spend:', error);
//     }
//   } else {
//     console.log('MetaMask is not installed');
//   }
// }

// // Example usage
// // approveUsdcSpend('<Your Address>', '<Spender Address>', 50);

// export default MetaMaskConnect;