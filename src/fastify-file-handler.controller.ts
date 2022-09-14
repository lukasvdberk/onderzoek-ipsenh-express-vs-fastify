import {Controller, Post, Req, UploadedFile, UseInterceptors} from "@nestjs/common";
import {FastifyFileInterceptor} from "./fastify-multer.interceptor";

@Controller('files')
export class FastifyFileHandlerController {
    @Post('single-file')
    @UseInterceptors(
        FastifyFileInterceptor('file', {}),
    )
    singleFile(
        @UploadedFile() file: Express.Multer.File,
    ) {}
}