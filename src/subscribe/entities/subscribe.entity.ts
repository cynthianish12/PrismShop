import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscribe')
export class SubscribeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  subscribedAt: Date;
}
