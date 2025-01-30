const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;

  beforeEach(() => {
    word = new Word("Hadoken")
  })
  
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.all.keys('word')
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word).to.have.property("word");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const noVowel = word.removeVowels();
      
      expect(noVowel).to.equal("Hdkn");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const noConst = word.removeConsonants();

      expect(noConst).to.equal("aoe")
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const piggy = word.pigLatin();

      expect(piggy).to.equal("adokenHay")
    });
  });
});