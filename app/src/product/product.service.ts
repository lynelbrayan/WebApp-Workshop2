import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { insertProduct, responseObject, update } from 'src/common/dto/product.dto';
import { productEntity } from 'src/common/entity/product.entity';
import { ILike, Like, Repository } from 'typeorm';

 
@Injectable()
export class ProductService {
 
   constructor(
       @InjectRepository(productEntity) private readonly product: Repository<productEntity>
   ) {}

   index () : string {
    return "Hello world";
    }

    async InsertProduct(data: insertProduct) : Promise<responseObject> {

           const dbResult = await this.product.insert({
               product_name:data.product_name,
               product_price:data.product_price,
           }).catch((err)=>{
               console.log(err.message)
               throw new BadRequestException('Duplicate email id');
           })
           const result :responseObject = {
               status: "success",
               message: "product added"
           }
           return result;
       }

    async UpdateProduct(data: productEntity): Promise<responseObject> {

        const dbResult = await this.product.update({
            product_name:data.product_name,
        },{

        }).catch((err)=>{
            console.log(err.message)
            throw new BadRequestException('Duplicate email id');
        })

        const result :responseObject = {
               status: "success",
               message: "product updated"
           }
           return result;
    }

    
 
 }
 