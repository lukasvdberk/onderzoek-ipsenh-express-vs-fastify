import {Controller, Request, Get, Post} from '@nestjs/common';

@Controller('')
export class AppController {
  getReturnData = [
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 123123123123 },
    { afdsadsf: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf3123123asdfasdf12321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfdsfaafsdfadsasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfsadfadsfasfasdfasd', dfasdfaprice: 123123121231231233123 },
    { kasdfkljfasdasdasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasasdfasdfdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 1231231233123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam223asfdafsdfasd4234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1fadsfads', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasfdsafadsd', dfasdfaprice: 12312312123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'sfadfasd', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 112312312323123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 123123123123 },
    { afdsadsf: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf3123123asdfasdf12321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfdsfaafsdfadsasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfsadfadsfasfasdfasd', dfasdfaprice: 123123121231231233123 },
    { kasdfkljfasdasdasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasasdfasdfdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 1231231233123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam223asfdafsdfasd4234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1fadsfads', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasfdsafadsd', dfasdfaprice: 12312312123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'sfadfasd', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 112312312323123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 123123123123 },
    { afdsadsf: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf3123123asdfasdf12321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfdsfaafsdfadsasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfsadfadsfasfasdfasd', dfasdfaprice: 123123121231231233123 },
    { kasdfkljfasdasdasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam2234234234ple0', fff123123: 12312321 },
    { asdfaasdfasasdfasdfdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 1231231233123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'exam223asfdafsdfasd4234234ple0', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1fadsfads', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasfdsafadsd', dfasdfaprice: 12312312123123123123 },
    { kasdfkljasdkfl: 'asdfasd324234234', askjdfklasdjfl: 'sfadfasd', fff123123: 12312321 },
    { asdfaasdfasdfawsfasdfsdasdfa: 'example1', asdf312312312321: 'example1', asdfasdfasfas: 1123123123123 },
    { asdfasdfasdfasf: 'asdfasd123123123', asdfasdf12312312: 'asdfasfasdfasd', dfasdfaprice: 112312312323123123123 },
  ]

  @Get()
  getHello(): any[] {
    return this.getReturnData
  }

  @Post()
  receivePostData(): void {}

  @Post('files/single-file')
  uploadFile(@Request() req): void {}
}
