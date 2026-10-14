export const concepts = [
  {
    id: 'keri',
    term: 'KERI',
    say: 'Pronounced like the name Carrie.',
    plain:
      'Key Event Receipt Infrastructure. A way to keep a long-lived digital name under your own keys, with a diary of every key change that anyone can check — without a company or a global blockchain sitting in the middle.',
    why: 'The internet was built without an identity layer. KERI tries to be that missing layer, laid on top of the internet we already have.',
    source: 'Hitchhiker’s Guide to KERI, Parts 1 and 2',
  },
  {
    id: 'aid',
    term: 'AID',
    say: 'Autonomic Identifier',
    plain:
      'A digital name you rule yourself. It is made from your keys, so proving it is yours does not require a certificate company. Unlike a one-time key fingerprint, an AID can survive when you change the keys.',
    why: '“Autonomic” means self-governing. The name stays; the locks can change.',
    source: 'KERI jargon, Part 1; Hitchhiker’s Guide, Part 2',
  },
  {
    id: 'scid',
    term: 'Self-certifying identifier',
    say: 'SCID',
    plain:
      'An identifier that is a cryptographic fingerprint of a public key. Whoever holds the matching private key can prove control by signing. A basic one dies if that key is lost or stolen, because it cannot rotate.',
    why: 'An AID is the persistent kind: same idea, plus a way to change keys.',
    source: 'KERI jargon, Part 1',
  },
  {
    id: 'prerotation',
    term: 'Pre-rotation',
    say: 'The spare key, committed in advance',
    plain:
      'When an AID is created, you publish today’s signing key and only a hash of tomorrow’s rotation key. If today’s key is stolen, you reveal the spare, retire the stolen one, and commit a new spare. The name does not change.',
    why: 'Hashes are not broken by the same quantum attacks that threaten today’s public-key signatures, so the hidden spare is the recovery path.',
    source: 'Hitchhiker’s Guide, Part 2; KERI jargon, Part 1',
  },
  {
    id: 'kel',
    term: 'Key Event Log',
    say: 'KEL',
    plain:
      'An append-only diary of an AID’s key life: inception, rotations, and anchors to other data. Each entry includes the hash of the one before it. Anyone can replay it and see which keys were in charge, and when.',
    why: 'It is a hash chain — a “blockchain” in the old sense of linked records — but it is one identifier’s log, not a globally ordered ledger that the whole world must agree on.',
    source: 'Hitchhiker’s Guide, Part 2; How KERI tackles trust',
  },
  {
    id: 'receipt',
    term: 'Key event receipt',
    say: 'A signed “I saw this”',
    plain:
      'When someone receives a key event, they can sign it. That signature is a receipt: non-repudiable proof they witnessed that version of the event. A log that also stores those receipts is a KERL.',
    why: 'Receipts make it hard to later pretend a different history was the one everyone accepted.',
    source: 'Hitchhiker’s Guide, Part 2',
  },
  {
    id: 'duplicity',
    term: 'Duplicity',
    say: 'Two histories that cannot both be true',
    plain:
      'If two signed versions of the same key event disagree, that contradiction is proof the signer produced inconsistent histories. A shorter log that simply stops early is incomplete, not duplicitous.',
    why: 'KERI’s security story is: you may not stop a liar from speaking, but you can prove they lied.',
    source: 'KERI jargon, Part 1',
  },
  {
    id: 'witness',
    term: 'Witness',
    say: 'A mailbox the controller chooses',
    plain:
      'Controllers are not always online. They can name witnesses who store and forward the key event log and sign receipts. Because the controller picks them, a verifier may also keep their own watchers.',
    why: 'Witnesses make the log findable. Watchers, jurors, and judges help a verifier notice if the history splits.',
    source: 'Hitchhiker’s Guide, Part 2',
  },
  {
    id: 'acdc',
    term: 'ACDC',
    say: 'Authentic Chained Data Container',
    plain:
      'A verifiable credential built for KERI. It bundles claims, is tied to the issuer’s identifier, and can be chained to other containers. Issuing one does not require re-issuing everything when keys rotate, because the credential is sealed to the key state at the time.',
    why: 'Think of it as a signed note whose seal still checks out after the signer changes the lock.',
    source: 'KERI jargon, Part 2; “KERI simplifies”',
  },
  {
    id: 'said',
    term: 'SAID',
    say: 'Self-addressing identifier',
    plain:
      'An identifier that is a hash of the very data it sits inside. Change one bit of the data and the identifier no longer matches. In KERI, AIDs and ACDC identifiers are SAIDs.',
    why: 'A signature on the identifier is a signature on the content, without a separate “which version?” argument.',
    source: 'KERI jargon, Part 2',
  },
  {
    id: 'cesr',
    term: 'CESR',
    say: 'Composable Event Streaming Representation',
    plain:
      'A way to encode the same cryptographic events as readable text or as compact binary, and switch between them without losing the proof. It was built because KERI needed one streaming format instead of a fight between JSON, CBOR, and MsgPack.',
    why: 'Lawyers can read a text form. Machines can stream the binary form. Both can be shown to be the same bytes of meaning.',
    source: '“KERI simplifies”; Why we like CESR',
  },
  {
    id: 'oobi',
    term: 'OOBI',
    say: 'Out-of-band introduction',
    plain:
      'A URL that points you at someone’s key log or data, using ordinary internet addresses. The link itself is not trusted. Whatever you fetch still has to verify under KERI rules.',
    why: 'Discovery can use the web we have. Trust does not have to.',
    source: 'KERI jargon, Part 3',
  },
  {
    id: 'ipex',
    term: 'IPEX',
    say: 'Issuance and presentation exchange',
    plain:
      'The conversation for giving or showing an ACDC. One party discloses, the other receives. You can reveal a little first, agree to terms, then reveal more. The same pattern covers both issuing and presenting.',
    why: 'This is how “show only what is needed” becomes a protocol, not a slogan.',
    source: 'KERI jargon, Part 3',
  },
  {
    id: 'vlei',
    term: 'vLEI',
    say: 'Verifiable Legal Entity Identifier',
    plain:
      'GLEIF’s digital version of the Legal Entity Identifier, built with KERI and ACDCs. A company can prove which organization it is, and who is allowed to speak for it, in calls, messages, and contracts.',
    why: 'This is the clearest real-world adoption: not a demo chain, a global identity utility using the suite.',
    source: 'KERI Foundation notes; Why we like KERI',
  },
  {
    id: 'gdpr',
    term: 'Right to be forgotten',
    say: 'Erasure without a global diary of everyone',
    plain:
      'A shared blockchain records transactions in one totally ordered ledger, so personal data written there is hard to delete. KERI key events are not forced into one world ledger. An identifier’s data can be erased because its trust base is not intertwined with everyone else’s.',
    why: 'Privacy here is a structural choice, not a policy bolted on later.',
    source: 'Hitchhiker’s Guide, Part 1; KERI Foundation',
  },
]
