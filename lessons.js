// Lesson content. Each lesson is a list of blocks; app.js knows how to render
// each block type. Add a lesson by appending an object with a unique `id`.

export const lessons = [
  {
    id: "nouns",
    number: 1,
    theme: "Stardew Valley",
    title: "Nouns, gender, and “the”",
    focus: "en/ett · definite forms · plurals",
    summary:
      "Every Swedish noun is an en-word or an ett-word, and “the” is glued onto the end of the word instead of standing in front of it.",
    blocks: [
      {
        type: "prose",
        text: "Swedish has two noun genders: <em>en</em>-words (about 75% of nouns) and <em>ett</em>-words (about 25%). There is no reliable rule for which is which, so you memorise the article together with the word. Learn “en gård”, never just “gård”.",
      },
      {
        type: "note",
        text: "Second big idea: <strong>“the” is a suffix, not a separate word.</strong> You attach it to the end of the noun.",
      },
      {
        type: "table",
        caption: "The four forms every noun has",
        headers: ["", "a farm / a tree", "the …", "…s", "the …s"],
        rows: [
          ["en-word", "en gård", "gård<b>en</b>", "gård<b>ar</b>", "gård<b>arna</b>"],
          ["ett-word", "ett träd", "träd<b>et</b>", "träd", "träd<b>en</b>"],
        ],
      },
      { type: "heading", text: "Farm vocabulary" },
      {
        type: "table",
        caption: "en-words",
        headers: ["Indefinite", "Definite", "Plural", "Definite plural"],
        rows: [
          ["en gård <span class=gloss>farm</span>", "gården", "gårdar", "gårdarna"],
          ["en hacka <span class=gloss>hoe</span>", "hackan", "hackor", "hackorna"],
          ["en yxa <span class=gloss>axe</span>", "yxan", "yxor", "yxorna"],
          ["en höna <span class=gloss>hen</span>", "hönan", "hönor", "hönorna"],
          ["en ko <span class=gloss>cow</span>", "kon", "kor", "korna"],
          ["en fisk <span class=gloss>fish</span>", "fisken", "fiskar", "fiskarna"],
          ["en sten <span class=gloss>stone</span>", "stenen", "stenar", "stenarna"],
          ["en gruva <span class=gloss>mine</span>", "gruvan", "gruvor", "gruvorna"],
          ["en butik <span class=gloss>shop</span>", "butiken", "butiker", "butikerna"],
          ["en vän <span class=gloss>friend</span>", "vännen", "vänner", "vännerna"],
        ],
      },
      {
        type: "table",
        caption: "ett-words",
        headers: ["Indefinite", "Definite", "Plural", "Definite plural"],
        rows: [
          ["ett frö <span class=gloss>seed</span>", "fröet", "frön", "fröna"],
          ["ett äpple <span class=gloss>apple</span>", "äpplet", "äpplen", "äpplena"],
          ["ett träd <span class=gloss>tree</span>", "trädet", "träd", "träden"],
          ["ett svärd <span class=gloss>sword</span>", "svärdet", "svärd", "svärden"],
          ["ett hus <span class=gloss>house</span>", "huset", "hus", "husen"],
        ],
      },
      { type: "heading", text: "The patterns behind the tables" },
      {
        type: "rules",
        title: "Definite (“the”)",
        items: [
          "en-word ending in a consonant → add <b>-en</b> · fisk → fisken",
          "en-word ending in a vowel → add <b>-n</b> · hacka → hackan",
          "ett-word ending in a consonant → add <b>-et</b> · svärd → svärdet",
          "ett-word ending in a vowel → add <b>-t</b> · frö → fröet",
        ],
      },
      {
        type: "rules",
        title: "Plural",
        items: [
          "en-words ending in <b>-a</b> swap it for <b>-or</b> · hacka → hackor",
          "other en-words take <b>-ar</b> or <b>-er</b> · fisk → fiskar, butik → butiker",
          "ett-words ending in a vowel take <b>-n</b> · äpple → äpplen",
          "ett-words ending in a consonant don’t change · ett hus → två hus",
        ],
      },
      {
        type: "prose",
        text: "Definite plural is then just <b>-na</b>, or <b>-a</b> if the plural already ends in <em>-r</em>: gårdar → gårdarna, äpplen → äpplena.",
      },
      { type: "heading", text: "Sentences" },
      {
        type: "examples",
        items: [
          ["Jag har en hacka.", "I have a hoe."],
          ["Hackan är gammal.", "The hoe is old."],
          ["Jag planterar frön.", "I plant seeds."],
          ["Fröna är i lådan.", "The seeds are in the box."],
          ["Butiken är stängd på tisdagar.", "The shop is closed on Tuesdays."],
          ["Hönorna sover i huset.", "The hens are sleeping in the house."],
        ],
      },
      {
        type: "exercise",
        instruction:
          "Give the definite singular, plural, and definite plural — separated by spaces or commas.",
        items: [
          { q: "en fisk", answer: "fisken, fiskar, fiskarna" },
          { q: "ett äpple", answer: "äpplet, äpplen, äpplena" },
          { q: "en gruva", answer: "gruvan, gruvor, gruvorna" },
          { q: "ett svärd", answer: "svärdet, svärd, svärden" },
          { q: "en vän", answer: "vännen, vänner, vännerna" },
        ],
      },
      {
        type: "exercise",
        instruction: "Translate into Swedish.",
        items: [
          { q: "The cow is big. (big = stor)", answer: "Kon är stor." },
          { q: "I have two axes.", answer: "Jag har två yxor." },
          {
            q: "The trees are in the forest. (forest = skogen)",
            answer: "Träden är i skogen.",
          },
        ],
      },
    ],
  },

  {
    id: "verbs",
    number: 2,
    theme: "Pokémon",
    title: "Verbs and word order",
    focus: "present tense · imperatives · the V2 rule",
    summary:
      "Swedish verbs never change by person, which makes them easy. Word order is the part that actually needs practice.",
    blocks: [
      { type: "heading", text: "The good news" },
      {
        type: "prose",
        text: "Swedish verbs <strong>do not change by person</strong>. One form covers everybody:",
      },
      {
        type: "examples",
        items: [
          ["jag fångar · du fångar · han/hon fångar", "I catch · you catch · he/she catches"],
          ["vi fångar · ni fångar · de fångar", "we catch · you catch · they catch"],
        ],
      },
      {
        type: "prose",
        text: "Compare English “I catch / he catches”, or the six endings Spanish makes you learn. Swedish has one.",
      },
      { type: "heading", text: "Present tense: three groups and two irregulars" },
      {
        type: "table",
        headers: ["Group", "Infinitive", "Present", "Meaning"],
        rows: [
          ["<b>-ar verbs</b>", "fånga", "fångar", "catch"],
          ["", "träna", "tränar", "train"],
          ["", "kasta", "kastar", "throw"],
          ["", "kämpa", "kämpar", "fight"],
          ["<b>-er verbs</b>", "springa", "springer", "run"],
          ["", "vinna", "vinner", "win"],
          ["", "välja", "väljer", "choose"],
          ["", "använda", "använder", "use"],
          ["", "sova", "sover", "sleep"],
          ["", "flyga", "flyger", "fly"],
          ["", "byta", "byter", "trade"],
          ["<b>short verbs</b>", "se", "ser", "see"],
          ["", "gå", "går", "walk, go"],
          ["", "tro", "tror", "believe"],
          ["<b>irregular</b>", "vara", "är", "be"],
          ["", "ha", "har", "have"],
        ],
      },
      { type: "heading", text: "The imperative" },
      {
        type: "prose",
        text: "For giving orders — which is most of what you do in a battle — strip the verb back to its bare stem.",
      },
      {
        type: "rules",
        items: [
          "<b>-ar verbs</b> drop the <em>-r</em> · Fånga den! · Kasta pokébollen! · Träna mer!",
          "<b>-er verbs</b> drop the <em>-er</em> · Spring! · Använd Tackle! · Välj en pokémon!",
        ],
      },
      { type: "heading", text: "The V2 rule" },
      {
        type: "prose",
        text: "In a Swedish main clause the verb must be the <strong>second element</strong>. Not the second word — the second chunk. If something else takes the first slot, the subject gets bumped to after the verb.",
      },
      {
        type: "table",
        caption: "The verb column never moves",
        headers: ["First element", "Verb", "Rest"],
        rows: [
          ["Jag", "fångar", "en Pikachu i skogen."],
          ["Nu", "fångar", "jag en Pikachu."],
          ["I skogen", "fångar", "jag en Pikachu."],
          ["Varje dag", "tränar", "jag med mina pokémon."],
          ["I gräset", "sover", "en Snorlax."],
        ],
      },
      {
        type: "note",
        text: "English says “In the forest, <em>I catch</em> a Pikachu.” Swedish says “In the forest <em>catch I</em> a Pikachu.” Build this reflex early and you’ll sound far more natural than your vocabulary deserves.",
      },
      { type: "heading", text: "Questions and negation" },
      {
        type: "prose",
        text: "For a yes/no question, just swap the subject and the verb. There is no “do” helper verb in Swedish.",
      },
      {
        type: "examples",
        items: [
          ["Fångar du Pikachu?", "Are you catching Pikachu?"],
          ["Är den stark?", "Is it strong?"],
          ["Har du en pokéboll?", "Do you have a Poké Ball?"],
        ],
      },
      {
        type: "prose",
        text: "Question words take the first slot, and the verb still lands second.",
      },
      {
        type: "examples",
        items: [
          ["Var är Pikachu?", "Where is Pikachu?"],
          ["Vad gör du?", "What are you doing?"],
          ["Vilken pokémon väljer du?", "Which Pokémon do you choose?"],
        ],
      },
      {
        type: "prose",
        text: "To negate, put <em>inte</em> <strong>after</strong> the verb.",
      },
      {
        type: "examples",
        items: [
          ["Jag fångar inte Mewtwo.", "I’m not catching Mewtwo."],
          ["Den sover inte.", "It isn’t sleeping."],
        ],
      },
      {
        type: "note",
        text: "Swedish has no continuous tense. <em>Jag springer</em> means both “I run” and “I am running” — one form, two English translations.",
      },
      {
        type: "exercise",
        instruction: "Give the present tense and the imperative, separated by a space or comma.",
        items: [
          { q: "kasta", answer: "kastar, kasta" },
          { q: "använda", answer: "använder, använd" },
          { q: "springa", answer: "springer, spring" },
          { q: "träna", answer: "tränar, träna" },
        ],
      },
      {
        type: "exercise",
        instruction: "Rewrite the sentence starting with the phrase in brackets. Watch the V2 rule.",
        items: [
          { q: "Jag tränar varje dag. [varje dag]", answer: "Varje dag tränar jag." },
          {
            q: "Jag fångar en Bulbasaur i skogen. [i skogen]",
            answer: "I skogen fångar jag en Bulbasaur.",
          },
        ],
      },
      {
        type: "exercise",
        instruction: "Translate into Swedish.",
        items: [
          { q: "Do you have a Poké Ball?", answer: "Har du en pokéboll?" },
          { q: "I don’t use Thunderbolt.", answer: "Jag använder inte Thunderbolt." },
          { q: "Which Pokémon do you choose?", answer: "Vilken pokémon väljer du?" },
        ],
      },
    ],
  },

  {
    id: "adjectives",
    number: 3,
    theme: "Bunnies",
    title: "Adjectives and agreement",
    focus: "three forms · double definiteness",
    summary:
      "Adjectives change shape depending on the noun they describe — so this one builds directly on knowing en from ett.",
    requires: "nouns",
    blocks: [
      {
        type: "note",
        text: "Do the <em>Nouns</em> lesson first. Every ending below depends on knowing whether a noun takes <em>en</em> or <em>ett</em>.",
      },
      { type: "heading", text: "The one big idea" },
      {
        type: "prose",
        text: "Swedish adjectives have <strong>three forms</strong>, and the noun decides which one you use.",
      },
      {
        type: "table",
        headers: ["Noun type", "Adjective form", "Example"],
        rows: [
          ["en-word", "base form", "en <b>söt</b> kanin <span class=gloss>a cute bunny</span>"],
          ["ett-word", "add <b>-t</b>", "ett <b>sött</b> öra <span class=gloss>a cute ear</span>"],
          ["plural", "add <b>-a</b>", "<b>söta</b> kaniner <span class=gloss>cute bunnies</span>"],
          [
            "anything definite",
            "add <b>-a</b>",
            "den <b>söta</b> kaninen <span class=gloss>the cute bunny</span>",
          ],
        ],
      },
      { type: "heading", text: "Vocabulary" },
      {
        type: "table",
        caption: "Adjectives",
        headers: ["en-form", "ett-form", "plural / definite", "Meaning"],
        rows: [
          ["söt", "sött", "söta", "cute, sweet"],
          ["mjuk", "mjukt", "mjuka", "soft"],
          ["snabb", "snabbt", "snabba", "fast"],
          ["lurvig", "lurvigt", "lurviga", "fluffy, shaggy"],
          ["vit", "vitt", "vita", "white"],
          ["brun", "brunt", "bruna", "brown"],
          ["hungrig", "hungrigt", "hungriga", "hungry"],
          ["stor", "stort", "stora", "big"],
          ["<b>liten</b>", "<b>litet</b>", "<b>små</b>", "small <span class=gloss>irregular</span>"],
          ["glad", "glatt", "glada", "happy"],
        ],
      },
      {
        type: "table",
        caption: "Nouns",
        headers: ["Indefinite", "Definite", "Plural", "Definite plural"],
        rows: [
          ["en kanin <span class=gloss>bunny</span>", "kaninen", "kaniner", "kaninerna"],
          ["en tass <span class=gloss>paw</span>", "tassen", "tassar", "tassarna"],
          ["en svans <span class=gloss>tail</span>", "svansen", "svansar", "svansarna"],
          ["en morot <span class=gloss>carrot</span>", "moroten", "<b>morötter</b>", "morötterna"],
          ["ett öra <span class=gloss>ear</span>", "öret", "<b>öron</b>", "öronen"],
          ["ett hål <span class=gloss>hole</span>", "hålet", "hål", "hålen"],
        ],
      },
      {
        type: "prose",
        text: "<em>Morot</em> and <em>öra</em> have irregular plurals worth memorising as one-offs.",
      },
      { type: "heading", text: "Double definiteness" },
      {
        type: "prose",
        text: "To say “the cute bunny”, Swedish marks definiteness <strong>twice</strong>: a free-standing article before the adjective, and the suffix on the noun.",
      },
      {
        type: "table",
        headers: ["", "Indefinite", "Definite"],
        rows: [
          ["en-word", "en söt kanin", "<b>den</b> söt<b>a</b> kanin<b>en</b>"],
          ["ett-word", "ett sött öra", "<b>det</b> söt<b>a</b> öre<b>t</b>"],
          ["plural", "söta kaniner", "<b>de</b> söt<b>a</b> kanin<b>erna</b>"],
        ],
      },
      {
        type: "prose",
        text: "So <em>den / det / de</em> all mean “the”, chosen by gender and number. The redundancy feels wasteful on paper, but it makes spoken Swedish easy to parse.",
      },
      { type: "heading", text: "After “är” — no -a" },
      {
        type: "prose",
        text: "When the adjective comes after the verb, it agrees with the subject but never takes <b>-a</b> in the singular.",
      },
      {
        type: "examples",
        items: [
          ["Kaninen är söt.", "The bunny is cute."],
          ["Öret är sött.", "The ear is cute."],
          ["Kaninerna är söta.", "The bunnies are cute."],
          ["Min kanin är liten.", "My bunny is small."],
          ["Mina kaniner är små.", "My bunnies are small."],
        ],
      },
      { type: "heading", text: "Sentences" },
      {
        type: "examples",
        items: [
          ["En liten vit kanin sover i hålet.", "A small white bunny is sleeping in the hole."],
          ["Den lurviga kaninen äter en morot.", "The fluffy bunny is eating a carrot."],
          ["Kaninens öron är långa och mjuka.", "The bunny’s ears are long and soft."],
          ["De små kaninerna är hungriga.", "The little bunnies are hungry."],
          ["Jag har två bruna kaniner.", "I have two brown bunnies."],
        ],
      },
      {
        type: "note",
        text: "<em>Liten</em> has a fourth form, <strong>lilla</strong>, used in the definite singular for both genders: den <em>lilla</em> kaninen, det <em>lilla</em> öret. The definite plural goes back to <em>små</em>: de <em>små</em> kaninerna.",
      },
      {
        type: "exercise",
        instruction: "Write the full phrase with the adjective in the right form.",
        items: [
          { q: "ett ___ öra (mjuk)", answer: "ett mjukt öra" },
          { q: "en ___ kanin (snabb)", answer: "en snabb kanin" },
          { q: "tre ___ morötter (stor)", answer: "tre stora morötter" },
          { q: "den ___ svansen (lurvig)", answer: "den lurviga svansen" },
          { q: "det ___ hålet (liten)", answer: "det lilla hålet" },
          { q: "Kaninen är ___ (glad)", answer: "Kaninen är glad." },
        ],
      },
      {
        type: "exercise",
        instruction: "Translate into Swedish.",
        items: [
          { q: "The white bunny is fast.", answer: "Den vita kaninen är snabb." },
          { q: "I have a small brown bunny.", answer: "Jag har en liten brun kanin." },
          {
            q: "The little bunnies are eating carrots. (eat = äter)",
            answer: "De små kaninerna äter morötter.",
          },
        ],
      },
    ],
  },
];

export const afterwards = {
  title: "After these three",
  text: "With nouns, verbs, word order and adjectives you can build real sentences. Natural next steps: pronouns and possessives (min/mitt/mina), the past tense, and subordinate clauses — where the V2 rule breaks down and <em>inte</em> moves in front of the verb.",
};
