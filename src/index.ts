import path from 'path';
import { TpaServer, TpaSession, ViewType } from '@augmentos/sdk';
import { TranscriptProcessor, languageToLocale, convertLineWidth } from './utils';
import { songpicker } from './lyrics';

const PACKAGE_NAME = process.env.PACKAGE_NAME ?? (() => { throw new Error('PACKAGE_NAME is not set in .env file'); })();
const AUGMENTOS_API_KEY = process.env.AUGMENTOS_API_KEY ?? (() => { throw new Error('AUGMENTOS_API_KEY is not set in .env file'); })();
const PORT = parseInt(process.env.PORT || '3000');
const MAX_FINAL_TRANSCRIPTS = 30;
const userTranscriptProcessors: Map<string, TranscriptProcessor> = new Map();

interface lrcSong {
  line: string;
  delay: number;
  position: number;
}




class ExampleAugmentOSApp extends TpaServer {
  private settingsCleanup: Array<() => void> = [];
  private breakSong: boolean = false;
  private globalResolve;

  constructor() {
    super({
      packageName: PACKAGE_NAME,
      apiKey: AUGMENTOS_API_KEY,
      port: PORT,
    });
  }

  private async updateDisplay(message: string, session: TpaSession, msgDuration: number): Promise<void>
  {
    //session.layouts.showTextWall(message, {
    //  view: ViewType.MAIN,
    //  durationMs: msgDuration
    //})
    // ;        
    session.layouts.showReferenceCard(
      `${message}`,
      ``
    );


  }

  private async nextSong(songname: string, session: TpaSession, sessionId: string, userId: string, position: number)
  {
    this.breakSong = false;
    //this.updateDisplay(songname, session, 3000)
    const currSong = songpicker(songname)
        
    for (let x = position; x < currSong.length; x++) {
      if (this.breakSong){
        console.log("this song has been broken");
        break;
      }
      this.updateDisplay(currSong[x].line, session, currSong[x].delay);
      await new Promise (resolve => {
        this.globalResolve = resolve;
        setTimeout(resolve, currSong[x].delay)});
    }
    console.log("the song has ended");


    // Subscribe to language-specific transcription
    //this.handleTranscription(session, sessionId, userId, "This is the first string to show to the user.");
  }

  private async changeSongPos(session: TpaSession, sessionId: string, userId: string, newValue: number)
  {
  
    this.breakSong = true;
    this.globalResolve();
    await new Promise(resolve => {setTimeout(resolve, 2000)})
    this.nextSong(session.settings.get('song_name'), session, sessionId, userId, newValue);
  }

  protected async onSession(session: TpaSession, sessionId: string, userId: string): Promise<void> {
      // Show welcome message
      session.layouts.showTextWall("Lyricshow is Ready!");

        // Listen for setting changes
      session.settings.onValueChange('song_name', (newValue, oldValue) => {
        //console.log(`Song changed from ${oldValue} to ${newValue}`);
        this.nextSong(newValue, session, sessionId, userId, 0);
      });

      // Listen for setting changes
      session.settings.onValueChange('song_pos', (newValue, oldValue) => {
      //console.log(`Song changed from ${oldValue} to ${newValue}`);
        console.log("trying to break the song");
        this.changeSongPos(session, sessionId, userId, newValue);
    });

  }

 
  protected async onStop(sessionId: string, userId: string, reason: string): Promise<void> {
    // Clean up all listeners
    this.settingsCleanup.forEach(cleanup => cleanup());
    this.settingsCleanup = [];


    // Clean up session resources


  }

}

// Start the server
// DEV CONSOLE URL: https://console.augmentos.org/
// Get your webhook URL from ngrok (or whatever public URL you have)
const app = new ExampleAugmentOSApp();

app.start().catch(console.error);