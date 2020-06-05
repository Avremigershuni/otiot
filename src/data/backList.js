import links from "../view/imagesLinks";
const backCards = [
  {
    letter: "א",
    img: links[0],
    audio: "sounds/alef.mp4",
    id: 0,
    picTitle: "אתרוג",
    picAudio:"sounds/etrog.m4a"
  },
  {
    letter:"בּ",
    img: links[1],
    audio: "sounds/beit.m4a",
    id: 1,
    picTitle: "ברווז",
    picAudio:"sounds/barvaz.mp4"
  },
  {
    letter: "ב",
    img: links[2],
    audio: "sounds/veyt.mp4",
    id: 2,
    picTitle: "לב",
    picAudio:"sounds/lev2.m4a"
  },
  {
    letter: "ג",
    img: links[3],
    audio: "sounds/gimel.mp4",
    id: 3,
    picTitle: "גשר",
    picAudio:"sounds/gesher.m4a"
  },
  {
    letter: "ד",
    img: links[4],
    audio: "sounds/dalet.mp4",
    id: 4,
    picTitle: "דשא",
    picAudio:"sounds/deshe.m4a"
  },
  {
    letter: "ה",
    img: links[5],
    audio: "sounds/hey.mp4",
    id: 5,
    picTitle: "הדס",
    picAudio:"sounds/hadas.m4a"
  },
  {
    letter: "ו",
    img: links[6],
    audio: "sounds/vav.mp4",
    id: 6,
    picTitle: "וילון",
    picAudio:"sounds/vilon.m4a"
  },
  {
    letter: "ז",
    img: links[7],
    audio: "sounds/zayn.mp4",
    id: 7,
    picTitle: "זיתים",
    picAudio:"sounds/zeytim.m4a"
  },
  {
    letter: "ח",
    img: links[8],
    audio: "sounds/chet.mp4",
    id: 8,
    picTitle: "חישוקים",
    picAudio:"sounds/chishukim.m4a"
  },
  {
    letter: "ט",
    img: links[9],
    audio: "sounds/tet.mp4",
    id: 9,
    picTitle: "טיפה",
    picAudio:"sounds/tipa.m4a"
  },
  {
    letter: "י",
    img: links[10],
    audio: "sounds/yud.mp4",
    id: 10,
    picTitle: "יונה",
    picAudio:"sounds/yona.m4a"
  },
  {
    letter: "כּ",
    img: links[11],
    audio: "sounds/kaf.mp4",
    id: 11,
    picTitle: "כבאית",
    picAudio:"sounds/kabait.m4a"
  },
  {
    letter: "כ",
    img: links[12],
    audio: "sounds/chaf.mp4",
    id: 12,
    picTitle: "מכונית",
    picAudio:"sounds/mechonit.m4a"
  },
  {
    letter: "ך",
    img: links[13],
    audio: "sounds/chafSofit.mp4",
    id: 13,
    picTitle: "מלך",
    picAudio:"sounds/mellech.m4a"
  },
  {
    letter: "ל",
    img: links[14],
    audio: "sounds/lamed.mp4",
    id: 14,
    picTitle: "לולב",
    picAudio:"sounds/lulav.m4a"
  },
  {
    letter: "מ",
    img: links[15],
    audio: "sounds/mem.mp4",
    id: 15,
    picTitle: "מטריה",
    picAudio:"sounds/mitria.m4a"
  },
  {
    letter: "ם",
    img: links[16],
    audio: "sounds/memSofit.mp4",
    id: 16,
    picTitle: "ים",
    picAudio:"sounds/yam.m4a"
  },
  {
    letter: "נ",
    img: links[17],
    audio: "sounds/nun.mp4",
    id: 17,
    picTitle: "נרות",
    picAudio:"sounds/nerot.m4a"
  },
  {
    letter: "ן",
    img: links[18],
    audio: "sounds/nunSofit.mp4",
    id: 18,
    picTitle: "שולחן",
    picAudio:"sounds/shulchan.m4a"
  },
  {
    letter: "ס",
    img: links[19],
    audio: "sounds/samech.mp4",
    id: 19,
    picTitle: "סוכריות",
    picAudio:"sounds/sucaryot.m4a"
  },
  {
    letter: "ע",
    img: links[20],
    audio: "sounds/ayin.mp4",
    id: 20,
    picTitle: "עיתון",
    picAudio:"sounds/iton.m4a"
  },
  {
    letter: "פּ",
    img: links[21],
    audio: "sounds/pey.mp4",
    id: 21,
    picTitle: "פרח",
    picAudio:"sounds/perach.m4a"
  },
  {
    letter: "פ",
    img: links[22],
    audio: "sounds/fey.mp4",
    id: 22,
    picTitle: "עפיפון",
    picAudio:"sounds/afifon.m4a"
  },
  {
    letter: "ף",
    img: links[23],
    audio: "sounds/feySofit.mp4",
    id: 23,
    picTitle: "ענף",
    picAudio:"sounds/anaf.m4a"
  },
  {
    letter: "צ",
    img: links[24],
    audio: "sounds/tzadi.mp4",
    id: 24,
    picTitle: "ציפור",
    picAudio:"sounds/tzipor.m4a"
  },
  {
    letter: "ץ",
    img: links[25],
    audio: "sounds/tzadiSofit.mp4",
    id: 25,
    picTitle: "עץ",
    picAudio:"sounds/hetz.m4a"
  },
  {
    letter: "ק",
    img: links[26],
    audio: "sounds/kuf.mp4",
    id: 26,
    picTitle: "קורנפלקס",
    picAudio:"sounds/cornflex.m4a"
  },
  {
    letter: "ר",
    img: links[27],
    audio: "sounds/reysh.mp4",
    id: 27,
    picTitle: "רימון",
    picAudio:"sounds/rimon.m4a"
  },
  {
    letter: "שׁ",
    img: links[28],
    audio: "sounds/shin.mp4",
    id: 28,
    picTitle: "שעון",
    picAudio:"sounds/shaon.m4a"
  },
  {
    letter: "שׂ",
    img: links[29],
    audio: "sounds/sin.mp4",
    id: 29,
    picTitle: "שעורה",
    picAudio:"sounds/seora.m4a"
  },
  {
    letter: "תּ",
    img: links[30],
    audio: "sounds/tav.mp4",
    id: 30,
    picTitle: "תוף",
    picAudio:"sounds/tof.m4a"
  },
  {
    letter: "ת",
    img: links[31],
    audio: "sounds/sav.mp4",
    id: 31,
    picTitle: "מברשת",
    picAudio:"sounds/mivreshet.m4a"
  }
];
export default backCards;

