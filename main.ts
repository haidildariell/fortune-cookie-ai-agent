import { mkdirSync, writeFileSync } from "node:fs";

const setup = "Good news: you will live forever.";
const punchline = "Bad news: only as a cautionary training example.";
const fortune = `${setup} ${punchline}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
