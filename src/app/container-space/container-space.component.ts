import { Component, ElementRef, Input, NgModule, OnInit } from '@angular/core';
import { jsonFile } from '../typings';
import { SharingDataService } from '../sharing-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-container-space',
  templateUrl: './container-space.component.html',
  styleUrls: ['./container-space.component.scss']
})


export class ContainerSpaceComponent implements OnInit {
  question: boolean = false;
  counter: number = -1;
  music: boolean = false;
  index: any;
  rightBox: any;
  falseBox: any;
  count: number = 0;
  questionsNumber: number = -1;
  questionNumber: number = 0;
  countInput: number = 0;
  showNext: boolean = false;
  helpHand: any;
  checkBtn: number = 0;
  chackInput: any;
  guideCheck: boolean = false;
  guideAnwser: boolean = false;
  guidenext: boolean = false;


  constructor(
    private dataService: SharingDataService,
    private router: Router,
    private elementRef: ElementRef
  ) {

  }

  ngOnInit(): void {
    this.nextQuestion();
    this.dataService.setIndex(this.counter);
    this.questionsNumber = this.dataService.getIndex();

    this.maxLength();


  }


  nextQuestion() {
    this.counter += 1;
    this.question = false;
    this.questionsNumber = this.itemJson[0].items.length;
    if (this.questionsNumber != this.counter) {
      this.itemJson[0].items.forEach((element) => {
        element.active = false;
      });
      this.itemJson[0].items[this.counter].active = true;
    }
    // console.log(this.itemJson[0].items)


  }




  maxLength() {
    this.itemJson[0].items.forEach((elem, i) => {
      elem.label_up[0].content.forEach((element) => {

        let mLength = 0;
        if (element.parag == '') {
          this.itemJson[0].numberOfquestion++
          elem.numberOfquestion++
        }
        element.input.valid.forEach((elem: any) => {
          if (mLength < elem.length) {
            mLength = elem.length;
            element.Length = mLength;
          }
        });
      });
    })
    this.itemJson[0].items.forEach((elem, i) => {
      elem.inner_table.forEach((ele) => {
        ele.content.forEach((element) => {
          if (element.parag == '' && !element.line) {
            this.itemJson[0].numberOfquestion++
            elem.numberOfquestion++
          }
          let tLength = 0;
          element.input.valid.forEach((elem: string | any[]) => {

            if (tLength < elem.length) {
              tLength = elem.length;
              element.Length = tLength;
            }
          });
        });
      });
    })
    this.itemJson[0].items.forEach((elem, i) => {
      elem.label_down[0].content.forEach((element) => {
        if (element.parag == '') {
          this.itemJson[0].numberOfquestion++
          elem.numberOfquestion++
        }
        let mLength = 0;
        element.input.valid.forEach((elem: string | any[]) => {
          if (mLength < elem.length) {
            mLength = elem.length;
            element.Length = mLength;
          }
        });
      });
    })



    // console.log("numberOfquestion = " + this.itemJson[0].numberOfquestion)
    setTimeout(() => {
      this.helpHand = document.querySelectorAll('.dataInput .help');
      let count = 0;
      this.helpHand.forEach((el: any) => {
        count++
        if (count != 1) {
          el.classList.remove('help');
        }
      })
    },1);
  }


