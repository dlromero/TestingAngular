import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';
describe('Formularios', () => {
  let component: FormRegister;
  beforeEach(() => {
    component = new FormRegister(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos, email y password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('Email debe ser obligatorio', () => {
    const control = component.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Email debe ser email valido', () => {
    const control = component.form.get('email');
    control.setValue('daniel@gm.com');
    expect(control.valid).toBeTruthy();
  });
});
