# Turbin3 Solana Prerequisite Assignment

This README outlines the steps taken to complete the Turbin3 Solana prerequisite coursework. Each section includes the purpose, corresponding scripts, and transaction links for verification.

---

## Key Features and Achievements

### 1. Token Airdrop

- Claimed SOL from the devnet for testing purposes.
- [Transaction Link](https://explorer.solana.com/tx/2DNHhQAqKNLFRpL962YhppyoMhaNWiaZHwBpnwEqHD5WJpKifG4wgXfoVg3FRy3YGL3gGv7UAYJWYk4ukzN8SygN?cluster=devnet)

### 2. Token Transfer

- Transferred SOL to another wallet using `SystemProgram.transfer`.
- First transfer(0.1sol)
- [Transaction Link](https://explorer.solana.com/tx/2tZNRhsd7jdsMCadED4yy2ApHAcuN32yLLi67zK7zfb9itMHFYjFzdCpmd7JC2M4ha3SHM856oT4P7XDoKZmBvDC?cluster=devnet)

- Full transfer
- [Transaction Link](https://explorer.solana.com/tx/3HzvwZNocPKuQES4rSiajVps41dH5sjsSKiFH35WKJKxtcs2QNYvpbYqqsA8t6RRwEeSpfLDyV7Lephg49qFAFFZ?cluster=devnet)

### 3. Enrollment

- Interacted with the Turbin3 program using Anchor's IDL on the Solana Devnet.
- [Transaction Link](https://explorer.solana.com/tx/38gK9ngUp7ad8GfR91UwAAk6oSo3297wLUC9q3fJBju2f3qo2CJbRmtPRV9B9PrQMU6UbgFmoJvftsbMtSX4daEY?cluster=devnet)

---

## Project Setup

Follow the steps below to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Suryansh777777/turbine-cohort
```

### 2. Change to Project Directory

```bash
cd turbine-cohort && cd airdrop
```

### 3. Install Dependencies

```bash
yarn init -y
```

---

## Running the Scripts

### 1. Generate Keypair

```bash
yarn keygen
```

### 2. Claim Airdrop

```bash
yarn airdrop
```

### 3. Transfer SOL

```bash
yarn transfer
```

### 4. Interact with WBA IDL Program

```bash
yarn enroll
```

---
