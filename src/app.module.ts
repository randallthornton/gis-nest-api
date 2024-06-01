import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets.controller';
import { AssetsService } from './services/assets.service';
import { LocationsService } from './services/locations.service';
import { MovementsService } from './services/movements.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [AssetsController],
  providers: [AssetsService, PrismaService, LocationsService, MovementsService],
})
export class AppModule {}
