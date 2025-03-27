import { Module } from '@nestjs/common';
import { MatchesController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [MatchesController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
