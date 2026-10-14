export const story = {
  title: 'A name that can change its locks',
  lede: 'Nine short beats. Same story for everyone — then go back to the path that matches your work.',
  beats: [
    {
      id: 'missing',
      kicker: 'The gap',
      title: 'The internet never got a name you own',
      body: 'Kim Cameron wrote in 2005 that the internet was built without an identity layer. We patched that with passwords, then with “Log in with Google.” Those work. They also put a company between you and everyone you meet.',
    },
    {
      id: 'middle',
      kicker: 'The middleman',
      title: 'A certificate company can be wrong',
      body: 'The lock icon in a browser often means a certificate authority vouched for a site. If that authority is fooled or breached, browsers will trust the wrong name. The root of trust sits in an administrator, not in the name itself.',
    },
    {
      id: 'chain',
      kicker: 'A detour',
      title: 'Identity is not a coin',
      body: 'Blockchains solved double-spending: the same coin must not be spent twice, so the whole network keeps one ordered ledger. Saying “this is still my name, and here are my new keys” does not need that. Doing it twice does not make you twice as identified. KERI skips the consensus race instead of trying to win it.',
    },
    {
      id: 'name',
      kicker: 'Your name',
      title: 'An AID is a name made of keys',
      body: 'You gather randomness, make a key pair, and derive an autonomic identifier. Signing with the private key proves you hold it. No registry has to bless the birth of the name. The controller — a person, a company, or a device — is the root of trust.',
    },
    {
      id: 'spare',
      kicker: 'The spare',
      title: 'Publish today’s key. Hide tomorrow’s.',
      body: 'At the start you show the signing key and only a hash of the next key. Day to day, you sign with the current key. If it leaks, you reveal the spare, sign a rotation, retire the stolen key, and commit a new hidden spare. The AID stays. That hidden spare is also the recovery path if a quantum computer breaks today’s signatures: hashes are not attacked the same way.',
      interactive: 'locks',
    },
    {
      id: 'diary',
      kicker: 'The diary',
      title: 'The KEL is one name’s history',
      body: 'Each key event hashes to the previous one. Replay the log and you see which keys could sign, and when. Witnesses the controller chooses can keep copies and sign receipts, so the log is still findable when the controller is offline. A second, conflicting signed history is duplicity — evidence, not a mystery.',
    },
    {
      id: 'note',
      kicker: 'The note',
      title: 'Credentials that survive a lock change',
      body: 'An ACDC is a verifiable container of claims, chained and sealed to the issuer’s key state at issuance. You do not have to re-issue every diploma, role, or vLEI just because the issuer rotated keys. The seal points at the log; the log says which key was valid that day.',
    },
    {
      id: 'little',
      kicker: 'The little reveal',
      title: 'Show a corner of the page first',
      body: 'IPEX lets a discloser offer part of an ACDC, attach terms, and reveal more only after the other side agrees. That is graduated disclosure, and the terms can follow the credential to the next recipient — chain-link confidentiality. OOBI links on the ordinary web only help you find the log. They are not trust. Verification still happens in band.',
    },
    {
      id: 'forget',
      kicker: 'The goodbye',
      title: 'Forgetting is possible because there is no single diary of everyone',
      body: 'Personal data on a global ledger is hard to delete. KERI does not require one totally ordered ledger shared by the world. An identifier’s history can be dropped. The KERI Foundation describes this as support for data-protection rights such as erasure. The name was never rented from a platform that refuses to forget.',
    },
  ],
}
