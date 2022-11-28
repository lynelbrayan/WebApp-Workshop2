import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from 'src/common/entity/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
 
@Module({
 imports: [
   TypeOrmModule.forFeature([productEntity]),
 ],
 controllers: [ProductController],
 providers: [ProductService]
})
export class ProductModule {}