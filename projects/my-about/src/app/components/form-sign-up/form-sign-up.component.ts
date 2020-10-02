import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent  {

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Nombre',
        placeholder: 'Input placeholder',
        required: true,
      }
    },
    {
      key: 'phone',
      type: 'input',
      templateOptions: {
        label: 'Teléfono',
        placeholder: 'Escribe tu telefono con código de país aqui',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Escribe tu correo electrónico aqui',
        required: true,
      }
    },
    {
      key: 'textarea',
      type: 'textarea',
      templateOptions: {
        label: 'Mensaje',
        placeholder: 'Escribe aquí tu mensaje',
        required: true,
        autosize: true,
        autosizeMinRows: 3,
        autosizeMaxRows: 10
      }
    },
  ];

  onSubmit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }

}
