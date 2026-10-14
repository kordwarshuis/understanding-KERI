export const story = {
  title: 'A name that can change its locks',
  lede: 'Ten beats. The same bones for everyone. The seat you choose afterward changes which bone matters.',
  beats: [
    {
      id: 'missing',
      kicker: 'The gap',
      title: 'The internet has no layer for “this is really them”',
      body: 'Kim Cameron wrote in 2005 that the internet was built without an identity layer. There is still nothing in the internet protocol like phone-number portability: a name you can take with you when you leave a provider. Passwords and “Log in with Google” filled the hole. They also put a company in the middle of every introduction.',
    },
    {
      id: 'notyou',
      kicker: 'A distinction',
      title: 'A name is not a person',
      body: 'An email address, a handle, a patient number: those are identifiers. They point at someone. They are not the someone. A driver’s license is not an identity either. It is an attestation: an authority saying this identifier has a right, a role, or an age. KERI is about the identifier and the keys, so that later attestations have something stable and checkable to point at. Confusing the three is how products promise “your identity” and hand you a login.',
    },
    {
      id: 'middle',
      kicker: 'The middleman',
      title: 'Whoever administers the name can be wrong',
      body: 'The lock icon in a browser usually means a certificate authority bound a site name to a key. That is an administrative root of trust. If the authority is fooled, or an insider resets the account, everyone who trusted the administrator trusts the wrong key. The binding looks official. It is only as strong as the office that made it.',
    },
    {
      id: 'chain',
      kicker: 'The detour',
      title: 'A shared ledger was the wrong tool',
      body: 'Blockchains stop a coin being spent twice, which needs one ordered history the whole network agrees on. Saying who you are a second time does not make you two people. Smith helped design a ledger-based identity system, then left it: one public ledger means ledger wars, shared governance, and an identifier locked to that ledger. KERI is the protocol he designed so the same keys and the same verifiable history work anywhere, with no shared database required.',
    },
    {
      id: 'name',
      kicker: 'Your name',
      title: 'The identifier is born from keys you hold',
      body: 'You draw randomness, make a key pair, and the first signed key event — inception — is what the autonomic identifier is derived from. Signing later proves you still hold it. No registry has to bless the birth. A government, a hospital, or GLEIF can afterward attest “this identifier belongs to this person or this firm.” That attestation is a separate act. The identifier was already yours.',
    },
    {
      id: 'spare',
      kicker: 'The spare',
      title: 'Today’s key signs. Tomorrow’s key is only a hash.',
      body: 'At inception you publish the signing key and a digest of the next key. The next private key should not sit on the device you use every day. If the current key is copied, the thief can sign only by publishing an event. Witnesses you chose will have that event. You reveal the spare, rotate, retire the stolen key, and commit a new hidden spare. The AID does not change. A key that is already stale cannot forge a second history that verifies: the chain will show the conflict. The hidden spare is also the recovery if a quantum computer breaks today’s signatures, because the hash was never a public key to break.',
      interactive: 'locks',
    },
    {
      id: 'diary',
      kicker: 'The diary',
      title: 'Anyone can replay one name’s history',
      body: 'Each event includes the hash of the one before it. Replaying the key event log tells you which keys could sign, and when. Smith’s word for this is end-verifiable: the bytes are enough, anywhere, anytime. A witness is any system that can store the log and give it back — another log, a database, a file, even a chain. The witness is not who you trust. The log is what you check. Two inconsistent signed versions are duplicity, which is evidence. A merely shorter log is just unfinished.',
    },
    {
      id: 'note',
      kicker: 'The note',
      title: 'A credential stays valid after the lock changes',
      body: 'An ACDC seals claims to the issuer’s key state at issuance, through a transaction log anchored in the key event log. Verifiers replay that point in the history. They do not ask the issuer to re-sign every diploma, role, or vLEI after a rotation. Revocation is its own anchored event. Until that event, the old seal still says what was true that day.',
    },
    {
      id: 'little',
      kicker: 'The little reveal',
      title: 'Prove the fact. Keep the rest.',
      body: 'Smith’s example is ordinary: prove you are old enough to buy something restricted, and hand over nothing else — not the birth date, not the address. IPEX is that conversation. The discloser can offer part of an ACDC plus terms, and reveal more only after the other side agrees. The terms are meant to bind the next recipient too. The web link that helped you find the log, an OOBI, is not part of the proof. A bad link means you found nothing. It does not mean you should believe a substitute.',
    },
    {
      id: 'forget',
      kicker: 'The goodbye',
      title: 'You can delegate, and you can stop',
      body: 'Authority can be lent. A parent, a guardian, or a treasurer gets their own identifier, and both sides seal the delegation so a stranger can replay who was allowed to act. That is not the same as giving them your keys. When an identifier should end, the next-key commitment can be emptied and the history need not live on one global ledger of everyone. The KERI Foundation describes that separability as support for erasure. The name was never rented from a platform that refuses to forget you.',
    },
  ],
}
