
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class insertProduct {
    @IsString()
    product_name:string;
    @IsNotEmpty()
    @IsNumber()
    product_price:number;
 
  }

  export class responseObject {
    status: string;
    message: string;
 }

 export class update {

 }

 