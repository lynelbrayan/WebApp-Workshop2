import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { insertProduct,responseObject, update } from 'src/common/dto/product.dto';
import { productEntity } from 'src/common/entity/product.entity';
import { ProductService } from './product.service';

 
@Controller()
export class ProductController {
 
   constructor (
       private productService: ProductService
   ) {}
   @Get()
   index(): string {
       return this.productService.index();
   }

   @Post('insert-pro')
    insertProduct(@Body() userData: insertProduct) : Promise<responseObject> {
    return this.productService.InsertProduct(userData);
}
 
@Post('updatepro')
updateUser(@Body() data: productEntity): Promise<responseObject> {
    return this.productService.UpdateProduct(data);
}



   
}
