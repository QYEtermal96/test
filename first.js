describe("Word Frequency",function() {
    it("returns emputy string given empty string", function () {
        var result = main('');
        expect(result).toEqual('');
    });

    it("returns string given one word", function () {
        var result = main('he');
        expect(result).toEqual('he 1');
    });

    it("returns string given two different words", function () {
        var result = main('he is');
        expect(result).toEqual('he 1\r\nis 1');
    });

    it("returns string given duplicated words", function () {
        var result = main('he is he');
        expect(result).toEqual('he 2\r\nis 1');
    });

    it("returns string given duplicated words need to be sorted", function () {
        var result = main('he is is');
        expect(result).toEqual('is 2\r\nhe 1');
    });

    it("returns string given  words splited by multiple spaces", function () {
        var result = main('he      is');
        expect(result).toEqual('he 1\r\nis 1');
    });

    it("test",function () {
        var result = main ('it was the age of wisdom it was the age of foolishness it is');
        document.write(result);
    })
});
