import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { SaveDetailsService } from '../../services/save-details.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  base64: string;

  createUser = new FormGroup({
    name: new FormControl(
      '',
      Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*'),
      ])
    ),
    gender: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        Validators.required,
      ])
    ),
    mobile: new FormControl(
      '',
      Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
        Validators.pattern('^[56789][0-9]{9}'),
      ])
    ),
    category: new FormControl('', Validators.required),
    technologies: new FormArray([], Validators.required),
    photo: new FormControl(''),
  });

  constructor(private SaveDetailsService: SaveDetailsService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.SaveDetailsService.addUser(this.createUser.value);
    let createForm = <HTMLFormElement>document.getElementById('createUserForm');
    createForm.reset();
  }

  saveTech(e) {
    const formArray: FormArray = this.createUser.get(
      'technologies'
    ) as FormArray;

    if (e.target.checked) {
      formArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == e.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  imgToBase64() {
    console.log('inside func');

    var input = <HTMLInputElement>document.getElementById('photo');

    if (input.files[0]) {
      let file = input.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        let b64 = reader.result;
        this.createUser.get('photo').setValue(b64 as string);
      };
      reader.readAsDataURL(file);
    }
  }
}
