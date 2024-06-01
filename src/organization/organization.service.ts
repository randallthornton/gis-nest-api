import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private prismaService: PrismaService) {}

  async createOrganization(data: { name: string }) {
    // Create a new organization
    return this.prismaService.organization.create({ data });
  }

  async getOrganizations() {
    // Get all organizations
    return this.prismaService.organization.findMany();
  }

  async getOrganizationById(id: number) {
    // Get an organization by ID
    return this.prismaService.organization.findUnique({ where: { id } });
  }

  async updateOrganization(id: number, data: { name: string }) {
    // Update an organization
    return this.prismaService.organization.update({ where: { id }, data });
  }

  async deleteOrganization(id: number) {
    // Delete an organization
    return this.prismaService.organization.delete({ where: { id } });
  }
}
