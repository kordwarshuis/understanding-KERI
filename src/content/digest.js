// Digests are SHA-256 of the exact UTF-8 string, shown as the first four
// hex characters, an ellipsis, and the last four.
// "Meet at the oak."
//   5b8078e3962ec17e27168033e9f5bec26458117e0761e23f0aab840834acf43f
// "Meet at the oak!"
//   ab331a284f05af33c2c23e8176cdca801abcec875e5a78b9494827346192643d
// "The spare key stays in the drawer. The phone only has today's key."
//   1e24270cecdfdfbd1544fd36654da2f2d38b844851b16283c4bee1a08f079ab1
// "E7f2q2"
//   c770f4e1c1e36aba883628aea3dbb1ea5c7e6bbbfaa8331a6ddba84551f69bdc

export const scenes = [
  {
    id: 'length',
    kicker: 'Always the same size',
    title: 'Any length in. One short digest out.',
    body: 'SHA-256 takes the exact bytes of a sentence and returns 256 bits — 64 hex characters. The picture keeps the first four and the last four. A short note and a long sentence come out the same length. Read each card as one line. The breaks only fit the card.',
    word: { id: 'digest', label: 'digest' },
    art: {
      short: 'Meet at the oak.',
      longLines: ['The spare key stays', 'in the drawer. The phone', "only has today's key."],
      shortDigest: '5b80…f43f',
      longDigest: '1e24…9ab1',
      sameLength: 'same length',
    },
  },
  {
    id: 'blocks',
    kicker: 'How it is made',
    title: 'The sentence goes in as blocks',
    body: 'SHA-256 pads the sentence out to blocks of 64 bytes and takes those blocks in order. Each block updates a 256-bit total, and the total after the last block is the digest. This sentence takes two blocks. The picture names them and leaves the padding off the page.',
    art: {
      wideLines: ["The spare key stays in the drawer. The phone only has today's key."],
      block1: 'block 1',
      block2: 'block 2',
      digest: '1e24…9ab1',
    },
  },
  {
    id: 'same',
    kicker: 'No secret',
    title: 'The same bytes, the same digest',
    body: 'Run “Meet at the oak.” through SHA-256 twice and both answers are 5b80\u2060…\u2060f43f. Anyone who has the sentence can make that digest. The recipe uses no secret key.',
    art: {
      sentence: 'Meet at the oak.',
      digest: '5b80…f43f',
      again: 'again',
      same: 'the same',
      noKey: 'no secret key',
    },
  },
  {
    id: 'change',
    kicker: 'One character',
    title: 'Change the period, and the digest is a stranger',
    body: '“Meet at the oak.” and “Meet at the oak!” differ by one character. Their digests look unrelated. You can see that the bytes differ. The digest does not show which character moved.',
    art: {
      before: 'Meet at the oak',
      mark: '.',
      changedMark: '!',
      digest: '5b80…f43f',
      changedDigest: 'ab33…643d',
      unlike: 'nothing alike',
    },
  },
  {
    id: 'oneway',
    kicker: 'One direction',
    title: 'The words stay on this side of the digest',
    body: 'From 5b80\u2060…\u2060f43f there is no step that returns “Meet at the oak.” The digest is a fingerprint of those bytes. The bytes stay out of it. That is why a digest can sit in public while the sentence stays hidden.',
    art: {
      sentence: 'Meet at the oak.',
      digest: '5b80…f43f',
      hidden: 'the words stay hidden',
    },
  },
  {
    id: 'check',
    kicker: 'Checking',
    title: 'To check it, run the recipe again',
    body: 'Someone wrote down 5b80\u2060…\u2060f43f. A friend who has “Meet at the oak.” runs SHA-256, and the new digest matches, so this is that sentence. A mismatch would mean other bytes. The friend needs the sentence. The check uses no key.',
    art: {
      friend: 'a friend',
      sentence: 'Meet at the oak.',
      digest: '5b80…f43f',
      written: 'written down',
      matches: 'it matches',
    },
  },
  {
    id: 'commit',
    kicker: 'Why KERI writes one down',
    title: 'Publish the digest. Keep the bytes.',
    body: 'The next public key here is the exact characters E7f2q2, and SHA-256 of those characters is c770\u2060…\u20609bdc. The digest can sit in the public record while the key stays off the phone. Anyone who later sees E7f2q2 runs SHA-256 and looks for c770\u2060…\u20609bdc. KERI commits a spare key this way. A SAID is the same idea for a document: its name is a digest of its own bytes.',
    word: { id: 'prerotation', label: 'pre-rotation' },
    art: {
      you: 'you',
      kept: 'kept back',
      key: 'E7f2q2',
      exact: 'these characters',
      keyName: 'next public key',
      record: 'public record',
      digest: 'c770…9bdc',
      only: 'only the digest',
    },
  },
  {
    id: 'line',
    kicker: 'In one sentence',
    title: 'A fingerprint of those exact bytes',
    body: 'Same bytes, same digest. Change anything, and the new digest will not match. The digest does not hand the bytes back. You can give someone the fingerprint before you give them the bytes.',
    final: true,
    art: {
      oak: 'oak.',
      oakBang: 'oak!',
      same: 'same digest',
      unlike: 'no match',
      hidden: 'no way back',
      seal: '5b80…f43f',
      line: 'Same bytes. Same digest.',
    },
  },
]
