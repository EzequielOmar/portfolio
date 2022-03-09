import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveMessageService } from 'src/app/services/save-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean = false;
  sended: boolean = false;
  success: boolean = false;
  error: boolean = false;

  constructor(private fb: FormBuilder, private sm: SaveMessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  send() {
    this.sended = true;
    setTimeout(() => {
      this.sended = false;
    }, 4000);
    if (this.contactForm.valid) {
      this.loading = true;
      this.sm
        .newMessage(this.contactForm.value)
        .then(() => {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 4000);
        })
        .catch(() => {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 4000);
        })
        .finally(() => {
          this.loading = false;
          this.contactForm.reset();
        });
    }
  }
}
