import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovementsService } from 'src/services/movements.service';

@Controller('movements')
export class MovementsController {
  constructor(private movementsService: MovementsService) {}

  @Post()
  async createMovement(
    @Body() body: { assetId: number; locationId: number; timestamp: Date },
  ) {
    return this.movementsService.createMovement(body);
  }

  @Get()
  async getMovements() {
    return this.movementsService.getMovements();
  }
}
