

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'space-lo';
  startLo: boolean = true;
  isPlay = false;
  bgAudio = new Audio()
  sound = new Audio()
  numSound: number = -1
  music: boolean = false
  setInterval: any
  screenClick: number = 0
  getsound!: string;
  sec:any

  ngOnInit() {   console.log(document.querySelectorAll('input').length) }

  start(event: any) {

    this.startLo = false
    this.bgAudio.src = '/assets/audios/music.mp3'
    this.muteMusic()
    setTimeout(() => {
      this.sound.src = '/assets/audios/Q/Q0.mp3'
      this.sound.play()

    }, 1500)
    this.soundPlay()


  }

  soundPlay() {
    this.sound.addEventListener('loadedmetadata', (event) => {

      // console.log(this.sound.duration)
      this.sec=this.sound.duration + 18
      // console.log(Math.floor(this.sec))


    });
    this.setInterval = setInterval(() => {
      this.screenClick += 1
      if (this.screenClick == Math.floor(this.sec)) {
        setTimeout(() => {
          this.sound.src = '/assets/audios/Q/Q0.mp3'
          this.sound.play()
          this.screenClick = 0
        }, 1500)
      }
    }, 1000)
  }
  setclick() {
    clearInterval(this.setInterval)
    this.screenClick = 0
    this.soundPlay()


  }
  muteMusic() {
    this.music = !this.music
    this.bgAudio.loop = true
    this.bgAudio.paused ? this.bgAudio.play() : this.bgAudio.pause()
  }
}



