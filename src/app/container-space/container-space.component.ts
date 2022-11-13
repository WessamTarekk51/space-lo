import { Component, ElementRef, Input, NgModule, OnInit } from '@angular/core'
import { jsonFile } from '../typings'
import { SharingDataService } from '../sharing-data.service'
import { Router } from '@angular/router'
import { IfStmt } from '@angular/compiler'
@Component({
  selector: 'app-container-space',
  templateUrl: './container-space.component.html',
  styleUrls: ['./container-space.component.scss', '../app.component.scss'],
})
export class ContainerSpaceComponent implements OnInit {
  question: boolean = false
  counter: number = -1
  music: boolean = false
  index: any
  rightBox: any
  falseBox: any
  count: number = 0
  questionsNumber: number = -1
  questionNumber: number = 0
  countInput: number = 0
  showNext: boolean = false
  helpHand: any
  numOfAttempts: number = 0

  chackInput: any
  guideCheck: boolean = false
  guideAnwser: boolean = false
  guidenext: boolean = false
  arr: any

  title = 'space-lo'
  startLo: boolean = true
  isPlay = false
  bgAudio = new Audio()
  sound = new Audio()
  numSound: number = -1
  checkBtn: number = 0

  setInterval: any
  screenClick: number = 0
  getsound!: string
  sec: any

  rightAnswer = new Audio()
  wrongAnswer = new Audio()
  clickBtn = new Audio()
  click:boolean = false
  btCheck: any
  btAnswer: any
  btNext: any

  checkhand: boolean = false
  answerhand: boolean = false
  nexthand: boolean = false
  b: any

