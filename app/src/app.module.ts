import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './config/db.config';
import { ProductModule } from './product/product.module';
 
@Module({
 imports: [
   TypeOrmModule.forRoot(dbconfig),
   ApiModule,ProductModule
 ],
 controllers: [],
 providers: [],
})
export class AppModule {}