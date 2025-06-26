
interface lrcSong {
    line: string;
    delay: number;
    position: number;
  }

export function songpicker(songname: string): lrcSong[] {
    switch (songname) {
        case "ink_savages":

        let song = [
            { line: `       We are the savages`, delay: 2050, position: 1.2},
            { line: `       Eating you alive`, delay: 1980, position: 2.3},
            { line: `       The original \n`, delay: 1680, position: 3.2},
            { line: `   Villains in the night \n`, delay: 1820, position: 4.3},
            { line: `   Nowhere to run, nowhere to hide \n`, delay: 3320, position: 6.2},
            { line: `   We are the savages, we are the savages \n`, delay: 4300, position: 8.6},
            { line: ` \n`, delay: 6290, position: 12.2},
            { line: `   Out on the cringe of society's where we lie \n`, delay: 3420, position: 14.1},
            { line: `   'Cause we're lethal liabilities 'til we die \n`, delay: 3870, position: 16.3},
            { line: `   Won't heed the call of the law, won't follow the pack \n`, delay: 3480, position: 18.3},
            { line: `   Because the sound of the saw is our soundtrack \n`, delay: 4150, position: 20.6},
            { line: `   Hey, hey, hey \n`, delay: 2210, position: 21.9},
            { line: `   This is our battle call \n`, delay: 1920, position: 23},
            { line: `   (Mess with the horns and you get the devil) \n`, delay: 3450, position: 24.9},
            { line: `   Hey, hey, hey \n`, delay: 1910, position: 26},
            { line: `   You're not invincible \n`, delay: 1930, position: 27.1},
            { line: `   (Mess with the horns and you get the devil) \n`, delay: 3760, position: 29.2},
            { line: `   We are the savages \n`, delay: 1840, position: 30.3},
            { line: `   Eating you alive \n`, delay: 1980, position: 31.4},
            { line: `   The original \n`, delay: 1550, position: 32.3},
            { line: ` Villains in the night \n`, delay: 1840, position: 33.3},
            { line: ` Nowhere to run, nowhere to hide \n`, delay: 3720, position: 35.4},
            { line: ` We are the savages, we are the savages \n`, delay: 10190, position: 41.2},
            { line: ` Along the cringe of society is where we lie \n`, delay: 3710, position: 43.3},
            { line: ` We're lethal liabilities 'til we die \n`, delay: 3580, position: 45.3},
            { line: ` Stay at your side of the tracks if you know what's good \n`, delay: 3730, position: 47.5},
            { line: ` 'Cause you won't make it out of our neighbourhood \n`, delay: 4040, position: 49.7},
            { line: ` Hey, hey, hey \n`, delay: 2120, position: 50.9},
            { line: ` This is our battle call \n`, delay: 1880, position: 52},
            { line: ` (Mess with the horns and you get the devil) \n`, delay: 3400, position: 53.9},
            { line: ` Hey, hey, hey \n`, delay: 2070, position: 55.1},
            { line: ` You're not invincible \n`, delay: 1890, position: 56.2},
            { line: ` (Mess with the horns and you get the devil) \n`, delay: 3650, position: 58.3},
            { line: ` We are the savages \n`, delay: 1850, position: 59.3},
            { line: ` Eating you alive \n`, delay: 1870, position: 60.4},
            { line: ` The original \n`, delay: 1980, position: 61.5},
            { line: ` Villains in the night \n`, delay: 1660, position: 62.4},
            { line: ` Nowhere to run, nowhere to hide \n`, delay: 3270, position: 64.3},
            { line: ` We are the savages, we are the savages \n`, delay: 4540, position: 66.9},
            { line: ` \n`, delay: 14160, position: 74.9},
            { line: ` We are the savages \n`, delay: 1920, position: 76},
            { line: ` Eating you alive \n`, delay: 1940, position: 77.1},
            { line: ` The original \n`, delay: 1660, position: 78},
            { line: ` Villains in the night \n`, delay: 1840, position: 79.1},
            { line: ` Nowhere to run, nowhere to hide \n`, delay: 3470, position: 81},
            { line: ` We are the savages, we are the savages \n`, delay: 3890, position: 83.2},
            { line: ` We are the savages \n`, delay: 1960, position: 84.3},
            { line: ` Eating you alive \n`, delay: 1890, position: 85.4},
            { line: ` The original \n`, delay: 1760, position: 86.4},
            { line: ` Villains in the night \n`, delay: 1690, position: 87.4},
            { line: ` Nowhere to run, nowhere to hide \n`, delay: 3580, position: 89.4},
            { line: ` We are the savages, we are the savages \n`, delay: 3720, position: 91.5},
            { line: ` Hey, hey, hey \n`, delay: 1820, position: 92.5},
            { line: ` This is our battle call \n`, delay: 1790, position: 93.6},
            { line: ` (Mess with the horns and you get the devil) \n`, delay: 3500, position: 95.5},
            { line: ` Hey, hey, hey \n`, delay: 2050, position: 96.7},
            { line: ` You're not invincible \n`, delay: 1860, position: 97.8},
            { line: ` (Mess with the horns and you get the devil) \n`, delay: 3940, position: 100},
            
        ]

        return song;



        
        default:
        return [{line: "none", delay: 1, position: 1}];
        }
}