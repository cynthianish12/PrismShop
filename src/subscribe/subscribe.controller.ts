import { Controller, Post, Body, Get } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('subscribe')
@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  @ApiOperation({ summary: 'Subscribe a new email address' })
  @ApiBody({ description: 'Email address to subscribe', type: String })
  @ApiResponse({ status: 201, description: 'Email successfully subscribed.' })
  @ApiResponse({ status: 400, description: 'Bad Request. Email may be invalid or already subscribed.' })
  async subscribe(@Body('email') email: string) {
    return this.subscribeService.subscribe(email);
  }

  @Get()
  @ApiOperation({ summary: 'Get all subscribed email addresses' })
  @ApiResponse({ status: 200, description: 'List of subscribed email addresses.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findAll() {
    return this.subscribeService.findAll();
  }
}

