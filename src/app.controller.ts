import {Controller, Get, Post} from '@nestjs/common';

@Controller('')
export class AppController {
  getReturnData = [
    { name: 'example0', description: 'example0', price: 0 },
    { name: 'example1', description: 'example1', price: 1 },
    { name: 'example2', description: 'example2', price: 2 },
    { name: 'example3', description: 'example3', price: 3 },
    { name: 'example4', description: 'example4', price: 4 },
    { name: 'example5', description: 'example5', price: 5 },
    { name: 'example6', description: 'example6', price: 6 },
    { name: 'example7', description: 'example7', price: 7 },
    { name: 'example8', description: 'example8', price: 8 },
    { name: 'example9', description: 'example9', price: 9 },
    { name: 'example10', description: 'example10', price: 10 },
    { name: 'example11', description: 'example11', price: 11 },
    { name: 'example12', description: 'example12', price: 12 },
    { name: 'example13', description: 'example13', price: 13 },
    { name: 'example14', description: 'example14', price: 14 },
    { name: 'example15', description: 'example15', price: 15 },
    { name: 'example16', description: 'example16', price: 16 },
    { name: 'example17', description: 'example17', price: 17 },
    { name: 'example18', description: 'example18', price: 18 },
    { name: 'example19', description: 'example19', price: 19 },
    { name: 'example20', description: 'example20', price: 20 },
    { name: 'example21', description: 'example21', price: 21 },
    { name: 'example22', description: 'example22', price: 22 },
    { name: 'example23', description: 'example23', price: 23 },
    { name: 'example24', description: 'example24', price: 24 },
    { name: 'example25', description: 'example25', price: 25 },
    { name: 'example26', description: 'example26', price: 26 },
    { name: 'example27', description: 'example27', price: 27 },
    { name: 'example28', description: 'example28', price: 28 },
    { name: 'example29', description: 'example29', price: 29 },
  ]

  @Get()
  getHello(): any[] {
    return this.getReturnData
  }

  @Post()
  receivePostData(): void {}
}
