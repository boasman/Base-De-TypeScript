interface AudioPlayer{
    audioVolume: number, 
    songDuration: number,
    song: string, 
    details: Details
}

interface Details{
    author: string, 
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// const song = "New Son";

// const {
//     song: anotherSong, 
//     songDuration: duration,
//     details:{author: author2}
// } =  audioPlayer;

// const { song: anotherSong1,  songDuration: duration1, details} =  audioPlayer;

// const {author: author3, year: year}  = details


// const{author: author, year: year} =  audioPlayer.details
// const{author: author, year: year} =  details

// console.log("Songs:", anotherSong);
// console.log("Duration:", duration);
// console.log("Author:", author3);
// console.log("Author2:", author2);
// console.log("Year:", year);

const dbz: string[] = ['Goku', 'Vegeta']
// const  trunks = dbz[3] || 'Personaje no encontrado';

const [ , , trunks = 'Not found'] =  dbz

// console.log(dbz[2]);

console.error("Personaje 3", trunks);