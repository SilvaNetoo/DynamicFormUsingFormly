import { FormlyFieldConfig } from '@ngx-formly/core';
import {Component} from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import { FormlyTemplateOptions } from '@ngx-formly/core/src/components/formly.field.config';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = new FormGroup({});
  userFields:FormlyTemplateOptions = [{
    fieldGroup: [{
      key: 'email',
      type: 'input',
      required: true,
      templateOptions: {
          type: 'email',
          label: 'E-mail',
          placeholder: 'Digite seu e-mail'
      },
      validators: {
        validation: Validators.compose([Validators.required])
      }
    },
    {
      key: 'senha',
      type: 'input',
      required: true,
      templateOptions: {
          type: 'password',
          label: 'Senha',
          placeholder: 'Digite sua senha',
          pattern: ''
      },
      validators: {
        validation: Validators.compose([Validators.required])
      }
    },
    {
      key: 'checked',
      type: 'checkbox',
      templateOptions: {
        label: 'Lembrar-me'
      }
    },
    {
      key: 'nome',
      type: 'input', // input type
      templateOptions: {
      type: 'text',
      label: 'Nome do intrevistado',
      placeholder: 'Digite seu nome',
      required: true,
    },
    validation: {
      messages: {
        maxLength: 'Tag name is too long'
      }
    },
    validators: {
      // limit to 25 characters
      maxLength: ({ value }) => {
        return value.length <= 25;
      }
    }
  },
  {
    key: 'candidato',
    type: 'select',
    templateOptions: {
      label: 'Selecione uma das opções abaixo:',
      required: true,
      options: [
        { label: 'OpcaoX', value: 'opcaoX' },
        { label: 'OpcaoY', value: 'opcaoY' },
        { label: 'OpcaoZ', value: 'opcaoZ' }
      ]
    }
  },
  {
    key: 'quantidade',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'De 0 a 10 onde 0 é nada e 10 é com certeza, você votaria nesse candidato?',
      placeholder: 'quantidade',
      required: true
    }
  },
  {
    key: 'tamanho',
    type: 'select',
    defaultValue: 'M',
    templateOptions: {
      label: 'Tamanho',
      options: [
        { label: 'Pequeno', value: 'P' },
        { label: 'Médio', value: 'M' },
        { label: 'Grande', value: 'G' }
      ]
    }
  },
  {
    key: 'termo',
    type: 'checkbox',
    templateOptions: {
      label: 'Você aceita nossos termos e condições',
      required: true
    }
  }
  ]
  }];

  user = {
    nome:""
  };

  submit(user) {
    console.log(user);
  }
}


