import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  quiz1Screen:Boolean = true;
  quiz2Screen:Boolean = true;
  
  completeFlagQuiz1:Boolean = false;
  completeFlagQuiz2:Boolean = false;

  tableQuiz1:Boolean = false;
  tableQuiz2:Boolean = false;

  quiz1={
    score : 0,
    count : 0,
    var_1: 0,
    var_2: 0,
    op: '',
    input:''
  };
  
  quiz2={
    score : 0,
    count : 0,
    var_1: 0,
    var_2: 0,
    op:'',
    input:''
  };
  
  quiz1_ques_limit = 20;
  quiz2_ques_limit = 20;

  quiz1Data= [];
  quiz2Data= [];
  quiz1questions=[];
  quiz2questions=[];

  operrators = ['+','-','*','/'];
  
  constructor() { }

  ngOnInit() {
  }
  
  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  startTest1(){
    this.quiz1.count++;
    this.quiz1Screen = false;
    this.quiz1.var_1 = this.randomIntFromInterval(0, 10);
    this.quiz1.var_2 = this.randomIntFromInterval(1, 10);
    var index = this.randomIntFromInterval(0,3);
    this.quiz1.op = this.operrators[index];
  }
  
  startTest2(){
    this.quiz2.count++;
    this.quiz2Screen = false;
    this.quiz2.var_1 = this.randomIntFromInterval(0, 10);
    this.quiz2.var_2 = this.randomIntFromInterval(1, 10);
    var index = this.randomIntFromInterval(0,3);
    this.quiz2.op = this.operrators[index];
  }

  next1(){
    var right_answer = parseFloat(eval(this.quiz1.var_1+this.quiz1.op+this.quiz1.var_2)).toFixed(2);
    var submit_answer = parseFloat(this.quiz1.input).toFixed(2);
    if(submit_answer == "NaN"){
      submit_answer = "Not attempted"
    }
    var correct_status = false;
    var score = 0;
    if(right_answer == submit_answer){
      correct_status = true; 
      score = 10;
      this.quiz1.score = this.quiz1.score + 10;
    }

    var data = {
      question_no : this.quiz1.count,
      var1 : this.quiz1.var_1,
      operator: this.quiz1.op,
      var2 : this.quiz1.var_2,
      right_answer : right_answer,
      submit_answer : submit_answer,
      score: score,
      status: correct_status
    }

    this.quiz1.input ='';
    this.quiz1Data.push(data);

    if(this.quiz1.count == this.quiz2_ques_limit){
      this.completeFlagQuiz1 = true;
    }
    if(this.quiz1.count < this.quiz2_ques_limit){
      this.quiz1.count++;
      this.quiz1.var_1 = this.randomIntFromInterval(0, 10);
      this.quiz1.var_2 = this.randomIntFromInterval(1, 10);
      var index = this.randomIntFromInterval(0,3);
      this.quiz1.op = this.operrators[index];
    }  
  }

  next2(){
    var right_answer = parseFloat(eval(this.quiz2.var_1+this.quiz2.op+this.quiz2.var_2)).toFixed(2);
    var submit_answer = parseFloat(this.quiz2.input).toFixed(2);
    if(submit_answer == "NaN"){
      submit_answer = "Not attempted"
    }
    var correct_status = false;
    var score = 0;
    if(right_answer == submit_answer){
      correct_status = true; 
      score = 10;
      this.quiz2.score = this.quiz2.score + 10;
    }

    var data = {
      question_no : this.quiz2.count,
      var1 : this.quiz2.var_1,
      operator: this.quiz2.op,
      var2 : this.quiz2.var_2,
      right_answer : right_answer,
      submit_answer : submit_answer,
      score: score,
      status: correct_status
    }
    this.quiz2Data.push(data);
    this.quiz2.input ='';

    if(this.quiz2.count == this.quiz2_ques_limit){
      this.completeFlagQuiz2 = true;
    }
    if(this.quiz2.count < this.quiz2_ques_limit){
      this.quiz2.count++;
      this.quiz2.var_1 = this.randomIntFromInterval(0, 10);
      this.quiz2.var_2 = this.randomIntFromInterval(1, 10);
      var index = this.randomIntFromInterval(0,3);
      this.quiz2.op = this.operrators[index];
    }
    
  }

  report1(){
    this.quiz1questions = this.quiz1Data;
    this.tableQuiz1 = true;
  }

  report2(){
    this.quiz2questions = this.quiz2Data;
    this.tableQuiz2 = true;
  }

  home1(){
    this.quiz1Data = [];
    this.quiz1Screen = true;
    this.completeFlagQuiz1 = false;
    this.tableQuiz1 = false;
    this.quiz1.score = 0,
    this.quiz1.count = 0
  }

  home2(){
    this.quiz2Data = [];
    this.quiz2Screen = true;
    this.completeFlagQuiz2 = false;
    this.tableQuiz2 = false;
    this.quiz2.score = 0,
    this.quiz2.count = 0
  }
}
