import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Article } from '../../models';

@Component({
  selector: 'app-article-form',
  templateUrl: './article.form.html',
  styleUrls: ['../article.css']
})
export class ArticleFormComponent {

  @Input() model: Article;
  @Input() parentName: string;
  @Output() submitted = new EventEmitter<boolean>();

  submit(formSubmit: boolean) {
    this.submitted.emit();
  }
}
