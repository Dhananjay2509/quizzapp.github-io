// getting all the desired elements
const start_btn= document.querySelector(".start_button button");
const quiz_box=document.querySelector(".Que_box");
const next_btn=document.querySelector(".Next");
const score=document.querySelector(".score span");

// If start button clicked 
start_btn.onclick=()=>{
   quiz_box.classList.add("activeQuiz");
   showQuestions(0);
}

//If next button clicked
next_btn.onclick=()=>{
    questions_count++;
    showQuestions(questions_count);
}


// getting questions
 let questions_count=0;
 let user_score=0;

 function showQuestions(index){
    const question_text=document.querySelector(".question");
    const option_list=document.querySelector(".option_list");
    let que_tag='<span>'+ questions[index].number +'.' +questions[index].question +'</span>';
    let option_tag='<div class="option">'+ questions[index].options[0]+ '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1]+'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2]+'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3]+'<span></span></div>';


    question_text.innerHTML= que_tag;
    option_list.innerHTML=option_tag;

    const option=document.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");
    }
 }

 function optionSelected(answer){
    let userAns= answer.textContent;
    let correctAns= questions[questions_count].answer;
    if(userAns==correctAns){
        answer.classList.add("correct");
        user_score +=1;
        score.innerHTML= user_score;
    }
    else{
        answer.classList.add("incorrect");

    }
    
 }