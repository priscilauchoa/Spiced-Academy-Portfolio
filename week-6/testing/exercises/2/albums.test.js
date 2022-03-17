const { getAlbumNames } = require("./albums");
// const spotify = require("./spotify");

jest.mock("./spotify", () => {
    return {
        search: () => {
            return new Promise((resolve) => {
                resolve({
                    albums: {
                        items: [
                            {
                                name: "Fear Inoculum",
                            },
                        ],
                    },
                });
            });
        },
    };
});

test("album names are in alphabetical order", () => {
    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
