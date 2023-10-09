import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    },
  };
};

/* const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig); */

//module.exports = {
//  roots: ["<rootDir>/app"],
//  testMatch: [
//    "**/__tests__/**/*.+(ts|tsx|js)",
//    "**/?(*.)+(spec|test).+(ts|tsx|js)",
//  ],
//  transform: {
//    "^.+\\.(ts|tsx)$": "ts-jest",
//  },
//};