  itemJson: jsonFile[] = [
    {
      counterCorrect: 0,
      LODegree: null,
      UserDegree: null,
      type: "",
      BloomTargets: [""],
      randomNumber: null,
      loTargets: null,
      numberOfquestion: 0,

      location_value: '',
      items: [
        {
          active: true,
          id: 1,
          counterCorrect: 0,
          numberOfquestion: 0,
          numOfAttempts: 3,
          label_up: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '=',
                }, {
                  parag: '2',
                  Length: 0,
                  input: { valid: ['2'], show: [''] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['3'], show: [''] },
                  marker: '',

                }
              ]
            }

          ],
          inner_table: [
            {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['2'], show: [''] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['3'], show: [''] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'], show: [''] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'], show: [''] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'], show: [''] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'], show: [''] },
                  marker: "-",
                  line: false
                }
              ]
            }
          ], label_down: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '=',
                }, {
                  parag: '2',
                  Length: 0,
                  input: { valid: ['2'], show: [''] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['3'], show: [''] },
                  marker: '',

                }
              ]
            }

          ],
        }, {
          active: false,
          id: 1,
          counterCorrect: 0,
          numberOfquestion: 0,
          numOfAttempts: 3,
          label_up: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['11'], show: [''] },
                  marker: '=',
                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['2'], show: [''] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['33'], show: [''] },
                  marker: '',

                }
              ]
            }

          ],
          inner_table: [
            {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['2'], show: [''] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['3'], show: [''] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'], show: [''] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'], show: [''] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'], show: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'], show: [''] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'], show: [''] },
                  marker: "-",
                  line: false
                }
              ]
            }
          ], label_down: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['1'], show: [''] },
                  marker: '=',
                }, {
                  parag: '2',
                  Length: 0,
                  input: { valid: ['2'], show: [''] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['3'], show: [''] },
                  marker: '',

                }
              ]
            }

          ],
        }
      ],
    },
  ];



  foucs(event: any) {
    // this.clickBtn.play()
    this.itemJson[0].location_value = event.target.getAttribute('location-value')
    event.target.classList.remove('false');
    document.querySelectorAll('.false').forEach((el) => {
      el.classList.remove('false');
    });

    this.helpHand = document.querySelectorAll('.help');
    this.helpHand.forEach((el: any) => {
      el.classList.remove('help');
    })

    // console.log(this.itemJson[0].items)
  }
  foucsOut(event: any) {
    const but = document.querySelectorAll('div .button_check');

    this.checkBtn = 0
    this.chackInput = document.querySelectorAll('input');
    this.chackInput.forEach((elem: any) => {
      elem.value == '' ? this.checkBtn++ : false;
    });

    if (this.checkBtn == 0) {
      this.guideCheck = true;
      but.forEach((elem: any) => {
        elem.classList.add('enable');
      });
      console.log("checkBtn = " + this.checkBtn)
    }
  }

  checkvalue(event: any, element: any) {
    let data_att = event.target.getAttribute('data-index');
    let data_i = event.target.getAttribute('data-i');
    const trueValue = element[this.itemJson[0].location_value][data_i].content[data_att].input.valid[0];
    console.log(trueValue)
    let maxLength = trueValue.length;
    if (event.target.value == null) {
      event.target.classList.add('wrong');
      event.target.classList.remove('right');
      console.log('the value null');
    } else if (event.target.value.length == maxLength) {
      if (event.target.value != trueValue) {
        event.target.classList.remove('right');
        event.target.classList.add('wrong');
        console.log('the value wrong');
      } else {
        event.target.classList.add('right');
        event.target.classList.remove('wrong');
        console.log('the value ture');
      }
    }

  }

  checkanswer() {
    // this.clickBtn.play()
    this.checkBtn = 0
    this.chackInput = document.querySelectorAll('input');
    this.chackInput.forEach((elem: any) => {
      elem.value == '' ? this.checkBtn++ : false;
    });

    if (this.checkBtn == 0) {
      this.guideCheck = false
      this.count = 0;
      this.rightBox = document.querySelectorAll('.active .right');
      this.rightBox.forEach((elem: any) => {
        elem.classList.remove('false');
        elem.classList.add('true');
        this.count += 1;

      });

      this.itemJson[0].items[this.counter].counterCorrect = this.count
      this.itemJson[0].items[this.counter].numOfAttempts--
      this.falseBox = document.querySelectorAll('.active .wrong');

      this.falseBox.forEach((el: any) => {
        el.classList.remove('true');
        el.classList.add('false');

      });

      let input_count = document.querySelectorAll('input').length;

      if (this.count === input_count) {
        setTimeout(() => {
          this.question = true;
        }, 2500);
      }

      // this.itemJson[0].items.filter((el) =>
      //   el.active ? el.content.length === this.count ? (this.rightAnswer.play(), this.feedback = !this.question, setTimeout(() => {
      //     this.question = true;
      //   }, 4000)) : this.wrongAnswer.play() : false
      // );

      // console.log(this.itemJson[0].items);

    }

  }



  home() {
    // this.clickBtn.play()
    location.reload()
  }
  show_anwser(event: any) {
    // console.log(this.showNext)
    this.guideAnwser = false
    this.falseBox = document.querySelectorAll('.active .wrong');
    this.falseBox.forEach((el: any) => {
      el.classList.contains("wrong") ? [el.classList.add('show'), el.value = ''] : console.log();
      this.itemJson[0].items.forEach((elem, i) => {
        elem.label_up.forEach((elementup, i) => {
          elementup.content.forEach((element) => {
            element.input.show = element.input.valid
          });
        });
        elem.inner_table.forEach((elementtable, i) => {
          elementtable.content.forEach((element) => {
            element.input.show = element.input.valid
          });
        });
        elem.label_down.forEach((elementdown, i) => {
          elementdown.content.forEach((element) => {
            element.input.show = element.input.valid
          });
        });
      })
    });
    event.target.classList.add('disable');
  }
  show_next(event: any) {
    event.target.classList.add('disable');
   }

}
