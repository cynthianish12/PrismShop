import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';
import { SubscribeEntity } from './entities/subscribe.entity';
import {config} from 'dotenv';
config()

@Injectable()
export class SubscribeService {
  private transporter;

  constructor(
    @InjectRepository(SubscribeEntity)
    private readonly subscribeRepository: Repository<SubscribeEntity>,
  ) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_US,
        pass: process.env.PASS_US,
      },
    });
  }

  async subscribe(email: string): Promise<SubscribeEntity> {
    const newSubscription = this.subscribeRepository.create({ email });

    return await this.subscribeRepository.save(newSubscription);
  }

  async findAll(): Promise<SubscribeEntity[]> {
    return await this.subscribeRepository.find();
  }

  async sendProductNotification(productTitle: string): Promise<void> {
    const subscribers = await this.findAll();
    const emailContent = `A new product "${productTitle}" has been added to our store! Check it out.`;

    subscribers.forEach((subscriber) => {
      this.transporter
        .sendMail({
          from: 'techerscorp@gmail.com',
          to: subscriber.email,
          subject: 'New Product Notification',
          text: emailContent,
        })
        .catch((error) => {
          console.error(`Failed to send email to ${subscriber.email}:`, error);
        });
    });
  }
}
