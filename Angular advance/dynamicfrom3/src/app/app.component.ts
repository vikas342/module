import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './model/question-base';
import { QuestionService } from './serives/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
