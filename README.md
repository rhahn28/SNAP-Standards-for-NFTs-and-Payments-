![image](https://user-images.githubusercontent.com/11615936/200727236-ff859233-8200-425d-a2e2-7df6883f927a.png)



# SNAP - **S**tandards for **N**FTs **A**nd **P**ayments
A new messaging standard for NFT creator fee payments across all NFT marketplaces

## Summary
SNAP is an implementation of the [EIP 2981 Royalty Standard](https://eips.ethereum.org/EIPS/eip-2981) for retrieving so-called "royalty" payment information for Non-Fungible Tokens (NFTs). SNAP's goal is to create a system-wide, voluntary messaging framework that pays creators a percentage of each sale on secondary markets. Often, this percentage is mistakely referred to as a "royalty" payment. Because royalties are paid on usage of IP rights, whereas creator "royalties" are only incurred upon sale, a more accurate term is a "Creator Fee in Perpetuity" ("CFIP"). Going forward, we will refer to creator "royalties" as the CFIP, and encourage other marketplaces to adopt the same terminology.

Given that standards are only useful if adopted across like-minded market participants, our expectation is that by open-sourcing our current implementation, other marketplaces will adopt the simplified data structure provided by EIP 2981. Our own marketplace [Metasalt](https://metasalt.io) implements the SNAP standard and we encourage other marketplaces to honor the royalty information contained in our token contracts. Although alternative approaches rely on techncial solutions such as [royalty bearing NFTs](https://eips.ethereum.org/EIPS/eip-4910), blurring or blocking, or [filtering schemes](https://github.com/ProjectOpenSea/operator-filter-registry), we believe a durable solution requires collective action in the form of standards and system-wide adoption. Hackers will always find ways to circumvent technical solutions, but collective action is resilient, dynamic, and unburdened by single-purpose fixes. As noted by leading [voices](https://frankdegods.substack.com/p/a-new-solana-nft-standard?sd=pf), a true CFIP solution requires ecosystem wide adoption. 

## Joining SNAP
SNAP is a member-owned cooperative that provides "Creator Fee in Perpetuity" ("CFIP") transactions for its members. This network allows individuals and businesses to trade NFTs even if the customer or vendor uses a different marketplace or platform than originally minted on. We hope that SNAP will become the largest and most streamlined method for CFIP payments and settlements. SNAP will work by assigning each member a unique ID code (a SNAP number) that uniquetly identifies the marketplace. SNAP can be used to impose sanctions on bad actors and will implement technical solutions as necessary. Please sign up [here](https://docs.google.com/document/d/1DR0J614Av4GE0bVGDdJfP1uW-IsPbb9XqbSBQkSkDSo/edit?usp=sharing) to join.

# EIP 2981
This standard is built on [EIP 2981](https://eips.ethereum.org/EIPS/eip-2981) and much of the information is reproduced from the original documentatoin. The contracts support ERC-721 and ERC-1155 interfaces and signal a royalty amount to be paid to the NFT creator or rights holder every time the NFT is sold or re-sold. This is intended for NFT marketplaces that want to support the ongoing funding of artists and other NFT creators. The royalty payment must be voluntary, as transfer mechanisms such as transferFrom() include NFT transfers between wallets, and executing them does not always imply a sale occurred. Marketplaces and individuals implement this standard by retrieving the royalty payment information with royaltyInfo(), which specifies how much to pay to which address for a given sale price. The exact mechanism for paying and notifying the recipient will be defined in future EIPs. This ERC should be considered a minimal, gas-efficient building block for further innovation in NFT royalty payments.

## Motivation
There are many marketplaces for NFTs with multiple unique royalty payment implementations that are not easily compatible or usable by other marketplaces. Just like the early days of ERC-20 tokens, NFT marketplace smart contracts are varied by ecosystem and not standardized. SNAP enables all marketplaces to retrieve royalty payment information for a given NFT. This enables accurate royalty payments regardless of which marketplace the NFT is sold or re-sold at.

Many of the largest NFT marketplaces have implemented bespoke royalty payment solutions that are incompatible with other marketplaces. This standard implements standardized royalty information retrieval that can be accepted across any type of NFT marketplace. This minimalist proposal only provides a mechanism to fetch the royalty amount and recipient. The actual funds transfer is something which the marketplace should execute.

This standard allows NFTs that support ERC-721 and ERC-1155 interfaces, to have a standardized way of signaling royalty information. More specifically, these contracts can now calculate a royalty amount to provide to the rightful recipient.

Royalty amounts are always a percentage of the sale price. If a marketplace chooses not to implement this EIP, then no funds will be paid for secondary sales. It is believed that the NFT marketplace ecosystem will voluntarily implement this royalty payment standard; in a bid to provide ongoing funding for artists/creators. NFT buyers will assess the royalty payment as a factor when making NFT purchasing decisions.

Without an agreed royalty payment standard, the NFT ecosystem will lack an effective means to collect royalties across all marketplaces and artists and other creators will not receive ongoing funding. This will hamper the growth and adoption of NFTs and demotivate NFT creators from minting new and innovative tokens.

Enabling all NFT marketplaces to unify on a single royalty payment standard will benefit the entire NFT ecosystem.

While this standard focuses on NFTs and compatibility with the ERC-721 and ERC-1155 standards, SNAP does not require compatibility with ERC-721 and ERC-1155 standards. Any other contract could integrate with SNAP to return royalty payment information. SNAP is, therefore, a universal royalty standard for many asset types.
