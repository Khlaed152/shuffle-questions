(function ($) {
    $.fn.shuffleQuestions = function (options) {
        var settings = $.extend({
            smoothSlide: 'fade',
            durationEffect: 400,
            questionAmount: 2,
            questions: null,
            btnAccept: true,
            delayAfterAnswer: 500,
            callBackQues: null,
            finishTime: null,
            showResult: null,
            timeOneQuestion: 15,
            timeAllQuestions: null,
            textStart: 'Click Start Time To Start',
            textEnd: 'The Test Finished'
        }, options);
        
        return this.each(function () {
            
            var countAllQuestions = 0,
                countAnswerCorrect = 0,
                countAnswerWrong = 0,
                elementCountAnswerCorrect = $('.shuffle-questions .count-answers .correct .content'),
                elementCountAnswerWrong = $('.shuffle-questions .count-answers .wrong .content'),
                elementMinsAloneQues = $('.shuffle-questions .time-alone-question .content .mins'),
                elementSecAloneQues = $('.shuffle-questions .time-alone-question .content .seconds'),
                elementHoursAllQues = $('.shuffle-questions .time-all-questions .content .hours'),
                elementMinsAllQues = $('.shuffle-questions .time-all-questions .content .mins'),
                elementSecAllQues = $('.shuffle-questions .time-all-questions .content .seconds'),
                returnCountCorrect = 0,
                returnCountWrong = 0,
                hours,
                mins,
                seconds,
                intervalCountDownAll,
                timeAllQues = settings.timeAllQuestions,
                intervalCountDown,
                timeDown = settings.timeOneQuestion,
                viewPortPatrent = document.querySelector('.shuffle-questions .viewport-questions');
            
            // Create Background Start
            var backgroundStart = document.createElement('div'),
                backgroundEnd;
            backgroundStart.className = 'starting';
            backgroundStart.innerHTML = settings.textStart;
            viewPortPatrent.appendChild(backgroundStart);
            
            
            function createTime(yourTimeWithSeconds) {
                hours = Math.floor((yourTimeWithSeconds / 60) /60);
                mins = Math.floor((yourTimeWithSeconds / 60) % 60);
                seconds = Math.floor(yourTimeWithSeconds % 60);
                if (hours < 10) { hours = '0' + hours; }
                if (mins < 10) { mins = '0' + mins; }
                if (seconds < 10) { seconds = '0' + seconds; }
            }
            
            /* Start Count Down
            ************************************************************/
            function countDown() {
                intervalCountDown = setInterval(function () {
                    createTime(timeDown);
                    elementMinsAloneQues.html(mins);
                    elementSecAloneQues.html(seconds);
                    if (timeDown !== 0) {
                        timeDown--;
                    } else {
                        confirm(); 
                    }
                }, 1000);
            }
            function endCountDown() {
                clearInterval(intervalCountDown);
            }
            function countDownAll() {
                intervalCountDownAll = setInterval(function () {
                    createTime(timeAllQues);
                    elementHoursAllQues.html(hours);
                    elementMinsAllQues.html(mins);
                    elementSecAllQues.html(seconds);
                    if (timeAllQues !== 0) {
                        timeAllQues--;
                    } else { done(); }
                }, 1000);
            }
            function endCountDownAll() {
                clearInterval(intervalCountDownAll);
            }
            if (settings.timeAllQuestions == null) {
                $('.shuffle-questions .time-all-questions').remove();
            }
            function addResultCountAnswer() {
                elementCountAnswerCorrect.html(countAnswerCorrect);
                elementCountAnswerWrong.html(countAnswerWrong);
            }
            
            function autoResize(ele, screenLarge, screenMedium, screenSmall) {
                var childrens = ele.children(),
                    lenChildrens = childrens.length,
                    width = 100 / screenLarge,
                    mq_992 = window.matchMedia('(max-width: 992px)'),
                    mq_600 = window.matchMedia('(max-width: 600px)');
                if (screenLarge == '') {
                    width = 100 / lenChildrens;
                }
                if (mq_600.matches) {
                    if (screenSmall == '') {
                        width = 100;
                    } else {
                        width = 100 / screenSmall;
                    }
                } else if (mq_992.matches) {
                    if (screenMedium == '') {
                        width = 100 / lenChildrens * 2;
                    } else {
                        width = 100 / screenMedium;
                    }
                } 
                childrens.css("width", width + '%');
            }
            
            function shuffleQuesAndAnswer() {
                var questions = [],
                    myQuesHTML = [],
                    answerHTML,
                    questionsUser = settings.questions;

                for (var l = 0; l < questionsUser.length; l++) {
                    var quesHTML = `<div class="question-text"> <h3 class="text">${questionsUser[l][0]}</h3> </div> <div class="answers">`;
                    if (questionsUser[l].length >= 4) {
                        answerHTML = `<div class="answer click"><span title="Click For Choose Answer">${questionsUser[l][1]}</span></div>
                                      <div class="answer click"><span title="Click For Choose Answer">${questionsUser[l][2]}</span></div>
                                      <div class="answer click"><span title="Click For Choose Answer">${questionsUser[l][3]}</span></div>`;
                    }
                    if (questionsUser[l].length >= 5) {
                        answerHTML += `<div class="answer click"><span title="Click For Choose Answer">${questionsUser[l][4]}</span></div>`;
                    }
                    if (questionsUser[l].length >= 6) {
                        answerHTML += `<div class="answer click"><span title="Click For Choose Answer">${questionsUser[l][5]}</span></div>`;
                    }
                    if (questionsUser[l].length >= 7) {
                        answerHTML += `<div class="answer click"><span title="Click For Choose Answer">${questionsUser[l][6]}</span></div>`;
                    }
                    if (questionsUser[l].length >= 8) {
                        answerHTML += `<div class="answer click"><span title="Click For Choose Answer">${questionsUser[l][7]}</span></div>`;
                    }
                    var arrHTML = quesHTML + answerHTML + '</div>';
                    myQuesHTML.push(arrHTML.split(','));
                    questions.push(myQuesHTML[l].join(''));
                }

                var display,
                    viewport,
                    questionTracker = [],
                    arr = [],
                    questionAmount = settings.questionAmount + 1,
                    slideAmount = settings.questionAmount + 1,
                    randomQuestion,
                    answerRandom,
                    questionRandom,
                    answerArray = [];

                function createSlides() {
                    for (var num = 0; num < slideAmount; num++) {
                        var slide = document.createElement('div');
                        viewPortPatrent.appendChild(slide);
                        slide.className = 'slide';
                    }
                    viewport = document.querySelectorAll('.shuffle-questions .viewport-questions .slide');
                    viewport[0].style.display = 'none';
                    viewport[1].classList.add('now');
                }
                createSlides();

                function shuffleAnswerInLoop() {
                    var parentAnswers = $(".shuffle-questions .viewport-questions .answers");

                    function fillArray(arr, content) {
                        for (var x = 0; x < content.length; x = x + 1) {
                            arr[x] = content.eq(x).html();
                        }
                    }
                    function shuffle(arr) {
                        for (var r = arr.length; r; r = r - 1) {
                            questionRandom = Math.floor(Math.random() * r);
                            //es6
                            //[arr[r - 1], arr[questionRandom]] = [arr[questionRandom], arr[r - 1]];
                            //es5
                            var temp = arr[r - 1];
                            arr[r - 1] = arr[questionRandom];
                            arr[questionRandom] = temp;
                        }
                    }
                    function fillContent(arr, content) {
                        for (var y = 0; y < content.length; y = y + 1) {
                            content.eq(y).html(arr[y]);
                        }
                    }
                    function addContentInElement() {
                        parentAnswers.each(function () {
                            fillArray(answerArray, $(this).find('.answer'));
                            shuffle(answerArray);
                            fillContent(answerArray, $(this).find('.answer'));
                        });
                    }
                    /* End Start Function Shuffle Answers */
                    addContentInElement();
                }

                // If the current random number already exists in the tracker, return true
                function existingQuestions() {
                    for (var i = 0; i < questionTracker.length; i++) {
                        if (questionTracker[i] === randomQuestion) {
                            return true;
                        }
                    }
                    return false;
                }
                // Iterate however many times
                for (var i = 0; i < questionAmount; i++) {
                    // Keep creating random numbers until the number is unique
                    do {
                        randomQuestion = Math.floor(Math.random() * questions.length);
                    } while (existingQuestions());

                    display += questions[randomQuestion] + ', ';
                    arr = display.split(',');
                    viewport[i].innerHTML = arr[i];
                    // Add the question to the tracker
                    questionTracker.push(randomQuestion);
                    shuffleAnswerInLoop();
                }
                $('.shuffle-questions .viewport-questions .slide').eq(0).remove();
            }
            function showCountQuestions(countQuesNow = 0) {
                var countAll = $('.count-questions .content .count-all'),
                    countNow = $('.count-questions .content .count-now');
                countAll.html(settings.questionAmount + ' / ');
                countNow.html(countQuesNow);
            }    
            showCountQuestions();
            var viewportQues = $('.shuffle-questions .viewport-questions');
            function addClassSmooth() {
                if (settings.smoothSlide == 'fade') {
                    viewportQues.addClass('fade');
                    viewportQues.find('.slide').css('display', 'none');
                    viewportQues.find('.slide').eq(0).css('display', 'block');
                } else if (settings.smoothSlide == 'slideLeft') {
                    viewportQues.addClass('slideLeft');
                } else if (settings.smoothSlide == 'scale') {
                    viewportQues.addClass('scale');
                    viewportQues.children('div').css({
                        display: 'none',
                        transition: 'transform ' + (settings.durationEffect / 1000) + 's ease-in-out'
                    });
                    viewportQues.find('.slide').eq(0).css('display', 'block');
                }
            }
            function createBackEnding() {
                backgroundEnd = document.createElement('div');
                backgroundEnd.className = 'ending';
                backgroundEnd.innerHTML = settings.textEnd;
                backgroundEnd.style.display = 'none';
                viewPortPatrent.appendChild(backgroundEnd);
            }
            var backStart = $('.shuffle-questions .viewport-questions .starting');
            function startTime() {
                function triggerFunc() {
                    if (settings.timeAllQuestions == 'default') {
                        timeAllQues = settings.questionAmount * settings.timeOneQuestion;
                        countDownAll();
                    } else {
                        countDownAll();
                    }
                    countDown();
                    shuffleQuesAndAnswer();
                    addClassSmooth();
                    countAnswerCorrect = 0;
                    countAnswerWrong = 0;
                    addResultCountAnswer();
                    countAllQuestions = 1;
                    showCountQuestions(countAllQuestions);
                    createBackEnding();
                }
                if (settings.smoothSlide == 'fade') {
                    backStart.fadeOut(settings.durationEffect, function () {
                        triggerFunc();
                    });
                } else if (settings.smoothSlide == 'slideLeft') {
                    triggerFunc();
                    var width = backStart.outerWidth();
                    setTimeout(function () {
                        backStart.parent().animate({scrollLeft: width + 1}, settings.durationEffect);
                        backStart.css("height", 'auto');
                        backStart.parent().css("height", backStart.next().outerHeight());
                    }, settings.durationEffect);
                } else if (settings.smoothSlide == 'scale') {
                    triggerFunc();
                    backStart.css('display', 'flex');
                    setTimeout(function () {
                        backStart.addClass('hideScale');
                        setTimeout(function () {
                            backStart.css('display', 'none');
                            $('.shuffle-questions .viewport-questions .slide').eq(0).addClass('showScale');
                        }, settings.durationEffect);
                    }, 50);
                }
            }  

            function smoothMode() {
                var slideNow = $('.shuffle-questions .viewport-questions .slide.now');
                setTimeout(function () {
                    if (settings.smoothSlide == 'fade') {
                        slideNow.fadeOut(settings.durationEffect, function () {
                            $(this).removeClass('now').next('.slide').addClass('now').fadeIn(settings.durationEffect);
                        });
                    } else if (settings.smoothSlide == 'slideLeft') {
                        var widthSlide = slideNow.outerWidth() - 3.5;
                        slideNow.parent().animate({scrollLeft: '+=' + widthSlide}, settings.durationEffect);
                        slideNow.removeClass('now').next('.slide').addClass('now');       
                        slideNow.parent().css("height", slideNow.next().outerHeight());
                    } else if (settings.smoothSlide == 'scale') {
                        slideNow.removeClass('showScale').addClass('hideScale').delay(settings.durationEffect).fadeOut(100, function () {
                            $(this).removeClass('now').next('.slide').fadeIn(100).addClass('now showScale');
                        });
                    }
                }, settings.delayAfterAnswer);
            }
            
            function done() {
                var backEnd = $('.shuffle-questions .viewport-questions .ending');
                setTimeout(function () {
                    countAllQuestions++;
                    if (countAllQuestions == settings.questionAmount + 1 || timeAllQues == 0) {
                        countAllQuestions = 0;
                        if (settings.finishTime == null) {
                            setTimeout(function () {
                                if (settings.smoothSlide == 'fade') {
                                    backEnd.fadeIn(settings.durationEffect);
                                    setTimeout(function () {
                                        backEnd.siblings('.slide').remove();
                                    }, 200);
                                } else if (settings.smoothSlide == 'slideLeft') {
                                    setTimeout(function () {
                                        backEnd.fadeIn();
                                        var width = backEnd.outerWidth();
                                        backEnd.parent().animate({scrollLeft: '+=' + width + 1}, settings.durationEffect);
                                        setTimeout(function () {
                                            backEnd.siblings('.slide').remove();
                                            backEnd.parent().css("height", backEnd.outerHeight());
                                        }, 200);
                                    }, 50);
                                } else if (settings.smoothSlide == 'scale') {
                                    backEnd.css({
                                        display: 'flex',
                                        transition: 'transform ' + (settings.durationEffect / 1000) + 's ease-in-out'
                                    });
                                    setTimeout(function () {    
                                        backEnd.addClass('showScale');
                                    }, 50);
                                    setTimeout(function () {
                                        backEnd.siblings('.slide').remove();
                                    }, 200);
                                }
                            }, settings.durationEffect);

                        } else if ($.isFunction(settings.finishTime)) {
                            settings.finishTime.call(this);
                        }
                        if ($.isFunction(settings.showResult)) {
                            settings.showResult.call(this);
                        }
                        setTimeout(function () {
                            endCountDownAll();
                            endCountDown();
                            elementMinsAloneQues.html('00');
                            elementSecAloneQues.html('00');
                        }, 100);
                    }
                    showCountQuestions(countAllQuestions);
                    if ($.isFunction(settings.callBackQues)) {
                        endCountDown();
                        timeDown = settings.timeOneQuestion;
                        countDown();
                        settings.callBackQues.call(this);
                    }
                }, settings.delayAfterAnswer);
            }
            /* Start Confirm Answer
            ************************************************************/    
            function confirm() {
                var slideNow = $('.shuffle-questions .viewport-questions .slide.now'),
                    myQuestion  = slideNow.find('.question-text > .text').html(),
                    myAnswer    = slideNow.find('.answer.active > span').html(),
                    eleAnswer   = slideNow.find('.answer.active > span');
                for (var i = 0; i < settings.questions.length; i++) {
                    if (settings.questions[i].indexOf(myQuestion) != -1) {
                        var indexAns = settings.questions[i].indexOf(myAnswer),
                            answerActive = settings.questions[i][indexAns];

                        function eventAfterAnswer(src) {
                            eleAnswer.prepend('<img class="icon" src="imgs/' + src + '">');
                            slideNow.find('.answer').removeClass('click');
                            slideNow.find('.answer.active > span img').css('display', 'none');
                            slideNow.find('.answer.active > span img').fadeIn(300);
                        }
                        done();
                        smoothMode();
                        if (answerActive == settings.questions[i][1]) {
                            eventAfterAnswer('correct.png');
                            countAnswerCorrect++;
                            returnCountCorrect = countAnswerCorrect;
                        } else {
                            eventAfterAnswer('wrong.png');
                            countAnswerWrong++;
                            returnCountWrong = countAnswerWrong;
                        }
                        addResultCountAnswer();
                    }
                }    
            } 
            /* Execute Functions 
            *************************************************************************************/
            if (settings.btnAccept != true) {
                $('.shuffle-questions .accept').remove();
            }
            
            $(document).on('click', '.shuffle-questions .viewport-questions .slide .answers .answer.click', function () {
                $(this).addClass('active').siblings('.answer').removeClass('active');
                if (settings.btnAccept != true) {
                    confirm();
                }
            });
            $('.shuffle-questions .accept').click(function () {
                if (settings.btnAccept == true) {
                    confirm();
                }
            });

            autoResize($('.control-data'), '', '2', '');
            $(window).resize(function () { autoResize($('.control-data'), '', '2', ''); });
            $('.shuffle-questions .start-time').click(function () {
                if ($(this).hasClass('start-time')) {
                    startTime();
                }
                $(this).removeClass('start-time');
            });
    
             // Return All Result 
            $.fn.countCorrect = function () {
                return returnCountCorrect;
            }
            $.fn.countWrong = function () {
                return returnCountWrong;
            }
            $.fn.timeTaken = function () {
                return timeAllQues;
            }    
        });
    };
    
}(jQuery));