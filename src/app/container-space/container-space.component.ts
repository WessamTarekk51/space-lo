import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
    console.log(this.itemJson[0].items)
  }




  maxLength() {
    this.itemJson[0].items.forEach((elem, i) => {
      elem.label_up[0].content.forEach((element) => {

        let mLength = 0;
        if (element.parag == '') {
          this.itemJson[0].numberOfquestion++
          elem.numberOfquestion++
        }
        element.input.valid.forEach((elem: string | any[]) => {
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
            console.log(tLength)
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



    console.log("numberOfquestion = " + this.itemJson[0].numberOfquestion)

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
          tryCounter: 0,
          label_up: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['1'] },
                  marker: '=',
                }, {
                  parag: '2',
                  Length: 0,
                  input: { valid: ['2'] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['3'] },
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
                  input: { valid: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['1'] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['2'] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['3'] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'] },
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
                  input: { valid: ['1'] },
                  marker: '=',
                }, {
                  parag: '2',
                  Length: 0,
                  input: { valid: ['2'] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['3'] },
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
          tryCounter: 0,
          label_up: [
            {
              content: [
                {
                  parag: '',
                  Length: 0,
                  input: { valid: ['11'] },
                  marker: '=',
                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['2'] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['33'] },
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
                  input: { valid: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['1'] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['2'] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['3'] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'] },
                  marker: "-",
                  line: false
                }
              ]
            }, {
              content: [
                {
                  parag: "350",
                  Length: 0,
                  input: { valid: [''] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['4'] },
                  marker: "−",
                  line: false
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['5'] },
                  marker: "-",
                  line: true
                }, {
                  parag: "",
                  Length: 0,
                  input: { valid: ['6'] },
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
                  input: { valid: ['1'] },
                  marker: '=',
                }, {
                  parag: '2',
                  Length: 0,
                  input: { valid: ['2'] },
                  marker: '÷',

                }, {
                  parag: '',
                  Length: 0,
                  input: { valid: ['3'] },
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
    console.log(event.target.getAttribute('location-value'))
    event.target.classList.remove('false');
    document.querySelectorAll('.false').forEach((el) => {
      el.classList.remove('false');
    });
    console.log(this.itemJson[0].items)
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
    this.count = 0;
    this.rightBox = document.querySelectorAll('.active .right');
    this.rightBox.forEach((elem: any) => {
      elem.classList.remove('false');
      elem.classList.add('true');
      this.count += 1;

    });

    this.itemJson[0].items[this.counter].counterCorrect = this.count
    this.itemJson[0].items[this.counter].tryCounter++


    this.falseBox = document.querySelectorAll('.active .wrong');
    this.falseBox.forEach((el: any) => {
      el.classList.remove('true');
      el.classList.add('false');
      if(this.itemJson[0].items[this.counter].tryCounter == 2){
        el.classList.add('show');

        // this.itemJson[0].items.forEach((elem, i) => {
        //   elem.label_up[0].content.forEach((element) => {

        //     let mLength = 0;
        //     if (element.parag == '') {
        //       this.itemJson[0].numberOfquestion++
        //       elem.numberOfquestion++
        //     }
        //     element.input.valid.forEach((elem: string | any[]) => {
        //       if (mLength < elem.length) {
        //         mLength = elem.length;
        //         element.Length = mLength;
        //       }
        //     });
        //   });
        // })


      }


    });


    let input_count = document.querySelectorAll('input').length;
    console.log(this.count);
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

    console.log(this.itemJson[0].items);
  }



  home() {
    // this.clickBtn.play()
    location.reload()
  }
  show_anwser() {

  }

}
