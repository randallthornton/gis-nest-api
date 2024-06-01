import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LocationsService } from 'src/services/locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Post()
  async createLocation(
    @Body() body: { name: string; latitude: number; longitude: number },
  ) {
    return this.locationsService.createLocation(body);
  }

  @Get()
  async getLocations() {
    return this.locationsService.getLocations();
  }

  @Delete(':id')
  async deleteLocation(@Param('id') id: string) {
    return this.locationsService.deleteLocation(+id);
  }
}
