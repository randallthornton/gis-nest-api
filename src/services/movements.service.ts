import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class MovementsService {
  constructor(private prismaService: PrismaService) {}

  async createMovement(data: {
    assetId: number;
    locationId: number;
    timestamp: Date;
  }) {
    return this.prismaService.movement.create({ data });
  }

  async getMovements() {
    return this.prismaService.movement
    .findMany({
      include: {
        asset: true,
        location: true,
      },
    });
  }

  async getMovementById(id: number) {
    return this.prismaService.movement.findUnique({ where: { id } });
  }

  async updateMovement(id: number, data: { assetId: number }) {
    return this.prismaService.movement.update({ where: { id }, data });
  }

  async deleteMovement(id: number) {
    return this.prismaService.movement.delete({ where: { id } });
  }
}
