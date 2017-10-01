## Shuffle Questions

![logo](https://s25.postimg.org/nf3d1axu7/if_Button_Shuffle_72916.png "Shuffle Question") `shuffle-questions.js`

---

* **v 1.0**
* [Page Demo](http://shuffle-questions.cf)
* [Download](https://github.com/Khlaed152/shuffle-questions/archive/master.zip)

## Description

* you can design exams by the **switch random** to questions and answers.
* you must type elements html and import file css, js.
* you can create a competition in programming scope, tests intelligence or registration fees in any site.
* There is no recurring question.
* Random mixing for answers so that each time the answer comes in a different place.
* At the end of the test, you can get the laboratory data, how much a correct answer, the time it took to answer the questions, how many questions were answered, and so on.

[![](https://s25.postimg.org/fwygh51tb/shuffle.jpg)](http://shuffle-questions.cf "Show Demo")

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
    var myQuestions = [
        ['Question 1 ?', 'answer 1', 'answer 11', 'answer 111', 'answer 1111', 'answer 11111'],
        ['Question 2 ?', 'answer 2', 'answer 22', 'answer 222', 'answer 2222', 'answer 22222'],
        ['Question 3 ?', 'answer 3', 'answer 33', 'answer 333', 'answer 3333', 'answer 33333'],
        ['Question 4 ?', 'answer 4', 'answer 44', 'answer 444', 'answer 4444', 'answer 44444'],
        ['Question 5 ?', 'answer 5', 'answer 55', 'answer 555', 'answer 5555', 'answer 55555']
    ];
    
    $('.shuffle-questions').shuffleQuestions({
        questions: myQuestions,
        questionAmount: 2, // number
        timeOneQuestion: 20 // Calculated is seconds
        // Return Function For Show Result Test
        
        done: function () { // call back after finish all question
            var countCorrent = $('.shuffle-questions').countCorrect(),
                countWrong = $('.shuffle-questions').countWrong(),
                timetaken = $('.shuffle-questions').timeTaken();
            
            // Also you can Send These Result by Ajax or show any place you specify
            console.log('Correct Answer : ' + countCorrent);
            console.log('Wrong Answer : ' + countWrong);
            console.log('Time Taken : ' + timetaken);
        },
    });
```

# Important note:

```markdown
1. you must be placed the question in index 0 in each array.
2. you must be placed the correct answer in index 1 in each array.
3. You must type at least three questions.
4. `questionAmount: 2` Also this value should not be less than 2.
5. you can start time by click any buttons containing a class (start time) inside the large class (shuffle-questions).
6. It should not be a recurring question with the same formula.
```

## Settings

| Option | Default | Type | Description |
|:--------:|:--------:|:--------:|:--------:|
| `questions` | `null` | array | This matrix is specific to the questions and has an example at the top |
|` questionAmount` | `null` | number | write number questions to show in desplay but you can't type less than 2 |
|` timeOneQuestion` | `15` | number | Time for every One Question and calculated time in seconds |
|` timeAllQuestions` | `null` | number | Time for all Questions and calculated time in seconds |
|` btnAccept` | `true` | boolean | if this value is true show button confirm and if value is false hide button confirm and is answer automatic |
|` delayAfterAnswer` | `500` | number | Waiting time after answer until another question comes, Calculated is milliseconds |
|` smoothSlide` | `fade` | string | mode locomotion between questions |
|` durationEffect` | `400` | number | locomotion duration  between questions, Calculated is milliseconds |
|` callBackQues` | `null` | function | Call back function after answer for each question |
|` finishTime` | `null` | function | after the test is complete you can do anything rather than show the end element |
|` done` | `null` | function |  Call back function after answer for each question |
|` textStart` | `Click Start Time To Start` | string | Text element starting |
|` textEnd` | `The Test Finished` | string | Text element ending |

### Note: 
> if you make option `timeAllQuestions`: 'default' <br>
> well this value is `timeOneQuestion` * `questionAmount`


##### `example:`
```javascript
$('.shuffle-questions').shuffleQuestions({
    timeOneQuestion: 10, // 15s every question
    questionAmount: 4 // you choose four questions
    timeAllQuestions: 'default' // == 40s time full test
});
```

## Examples on how to write the questions:

    This example is exist in the [Demo](http://shuffle-questions.cf).

```javascript
    var myQuestion = [
        // Normal Question !
        
        ['Question 1 ?', 'answer 1', 'answer 11', 'answer 111', 'answer 1111'],
        ['Question 2 ?', 'answer 2', 'answer 22', 'answer 222', 'answer 2222'],
        
        // Put a image before and after answers !

        ['Question 3 ? <img src="imgs/img02.jpg">', 'answer 3 <img src="imgs/img01.jpg">', 'answer 33 <img src="imgs/img02.jpg">', 'answer 333 <img src="imgs/img03.jpg">', 'answer 3333 <img src="imgs/img04.jpg">'],
        ['Question 4 ? <img src="imgs/img03.jpg">', '<img src="imgs/img01.jpg"> answer 4', '<img src="imgs/img02.jpg"> answer 44', '<img src="imgs/img03.jpg"> answer 444', '<img src="imgs/img04.jpg"> answer 4444'],
        
        // Put a image in question before text!
        
        ['<img src="imgs/img03.jpg"> Question 5 ?', 'answer 5', 'answer 55', 'answer 555', 'answer 5555'],
        ['<img src="imgs/img04.jpg"> Question 6 ?', 'answer 6', 'answer 66', 'answer 666', 'answer 6666'],
        
        // Put a image in question after text !
        
        ['<img src="imgs/img01.jpg"> Question 7 ?', '<img src="imgs/img01.jpg">', '<img src="imgs/img02.jpg">', '<img src="imgs/img03.jpg">', '<img src="imgs/img04.jpg">'],
        ['<img src="imgs/img04.jpg"> Question 8 ?', '<img src="imgs/img01.jpg">', '<img src="imgs/img02.jpg">', '<img src="imgs/img03.jpg">', '<img src="imgs/img04.jpg">'],
        
        // Put a image in answers, Normal question
        
        ['Question 9 ?', '<img src="imgs/img01.jpg">', '<img src="imgs/img02.jpg">', '<img src="imgs/img03.jpg">', '<img src="imgs/img04.jpg">'],
        ['Question 10 ?', '<img src="imgs/img01.jpg">', '<img src="imgs/img02.jpg">', '<img src="imgs/img03.jpg">', '<img src="imgs/img04.jpg">'],
        
        // put a image in question only, normal answers
        
        ['<img src="imgs/img01.jpg">', 'answer 11', 'answer 11 11', 'answer 11 11 11', 'answer 11 11 11 11'],
        ['<img src="imgs/img04.jpg">', 'answer 12', 'answer 12 12', 'answer 12 12 12', 'answer 12 12 12 12']
    ];
```
---

## Feedback
`Gmail :` [khaled.sharaf152.gmail.com](mailto:khaled.sharaf152.gmail.com) <br><br>
`Facebook :` [Khaled M Sharaf El Din](https://www.facebook.com/khaled.sharaf152)

---
