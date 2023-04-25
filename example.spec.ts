import { test, expect } from 'vitest'

function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

class ExampleClass {
  @first()
  method() {}
}

test('it should work', () => {
  expect(new ExampleClass()).toBeTruthy()
})