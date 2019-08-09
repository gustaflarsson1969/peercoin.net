import React from 'react';
import './Index.scss';
import Menu from '../../components/Menu/Menu';

function Index() {
  return (
    <>
    <Menu />
    <div className="hero">
      <img src="/img/logo-white.svg" alt="Peercoin Logo" width="220" />
      <h1 className="hero__title">Pioneer of Proof of Stake</h1>
      <p className="hero__description">
        The world's first efficient and sustainable public blockchain, serving as a secure base layer and cryptocurrency for the future blockchain connected world.
      </p>
      <div className="hero__actions">
        <a href="/get-started" className="hero__actions__action">Get Started</a>
        <a href="/what-is-peercoin" className="hero__actions__action hero__actions__action--white">What is Peercoin?</a>
      </div>
    </div>
    <div className="main">
      <div className="container">
      <section className="home-description">
          <div className="home-description__text">
            <h2 className="home-description__text__title">Efficient Security</h2>
            <p>Peercoin (PPC) first came online in 2012, making it one of the earliest pioneering blockchains. The key innovation of Peercoin is its invention of proof-of-stake, an alternative consensus protocol to Bitcoin’s proof-of-work.</p>
            <p>Proof-of-work blockchains are secured by proving the consumption of a costly limited resource: electricity. Proof-of-stake replaces this expensive security protocol by utilizing an alternative scarce resource: time.</p>
            <p>Due to the cost efficient nature of proof-of-stake’s time based consensus rules, Peercoin is capable of allowing any network connected computer to participate in the blockchain’s security process. This efficiency strengthens Peercoin by growing the number of security providers and ensuring that security can be sustained over the long-term.</p>
          </div>
          <img className="home-description__img" src="/img/animations/efficient-and-sustainable.svg" alt=""/>
        </section>
        <section className="home-description">
          <img className="home-description__img" src="/img/animations/user-driven-governance.svg" alt=""/>
          <div className="home-description__text home-description__text--left">
            <h2 className="home-description__text__title">User Governance</h2>
            <p>In Peercoin, coin owners (stakeholders) are the ones who wield influence over the network, produce new blocks, and secure the chain. Stakeholders of Peercoin co-own the blockchain and collectively decide its future through protocol voting.</p>
            <p>Voting is carried out the same way Peercoin is secured, through a process called proof-of-stake minting. Stakeholders participate in minting simply by installing the version of Peercoin they support, loading their wallet with PPC, and holding them while they are occasionally selected by Peercoin’s protocol to mint the next block in the chain. Every minted block rewards stakeholders with new PPC and a vote.</p>
            <p>This makes Peercoin the first blockchain capable of allowing its protocol rules to be governed directly by its users, making for a network that is more decentralized, democratic, and easily secured by people around the world.</p>
          </div>
        </section>
        <section className="home-description">
          <div className="home-description__text">
            <h2 className="home-description__text__title">Trustless Base Layer</h2>
            <p>Given that the blockchain is immutable by its very nature and all recorded data is stored forever, chain bloat becomes an escalating problem at higher usage levels which harms both security and the ability of the network to scale.</p>
            <p>To preserve the trustless security of the blockchain and ensure its ability to scale to global usage levels, Peercoin’s inventors tailored the blockchain and its economics to fulfill the specific role of base layer settlement network.</p>
            <p>This role focuses Peercoin development on modularity, keeping the protocol simple and secure with as few features as possible, while maintaining the blockchain as a stable base upon which any number of additional layers can be built on top.</p>
            <p>Rather than being coded directly into the blockchain protocol itself, features like tokens and smart contracts are developed as secondary layer protocols that exist on top of Peercoin. Building additional functionality as separate, independent layers helps protect the base layer blockchain from exposure to new exploits and prevents chain bloat by allowing for off-chain scaling solutions.</p>
          </div>
          <img className="home-description__img" src="/img/animations/trustless-base-layer.svg" alt=""/>
        </section>
        <section className="home-description">
          <img className="home-description__img" src="/img/animations/pos-security-and-distribution.svg" alt=""/>
          <div className="home-description__text home-description__text--left">
            <h2 className="home-description__text__title">Fair Distribution</h2>
            <p>Effective cryptocurrencies have fair distributions that are wide enough to ensure the overall coin supply does not get concentrated into the hands of too few people. This is especially important for a cryptocurrency like Peercoin where stakeholders are responsible for securing the network.</p>
            <p>However a problem exists for blockchains that are run purely on proof-of-stake, as there is no easy way to fairly distribute the initial coin supply. In a pure proof-of-stake network, the entire coin supply is created from scratch by the project maintainer, who then chooses which individuals get to own stake. This manual distribution process often ends in a network with highly centralized security.</p>
            <p>To solve this problem, Peercoin’s founders utilized proof-of-stake for network security and proof-of-work for distribution. Proof-of-work miners are rewarded with new PPC generated by the network. This newly mined PPC is then sold on exchanges by miners for profit and purchased by new stakeholders who can use it to mint blocks by participating in proof-of-stake minting.</p>
            <p>So while proof-of-stake provides security directly, proof-of-work is designed to do so indirectly by strengthening the decentralization of the network through a wider distribution of PPC to new potential minters. This continual distribution works to grow the number of security providers over time.</p>
          </div>
        </section>
        <section className="home-description">
          <div className="home-description__text">
            <h2 className="home-description__text__title">Fair Distribution</h2>
            <p>Efficiency, sustainability, user governance, scalability through modularity, and a fair distribution. All these qualities combine to form a long-term minded blockchain network that is primarily focused on maximizing decentralization.</p>
            <p>This primary focus works to preserve the trustless, immutable and censorship resistant nature of Peercoin so that it can always be relied upon to fulfill its core role as a distributed mechanism for securely storing all types of value.</p>
            <p>This value can be anything from fiat wealth being stored in PPC, to data being stored on the chain in the form of tokens, records, or contracts. Regardless of the type of value that is being stored, Peercoin was built with the fundamentals in mind to always ensure that your data remains safe and secure.</p>
          </div>
          <img className="home-description__img" src="/img/animations/reliable-store-of-value.svg" alt=""/>
        </section>
      </div>
    </div>
    </>
  );
}

export default Index;