  constructor(
    private dataService: SharingDataService,
    private router: Router,
    private elementRef: ElementRef,
  ) {}
  itemJson: jsonFile[] = [
    {
      counterCorrect: 0,
      LODegree: null,
      UserDegree: null,
      type: '',
      BloomTargets: [''],
      randomNumber: null,
      loTargets: null,
      numberOfquestion: 0,

      location_value: '',
      items: [
        {
          active: false,
          id: 1,
          counterCorrect: 0,
          numberOfquestion: 0,
          numOfAttempts: 0,
          label_up: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['11','121' , '1'], show: [''] },
                  marker: '÷',
                },
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '=',
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '',
                },
              ],
            },
          ],
          inner_table: [
            {
              content: [
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '−',
                  line: false,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '−',
                  line: false,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '-',
                  line: true,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '-',
                  line: false,
                },
              ],
            },
            {
              content: [
                {
                  parag: '350',
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: '−',
                  line: false,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '−',
                  line: false,
                },
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '-',
                  line: true,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '-',
                  line: false,
                },
              ],
            },
            {
              content: [
                {
                  parag: '350',
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: '−',
                  line: false,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '−',
                  line: false,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '-',
                  line: true,
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '-',
                  line: false,
                },
              ],
            },
          ],
          label_down: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '=',
                },
                {
                  parag: '2',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '÷',
                },
                {
                  parag: '1',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '',
                },
              ],
            },
          ],
        }
      ],
    },
  ]
  ngOnInit(): void {
    this.generateLo()
    this.dataService.setIndex(this.counter)
    this.questionsNumber = this.dataService.getIndex()
    this.wrongAnswer.src = '/assets/audios/WrongAnswer.mp3'
    this.rightAnswer.src = '/assets/audios/RightAnswer.mp3'
  }

  start(event: any) {
    this.b = document.querySelectorAll('.active')
    console.log(this.b)
    // this.b[0]?.classList.remove('container-space')

    // this.b[0]?.classList.add('disply-flex')

    this.startLo = false
    this.bgAudio.src = '/assets/audios/music.mp3'
    this.muteMusic()
    setTimeout(() => {
      this.sound.src =
      '/assets/audios/Q/Q' + this.itemJson[0].items[this.counter].id + '.mp3'
      this.sound.play()
    }, 1500)
    this.soundPlay()
    let count = 0
    setTimeout(() => {
      this.helpHand = document.querySelectorAll('.help')
      this.helpHand.forEach((el: any) => {
        count++
        console.log('count = ' + count)
        if (count != 1) {
          el.classList.remove('help')
        }
      })
    })
  }

  soundPlay() {
    console.log("this.counter"+this.counter)
    this.sound.addEventListener('loadedmetadata', (event) => {
      // console.log(this.sound.duration)
      this.sec = this.sound.duration + 18
      // console.log(Math.floor(this.sec))
    })
    this.setInterval = setInterval(() => {
      this.screenClick += 1
      if (this.screenClick == Math.floor(this.sec)) {
        setTimeout(() => {
          // this.sound.src = '/assets/audios/Q/Q0.mp3'
          this.sound.src =
          '/assets/audios/Q/Q' + this.itemJson[0].items[this.counter].id + '.mp3'
          this.sound.play()
          this.screenClick = 0
        }, 1500)
      }
    }, 1000)
  }
  setclick() {
    console.log('ssssss')
    console.log(this.sound)
    this.sound.pause()
    this.sound.currentTime = 0
    clearInterval(this.setInterval)
    this.screenClick = 0
    if(this.click == false  ){
      this.soundPlay()
    }
  }
  muteMusic() {
    this.music = !this.music
    this.bgAudio.loop = true
    this.bgAudio.paused ? this.bgAudio.play() : this.bgAudio.pause()
  }
  //

  generateLo() {
    this.checkhand = false
    this.arr = this.shuffle(this.itemJson[0].items)
    this.itemJson[0].items = this.arr
    this.nextQuestion()
    this.maxLength()
    this.btCheck = document.getElementsByClassName('button_check')
    this.btAnswer = document.getElementsByClassName('show_anwser')
    this.btNext = document.getElementsByClassName('show_next')
  }
  shuffle(a: any[]) {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }

  nextQuestion() {
    this.counter += 1
    this.question = false
    this.click=false

    this.questionsNumber = this.itemJson[0].items.length
    if (this.questionsNumber != this.counter) {
      this.itemJson[0].items.forEach((element) => {
        element.active = false
      })
      this.itemJson[0].items[this.counter].active = true
    }
    console.log(this.arr)

    setTimeout(() => {
      this.helpHand = document.querySelectorAll('.help')
      this.helpHand.forEach((el: any) => {
        el.classList.remove('false')
      })
    },100)
  }

  maxLength() {
    this.itemJson[0].items.forEach((elem, i) => {
      elem.label_up[0].content.forEach((element) => {
        let mLength = 0
        if (element.parag == '') {
          this.itemJson[0].numberOfquestion++
          elem.numberOfquestion++
        }
        element.input.valid.forEach((elem: any) => {
          if (mLength < elem.length) {
            mLength = elem.length
            element.Length = mLength
          }
        })
      })
    })
    this.itemJson[0].items.forEach((elem, i) => {
      elem.inner_table.forEach((ele) => {
        ele.content.forEach((element) => {
          if (element.parag == '' && !element.line) {
            this.itemJson[0].numberOfquestion++
            elem.numberOfquestion++
          }
          let tLength = 0
          element.input.valid.forEach((elem: string | any[]) => {
            if (tLength < elem.length) {
              tLength = elem.length
              element.Length = tLength
            }
          })
        })
      })
    })
    this.itemJson[0].items.forEach((elem, i) => {
      elem.label_down[0].content.forEach((element) => {
        if (element.parag == '') {
          this.itemJson[0].numberOfquestion++
          elem.numberOfquestion++
        }
        let mLength = 0
        element.input.valid.forEach((elem: string | any[]) => {
          if (mLength < elem.length) {
            mLength = elem.length
            element.Length = mLength
          }
        })
      })
    })

    // console.log("numberOfquestion = " + this.itemJson[0].numberOfquestion)
  }

  foucs(event: any) {
    // this.clickBtn.play()
    this.clickBtn.src = '/assets/audios/click_btn.mp3'
    console.log(this.click)
    this.clickBtn.play()
    this.itemJson[0].location_value = event.target.getAttribute(
      'location-value',
    )
    event.target.classList.remove('false')
    document.querySelectorAll('.false').forEach((el) => {
      el.classList.remove('false')
    })

    this.helpHand = document.querySelectorAll('.help')
    this.helpHand.forEach((el: any) => {
      el.classList.remove('help')
    })

    // console.log(this.itemJson[0].items)
  }
  foucsOut(event: any) {
    const but = document.querySelectorAll('div .button_check')
    this.numOfAttempts = 0
    this.chackInput = document.querySelectorAll('input')
    this.chackInput.forEach((elem: any) => {
      elem.value == '' ? this.numOfAttempts++ : false
    })

    if (this.numOfAttempts == 0) {
      this.guideCheck = true
      this.checkhand = true
      but.forEach((elem: any) => {
        elem.classList.add('enable')
      })
      console.log('numOfAttempts = ' + this.numOfAttempts)
    }
    else{

        but.forEach((elem: any) => {
          elem.classList.remove('enable')
        })
        this.checkhand = false

    }
  }

  checkvalue(event: any, element: any) {

    let data_att = event.target.getAttribute('data-index')
    let data_i = event.target.getAttribute('data-i')
    for (const el of element[this.itemJson[0].location_value][data_i].content[
      data_att
    ].input.valid) {
      console.log('el = ' + el)
      let maxLength = el.length
      if (el === event.target.value) {
        console.log(el)
        console.log(event.target.value)

        event.target.classList.add('right')
        event.target.classList.remove('wrong')
        break
      } else {
        event.target.classList.remove('right')
        event.target.classList.add('wrong')
      }
    }

  }

  checkanswer() {
    this.checkhand = false
    this.itemJson[0].items.forEach((el) => {
      if (el.active) {
        this.numOfAttempts += 1
        console.log('hi')
        el.numOfAttempts = this.numOfAttempts
        el.counterCorrect = document.querySelectorAll('.active .right').length
        console.log('num of numOfAttempts' + this.numOfAttempts)
        // this.content = el.content
      }
    })
    this.clickBtn.src = '/assets/audios/click_btn.mp3'
    this.clickBtn.play()
    this.rightBox = document.querySelectorAll('.active .right')
    this.rightBox.forEach((elem: any) => {
      elem.classList.remove('false')
      elem.classList.add('true')
      this.count += 1
    })
    this.falseBox = document.querySelectorAll('.active .wrong')

    this.falseBox.forEach((elem: any) => {
      elem.classList.remove('true')
      elem.classList.add('false')
    })

    if (this.falseBox.length === 0) {
    this.numOfAttempts -= 1
      this.rightAnswer.play()
      this.question = true
      this.click= true
      // this.btCheck[0]?.classList.add('pointer-none')
    } else {
      if (this.numOfAttempts == 1) {
        this.wrongAnswer.play()
      }
      if (this.numOfAttempts == 2) {
        this.wrongAnswer.play()
        this.btCheck[0]?.classList.remove('enable')
        this.answerhand = true
        this.btAnswer[0]?.classList.add('enable')
      }
    }
  }

  show_anwser(event: any) {
    // console.log(this.showNext)
    this.answerhand = false
    this.nexthand = true
    this.click = true


    this.btAnswer[0]?.classList.remove('enable')
    this.btNext[0]?.classList.add('enable')

    this.falseBox = document.querySelectorAll('.active .wrong')
    this.falseBox.forEach((el: any) => {
      el.classList.contains('wrong')
        ? [el.classList.add('show'), (el.value = '')]
        : console.log()

      this.itemJson[0].items.forEach((elem, i) => {
        if(elem.active){
        elem.label_up.forEach((elementup, i) => {
          elementup.content.forEach((element) => {
            element.input.show = element.input.valid[0]
          })
        })
        elem.inner_table.forEach((elementtable, i) => {
          elementtable.content.forEach((element) => {
            element.input.show = element.input.valid[0]
          })
        })
        elem.label_down.forEach((elementdown, i) => {
          elementdown.content.forEach((element) => {
            element.input.show = element.input.valid[0]
          })
        })
      }
      })
    })
    event.target.classList.add('disable')
  }
  home() {
    // this.clickBtn.play()
    location.reload()
  }

  setupdate(event: any) {
    const but = document.querySelectorAll('div .button_check')

    this.checkBtn = 0
    this.chackInput = document.querySelectorAll('input')
    this.chackInput.forEach((elem: any) => {
      elem.value == '' ? this.checkBtn++ : false
    })

    if (this.checkBtn == 0) {
      this.guideCheck = true

      but.forEach((elem: any) => {
        elem.classList.add('enable')
      })
      console.log('checkBtn = ' + this.checkBtn)
    }

  }

  show_next() {
    this.nexthand = false
    this.question = true
  }
}
