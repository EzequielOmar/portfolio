import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveMessageService } from '../services/save-message.service';

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
    if (this.contactForm.valid) {
      this.loading = true;
      this.sm
        .newMessage(this.contactForm.value)
        .then(() => {
          this.success = true;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
          this.sended = false;
          this.contactForm.reset();
        });
    }
    this.turnOffMessages();
  }

  turnOffMessages() {
    setTimeout(() => {
      this.sended = false;
      this.error = false;
      this.success = false;
    }, 2500);
  }
}
