import {
  Transaction,
  SystemProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";
import wallet from "./dev-wallet.json";

const from = Keypair.fromSecretKey(new Uint8Array(wallet));
// Turbin3 public key
const to = new PublicKey("6DKBzE6PyUBNBnBfqqdjj9AmFgZ6GY8iaGeD8f5HYYod");

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  try {
    // Get balance of dev wallet
    const balance = await connection.getBalance(from.publicKey);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: balance,
      })
    );
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash("confirmed")
    ).blockhash;
    transaction.feePayer = from.publicKey;

    const fee =
      (
        await connection.getFeeForMessage(
          transaction.compileMessage(),
          "confirmed"
        )
      ).value || 0;

    transaction.instructions.pop();

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: balance - fee,
      })
    );
    // Sign transaction, broadcast, and confirm
    const signature = await sendAndConfirmTransaction(connection, transaction, [
      from,
    ]);
    console.log(`Success! Check out your TX here:
    https://explorer.solana.com/tx/${signature}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();

///First transfer(0.1sol)
// https://explorer.solana.com/tx/2tZNRhsd7jdsMCadED4yy2ApHAcuN32yLLi67zK7zfb9itMHFYjFzdCpmd7JC2M4ha3SHM856oT4P7XDoKZmBvDC?cluster=devnet

//Full Transfer
//https://explorer.solana.com/tx/3HzvwZNocPKuQES4rSiajVps41dH5sjsSKiFH35WKJKxtcs2QNYvpbYqqsA8t6RRwEeSpfLDyV7Lephg49qFAFFZ?cluster=devnet
