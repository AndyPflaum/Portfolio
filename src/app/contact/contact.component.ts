import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(public ls:LanguageService){}

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  }


  submitSuccess = false;
  mailTest = false;
  isChecked = false;


  post = {
    endPoint: 'https://andreas-pflaum.com/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid ) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.submitSuccess = true;
            ngForm.resetForm();
            
            setTimeout(() => {
              this.submitSuccess = false;
            }, 3000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        
          
        });
    }
  }

  
  toggleCheckbox() {
    this.isChecked = !this.isChecked; 
  }
}