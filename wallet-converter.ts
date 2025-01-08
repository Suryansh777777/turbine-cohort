import bs58 from "bs58";
import prompt from "prompt-sync";

//CLI prompt
const input = prompt();

// /base58 encoded private key to a wallet byte array

function base58ToWallet(): void {
  console.log("Enter the base58 encoded private key:");
  const base58Key = input("> ");

  try {
    const wallet = bs58.decode(base58Key); // decode base58 to a byte array
    console.log("Wallet byte array:", Array.from(wallet)); // print the byte array
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error decoding base58:", error.message);
    } else {
      console.error("Error decoding base58:", error);
    }
  }
}

//wallet byte array to a base58 encoded private key
function walletToBase58(): void {
  console.log("Enter the wallet byte array (comma-separated values):");
  const byteArrayString = input("> ");
  const byteArray = byteArrayString.split(",").map(Number); // to a number array

  try {
    const base58Key = bs58.encode(Buffer.from(byteArray)); //  byte array to base58
    console.log("Base58 encoded private key:", base58Key); //  base58 encoded string
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error encoding to base58:", error.message);
    } else {
      console.error("Error encoding to base58:", error);
    }
  }
}

console.log("Choose an option:");
console.log("1. Convert base58 to wallet");
console.log("2. Convert wallet to base58");
const choice = input("> ");

if (choice === "1") {
  base58ToWallet();
} else if (choice === "2") {
  walletToBase58();
} else {
  console.log("Invalid choice. Exiting.");
}
