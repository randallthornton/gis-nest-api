import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prismaService: PrismaService) {}

  async createLocation(data: {
    name: string;
    latitude: number;
    longitude: number;
  }) {
    return this.prismaService.location.create({ data });
  }

  async getLocations() {
    return this.prismaService.location.findMany();
  }

  async getLocationById(id: number) {
    return this.prismaService.location.findUnique({ where: { id } });
  }

  async updateLocation(id: number, data: { name: string }) {
    return this.prismaService.location.update({ where: { id }, data });
  }

  async deleteLocation(id: number) {
    return this.prismaService.location.delete({ where: { id } });
  }
}
