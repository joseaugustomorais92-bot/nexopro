import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from 'typeorm';
import { User } from '../users/user.entity';
import { ITenant, CompanyType } from '@nexopro/shared-types';

@Entity('tenants')
export class Tenant implements ITenant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index() // Fast lookup by company name
  name: string;

  @Column({
    type: 'enum',
    enum: CompanyType,
    default: CompanyType.COMERCIAL
  })
  type: CompanyType;

  @Column({ nullable: true })
  region: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, user => user.tenant)
  users: User[];
}