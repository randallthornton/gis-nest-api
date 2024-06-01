import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  async createAsset(data: {
    name: string;
    description: string;
    value: number;
    organizationId: number;
  }) {
    return this.prismaService.asset.create({ data });
  }

  async getAssets() {
    return this.prismaService.asset.findMany();
  }

  async getAssetById(id: number) {
    return this.prismaService.asset.findUnique({ where: { id } });
  }

  async updateAsset(id: number, data: { name: string }) {
    return this.prismaService.asset.update({ where: { id }, data });
  }

  async deleteAsset(id: number) {
    return this.prismaService.asset.delete({ where: { id } });
  }
}