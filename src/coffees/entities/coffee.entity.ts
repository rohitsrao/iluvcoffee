import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { FlavorEntity } from "./flavor.entity";

@Entity()
export class Coffee {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(type => FlavorEntity, (flavor) => flavor.coffees)
  flavours: string[];
}
