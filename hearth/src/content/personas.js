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
            text: 'Most family accounts are not really yours. A password reset, a school portal, or “Sign in with Google” means someone else can lock you out, look in, or disappear.',
          },
          {
            kind: 'p',
            text: 'KERI starts from a different place. The person — or the parent acting for a child — holds the keys. The name is derived from those keys. There is no identity company that must stay honest forever for the name to remain yours.',
          },
          {
            kind: 'pair',
            leftTitle: 'What you have now',
            left: 'A login rented from a platform. If they are breached, or they change the rules, your family’s trail of school, health, and payments is caught in the middle.',
            rightTitle: 'What KERI changes',
            right: 'A name you can keep while changing the keys. Proof that does not require a stranger’s database to be the source of truth.',
          },
          {
            kind: 'note',
            title: 'A calm limit',
            text: 'KERI does not raise your child, filter the internet, or stop a person from lying in a message. It makes the lie harder to hide behind a fake or stolen key, and it makes “we lost the only copy of who you are” less likely.',
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
            text: 'KERI means Key Event Receipt Infrastructure. People say it like the name Carrie. It is a protocol for long-lived digital names called autonomic identifiers — AIDs.',
          },
          {
            kind: 'p',
            text: '“Autonomic” means self-governing. Your AID is born from your keys. A diary, the key event log, records when those keys change. Others can sign a receipt that they saw a given page of that diary. Together, that is the infrastructure.',
          },
          {
            kind: 'list',
            title: 'Three pictures that are enough',
            items: [
              'A name tag that is also a lock, not a username in someone else’s book.',
              'A spare key whose shape is promised in advance, but not shown until you need it.',
              'A notebook of lock changes that anyone can check, without a world meeting to approve each line.',
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
            text: 'Imagine the house key on your child’s school bag is copied. With a normal digital account, you beg a help desk. With a basic cryptographic fingerprint, the name and the stolen key are the same thing — you abandon both.',
          },
          {
            kind: 'p',
            text: 'KERI splits the job. Today’s key signs ordinary things: “yes, this is us.” Tomorrow’s key is hidden as a hash. When you rotate, you reveal the spare, retire the copied key, and hide a new spare. The AID — the name teachers, clinics, or clubs already know — stays put.',
          },
          {
            kind: 'p',
            text: 'You also do not have to publish your child’s whole story. Credentials built as ACDCs can be shown in pieces: old enough for a trip, enrolled at this school, without handing over a birth date, an address, and a photo in one dump.',
          },
          {
            kind: 'words',
            ids: ['prerotation', 'acdc', 'ipex', 'gdpr'],
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
              'Who can reset this identity if we lose a device — us, or only you?',
              'Can a credential be checked without copying the whole record into your database?',
              'If we leave, can our identifier’s data actually be erased?',
              'If your vendor changes, does our name survive, or is it locked to their system?',
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
            text: 'A signature is only as good as the story of who held the key, when, and whether a later story can quietly replace it.',
          },
          {
            kind: 'p',
            text: 'Administrative identity — a certificate authority, a platform admin — binds a name to a key by procedure. Procedure fails: mis-issuance, insider access, a help desk reset. Algorithmic identity binds the name on a shared ledger, which is strong, but it also freezes history in a place that is awkward for erasure and for evidence that must stay with the parties.',
          },
          {
            kind: 'p',
            text: 'KERI is an autonomic architecture. The controller is the primary root of trust. The key event log is a secondary one: an ordered, hash-chained record the parties can keep. A signed receipt is a witness statement that a given event was seen. Two inconsistent signed histories are duplicity — affirmative evidence, not a gap in the logs.',
          },
          {
            kind: 'words',
            ids: ['duplicity', 'receipt', 'kel'],
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
            text: 'KERI seals issuance to the key state at that moment in the log. Later rotation does not rewrite the past seal. A verifier replays the establishment events and checks that the key used then was authoritative then. Pre-rotation means the recovery key was committed as a hash before the incident, so “we invented a new key after the breach” is a different, visible event — not a silent swap.',
          },
          {
            kind: 'note',
            title: 'Erasure',
            text: 'Because there is no single totally ordered global ledger of everyone’s events, an identifier’s data is not structurally doomed to live forever. The Hitchhiker’s Guide and the KERI Foundation both treat this as support for the right to be forgotten. Counsel should still read the actual retention design of a given deployment. The protocol permits erasure; a vendor’s copy policy might not.',
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
              'Hitchhiker’s Guide to KERI, Parts 1 and 2 — why no global ledger, and the four pieces: AID, pre-rotation, key event, receipt.',
              'KERI jargon, Parts 1–3 — AID, SAID, ACDC, OOBI, IPEX, in glossary form.',
              'GLEIF’s vLEI program — the production legal-entity use.',
              'ToIP specifications approved 21 January 2026: KERI, ACDC, and CESR v1.0.',
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
            text: 'KERI’s answer is not “no identity.” It is identity whose root of trust is cryptographic and end-user controlled. Accountability comes from signatures, key-state history, and receipts — not from a permanent behavioral dossier. The minimum disclosure needed for a decision can be separated from the rest of a person’s file.',
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
            text: 'Not a cryptocurrency. Not a national app with one vendor’s account system. A protocol suite: KERI for identifiers and key history, ACDC for credentials, CESR for encoding, with discovery that can use ordinary web addresses (OOBI) while refusing to treat those addresses as trust.',
          },
          {
            kind: 'p',
            text: 'The blockchain trilemma — you cannot maximize decentralization, security, and scale together when every update needs global consensus — is about double-spending. Identity updates are mostly idempotent: repeating “these are my keys” does not mint a second person. KERI therefore does not run a worldwide consensus just to establish control. It can still use a blockchain as a witness if a deployment wants that availability. The identifier is not locked to that chain.',
          },
          {
            kind: 'list',
            title: 'Properties that map to policy goals',
            items: [
              'Portability: no ledger lock-in if a vendor or chain fails.',
              'Erasure: personal data is not required to live on one global ordered ledger.',
              'Recovery: pre-rotation is designed so a stolen signing key is not the end of legal identity.',
              'Attribution: duplicity is detectable evidence, which matters for fraud and for official records.',
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
            text: 'An ACDC is a labeled data container with a version string, a SAID (“d”), an issuer AID (“i”), and an attributes block. There is no W3C-style proof section inside it; signatures ride in CESR. Compact field names exist so constrained devices can carry them. Schemas are JSON Schema whose $id is a SAID, so a swapped schema file fails verification.',
          },
          {
            kind: 'p',
            text: 'CESR is the streaming encoding: text and binary round-trip. IPEX is a five-step disclosure dialogue (apply, offer or spurn, agree or spurn, grant or spurn, admit) that covers both issuance and presentation. TEL entries record issuance and revocation and are anchored to the issuer’s KEL, which is why rotation does not force mass re-issuance.',
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
              'Hitchhiker’s Guide Part 2 — one sitting, the mental model.',
              'Jargon Parts 1–3 — when the whitepaper’s vocabulary hits you.',
              'KERI, ACDC, and CESR v1.0 at Trust Over IP — when you need normative text.',
              'WebOfTrust repos (keripy, keria, signify) — when you want running code.',
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
            text: 'vLEI, built by GLEIF on KERI and ACDCs, is aimed at that hole. The organization has an identifier. Officers and roles can hold credentials chained back to it. A call, a message, or a contract signature can be checked against that chain. RootsID, banks, and telecom work in these materials use the same idea: verifiable voice, verifiable counterparties.',
          },
          {
            kind: 'pair',
            leftTitle: 'Ledger lock-in',
            left: 'If your company’s identifier only exists inside one vendor’s blockchain or one cloud directory, leaving means re-issuing trust with every partner.',
            rightTitle: 'A portable root',
            right: 'A KERI AID can be witnessed on infrastructure you choose, including a chain if you want one, and moved. Partners verify the log. They do not rent the name from your vendor.',
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
            text: 'Pre-rotation and multi-signature are the operational tools. Current keys can sit with a custodian for day-to-day signing. Rotation authority can stay with the organization, so the custodian can be fired without their cooperation. Partial pre-rotation lets you expose some keys and keep others in reserve. Every change is an event in the log, signed, and receivable — which is also what lets an auditor reconstruct who could commit the company on a given date.',
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
            text: 'Patients get the same root-of-trust story as institutions. The essays are explicit that the user holds their own keys and can recover without a central help desk being the only path back. For a person who has changed clinics, names, or coverage, that is the difference between a portable identity and an account in one portal.',
          },
          {
            kind: 'words',
            ids: ['acdc', 'ipex', 'vlei', 'prerotation'],
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
            text: 'If an integration engine is compromised, an attacker who lacks the rotation keys cannot silently replace the organization’s AID. If they sign something with a stolen current key, rotation retires it, and the log shows the window. Watchers on the verifier side — a payer, a health information network — look for a second, inconsistent history rather than trusting the sender’s word that “the directory is fine.”',
          },
          {
            kind: 'p',
            text: 'Privacy follows from not putting every patient’s events on one global ledger. Erasure stays possible. Minimum disclosure is a protocol step (IPEX), which is easier to govern than an honor-system API that returns the whole Patient resource.',
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
