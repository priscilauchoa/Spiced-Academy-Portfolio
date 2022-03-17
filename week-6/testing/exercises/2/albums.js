const spotify = require("./spotify");

exports.getAlbumNames = function (q) {
    console.log("------->>", spotify);
    return spotify.search(q, "album").then(function (data) {
        const albumNames = [];
        for (var i = 0; i < data.albums.items.length; i++) {
            albumNames.push(data.albums.items[i].name);
        }
        albumNames.sort();
        return albumNames;
    });
};
let name = "Fear of the dark";
let data = {
    albums: {
        items: [
            {
                name: "Hi",
            },
            {
                name: name,
            },
            {
                name,
            }
        ],
    },
};
