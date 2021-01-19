const tags = {
  productivity: "blue",
  work: "teal",
  mentalhealth: "cyan",
  spanish: "green",
  wellbeing: "orange",
  development: "red",
  books: "yellow",
};

export default function tagToColor(tag) {
  return tags[tag];
}
