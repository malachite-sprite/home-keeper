export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.(m|c)ts?$": ["ts-jest", { useESM: true }],
  },
};