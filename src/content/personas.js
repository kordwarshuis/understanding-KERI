export const personas = [
  {
    id: 'parent',
    name: 'Maya',
    role: 'Concerned parent',
    worry: 'Who holds the keys to my family’s names?',
    blurb: 'You want the internet to know your child as a person, not as a profile a company can sell or lose.',
    accent: '#c46b4a',
    lessons: [
      {
        id: 'why',
        title: 'Why this is a family question',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'A school portal, a health login, “Sign in with Google”: those are identifiers someone else issued. They point at your child. They are not your child. The provider can reset them, read them, or shut them off.',
          },
          {
            kind: 'p',
            text: 'KERI separates three things the essays keep finding tangled. Identity is the person. An identifier is a name that points at them. An attestation is a statement — enrolled here, old enough for this trip — made about that name. The autonomic identifier is the name your family can keep. Schools and clinics can still attest. They do not have to own the name in order to do it.',
          },
          {
            kind: 'pair',
            leftTitle: 'What you have now',
            left: 'Not your keys, not your identifier. A password reset is an administrator deciding the name still means your child. If that office is wrong, or sold the fact that something happened, you mostly cannot prove who talked.',
            rightTitle: 'What KERI changes',
            right: 'The name is derived from keys you hold. Changing the keys does not change the name. A later attestation can say “this name is this child” without the platform being the root of trust.',
          },
          {
            kind: 'note',
            title: 'A calm limit',
            text: 'KERI does not raise your child or stop a person from lying in a message. It makes a stolen key a published, recoverable event, and it makes “we are the only copy of who you are” unnecessary. Samuel Smith is blunt about a related limit: you can have strong authenticity and confidentiality against strangers, and still not have perfect privacy against someone you actually deal with. The goal is that the third party who was never in the room cannot reuse the relationship.',
          },
        ],
      },
      {
        id: 'what',
        title: 'What KERI is, without the lab coat',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'KERI means Key Event Receipt Infrastructure. People say it like the name Carrie. It is a protocol, not an app and not a blockchain you join. The long-lived name is an autonomic identifier — an AID. Autonomic means self-governing.',
          },
          {
            kind: 'p',
            text: 'The AID is born when you sign the first key event. A key event log records what happens after that. Someone who receives an event can sign a receipt: “I saw this version.” That receipt is why both sides have something to show later. Smith’s line is that it is not called receipt infrastructure for nothing.',
          },
          {
            kind: 'list',
            title: 'Five acts, in family language',
            items: [
              'Inception: the name is created from keys you hold.',
              'Pre-rotation: the next key is promised as a hash, and can live somewhere other than the phone.',
              'Rotation: today’s key is retired. The name stays.',
              'Delegation: a parent or guardian gets a provable, limited authority — their own name, not a copy of the child’s keys.',
              'Revocation: an authority ends as an event anyone can replay, including abandoning the name itself.',
            ],
          },
          {
            kind: 'words',
            ids: ['keri', 'aid', 'kel'],
          },
        ],
      },
      {
        id: 'how',
        title: 'If a key is stolen',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'Imagine the key on the school bag is copied. A normal account means a help desk. A basic fingerprint-of-a-key means the name and the stolen key are the same object, so you abandon both.',
          },
          {
            kind: 'p',
            text: 'KERI splits signing from recovery. Today’s key signs “yes, this is us.” The next key is only a hash in the log, and the private spare should not live on that same bag. A thief who uses the copied key has to publish an event. Witnesses you chose will hold that publication, so the damage lasts until you notice and rotate — not until a company believes you. You reveal the spare, retire the copied key, commit a new spare. Teachers still know the same AID.',
          },
          {
            kind: 'p',
            text: 'Showing the name is not showing the child. An ACDC can prove “old enough for this trip” or “enrolled here” and withhold the birth date, the address, and the photo. If a child cannot hold keys yet, delegation gives a parent a verifiable guardianship. The parent’s identifier and the child’s identifier stay distinct, and the link can be revoked.',
          },
          {
            kind: 'words',
            ids: ['prerotation', 'delegation', 'acdc', 'ipex', 'gdpr'],
          },
          {
            kind: 'check',
            q: 'If Maya rotates keys after a stolen laptop, what happens to the family’s AID?',
            options: [
              { t: 'It must be thrown away and every school starts over.', ok: false },
              { t: 'The name stays. The stolen key loses authority. A new spare is committed.', ok: true },
              { t: 'A blockchain vote decides whether the family still exists.', ok: false },
            ],
            explain:
              'That persistence is the point of pre-rotation. The identifier outlives any one key.',
          },
        ],
      },
      {
        id: 'next',
        title: 'What you can ask for',
        minutes: 3,
        blocks: [
          {
            kind: 'lead',
            text: 'You do not need to run a witness pool. You do need language for the next portal that asks for a family login.',
          },
          {
            kind: 'list',
            title: 'Questions worth asking a school, clinic, or app',
            items: [
              'If we lose a phone, who rotates the keys — us, or your help desk?',
              'Where does the spare key live, if not on the everyday device?',
              'Can you check “enrolled” or “old enough” without storing the rest of the record?',
              'If a guardian changes, is that a revocable delegation, or a shared password?',
              'If your vendor disappears, does the identifier survive, or was it locked to their system?',
            ],
          },
          {
            kind: 'note',
            title: 'Walk the story',
            text: 'The shared story on the Hearth, “A name that can change its locks,” is the same idea with no job title attached.',
          },
        ],
      },
    ],
  },
  {
    id: 'legal',
    name: 'Elena',
    role: 'Legal professional',
    worry: 'What would hold up as proof?',
    blurb: 'You care about authority, non-repudiation, contracts, and whether a digital act can be attributed to the right legal person.',
    accent: '#6d5a7a',
    lessons: [
      {
        id: 'why',
        title: 'The attribution problem',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'A signature is only as good as the story of which key was authoritative, when, and whether a second signed story can replace the first without detection.',
          },
          {
            kind: 'p',
            text: 'Phil Windley’s three architectures, as the jargon essays use them: administrative identity binds a name to a key by an office — a certificate authority, a platform admin. That binding fails when the office is wrong. Algorithmic identity binds the name on a shared ledger. The binding is strong, and the history is hard to erase, and the identifier is locked to that ledger. Autonomic identity, which is KERI, puts the primary root of trust in the controller. The key event log is secondary: hash-chained, and keepable by the parties themselves.',
          },
          {
            kind: 'p',
            text: 'A receipt is the part lawyers should not skip. Smith’s reason for the word is practical: both sides of an agreement need a verifiable record of what was seen, so there is recourse. Duplicity — two inconsistent signed histories — is affirmative evidence. A shorter log that does not contradict the longer one is incomplete, not a second story. And a stale key cannot invent that second story: forging an alternate key event log shows up as duplicity. Compromise of the current key is different, and narrower. Using it means publishing an event onto infrastructure the controller designated, so the exposure is bounded by the time to notice and rotate.',
          },
          {
            kind: 'words',
            ids: ['duplicity', 'receipt', 'kel', 'end'],
          },
        ],
      },
      {
        id: 'what',
        title: 'vLEI, ACDC, and the document',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'GLEIF issues verifiable Legal Entity Identifiers on KERI and ACDCs. An organization can cryptographically show which legal entity is speaking, and which role is authorized to speak for it.',
          },
          {
            kind: 'p',
            text: 'An ACDC is a verifiable credential with a stricter security model: compact, chainable, schema locked by a self-addressing identifier so the schema itself cannot be swapped out from under the document. CESR lets the same proof exist as readable text and as binary. The point for practice is simple: you should not need a second ceremony to prove the readable contract and the transmitted bytes are the same thing.',
          },
          {
            kind: 'p',
            text: 'IPEX is the exchange. A discloser can offer a partial view plus terms — a Ricardian contract inside the credential flow — and reveal more only after agreement. Chain-link confidentiality aims to carry those terms to the next recipient, not only the first one.',
          },
          {
            kind: 'words',
            ids: ['vlei', 'acdc', 'cesr', 'ipex', 'said'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Key change without re-papering the world',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'In many systems, rotating a signing key means every outstanding credential must be re-issued. That is how operational security and legal continuity fall apart.',
          },
          {
            kind: 'p',
            text: 'An ACDC is sealed to key state through a transaction event log anchored in the key event log. Later rotation does not rewrite that seal, and it does not auto-invalidate every earlier credential. A verifier replays the establishment events and checks the key that was authoritative then. The recovery key was committed as a hash before the incident, so “we invented a new key after the breach” cannot masquerade as the pre-committed rotation. Revocation is an explicit later event. Until it exists, the old seal still speaks to that day.',
          },
          {
            kind: 'note',
            title: 'Erasure, and what it does not promise',
            text: 'There is no single totally ordered ledger of everyone’s events, so an identifier’s data is not structurally doomed to live forever. The Hitchhiker’s Guide and the KERI Foundation both treat that as support for erasure. Counsel should still read the deployment: witnesses, counterparties, and vendors may keep copies. The protocol permits forgetting. A contract might not.',
          },
          {
            kind: 'check',
            q: 'Two signed key histories for the same AID disagree. In KERI’s terms, what do you have?',
            options: [
              { t: 'A harmless sync delay. Shorter always means wrong.', ok: false },
              { t: 'Duplicity: non-repudiable evidence of inconsistent histories.', ok: true },
              { t: 'Nothing, unless a court-appointed certificate authority confirms one.', ok: false },
            ],
            explain:
              'A merely shorter log can be incomplete. A conflicting signed version is duplicity.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Where to read next',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'Primary explanations behind this path',
            items: [
              'Hitchhiker’s Guide to KERI, Parts 1 and 2 — why no global ledger, and AID, pre-rotation, key event, receipt.',
              'KERI jargon, Parts 1–3 — including duplicity versus a merely incomplete log.',
              'Security in KERI/ACDC — KEL-backed evidence, and why a stale key cannot forge an alternate history.',
              'GLEIF vLEI, and the ToIP KERI, ACDC, and CESR v1.0 texts approved 21 January 2026.',
            ],
          },
          {
            kind: 'p',
            text: 'This Hearth is a reading guide, not a legal opinion and not the specification.',
          },
        ],
      },
    ],
  },
  {
    id: 'policy',
    name: 'Jonas',
    role: 'Policymaker',
    worry: 'Security without building a surveillance state',
    blurb: 'You are asked to choose between “track everyone” and “hope breaches stay small.” KERI is a third design.',
    accent: '#3f6f62',
    lessons: [
      {
        id: 'why',
        title: 'The stark choice, stated carefully',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'Samuel Smith, KERI’s inventor, frames a public question in response to Five Eyes warnings about AI and cyber defense: if attacks get faster than humans, do we secure society by continuous monitoring, or by verifiable authority that stays with people and organizations?',
          },
          {
            kind: 'p',
            text: 'KERI’s answer is not “no identity.” It is an identifier whose root of trust is the controller’s keys, plus attestations that can be checked without a permanent behavioral dossier. Smith is more specific than the slogan. He ranks authenticity and confidentiality above the attempt to keep privacy perfect forever: dealing with someone already reveals something to them. What must not happen is a third party, never in that relationship, mining it. He calls the workable pair authenticity plus confidentiality. Graduated disclosure is how little gets revealed. Receipts are how the act stays attributable.',
          },
          {
            kind: 'pair',
            leftTitle: 'Surveillance-shaped trust',
            left: 'A central observer must see enough, often enough, to decide who is allowed to act. Breach of that observer is a breach of everyone.',
            rightTitle: 'KERI-shaped trust',
            right: 'A verifier checks a proof. After a server, a cloud, or even a certificate authority is compromised, the authoritative key state still lives in logs that can be replayed. Secrets that were never shown — the next keys — remain the recovery path.',
          },
          {
            kind: 'note',
            title: 'Utah and SEDI',
            text: 'Public-sector work around State-Endorsed Digital Identity, including Utah privacy leadership and the 2025 SEDI conversations in these materials, treats KERI as infrastructure for public–private cooperation: government can endorse, without becoming the database of everyone’s keys.',
          },
        ],
      },
      {
        id: 'what',
        title: 'What you would actually be endorsing',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Not a cryptocurrency and not a national login. A protocol suite: KERI for identifiers and key history, ACDC for credentials, CESR so the same proof can be text or binary. Discovery may use ordinary web addresses. Those addresses are not trust. Smith abandoned a trusted discovery network once he saw the worst failure of a lookup is that you find nothing — because anything you do find still has to verify on its own.',
          },
          {
            kind: 'p',
            text: 'The blockchain trilemma is about double-spending: one shared, totally ordered ledger cannot maximize decentralization, security, and scale together. Repeating “these are my keys” does not create a second person, so identity does not need that consensus. KERI can still use a chain as a witness. The identifier is not born there, and it is not locked there. The path from administrative names, to ledger-locked names, to autonomic names is the policy history in these texts. Endorsing “decentralized identity” without saying who holds rotation authority slides back to the first of those.',
          },
          {
            kind: 'list',
            title: 'Properties that map to policy goals',
            items: [
              'Portability: no ledger lock-in if a vendor or chain fails.',
              'Erasure: personal data is not required to live on one global ordered ledger.',
              'Recovery: a stolen signing key is published, visible, and rotatable. The spare was committed before the theft.',
              'Attribution: duplicity is evidence. A stale key cannot silently replace the official history.',
              'Proportionality: graduated disclosure instead of all-or-nothing data sharing.',
            ],
          },
        ],
      },
      {
        id: 'how',
        title: 'Adoption without pretending it is finished',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'The honest status in these sources: GLEIF’s vLEI is in real use. The KERI Foundation’s own goal is still “1-click” infrastructure — wallet, witness, watcher, web, wizard — because people should not have to understand the machinery to be safe.',
          },
          {
            kind: 'p',
            text: 'On 21 January 2026 the Trust Over IP steering committee approved the KERI, ACDC, and CESR specifications at v1.0. That is a standards milestone, not a mandate. HealthKERI, card-scheme and telecom fraud work, and enterprise credential platforms show the pattern: regulated sectors want verifiable roles more than they want another login.',
          },
          {
            kind: 'p',
            text: 'A policy that says “use decentralized identity” without saying who holds rotation authority will recreate administrative PKI with extra steps. The question to put in guidance is: after a breach of the operator, what remains trustworthy, and who can rotate?',
          },
          {
            kind: 'check',
            q: 'Why do these sources say identity can skip blockchain consensus?',
            options: [
              { t: 'Because blockchains are illegal for governments.', ok: false },
              { t: 'Because identity does not need double-spend protection; it needs consistent key history.', ok: true },
              { t: 'Because KERI cannot store any data at all.', ok: false },
            ],
            explain:
              'KERI can anchor data and can even use a chain as a witness. It refuses to make global consensus the root of trust.',
          },
        ],
      },
      {
        id: 'next',
        title: 'A short brief you could forward',
        minutes: 3,
        blocks: [
          {
            kind: 'note',
            title: 'One paragraph',
            text: 'KERI is a decentralized key-management protocol for persistent self-certifying identifiers. Control sits with the controller, key changes are hash-chained and receivable, and credentials (ACDCs) can be disclosed gradually. It is designed so security, scale, and decentralization are not traded off through a blockchain trilemma, and so personal data need not be written into a single indelible world ledger. The leading production example is GLEIF’s vLEI.',
          },
          {
            kind: 'words',
            ids: ['keri', 'gdpr', 'vlei', 'witness'],
          },
        ],
      },
    ],
  },
  {
    id: 'developer',
    name: 'Priya',
    role: 'Developer',
    worry: 'What do I actually build against?',
    blurb: 'You want the objects, the trust boundaries, and where the code lives — without a forty-page cold open.',
    accent: '#b86b3d',
    lessons: [
      {
        id: 'why',
        title: 'The design constraint',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'KERI is a DKMS: distributed key management for identifiers that must live longer than any one key. Samuel Smith described it in 2019 and revised it in 2021. The suite around it — ACDC, CESR, OOBI, IPEX — is what people mean when they say “KERI” in a repo name.',
          },
          {
            kind: 'p',
            text: 'Primary root of trust: the AID, from entropy the controller holds. Secondary: the KEL, receipts, witnesses. A blockchain, if you use one, is also secondary. That is why an AID can move from one discovery network to another without being reborn.',
          },
          {
            kind: 'list',
            title: 'What you do not have to implement',
            items: [
              'Global total order of all identities.',
              'A token ledger. KERI is not double-spend-proof and is not a chain for assets.',
              'Trust in the URL that handed you the log. OOBI is discovery. Verification is replay of the KEL.',
            ],
          },
        ],
      },
      {
        id: 'what',
        title: 'The objects',
        minutes: 6,
        blocks: [
          {
            kind: 'lead',
            text: 'Inception (“icp”) binds the AID to the first key event: current public keys plus digests of next keys, signed by the current keys. Rotation (“rot”) is signed by the next keys, which are revealed once, then replaced by a new commitment. Interaction (“ixn”) anchors seals — digests of outside data — without changing key state.',
          },
          {
            kind: 'p',
            text: 'A KEL is the hash-chained sequence. A receipt is someone else’s signature over an event. A KERL is the log plus consistent receipts. Witnesses are designated in establishment events and run promulgation (KA2CE, a BFT-style agreement on the first consistent version). Watchers are chosen by a verifier. Jurors record duplicity in a DEL. A judge weighs KERLs and DELs.',
          },
          {
            kind: 'p',
            text: 'Direct mode: two controllers exchange logs and receipts pairwise. Indirect mode: witnesses store-and-forward when the controller is offline. Delegation is cooperative: the parent seals the child event, the child points back at the parent’s location in its log.',
          },
          {
            kind: 'words',
            ids: ['aid', 'kel', 'prerotation', 'witness', 'duplicity'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Credentials, bytes, and discovery',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'An ACDC is a labeled container: version string, SAID (“d”), issuer AID (“i”), attributes. There is no W3C proof block inside it. Signatures ride in CESR, which round-trips text and binary. Schemas are JSON Schema whose $id is a SAID, so a swapped schema fails. Issuance and revocation live in a TEL anchored to the issuer KEL. That anchor is why rotation does not force mass re-issuance, and why a stale key cannot backdate a credential without duplicity.',
          },
          {
            kind: 'list',
            title: 'Three security classes in the KERI/ACDC notes — do not mix them in one blob',
            items: [
              'High, KEL-backed: hash-chained, end-verifiable, duplicity is evidence. Use this for credentials and anything that must stay authentic after the key changes. ACDC via TEL counts.',
              'Medium, BADA: “latest wins” by a (time, key-state) tuple. Enough for discovery, such as service endpoints, because a bad lookup is a failed lookup — the thing you find still has to verify. Not enough for credentials. A stolen current key is not guaranteed to be visible the way a KEL publication is. Rotation does not invalidate every prior BADA record.',
              'Low, KRAM: replay protection on a query to a host, using the replier’s time and key state. It protects the host. It does not protect data at rest. Store the reply under BADA or, better, in an ACDC.',
            ],
          },
          {
            kind: 'p',
            text: 'IPEX is one five-step dialogue for both issuance and presentation: apply, offer or spurn, agree or spurn, grant or spurn, admit. OOBI and did:webs-style documents are discovery. Smith’s rule from the security notes: if an intermediary can inject data without a private key — JSON-LD @context is the example he rejects — that data is not a proof. End-verifiability means your verifier, at the edge, replays KEL-backed bytes. A trusted resolver is the mistake he says he already made once and dropped.',
          },
          {
            kind: 'list',
            title: 'Code names that show up constantly',
            items: [
              'KERIpy — core Python.',
              'KERIA — agent / service side.',
              'SignifyPy and Signify-TS — client signing libraries.',
              'did:webs and related bridges — for systems that still speak DID methods.',
              'The five Ws the foundation is funding: Wallet, Witness, Watcher, Web, Wizard.',
            ],
          },
          {
            kind: 'check',
            q: 'You fetch a KEL from an OOBI URL. What makes it authoritative?',
            options: [
              { t: 'HTTPS on that host.', ok: false },
              { t: 'Replay: signatures, hash chain, and duplicity checks under KERI rules.', ok: true },
              { t: 'Whichever witness answered first, with no further checks.', ok: false },
            ],
            explain:
              'The sources are explicit: an OOBI by itself is insecure. End-verifiability is the security property.',
          },
        ],
      },
      {
        id: 'next',
        title: 'A sane first week',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'Read in this order',
            items: [
              'Hitchhiker’s Guide Part 2 — the mental model in one sitting.',
              'Jargon Parts 1–3 — when the whitepaper’s vocabulary hits you.',
              'Security in KERI/ACDC — KEL-backed versus BADA versus KRAM, before you design an API.',
              'KERI, ACDC, and CESR v1.0 at Trust Over IP — normative text.',
              'WebOfTrust repos (keripy, keria, signify) — running code.',
            ],
          },
          {
            kind: 'note',
            title: 'Do not start by reading the whitepaper cold',
            text: 'Even the community essays say the jargon arrives first and the elegance second. Use this path as the index, then open the spec for the type you are implementing.',
          },
        ],
      },
    ],
  },
  {
    id: 'business',
    name: 'Omar',
    role: 'Business leader',
    worry: 'Will this reduce fraud without locking us to a vendor?',
    blurb: 'You buy systems that must still work when a cloud, a bank partner, or a ledger company changes its mind.',
    accent: '#8a5a32',
    lessons: [
      {
        id: 'why',
        title: 'The cost of borrowed identity',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Invoice fraud, fake vendor calls, and “the CFO texted” all exploit the same hole: the channel is authenticated, the organization is not. A platform login proves someone has an account. It does not prove they may bind the legal entity.',
          },
          {
            kind: 'p',
            text: 'vLEI, GLEIF’s verifiable Legal Entity Identifier on KERI and ACDCs, is the production version of the fix. The firm has an identifier. Roles chain back to it. A call, a message, or a signature can be checked against that chain, and both sides can hold receipts. The same pattern shows up in these notes for verifiable voice and for vendor payments. GLEIF attests organizations, not natural persons. The legal name and the cryptographic name are linked by that attestation. They are not the same object.',
          },
          {
            kind: 'pair',
            leftTitle: 'How Smith got here',
            left: 'He helped design Sovrin, a public-ledger identity system. One ledger meant everyone had to share it, and leaving it meant ledger wars. An identifier born on a vendor’s chain or cloud directory has the same trap.',
            rightTitle: 'What he built instead',
            right: 'A protocol. The AID is the root. Witnesses — a database, a file, or a chain — only keep the log findable. Partners verify the bytes. They do not rent the name from your vendor.',
          },
        ],
      },
      {
        id: 'what',
        title: 'What your team would run',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'You do not adopt “a blockchain strategy.” You adopt a key-management and credential layer. Wallets hold keys. Witnesses publish key state. Watchers let your risk team confirm they are not being shown a forked history. The web API and a wizard are the parts the KERI Foundation says are still maturing so this is not an expert-only ritual.',
          },
          {
            kind: 'p',
            text: 'Scale is the business reason the essays give for preferring KERI to ledger-based identity: Indy-style issuance in one cited account took hours for tens of thousands of credentials, because global consensus is the bottleneck. KERI’s control establishment is local cryptographic history plus a threshold of witnesses, so it is built to sit under high-volume credentials — supply chain, IoT, customer onboarding — without waiting for the world to agree.',
          },
          {
            kind: 'words',
            ids: ['vlei', 'witness', 'keri'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Keys, staff turnover, and proof',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'People leave. Laptops go missing. A signing key in a single HSM with a help-desk override is an administrative root of trust again.',
          },
          {
            kind: 'p',
            text: 'Pre-rotation and multi-signature are the operational tools. Current keys can sit with a custodian for day-to-day signing. Rotation authority can stay with the organization, so the custodian can be removed without their cooperation — custodial rotation, in the jargon. The spare should not live on the laptop that signs. Partial pre-rotation lets you expose some keys and keep others in reserve. Every change is an event, signed and receivable, which is what lets an auditor reconstruct who could bind the company on a given date. A stolen current key shows up as a published event. A stale key cannot quietly rewrite that date.',
          },
          {
            kind: 'p',
            text: 'ACDCs then express the live facts: this AID is the treasurer, this delegation is in force, this invoice schema is the one we sign. Revocation is a transaction-event-log entry anchored to the KEL, not a phone call to every partner.',
          },
          {
            kind: 'check',
            q: 'A cloud identity vendor shuts down the ledger where you anchored discovery. What happens to a KERI AID?',
            options: [
              { t: 'The legal entity’s identifier dies with that vendor.', ok: false },
              { t: 'The AID remains. You point witnesses elsewhere. Verifiers replay the same log.', ok: true },
              { t: 'You must buy a cryptocurrency to migrate.', ok: false },
            ],
            explain:
              'Portability is a stated design goal: the root of trust is the AID, not the discovery network.',
          },
        ],
      },
      {
        id: 'next',
        title: 'A pilot that is allowed to be small',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'A practical slice',
            items: [
              'One legal entity AID, multi-sig, with rotation authority not in the same hands as daily signing.',
              'One role credential (an ACDC) for a function that is attacked today — payments release, or vendor callback.',
              'Witnesses you do not solely operate, so a single admin cannot rewrite history unnoticed.',
              'A verifier in the receiving department who checks the credential instead of trusting the email domain.',
            ],
          },
          {
            kind: 'note',
            title: 'Who has done the large version',
            text: 'GLEIF’s vLEI is the reference deployment named throughout the foundation and conference materials. Ask vendors whether they verify KERI key state or only wrap a badge around a normal account.',
          },
        ],
      },
    ],
  },
  {
    id: 'health',
    name: 'Aisha',
    role: 'Healthcare professional',
    worry: 'Can we exchange records without pooling everyone’s chart?',
    blurb: 'Interoperability is mandatory. A single database of patients is not the same thing as trust.',
    accent: '#3d6e8a',
    lessons: [
      {
        id: 'why',
        title: 'The chart is not the same as the authority',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'FHIR moved healthcare data. It did not, by itself, answer who may release it, whether the sender is the organization they claim, or how a patient shows one fact without showing the chart.',
          },
          {
            kind: 'p',
            text: 'The conference and project notes in this library — HealthKERI, CMS interoperability work, DirectTrust, Utah privacy architecture — circle the same gap. Networks of trust still depend on who operates the directory. KERI’s proposal is that the clinic, the payer, the patient, and the app each have identifiers they control, and that a credential can be checked after the message has left your firewall.',
          },
          {
            kind: 'note',
            title: 'Not a medical device claim',
            text: 'Nothing here says KERI diagnoses, stores a legal medical record, or replaces HIPAA process. It is an identity and proof layer people in healthcare are trying to put under exchange.',
          },
        ],
      },
      {
        id: 'what',
        title: 'Proof that travels with the data',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'An ACDC can say “this organization is this vLEI” or “this clinician holds this role” or “this patient assertion was issued by this AID,” chained so a receiver can see the delegation path. Graduated disclosure means a pharmacy might see a coverage fact without receiving the problem list.',
          },
          {
            kind: 'p',
            text: 'Because the credential is sealed to key state, a hospital can rotate keys after an incident without re-signing every historical authorization for the verifier to accept what was true on the day it was issued. Revocation lives in a transaction event log anchored to the issuer’s key log.',
          },
          {
            kind: 'p',
            text: 'The patient identifier and the clinic identifier are different names. A guardian, a proxy, or a covering clinician gets authority by delegation, which both sides seal, not by sharing a password. The essays are explicit that the holder of the keys can recover without a help desk being the only way back. For someone who changes clinics, names, or coverage, the identifier can stay while the attestations change. Smith’s non-clinical example is the pattern: prove one fact — old enough — and disclose nothing else. A coverage fact or a referral is the same shape.',
          },
          {
            kind: 'words',
            ids: ['acdc', 'ipex', 'delegation', 'vlei', 'prerotation'],
          },
        ],
      },
      {
        id: 'how',
        title: 'After the exchange server is breached',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Smith’s framing, in the Five Eyes response in these materials, is that breaches of servers and certificate authorities should not be the end of trustworthy history. What remains checkable is the key log and the seals.',
          },
          {
            kind: 'p',
            text: 'If an integration engine is compromised, an attacker who lacks the rotation keys cannot replace the organization’s history. A stale key cannot forge another log that verifies. A stolen current key can sign only by publishing, and that publication is what watchers — a payer, a network — look for, instead of trusting the sender’s word that the directory is fine. The window is the time until rotation, not the life of the record. Authorizations sealed before the incident remain checkable. They are not all silently void, and they are not all silently rewritten.',
          },
          {
            kind: 'p',
            text: 'Do not put every patient’s events on one global ledger if erasure matters. Minimum disclosure is a protocol step, IPEX, rather than an honor-system API that returns the whole Patient resource. Smith’s priority, if you have to choose, is authenticity of who attested, and confidentiality against parties who were not in the exchange — not a promise that the specialist you just dealt with learned nothing.',
          },
          {
            kind: 'check',
            q: 'A specialist needs to know a referral is real, not the patient’s entire history. Which KERI-suite idea is that?',
            options: [
              { t: 'Put the full chart on a public blockchain so anyone can audit it.', ok: false },
              { t: 'Graduated disclosure of an ACDC: reveal the needed claims, under terms.', ok: true },
              { t: 'Share one hospital admin password with the specialist’s EHR.', ok: false },
            ],
            explain:
              'IPEX and ACDC chaining are how these sources talk about partial, contractual disclosure.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Who in the library is already in the room',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'Names tied to healthcare in the source notes',
            items: [
              'HealthKERI — Jared Jeffery, Philip Feairheller — zero-trust exchange, FHIR-shaped problems.',
              'DirectTrust — Scott Stuewe — trust frameworks for US health exchange.',
              'CMS Blue Button and FHIR work — Mark Scrimshire — payer APIs at national scale.',
              'Utah privacy and SEDI — public-sector identity that is trying not to become a surveillance file.',
            ],
          },
          {
            kind: 'p',
            text: 'Bring a security architect the developer path, and a privacy officer the policymaker path. They are the same protocol, told for the decision each person actually makes.',
          },
        ],
      },
    ],
  },
]

export function findPersona(id) {
  return personas.find((p) => p.id === id)
}

export function findLesson(persona, lessonId) {
  return persona?.lessons.find((l) => l.id === lessonId)
}
