// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

 describe('validator', () => {
  it.only('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isvalid', () => {
    it.only('debería ser una función', () => {
      expect(typeof validator.isvalid).toBe('function');
    });

    it.only('debería retornar true para "4083952015263"', () => {
      expect(validator.isvalid("4083952015263")).toBe(true)
    });

    it.only('debería retornar true para "79927398713"', () => {
       expect(validator.isvalid("79927398713")).toBe(true)
    });

    it.only('debería retornar false para "1234567890"', () => {
       expect(validator.isvalid("1234567890")).toBe(false)
    });
  });

  describe('validator.maskify', () => {
    it.only('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it.only('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe("############5616")
    });

    it.only('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe("1")
    });

    it.only('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe("######orld")
    });
  });
});
