const path = require('path');
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",  // 检测文件正则
  testPathIgnorePatterns:["(/__tests__/.*|(\\.|/)(test|spec))\\.(d.ts)$"],  // 忽略文件正则
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  rootDir: path.join(__dirname, ''),  // 根目录
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"  // @/ src
  }
}
