import { usuarioLogeado } from './booleans';
describe('Pruebas de booleanos', () => {
  it('Debe de retornar true', () => {
    const res = usuarioLogeado();
    expect(res).toBeTruthy();
  });
});
