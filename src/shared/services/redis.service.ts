import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import {
  createClient,
  RedisClientType,
  RedisModules,
  RedisScripts,
} from 'redis';
import config from 'config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  readonly client: RedisClientType<RedisModules, RedisScripts>;
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

  async set(pattern, value) {
    await this.client.set(pattern, value);
  }

  async get(pattern) {
    return await this.client.get(pattern);
  }

  async expire(pattern, ttl) {
    await this.client.expire(pattern, ttl);
  }

  async del(pattern) {
    await this.client.del(pattern);
  }
}
