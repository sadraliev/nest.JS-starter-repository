import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from './config/app.configuration';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}
  getHello(): string {
    return 'Hello World!';
  }
}
