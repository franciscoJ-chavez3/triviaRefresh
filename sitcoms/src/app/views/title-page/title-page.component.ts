import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  constructor(private qs: QuestionsService) { }

  ngOnInit() {
  }

  checkQuestions() {
    this.qs.getQuestions();
  }

}
