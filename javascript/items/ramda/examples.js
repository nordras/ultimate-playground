const R = require("ramda");

// Basic transforms
const numbers = [1, 2, 3, 4, 5];
const doubled = R.map(R.multiply(2), numbers);
const evens = R.filter(R.even, numbers);

// Functional composition
const formatName = R.pipe(
  R.trim,
  R.toLower,
  R.replace(/\s+/g, " "),
  R.split(" "),
  R.map(R.capitalize),
  R.join(" ")
);

// Currying
const add = R.curry((a, b) => a + b);
const add10 = add(10);

// Object transforms
const user = { id: 7, name: " Ada  LOVELACE ", city: "London" };
const cleanUser = R.evolve({ name: formatName }, user);
const userWithCountry = R.assoc("country", "UK", cleanUser);
const userCity = R.prop("city", userWithCountry);

// Lenses for nested updates
const person = { profile: { stats: { score: 42 } } };
const scoreLens = R.lensPath(["profile", "stats", "score"]);
const boosted = R.over(scoreLens, R.add(10), person);

// Grouping and indexing
const pets = [
  { name: "Milo", type: "cat" },
  { name: "Oreo", type: "cat" },
  { name: "Fido", type: "dog" }
];
const petsByType = R.groupBy(R.prop("type"), pets);
const petsByName = R.indexBy(R.prop("name"), pets);

// Maybe-like safe access with default
const getNickname = R.pathOr("(none)", ["profile", "nickname"]);
const nickname = getNickname({ profile: { nickname: "Lovelace" } });

// Predicates and all/any
const isShortName = R.both(R.is(String), R.pipe(R.length, R.lt(R.__, 6)));
const allShort = R.all(isShortName, ["Ada", "Edsger", "Linus"]);

console.log({
  doubled,
  evens,
  formatName: formatName("  aDa   loVELACE  "),
  add10: add10(5),
  cleanUser,
  userWithCountry,
  userCity,
  boosted,
  petsByType,
  petsByName,
  nickname,
  allShort
});
