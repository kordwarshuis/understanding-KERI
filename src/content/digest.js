// Digests are SHA-256 of the exact UTF-8 string, shown as the first four
// hex characters, an ellipsis, and the last four.
// "Meet at the oak."
//   5b8078e3962ec17e27168033e9f5bec26458117e0761e23f0aab840834acf43f
// "Meet at the oak!"
//   ab331a284f05af33c2c23e8176cdca801abcec875e5a78b9494827346192643d
// "Meet at the oak behind the school. Bring the blue notebook."
//   6f62a5d7409624f7705b4533fd05fc6815cad012dc8e1117eb256fb60fd2da70
// "E7f2q2"
//   c770f4e1c1e36aba883628aea3dbb1ea5c7e6bbbfaa8331a6ddba84551f69bdc

export const scenes = [
  {
    id: 'length',
    kicker: 'Always the same size',
    title: 'Any length in. One short digest out.',
    body: 'The cards are notes: the bytes going in. A short note and a longer one both come out as 256 bits, 64 hex characters. The picture keeps the first four and the last four.',
    word: { id: 'digest', label: 'digest' },
    art: {
      shortLabel: 'a short note',
      longLabel: 'a longer note',
      short: 'Meet at the oak.',
      longLines: ['Meet at the oak', 'behind the school.', 'Bring the blue notebook.'],
      shortDigest: '5b80…f43f',
      longDigest: '6f62…da70',
      sameLength: 'same length',
    },
  },
  {
    id: 'blocks',
    kicker: 'How it is made',
    title: 'The sentence goes in as blocks',
    body: 'SHA-256 pads that longer note out to blocks of 64 bytes and takes those blocks in order. Each block updates a 256-bit total, and the total after the last block is the digest. This note takes two blocks. The picture names them and leaves the padding off the page.',
    art: {
      wideLines: ['Meet at the oak behind the school.', 'Bring the blue notebook.'],
      block1: 'block 1',
      block2: 'block 2',
      digest: '6f62…da70',
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
    kicker: 'Same check as the note',
    title: 'A public key is bytes too',
    body: 'The slide before checked a note. A public key is a string of bytes as well, so the same check works for it. KERI publishes the fingerprint of the next public key and you keep the key, E7f2q2. Showing that key later is checked the way the note was: hash it, and look for c770\u2060…\u20609bdc.',
    word: { id: 'prerotation', label: 'pre-rotation' },
    art: {
      noteLabel: 'the note, as before',
      sentence: 'Meet at the oak.',
      noteDigest: '5b80…f43f',
      same: 'same recipe as the note',
      keyLabel: 'a public key',
      keyRole: 'the next one',
      key: 'E7f2q2',
      keepLine: 'you keep this',
      keyDigest: 'c770…9bdc',
      only: 'this is published',
    },
  },
  {
    id: 'line',
    kicker: 'In one sentence',
    title: 'A fingerprint of those exact bytes',
    body: 'Same bytes, same digest. Change anything, and the new digest will not match. The digest does not hand the bytes back. You can give someone the fingerprint before you give them the bytes.',
    final: true,
    art: {
      sameTitle: 'same note',
      changedTitle: 'one letter different',
      note: 'Meet at the oak.',
      before: 'Meet at the oak',
      mark: '!',
      same: 'same digest',
      unlike: 'no match',
      hidden: 'no way back',
      seal: '5b80…f43f',
      line: 'Same bytes. Same digest.',
    },
  },
]
