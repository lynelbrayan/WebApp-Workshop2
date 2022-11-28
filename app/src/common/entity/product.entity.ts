import{Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('product')
export class productEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'product_name'})
    product_name:string

    @Column({name:'product_price'})
    product_price:number

}