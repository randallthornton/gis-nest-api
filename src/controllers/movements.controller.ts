import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MovementsService } from 'src/services/movements.service';

@Controller('movements')
export class MovementsController {
  constructor(private movementsService: MovementsService) {}

  @Post()
  async createMovement(
    @Body() body: { assetId: number; locationId: number; timestamp: string },
  ) {
    return this.movementsService.createMovement({
      ...body,
      timestamp: new Date(body.timestamp),
    });
  }

  @Get()
  async getMovements() {
    return this.movementsService.getMovements();
  }

  @Delete(':id')
  async deleteMovement(@Param('id') id: string) {
    return this.movementsService.deleteMovement(+id);
  }
}
