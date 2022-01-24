import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { createClient } from 'redis';
import config from 'config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  readonly client;
  constructor() {
    this.client = createClient({
      url: config.get('redis_url'),
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
    } catch (e) {
      console.log('Redis Client Error', e);
    }
  }

  async onModuleDestroy() {
    await this.client.disconnect();
  }
}
