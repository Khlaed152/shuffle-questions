## shuffle-questions

v 1.0

You can from here >> [Show Demo](http://shuffle-questions.cf/) .

## Description
===============
* this library can you help on shuffle questions for any exam in your site, and also exist many additions, edit in data.
* this library can you help on shuffle questions for any exam in your site, and also exist many additions, edit in data.

> ### this library can you help on shuffle questions for any exam in your site, and also exist many additions, edit in data.
>
> this library can you help on shuffle questions for any exam in your site
> 
> this library can you help on shuffle questions for any **exam** in *your site*.

// comment

`This Is inline`

|Option|Default|Type|Description|
|:-------------:|:-------------:|:-------------:|:---------------------------------------:|
|colorcolorcolor|#F00|string|color text elementselementselementselementselements|

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

```javascript
var questions = [
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111']
];

$('.shuffle-questions').shuffleQuestions({
   questions: questions
});

```

```markdown
1. asd 
2. asdasd 
```


```
1. asd 
2. asdasd 
```

````
1. asd 
2. asdasd 
````

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
+ plus
* bolit
- minus

Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. questions = [
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111'],
  ['ques1 ', 'answer1', 'answer11', 'answer111', 'answer1111']
],
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Khlaed152/shuffle-questions/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact
### Support or Contact
### Support or Contact
### Support or Contact
### Support or Contact
### Support or Contact
Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
