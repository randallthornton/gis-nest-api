import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  // Create a new organization
  @Post()
  async createOrganization(@Body() body: { name: string }) {
    return this.organizationService.createOrganization(body);
  }

  // Get all organizations
  @Get()
  async getOrganizations() {
    return this.organizationService.getOrganizations();
  }
}
