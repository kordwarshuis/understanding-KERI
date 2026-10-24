export const concepts = [
  {
    id: 'keri',
    term: 'KERI',
    say: 'Pronounced like the name Carrie.',
    plain:
      'Key Event Receipt Infrastructure. A protocol — not a platform — for long-lived identifiers controlled by keys the holder keeps. Each identifier has a hash-chained key event log. Anyone can verify that log anywhere, without a shared database or a certificate company as the root of trust.',
    why: 'Samuel Smith came to it after working on ledger-based identity (Sovrin): one shared ledger forces everyone onto the same platform. KERI keeps the cryptography and drops the requirement that the world share one ledger.',
    source: 'Hitchhiker’s Guide, Parts 1–2; Smith interview on self-certifying identifiers',
  },
  {
    id: 'aid',
    term: 'AID',
    say: 'Autonomic Identifier',
    plain:
      'A self-certifying identifier that can outlive any one key. It is derived from the inception event, not issued by an administrator. “Autonomic” means self-governing: the controller of the keys rules the identifier. It is not the person. It is the name that attestations can point at.',
    why: 'A basic self-certifying identifier dies with its key. An AID persists because the next key was committed, as a hash, before it was ever used.',
    source: 'KERI jargon, Part 1; “You control, therefore you are”',
  },
  {
    id: 'scid',
    term: 'Self-certifying identifier',
    say: 'SCID',
    plain:
      'An identifier cryptographically derived from a public key. The holder proves control by signing. No third party has to agree the identifier exists. A basic SCID cannot rotate, so a stolen key means the identifier must be abandoned.',
    why: 'This is the seed Smith kept from earlier white papers. KERI makes that seed persistent.',
    source: 'KERI jargon, Part 1; Smith interview',
  },
  {
    id: 'keypair',
    term: 'Key pair',
    say: 'One public key, one private key',
    plain:
      'Two keys made together. The public key can be shown to anyone. It locks a message — that locking is encryption — and it checks a signature. The private key stays with you. It opens what the public key locked, and it makes the signature. They are not copies of each other.',
    why: 'KERI identifiers are controlled with key pairs, and KERI uses them mainly to sign: the private key signs, and anyone checks with the public key. Hiding a message is a separate job. Proving who controls a name does not depend on it. Pre-rotation is how a stolen private key does not have to end the name.',
    source: '2024 Videos — Smith: a public-private key pair is how you prove control of an identifier',
  },
  {
    id: 'prerotation',
    term: 'Pre-rotation',
    say: 'Commit the next key before you need it',
    plain:
      'Signing authority and rotation authority are different keys. The current public key is published, and its private key signs ordinary acts. The next key is committed only as a hash of its public key, and the pair can live somewhere else — not on the phone that signs every day. Rotation reveals that public key once, retires the current key, and commits a new hidden next key. Only the pre-committed key can become the next signing key.',
    why: 'A stale key cannot invent a new history: a forged log will not match the hash chain, and the contradiction is duplicity. A stolen current key can sign until you notice, because using it means publishing an event your own witnesses can see. Hashes, unlike today’s signatures, are the recovery path against a quantum break of the current key.',
    source: 'Hitchhiker’s Guide, Part 2; Security in KERI/ACDC; Smith interview',
  },
  {
    id: 'kel',
    term: 'Key Event Log',
    say: 'KEL',
    plain:
      'The append-only, hash-chained history of one identifier: inception, rotations, interactions that anchor outside data, and delegations. Replay it and you know which keys were authoritative at each step. It is end-verifiable: anyone, anywhere, at any time, from the bytes alone.',
    why: 'Smith calls this the most granular form of zero trust. The log is a verifiable data structure. A blockchain is one kind. A KEL is another, and it does not need shared governance.',
    source: 'Hitchhiker’s Guide, Part 2; Smith interview; Security in KERI/ACDC',
  },
  {
    id: 'receipt',
    term: 'Key event receipt',
    say: 'A signed “I saw this version”',
    plain:
      'A signature over a key event by someone who received it. The controller can keep that signature. Later, the witness cannot deny they saw that version, and cannot quietly prefer a different history. A log plus its consistent receipts is a KERL.',
    why: 'Smith’s reason for the middle word of KERI: agreements need receipts, so both sides have something they can show. A receipt is not a courtesy. It is the recourse.',
    source: 'Hitchhiker’s Guide, Part 2; Smith interview',
  },
  {
    id: 'duplicity',
    term: 'Duplicity',
    say: 'Two signed histories that disagree',
    plain:
      'If two versions of the same event are both signed and inconsistent, that conflict is proof. A log that is merely shorter, and does not contradict the longer one, is incomplete — not duplicitous. KERI does not promise a liar will never speak. It promises the second story will not verify as the same history.',
    why: 'Security in KERI/ACDC: any successful attack on KEL-backed data starts with a stolen private key, and any such attack is detectable as duplicity.',
    source: 'KERI jargon, Part 1; Security in KERI/ACDC',
  },
  {
    id: 'witness',
    term: 'Witness',
    say: 'Anyone who can store the log and sign for it',
    plain:
      'The controller names witnesses in an establishment event. They keep the log, sign receipts, and answer when the controller is offline. A witness can be another log, a database, a file, or a blockchain. Because the controller chose them, a verifier may also run watchers, and jurors who record conflicts for a judge.',
    why: 'The witness is not the root of trust. The AID is. Witnesses are how the history stays findable. A conflicting history they sign is evidence against the controller, or against a stolen key.',
    source: 'Hitchhiker’s Guide, Part 2; Smith interview',
  },
  {
    id: 'acdc',
    term: 'ACDC',
    say: 'Authentic Chained Data Container',
    plain:
      'A verifiable credential for KERI. Claims are bundled, chained, and sealed to the issuer’s key state through a transaction event log anchored in the key event log. The credential is not thrown out when keys rotate. Revocation is its own anchored event. Compact field names exist so small devices can carry one.',
    why: 'Anchoring is the high security class: the signature is bound to the key state at that point in the log. A stale key cannot backdate a new credential without producing duplicity.',
    source: 'KERI jargon, Part 2; Security in KERI/ACDC; “KERI simplifies”',
  },
  {
    id: 'said',
    term: 'SAID',
    say: 'Self-addressing identifier',
    plain:
      'An identifier that is a cryptographic digest of the data it sits inside, including its own field. Change a bit and the identifier no longer matches. AIDs are SAIDs of their inception events. ACDC schemas use a SAID as their id, so a swapped schema file fails.',
    why: 'A commitment to the SAID is a commitment to that exact serialization. There is no separate argument about which version was signed.',
    source: 'KERI jargon, Part 2',
  },
  {
    id: 'cesr',
    term: 'CESR',
    say: 'Composable Event Streaming Representation',
    plain:
      'One encoding that round-trips between readable text and compact binary without losing the proof. Smith needed it so KERI would not depend on winning a format war among JSON, CBOR, and MsgPack.',
    why: 'The readable form and the streamed form can be shown to be the same cryptographic material. That is the property that matters when a document must be both legible and verifiable.',
    source: '“KERI simplifies”; Why we like CESR',
  },
  {
    id: 'oobi',
    term: 'OOBI',
    say: 'Out-of-band introduction',
    plain:
      'A URL, on the internet you already have, that points at a key log or at self-addressing data. The URL is not trusted. What you fetch still has to verify. A bad introduction is no worse than a failed lookup: the worst case is that you discover nothing, not that you accept a forgery.',
    why: 'Smith dropped the idea of a trusted discovery network once he saw that end-verifiable data does not need a trusted finder. Redundant links are enough to survive a lookup that is blocked.',
    source: 'KERI jargon, Part 3; Security in KERI/ACDC',
  },
  {
    id: 'ipex',
    term: 'IPEX',
    say: 'Issuance and presentation exchange',
    plain:
      'One dialogue for both giving and showing an ACDC. A discloser and a disclosee. Apply, offer, agree, grant, admit — or stop. The offer can reveal only some fields, plus terms. More is revealed after agreement. Those terms are meant to follow the credential onward: chain-link confidentiality.',
    why: 'Smith’s concrete case: prove you are old enough, and disclose nothing else. The same shape is a role, a coverage fact, or a signing authority.',
    source: 'KERI jargon, Part 3; Smith interview',
  },
  {
    id: 'vlei',
    term: 'vLEI',
    say: 'Verifiable Legal Entity Identifier',
    plain:
      'GLEIF’s verifiable Legal Entity Identifier, issued with KERI and ACDCs. It binds a legal entity, and the roles allowed to speak for it, to autonomic identifiers. GLEIF does this for organizations, not for natural persons. The cryptographic name and the legal name are linked by the issuer’s attestation, and the link can be shown or withheld.',
    why: 'This is the production system the essays point to when they say the design is no longer only a paper. It is also the pattern for “a reputable party connects a cryptonymous identifier to a real organization.”',
    source: 'KERI Foundation notes; Smith interview; Why we like KERI',
  },
  {
    id: 'delegation',
    term: 'Delegation',
    say: 'Lend authority without becoming the other party',
    plain:
      'One AID can authorize another. Both sides commit: the delegating event seals the delegated event, and the delegated event points back. A parent, a guardian, a treasurer, or a custodian can hold a defined slice of authority. The chain is replayable. Revocation is an event, not a phone call.',
    why: 'Smith’s answer for people who cannot operate the keys themselves: prove the guardian, and keep the chain verifiable. Custodial rotation is the sharper version — someone else may hold the signing key while you alone hold rotation, so you can take signing back without their help.',
    source: 'KERI jargon, Part 1; Smith interview',
  },
  {
    id: 'end',
    term: 'End-verifiability',
    say: 'Check the bytes. Do not trust the messenger.',
    plain:
      'The key state can be verified by anyone, anywhere, at any time, from the log itself. The host, the resolver, and the URL are not part of the proof. If an intermediary can insert data without holding a key, that data is not a KERI proof.',
    why: 'This is why discovery is allowed to be ordinary and untrusted, and why KEL-backed credentials are in a different security class from a signed “latest value” used only to find a service.',
    source: 'Smith interview; Security in KERI/ACDC',
  },
  {
    id: 'gdpr',
    term: 'Right to be forgotten',
    say: 'Erasure, because histories are not one world ledger',
    plain:
      'A totally ordered global ledger makes deletion of personal data structurally hard. KERI does not put every identifier’s events into one shared history. The trust bases are separable, so an identifier’s data can be erased. Emptying the next-key commitment is how an identifier is abandoned.',
    why: 'The KERI Foundation states this as support for data-protection rights. A given deployment can still keep copies. The protocol does not force the world to remember.',
    source: 'Hitchhiker’s Guide, Part 1; KERI Foundation',
  },
]
