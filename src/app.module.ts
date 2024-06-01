import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets.controller';
import { AssetsService } from './services/assets.service';
import { LocationsService } from './services/locations.service';
import { MovementsService } from './services/movements.service';
import { PrismaService } from './services/prisma.service';
import { LocationsController } from './controllers/locations.controller';
import { MovementsController } from './controllers/movements.controller';
import { OrganizationController } from './organization/organization.controller';
import { OrganizationService } from './organization/organization.service';

@Module({
  imports: [],
  controllers: [
    AssetsController,
    LocationsController,
    MovementsController,
    OrganizationController,
  ],
  providers: [
    AssetsService,
    PrismaService,
    LocationsService,
    MovementsService,
    OrganizationService,
  ],
})
export class AppModule {}
