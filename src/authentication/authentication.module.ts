import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  providers: [JwtStrategy, JwtAuthGuard],
})
export class AuthenticationModule {}
