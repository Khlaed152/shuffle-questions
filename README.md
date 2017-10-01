## Shuffle Question .js
![logo](https://s25.postimg.org/nf3d1axu7/if_Button_Shuffle_72916.png "Shuffle Question") `jquery-shuffle-question.js`

---

* **v 1.0**
* [Page Demo](http://shuffle-questions.cf)
* [Download](https://github.com/IonDen/ion.rangeSlider/archive/master.zip)

## Description

* you can design exams by the **switch random** to questions and answers.
* you must write elements html and import file css, js.
* you can create a competition in programming scope, tests intelligence or registration fees in any site.

![](https://s25.postimg.org/fwygh51tb/shuffle.jpg)

## Features

* From of the most important features of this library is that it does not exist in in the same design, quality and may not exist at all.
* Quick responsive.
* Responsive design.
* Easy installation and running.
* Easy modify code js, css and html.
* Easy modify design.
* You can put questions to infinity.
* 3 is Fewer the answers.
* 8 is more the answers.
* You can place the question as a picture and text words.
* also can place the answers as a picture and text words.
* put for each question a number counter you specify by yourself.
* You can set a counter for all questions.
* You can choose a specific number of questions to show to the laboratory and arrange it randomly.
* The number questions selected for the test is shown to the laboratory to know how many other questions it has at the end of the test.
* The correct answers and wrong answers is displayed.
* You can control many things you will know in the explanation, God willing.


## Dependencies

* [jQuery-3.2.1.js](http://jquery.com/download/)

## Usage

Add the following libraries to the page:
* jQuery
* shuffle-questions-1.0.min.js

Add the following stylesheets to the page:
* [normalize.css](http://necolas.github.io/normalize.css/) (optional)
* shuffle-questions-1.0.min.css

## Initialisation

copy these elements in your page without delete any element or class but you can add any element:

```html
    <div class="shuffle-questions">
        <div class="center">
            <button class="button start-time">Start Time</button>
        </div>
        <div class="question">
            <div class="control-data">
                <div class="count-questions">
                    <div class="title">Questions Number</div>
                    <div class="content">
                        <span class="count-all"></span>
                        <span class="count-now"></span>
                    </div>
                </div>
                <div class="count-answers">
                    <div class="correct">
                        <div class="title">
                            <img src="imgs/correct.png"> 
                        </div>
                        <div class="content">0</div>
                    </div>
                    <div class="wrong">
                        <div class="title">
                            <img src="imgs/wrong.png">
                        </div>     
                        <div class="content">0</div>
                    </div>
                </div>
                <div class="time-all-questions">
                    <div class="title">Time All Questions</div>
                    <div class="content"><span class="hours">00</span>:<span class="mins">00</span>:<span class="seconds">00</span></div>
                </div>
                <div class="time-alone-question">
                    <div class="title">Time Question Now</div>
                    <div class="content">
                        <span class="mins">00</span>:<span class="seconds">00</span>
                    </div>
                </div>
            </div> <!-- End Control Data -->
            
            <div class="wrapper-questions">
               
                <div class="viewport-questions"></div> <!-- End Parent Questions -->
                
                <div class="footer-question">
                    <button class="button accept button-large">Confirm</button>
                </div> <!-- End Footer Questions -->
                
            </div> <!-- End Wrapper -->
            
        </div> <!-- End Questions -->
    </div> <!-- End Shuffle Questions -->
```

to installation : 

```js
    var s = 'asd,
        d = 200;    
```
